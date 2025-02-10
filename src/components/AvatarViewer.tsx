
"use client"

import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, PerspectiveCamera, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
import { AnimationKey, animations } from '@/constants/animations'

interface AvatarViewerProps {
  avatarUrl: string
  isSidebarOpen: boolean
}

interface ModelProps {
  url: string
  isSidebarOpen: boolean
}

function Model({ url, isSidebarOpen }: ModelProps) {
  const { scene, animations: avatarAnimations } = useGLTF(url)
  const { camera, size } = useThree()
  const modelRef = useRef<THREE.Group>(null)

  const animationFiles = Object.values(animations)
  const animationsPromises = animationFiles.map(file => useGLTF(file).animations)
  const allAnimations = avatarAnimations.concat(...animationsPromises.flat())

  const { actions } = useAnimations(allAnimations, modelRef)


  useEffect(() => {
    Object.values(actions).forEach(action => action?.stop())

    const animationKey = isSidebarOpen ? 'M_Talking_Variations_001' : 'M_Talking_Variations_002'
    const action = actions[animationKey]

    if (action) {
      action.reset().fadeIn(0.3).play()
      return () => {
        action.fadeOut(0.3)
      }
    }
  }, [isSidebarOpen, actions])

  useEffect(() => {
    if (scene && modelRef.current) {
      const box = new THREE.Box3().setFromObject(scene)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())

      const maxDim = Math.max(size.x, size.y, size.z)
      
      if (camera instanceof THREE.PerspectiveCamera) {
        const fov = camera.fov * (Math.PI / 180)
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2))
        cameraZ *= 1.0 // Slightly closer to make the avatar appear larger

        camera.position.set(center.x, center.y, center.z + cameraZ)
        camera.lookAt(center)
        camera.updateProjectionMatrix()
      } else {
        camera.position.set(center.x, center.y, center.z + maxDim * 1.5)
        camera.lookAt(center)
      }

      // modelRef.current.position.set(-center.x, -center.y, -center.z)
      // modelRef.current.rotation.y = 0
      modelRef.current.position.set(-center.x, -center.y - 0.3, -center.z) // Moved right and down
      modelRef.current.rotation.y = 0
    }
  }, [scene, camera])

  return <primitive ref={modelRef} object={scene} />
}

export default function AvatarViewer({ 
  avatarUrl,
  isSidebarOpen
}: AvatarViewerProps) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Canvas>
        <PerspectiveCamera 
          makeDefault 
          fov={50} 
          near={0.1} 
          far={1000} 
        />
        <Suspense fallback={null}>
          <Model 
            url={avatarUrl} 
            isSidebarOpen={isSidebarOpen}
          />
          <Environment preset="studio" />
        </Suspense>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  )
}