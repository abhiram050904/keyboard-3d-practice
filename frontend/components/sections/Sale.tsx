'use client'
import { Canvas, useLoader } from "@react-three/fiber";
import { useInView } from 'framer-motion'
import Link from 'next/link'
import React, { useRef, useEffect, useState } from 'react'
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from 'three'
import { a, easings, useSpring } from "@react-spring/three";

interface ModelProps {
  url: string;
  initialPosition: [number, number, number];
  finalPosition: [number, number, number];
  rotation: [number, number, number];
}

const Model = ({ url, initialPosition, finalPosition, rotation }: ModelProps) => {
  const model = useLoader(GLTFLoader, url)
  const modelRef = useRef<THREE.Mesh>(null)

  const [animate, setAnimate] = useState(false)

  const { position } = useSpring({
    from: { position: initialPosition },
    to: animate ? { position: finalPosition } : { position: initialPosition },
    config: { duration: 1500, easing: easings.easeInOutCubic },
    delay: 200
  })

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <a.mesh ref={modelRef} position={position} rotation={rotation} scale={[0.65, 0.65, 0.65]}>
      <primitive object={model.scene} />
    </a.mesh>
  )
}

const Sale = () => {
  const mountRef = useRef(null)
  const isInView = useInView(mountRef, { once: true })
  const [startAnimation, setStartAnimation] = useState(false)
  const [isMobile,setIsMobile]=useState(false)

  useEffect(()=>{
    const handleresize=()=>{
      if(typeof window !== "undefined"){
        setIsMobile(window.innerWidth<768)
      }
    }

    handleresize()
    window.addEventListener('resize',handleresize)

    return ()=>{
      window.removeEventListener('resize',handleresize)
    }
  })
  useEffect(() => {
    if (isInView) {
      setStartAnimation(true) 
    }
  }, [isInView])

  const leftmodelInitialPosition: [number, number, number] = [-2, 0, 0]
  const rightmodelInitialPosition: [number, number, number] = [2, 0, 0]

  const leftmodelFinalPosition: [number, number, number] = [-3.1, -1.3, 0]
  const rightmodelFinalPosition: [number, number, number] = isMobile? [1.5, -1, 0]: [2.9, 0.8, 0]

  const modelRotation: [number, number, number] = [Math.PI / 2, Math.PI / 180 * 80, Math.PI / 180 * -10]

  return (
    <div className='flex flex-col container items-center justify-center gap-8 pt-32 mx-auto relative'>
      <div ref={mountRef} className='absolute w-full h-screen lg:h-[150vh] top-0 md:top-[-60vh]'>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} className='w-full h-full'>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={3} />
          <directionalLight position={[-5, 5, 5]} intensity={3} />
          {startAnimation && (
            <>
            {!isMobile && (
              <Model url="/assets/keyboard.glb" initialPosition={leftmodelInitialPosition} finalPosition={leftmodelFinalPosition} rotation={modelRotation} />
            )}
            <Model url="/assets/keyboard3.glb" initialPosition={rightmodelInitialPosition} finalPosition={rightmodelFinalPosition} rotation={modelRotation} />
            </>
          )}
        </Canvas>
      </div>
      <h2 className='text-4xl md:text-5xl font-bold text-center'>Limited Collection <br /> for Sale</h2>
      <p className='uppercase text-sm font-bold bg-gradient bg-clip-text text-transparent'>Discounts up to 30%</p>
      <Link href='#catlog' className='w-36 flex flex-col items-center py-3 rounded-xl text-xs bg-gradient'>Buy Keyboard</Link>
    </div>
  )
}

export default Sale
