'use client'

import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, Center, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

function AnimatedText() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(time / 4)
    meshRef.current.rotation.y = Math.sin(time / 2)
    meshRef.current.position.y = Math.sin(time) * 0.2
  })

  return (
    <Center>
      <Text3D
        ref={meshRef}
        font="/fonts/helvetiker_bold.typeface.json"
        size={3}
        height={0.4}
        curveSegments={12}
      >
        404
        <meshNormalMaterial />
      </Text3D>
    </Center>
  )
}

function AnimatedBackground() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * 0.1
    meshRef.current.rotation.y = time * 0.12
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshNormalMaterial wireframe />
    </mesh>
  )
}

export default function NotFound() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="h-screen w-full relative">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <AnimatedBackground />
        <AnimatedText />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/">Go Back Home</Link>
        </Button>
      </div>
    </div>
  )
}