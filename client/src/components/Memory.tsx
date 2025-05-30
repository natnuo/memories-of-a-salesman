import { useFrame } from "@react-three/fiber";
import { ComponentProps, memo, useEffect, useRef, useState } from "react";
import { Color, Mesh, MeshStandardMaterial, Object3D } from "three";

// will be further modified by dt
const MAX_ACCEL = 0.01;
const MAX_V = 0.05;

const MAX_TGPZ = 20; // min will be additive opposite

const MIN_TGPZ_CHANGE = 2;

type MemoryProps = {
  x: number;
  y: number;
  color: [number, number, number];
  paused: boolean;
  highlighted: boolean;
  onClick: () => void;
  loading: number;
  highlightBrightnessFactor: number;
};

// HAVE MEMORIES THAT CAN BE INTERACTED WITH, GLOW

const pController = (
  v: number,
  tgp: number,
  p: number,
  dt: number,
  Kp: number
) => {
  const mx_a_mag = MAX_ACCEL * dt; // max acceleration magnitude

  const et = tgp - p;
  const tgv = Kp * et; // p controller
  const az = Math.max(Math.min(tgv - v, mx_a_mag), -mx_a_mag);

  const v_ = Math.max(Math.min(v + az, MAX_V), -MAX_V);

  // simple calc so high dt will cause inaccuracy, but high accuracy unnecessary
  // and high dt should is filtered before our main use of this function
  const p_ = p + v_;

  return { p: p_, v: v_, et };
};

export default function Memory({
  x,
  y,
  color,
  paused,
  highlighted,
  onClick,
  loading,
  highlightBrightnessFactor
}: MemoryProps) {
  const meshRef = useRef<Mesh>(null);

  const [unhighlighted, setUnhighlighted] = useState(false);
  const [r, setR] = useState(color[0] / 255);
  const [g, setG] = useState(color[1] / 255);
  const [b, setB] = useState(color[2] / 255);

  const [vz, setVz] = useState(0);
  const [vx, setVx] = useState(0);
  const [vy, setVy] = useState(0);
  const [tgpz, setTGPz] = useState(0);
  const [tgpx, setTGPx] = useState(2 * x);
  const [tgpy, setTGPy] = useState(2 * y);
  const [pz, setPz] = useState(0);
  const [px, setPx] = useState(x);
  const [py, setPy] = useState(y);

  useFrame((state, dt) => {
    if (dt > 0.5) dt = 0;

    // theoretically should track cumulative dt here but theoretically meshRef.current will exist anyway
    // so _theoretically_ is fine, lol/
    if (!meshRef.current) return;

    meshRef.current.position.x = px;
    meshRef.current.position.y = py;
    meshRef.current.position.z = pz;

    if (paused) return;

    const { v: vx_, p: px_ } = pController(vx, tgpx, px, dt, 0.001);
    setVx(vx_);
    setPx(px_);

    const { v: vy_, p: py_ } = pController(vy, tgpy, py, dt, 0.001);
    setVy(vy_);
    setPy(py_);

    const { v: vz_, p: pz_, et: etz } = pController(vz, tgpz, pz, dt, 0.003);
    setPz(pz_);
    setVz(vz_);

    if (Math.abs(etz) < 0.5) {
      let n_tgpz;
      do {
        n_tgpz = Math.random() * 2 * MAX_TGPZ - MAX_TGPZ;
      } while (Math.abs(n_tgpz - tgpz) < MIN_TGPZ_CHANGE);

      setTGPz(n_tgpz);
    }
  });

  const materialRef = useRef<MeshStandardMaterial>(null);

  useFrame((state, dt) => {
    if (!materialRef.current) return;

    // console.log(materialRef.current.color);

    if (highlighted && !unhighlighted) {
      setR(Math.min(
        r + dt,
        (color[0] * highlightBrightnessFactor) / 255
      ));
      setG(Math.min(
        g + dt,
        (color[1] * highlightBrightnessFactor) / 255
      ));
      setB(Math.min(
        b + dt,
        (color[2] * highlightBrightnessFactor) / 255
      ));
    } else {
      setR(Math.max(
        r - dt,
        color[0] / 255
      ));
      setG(Math.max(
        g - dt,
        color[1] / 255
      ));
      setB(Math.max(
        b - dt,
        color[2] / 255
      ));
    }
  });

  return (
    <>
      <mesh
        ref={meshRef}
        onClick={() => {
          if (highlighted && !unhighlighted && loading === 0) {
            setUnhighlighted(true);
            onClick();
          }
        }}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          ref={materialRef}
          color={[r, g, b]}
        />
      </mesh>
    </>
  );
}
