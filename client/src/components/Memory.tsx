import { useFrame } from "@react-three/fiber";
import { ComponentProps, useEffect, useRef, useState } from "react";
import { Color, Mesh, Object3D } from "three";
import { MemoryData } from "./MemoryField";

// will be further modified by dt
const MAX_ACCEL = 0.01;
const MAX_V = 0.05;

const MAX_TGPZ = 20;  // min will be additive opposite

const MIN_TGPZ_CHANGE = 2;

type MemoryProps = {
  x: number;
  y: number;
  color: [number, number, number];
  paused: boolean;
  highlighted: MemoryData;
};

// HAVE MEMORIES THAT CAN BE INTERACTED WITH, GLOW

const pController = (v: number, tgp: number, p: number, dt: number, Kp: number) => {
  const mx_a_mag = MAX_ACCEL * dt;  // max acceleration magnitude

  const et = tgp - p;
  const tgv = Kp * et;  // p controller
  const az = Math.max(Math.min(tgv - v, mx_a_mag), -mx_a_mag);
  
  const v_ = Math.max(Math.min(v + az, MAX_V), -MAX_V);

  // simple calc so high dt will cause inaccuracy, but high accuracy unnecessary
  // and high dt should is filtered before our main use of this function
  const p_ = p + v_;

  return { p: p_, v: v_, et };
};

export default function Memory({ x, y, color, paused, highlighted }: MemoryProps) {
  const meshRef = useRef<Mesh>(null);

  const [active, setActive] = useState(false);

  // useEffect(() => {
  //   if (!meshRef.current) return;

  //   meshRef.current.position.x = x;
  //   meshRef.current.position.y = y;
  // }, []);

// todo: american flag-bound movement

  let vz = 0, tgpz = 0, pz = 0;
  let vx = 0, tgpx = 2*x, px = x;
  let vy = 0, tgpy = 2*y, py = y;
  useFrame((state, dt) => {
    if (dt > 0.5) dt = 0;

    // theoretically should track cumulative dt here but theoretically meshRef.current will exist anyway
    // so _theoretically_ is fine, lol/
    if (!meshRef.current) return;

    meshRef.current.position.x = px;
    meshRef.current.position.y = py;
    meshRef.current.position.z = pz;

    if (paused) return;

    const { v: vx_, p: px_ } = pController(vx, tgpx, px, dt, 0.001); vx = vx_; px = px_;
    const { v: vy_, p: py_ } = pController(vy, tgpy, py, dt, 0.001); vy = vy_; py = py_;
    
    const { v: vz_, p: pz_, et: etz } = pController(vz, tgpz, pz, dt, 0.003);
    pz = pz_;
    vz = vz_;

    // console.log(tgpz, pz);

    if (Math.abs(etz) < 0.5) {
      let n_tgpz;
      do {
        n_tgpz = Math.random() * 2 * MAX_TGPZ - MAX_TGPZ;
      } while (Math.abs(n_tgpz - tgpz) < MIN_TGPZ_CHANGE);

      tgpz = n_tgpz;
    }
  });

  return (<>
    <mesh ref={meshRef} onClick={() => setActive(!active)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={
        color.map(item => item * (highlighted ? 10 : 1)) as [number, number, number]
      } /> 
    </mesh>
  </>);
}