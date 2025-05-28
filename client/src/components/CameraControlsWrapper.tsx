import { CameraControls, CameraControlsProps } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Euler, Vector3 } from "three";

export default function CameraControlsWrapper(
  props: CameraControlsProps & { onLeftDrag?: () => void, onRightDrag?: () => void, onZoom?: () => void }
) {
  const cameraControls = useRef<CameraControls>(null);

  let lastCameraPosition: Vector3, lastCameraRotation: Euler;
  useFrame(() => {
    if (!cameraControls.current) return;
    
    const currCameraPosition = cameraControls.current.camera.position;
    const currCameraRotation = cameraControls.current.camera.rotation;

    if (cameraControls.current.mouseButtons.left && currCameraPosition !== lastCameraPosition) {
      (props.onLeftDrag ?? () => {})();
    }
    
    lastCameraPosition = currCameraPosition;
    lastCameraRotation = currCameraRotation;
  });
  // let lastCameraPosition: Vector3, lastCameraRotation: Euler;
  // useFrame(() => {
  //   if (!cameraControls.current) return;

  //   const currCameraPosition = cameraControls.current.camera.position;
  //   const currCameraRotation = cameraControls.current.camera.rotation;

  //   // const positionChange
  //   cameraControls.current.mouseButtons.left.

  //   lastCameraPosition = currCameraPosition;
  //   lastCameraRotation = currCameraRotation;
  // });

  return <CameraControls 
    ref={cameraControls}
    {...props}
  ></CameraControls>;
}
