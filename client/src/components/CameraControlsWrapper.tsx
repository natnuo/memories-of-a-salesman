import { CameraControls, CameraControlsProps } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Euler, Vector3 } from "three";

export default function CameraControlsWrapper(
  props: CameraControlsProps & { onLeftDrag?: () => void, onRightDrag?: () => void, onZoom?: () => void }
) {
  const cameraControls = useRef<CameraControls>(null);

  let
    lastCameraPosition: Vector3 | undefined,
    lastCameraRotation: Euler | undefined,
    lastCameraZoom: number | undefined;
  
  // useFrame(() => {
  //   if (!cameraControls.current) return;
    
  //   const currCameraPosition = cameraControls.current.camera.position;
  //   const currCameraRotation = cameraControls.current.camera.rotation;
  //   const currCameraZoom = cameraControls.current.distance;
    
  //   lastCameraPosition = currCameraPosition;
  //   lastCameraRotation = currCameraRotation;
  //   lastCameraZoom = currCameraZoom;
  // });

  const { onChange: onChangeProp, ...remainingProps } = props;

  return <CameraControls 
    ref={cameraControls}
    onChange={() => {
      if (!cameraControls.current) return;
      
      // const currCameraPosition = cameraControls.current.camera.position;
      // const currCameraRotation = cameraControls.current.camera.rotation;
      const currCameraZoom = cameraControls.current.distance;
      
      if (
        (cameraControls.current.currentAction & 1) &&
        props.onLeftDrag
      ) props.onLeftDrag();

      if (
        (cameraControls.current.currentAction & 2) &&
        props.onRightDrag
      ) props.onRightDrag();

      if (
        lastCameraZoom &&
        Math.abs(currCameraZoom - lastCameraZoom) > 0.001 &&
        props.onZoom
      ) props.onZoom();
      
      // lastCameraPosition = currCameraPosition;
      // lastCameraRotation = currCameraRotation;
      lastCameraZoom = currCameraZoom;

      (onChangeProp ?? (() => {}))();
    }}
    {...remainingProps}
  ></CameraControls>;
}
