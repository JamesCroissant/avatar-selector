'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const currentUser = async () => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const result = {
    id: user.id,
    name: user.user_metadata?.full_name,
    email: user.user_metadata.email,
    image: user.user_metadata?.avatar_url,
  }

  return result
}

export const signInWithOtp = async (prevState: any, formData: FormData) => {
  const supabase = await createClient()

  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: formData.get('email') as string,
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: true,
      },
    })

    if (error) {
      console.error('Error signing in with OTP:', error)
      return { error }
    }
    return { success: true }
  } catch (error) {
    return { error: 'Login failed. Please try again.' }
  }
}

export const verifyOtp = async (prevState: any, formData: FormData) => {
  const supabase = await createClient()
  
  try {
    const { error } = await supabase.auth.verifyOtp({
      email: formData.get('email') as string,
      token: formData.get('token') as string,
      type: "email"
    })
  
    if (error) {
      console.error('Error verifying OTP:', error)
      return { error }
    }
    revalidatePath('/')
    return { success: true }
  } catch (error) {
    return { error: 'Login failed. Please try again.' }
  }
}

export const signInWithGoogle = async () => {
  const supabase = await createClient();

  const {
    data: { url },
    error,
  } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`,
    },
  });

  if (error) {
    console.error('Error during Google sign-in:', error.message);
    redirect('/error?message=authentication-failed');
  }

  if (!url) {
    console.error('No URL returned from signInWithOAuth');
    redirect('/error?message=authentication-failed');
  }

  redirect(url);
}


export const logout = async () => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    const { error } =  await supabase.auth.signOut()
    if (error) {
      console.error('Logout error:', error)
      throw error
    }
    redirect('/')
  }
}