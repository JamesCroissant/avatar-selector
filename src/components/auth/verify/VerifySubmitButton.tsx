import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'
import { Loader2 } from "lucide-react"

export const VerifySubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button 
      type="submit" 
      className="text-md w-full px-4 py-6 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="h-6 w-6 animate-spin" />
        </>
      ) : (
        'Verify Email Address'
      )}
    </Button>
  )
}