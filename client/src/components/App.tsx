import styles from "../css/index.module.css";
import { Canvas } from "@react-three/fiber";
import { memo, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import CameraControlsWrapper from "./CameraControlsWrapper";
import MemoryField from "./MemoryField";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const MemoryFieldMemo = memo(MemoryField);

const OVERLAY_TRANSITION_MS = 2000;
const CONTINUE_PULSE_TIME = "4s";

const App = () => {
  const [paused, setPaused] = useState(true);

  const [loading, setLoading] = useState(false);

  const [dispOverlay, _setDispOverlay] = useState<ReactNode>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const setOverlay = (newValue: ReactNode) => {
    if (!overlayRef.current) return;

    overlayRef.current.style.opacity = "0";

    const timeout = setTimeout(() => {
      if (!overlayRef.current) return;

      _setDispOverlay(newValue);

      overlayRef.current.style.opacity = "1";
    }, OVERLAY_TRANSITION_MS / 2);

    return () => clearTimeout(timeout);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalCaption, setModalCaption] = useState("");

  const [headerNode, _setHeaderNode] = useState<ReactNode>(null);
  const [currentMemory, setCurrentMemory] = useState(0);
  const onMemoryClick = useCallback(() => {
    switch (currentMemory) {
      case 0:
        onHeaderChange(<><b>I:</b> Willy's belief in the American Dream.</>)
        setModalImageSrc(require("../utility/uncle_ben_arrives.png"));

    }

    setCurrentMemory(currentMemory + 1);
  }, [currentMemory]);

  const headerRef = useRef<HTMLSpanElement>(null);
  const onHeaderChange = (newHeader: ReactNode) => {
    if (!headerRef.current) return;

    headerRef.current.style.opacity = "0";

    const timeout = setTimeout(() => {
      if (!headerRef.current) return;

      _setHeaderNode(newHeader);

      headerRef.current.style.opacity = "1";
    }, OVERLAY_TRANSITION_MS / 2);

    return () => clearTimeout(timeout);
  };

  const [tutorialPage, setTutorialPage] = useState(0);

  const [cntHighlighted, setCntHighlighted] = useState(0);

  useEffect(() => {
    switch (tutorialPage) {
      case 0:
        setOverlay(
          <>
            <span className={`${styles["text-3xl"]}`}>
              Welcome to <i>Dreams of a Salesman.</i>
            </span>
            <div
              className={`
              ${styles["flex"]} ${styles["justify-between"]} ${styles["w-full"]}
              ${styles["px-4"]}
            `}
            >
              <span
                className={`
                  ${styles["text-base"]} ${styles["text-gray-400"]} ${styles["cursor-pointer"]}
                `}
                onClick={() => setTutorialPage(-1)}
              >
                Click to Skip Tutorial
              </span>
              <span
                className={`
                  ${styles["text-base"]} ${styles["animate-pulse"]}
                  ${styles["cursor-pointer"]} ${styles["text-orange-300"]}
                `}
                style={{ animationDuration: CONTINUE_PULSE_TIME }}
                onClick={() => setTutorialPage(1)}
              >
                Click to Continue
              </span>
            </div>
          </>
        );
        break;
      case 1:
        setOverlay(
          <>
            <span>
              Try holding{" "}
              <span className={`${styles["text-red-400"]}`}>left touchpad</span>{" "}
              or{" "}
              <span className={`${styles["text-blue-400"]}`}>
                left mouse button
              </span>{" "}
              and dragging your cursor around.
            </span>
            <span className={`${styles["text-base"]}`}>
              Although{" "}
              <span className={`${styles["text-red-400"]}`}>touchpad</span>{" "}
              works, a{" "}
              <span className={`${styles["text-blue-400"]}`}>mouse</span> might
              be helpful.
            </span>
          </>
        );
        break;
      case 2:
        setOverlay(
          <>
            <span>
              Nice! Each cube is a memory from Willy Loman's American Dream.
            </span>
            <span
              className={`
                ${styles["text-base"]} ${styles["cursor-pointer"]}
                ${styles["text-orange-300"]} ${styles["animate-pulse"]}
              `}
              style={{ animationDuration: CONTINUE_PULSE_TIME }}
              onClick={() => setTutorialPage(3)}
            >
              Click to Continue
            </span>
          </>
        );
        break;
      case 3:
        setOverlay(
          <>
            <span>
              Let's continue with controls. Try zooming by{" "}
              <span className={`${styles["text-red-400"]}`}>
                moving two fingers together/apart
              </span>{" "}
              or{" "}
              <span className={`${styles["text-blue-400"]}`}>
                scrolling mouse wheel
              </span>
              .
            </span>
          </>
        );
        break;
      case 4:
        setOverlay(
          <>
            <span>
              Great. To finish controls, drag while pressing{" "}
              <span className={`${styles["text-red-400"]}`}>
                bottom right trackpad
              </span>{" "}
              or{" "}
              <span className={`${styles["text-blue-400"]}`}>
                right mouse button
              </span>{" "}
              to pan.
            </span>
          </>
        );
        break;
      case 5:
        setCntHighlighted(1);
        onHeaderChange(
          <>
            <b>Thesis:</b> In Arthur Miller's <i>Death of a Salesman</i>, Willy
            dedicates his life to the misguided pursuit of an American Dream, a
            system that devalues his individuality and legacy, evident in his
            interactions with his family, his loss of a job, and his suicide.
          </>
        );
        setOverlay(
          <>
            <span>OK. One memory is now highlighted. Try clicking it.</span>
          </>
        );
        break;
      default:
        setOverlay(null);
        break;
    }
  }, [tutorialPage]);

  return (
    <div className={`${styles["w-svw"]} ${styles["h-svh"]}`}>
      {/* OVERLAY */}
      <div
        className={`
        ${styles["absolute"]} ${styles["left-1/2"]} ${styles["bottom-4"]} ${styles["z-10"]}
        ${styles["-translate-x-1/2"]} ${styles["text-xl"]}
        ${styles["text-white"]} ${styles["flex"]} ${styles["flex-col"]}
        ${styles["items-center"]} ${styles["text-center"]}
      `}
        style={{ transitionDuration: OVERLAY_TRANSITION_MS / 2 + "ms" }}
        ref={overlayRef}
      >
        {dispOverlay}
      </div>

      {/* HEADER */}
      <span
        className={`
          ${styles["absolute"]} ${styles["left-1/2"]} ${styles["top-4"]} ${styles["z-10"]}
          ${styles["-translate-x-1/2"]} ${styles["text-base"]} ${styles["text-white"]}
          ${styles["text-center"]}
        `}
        style={{ transitionDuration: OVERLAY_TRANSITION_MS / 2 + "ms" }}
        ref={headerRef}
      >
        {headerNode}
      </span>

      {/* MODAL */}
      <div
        className={`
          ${styles["absolute"]}
          ${styles["top-0"]} ${styles["bottom-0"]} ${styles["left-0"]} ${styles["right-0"]}
          ${styles["-z-30"]} ${styles["p-8"]} ${styles["opacity-0"]}
          ${modalVisible ? `${styles["!opacity-100"]} ${styles["!z-30"]}` : ""}
        `}
        style={{ transitionDuration: OVERLAY_TRANSITION_MS / 2 + "ms" }}
      >
        {/* modal close */}
        <div
          className={`
            ${styles["absolute"]} ${styles["top-2"]} ${styles["right-2"]}
            ${styles["cursor-pointer"]}
          `}
          onClick={() => setModalVisible(false)}
        >X</div>

        {/* modal details */}
        {modalTitle}
        <img src={modalImageSrc}></img>
        {modalCaption}
      </div>

      {/* CANVAS */}
      <Canvas
        flat
        className={`${styles["w-full"]} ${styles["h-full"]} ${styles["bg-black"]}`}
      >
        {/* BLOOM */}
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} />
        </EffectComposer>

        {/* CAMERA */}
        <CameraControlsWrapper
          onChange={() => setPaused(false)}
          onLeftDrag={() => {
            if (tutorialPage === 1) setTutorialPage(2);
          }}
          onRightDrag={() => {
            if (tutorialPage === 4) setTutorialPage(5);
          }}
          onZoom={() => {
            if (tutorialPage === 3) setTutorialPage(4);
          }}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.6}
        />

        {/* LIGHTING */}
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[0, 0, 100]}
          angle={0.15}
          rotation={[Math.PI / 2, 0, 0]}
          penumbra={1}
          decay={0}
          intensity={Math.PI / 2}
        />

        {/* MESHES */}
        {/* memoryfield */}
        <MemoryFieldMemo
          paused={paused}
          highlights={cntHighlighted}
          onMemoryClick={onMemoryClick}
          loading={loading}
        ></MemoryFieldMemo>
      </Canvas>
    </div>
  );
};

// TODO: build skip tutorial case
// TODO: credit music

export default App;
