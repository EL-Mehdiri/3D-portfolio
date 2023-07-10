import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from 'maath/random/dist/maath-random.esm';





const Stars = (props) => {
    const ref = useRef();

    const sphare = random.inSphere(new Float32Array(5000), { radius: 1.2 })

    useFrame((state, deLta) => {
        ref.current.rotation.x -= deLta / 10;
        ref.current.rotation.y *= deLta / 15;
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphare} stride={3} frustumCulled {...props} >
                <PointMaterial transparent color='#f272c8' size={0.002} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group >
    )
}
const StarsCanvas = () => {
    return (
        <div className=" w-full h-auto absolute inset-0 z-[-1]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fullback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default StarsCanvas;