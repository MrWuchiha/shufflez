import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls, PerspectiveCamera, Sparkles, Text, useProgress } from "@react-three/drei";
import { Model } from './Model';
import { Card } from './Card';
import React from 'react';
import * as THREE from 'three';
import { LayerMaterial, Depth } from 'lamina';
import { Vector3 } from 'three';


const Sphere = ({color = "white", ...props}) => {
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[0.01, 5, 5 ]} attach='geometry' />
      <meshPhysicalMaterial roughness={0} color={color} sheen={1} />
      <Sparkles count={20} scale={40} size={120} speed={1} color={color} />
    </mesh>
  )
};

const RandomGenSphere = (props: JSX.IntrinsicElements['group']) => {
  const NUM = 20;
  const spheres = new Array(NUM).fill(undefined);
  return (
    <>
      { spheres.map((_, i) => {
        const group = useRef<THREE.Group>();
        useFrame(({ clock }) => {
          group.current!.rotation.x = -0.05*clock.getElapsedTime();
        });

        return (
          //@ts-ignore: Unreachable code error
          <group ref={group} {...props}>
            <Sphere key={i} color="cyan" position={[1 + Math.random() * 30, 70 - Math.random() * 140, 70 - Math.random() * 140]} />
            <Sphere key={i} color="#FFB6C1" position={[-1 - Math.random() * 30, 70 - Math.random() * 140, 70 - Math.random() * 140]} />
          </group>
        );
      })}
    </>
  );
};

const RandomGenCard = (props: JSX.IntrinsicElements['group']) => {
  const NUM = 40;
  const cards = new Array(NUM).fill(undefined);

  return (
    <>
      { cards.map((_, i) => {
        const group = useRef<THREE.Group>();
        useFrame(({ clock }) => {
          group.current!.rotation.x = -0.05*clock.getElapsedTime();
        });
        return (
          //@ts-ignore
          <group ref={group} position={[0, 0, 0]} >
            <Card scale={1+Math.random()} position={[15 - Math.random() * 30, 2 - Math.random() * 50, 50 - Math.random() * 100]} />
            <Card scale={1+Math.random()} position={[15 - Math.random() * 30, 2 + Math.random() * 50, 50 - Math.random() * 100]} />
          </group>
        )
      })}
    </>
  );
};

const Caption = ({ children, size, position, letterSpacing }: {children:string, size:number, position:Vector3, letterSpacing:number}) => {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={position}
      lineHeight={0.8}
      font="/build/images/fonts/Requiem.ttf"
      fontSize={width * size}
      letterSpacing={letterSpacing}
      color="#eecf90"
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {children}
    </Text>
  )
};

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(-state.mouse.x / 4, -35 - state.mouse.y / 2, 3.5), 0.05)
  })
};

function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorB="red" colorA="deepskyblue" alpha={1} mode="normal" near={160} far={200} origin={[100, 100, -100]} />
      </LayerMaterial>
    </mesh>
  )
};

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html className="text-center z-0">{Math.round(progress)} % loaded</Html>;
};

const ThreeScene = React.memo((props:any) => {
  
  return (
    <> 
      {/* <div className='image-div'></div> #080073 #4e7b7d */}
      <Canvas shadows>
        <Suspense fallback={<Loader />}>
          {/* <color args={["#b8cfff"]} attach="background" /> */}
          <Bg />
          <hemisphereLight intensity={1} color="red" />
          <spotLight intensity={20} color="#c1cff5" position={[0, 4, 0]} />

          <RandomGenSphere />
          <RandomGenCard />
          <Caption size={1/20} position={new THREE.Vector3(0, -35, -10)} letterSpacing={0.5}>{ 'SHFLZ' }</Caption>
          <Caption size={1/80} position={new THREE.Vector3(0, -35.8, -10)} letterSpacing={0.1}>{ '580 tarot-themed, hand-drawn NFTs' }</Caption>
          <Model position={[0, -35.1, 0]} onClick={props.togglePage} />
          <mesh position={[0, -34.8, 0]}>
            <sphereBufferGeometry args={[1, 1, 1 ]} attach='geometry' />
            <meshPhysicalMaterial color={'white'} visible={false} opacity={0} />
            <Sparkles count={10} scale={1.6} size={10} speed={1} color={'#f2edff'} />
          </mesh>

          <Rig/>

          <OrbitControls target={[0, -34.6, 0]} maxPolarAngle={1.45} maxDistance={15} /> 
          <PerspectiveCamera makeDefault fov={20} position={[0, -34.2, 3.5]} />
        </Suspense>
      </Canvas>
    </>
  );
}, () => {
  return true;
})

export default ThreeScene;

