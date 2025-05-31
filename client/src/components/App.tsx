import styles from "../css/index.module.css";
import { Canvas } from "@react-three/fiber";
import { memo, ReactNode, Suspense, useCallback, useEffect, useRef, useState } from "react";
import CameraControlsWrapper from "./CameraControlsWrapper";
import MemoryField from "./MemoryField";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const MemoryFieldMemo = memo(MemoryField);

const OVERLAY_TRANSITION_MS = 2000;
const CONTINUE_PULSE_TIME = "4s";

const App = () => {
  const [paused, setPaused] = useState(false);

  const [loading, setLoading] = useState(0);

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

  const modalRef = useRef<HTMLDivElement>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string>();
  const [modalTitle, setModalTitle] = useState("");
  const [modalCaption, setModalCaption] = useState("");

  useEffect(() => console.log(loading), [loading]);

  const [headerNode, _setHeaderNode] = useState<ReactNode>(null);
  const [currentMemory, setCurrentMemory] = useState(0);
  const onMemoryClick = useCallback(() => {
    switch (currentMemory) {
      case 0:  // all one-way
        onHeaderChange(<><b>I:</b> Willy tries to believe in the American Dream.</>);
        setModalTitle(`Willy: “You see what [I‘ve] been talking about? The greatest things can happen!” (48)`);
        setModalImageSrc(require("../utility/1.png"));
        setModalCaption("Willy is estatic for evidence confirming his beliefs, which Ben’s success provides. A failure of the American Dream, Willy hopes to still fit societal expectations of success.");
        setCntHighlighted(3);
        setModalVisible(true);
        break;
      case 1:
        setModalTitle(`Willy: “Business is bad, it’s murderous. But not for me, of course” (51).`);
        setModalImageSrc(require("../utility/2.png"));
        setModalCaption("Willy seems to believe in his unique potential for success.  The expression of certainty, “of course,” highlights this self-perception of near-invincibility. Willy’s certainty could also be exaggerated to appear stronger to Uncle Ben. The “but not for me,” an afterthought and reaction to his need to present as unique and successful.");
        setModalVisible(true);
        break;
      case 2:
        setModalTitle(`Willy: “I was right! I was! ... What a man! There [Uncle Ben] was a man worth talking to. I was right!” (53).`);
        setModalImageSrc(require("../utility/3.png"));
        setModalCaption(`Willy displays a near cult-like obsession with his dream. His urge to be “right” emphasizes his resistance to new ideas. However, although he may appear to trust his beliefs, his excitement about being “right” may also suggest potential insecurity. If he was confident in his beliefs, he would not be as surprised to be supposedly correct. As much as he may want to trust his beliefs, he may internally recognize potential flaws.`);
        setModalVisible(true);
        onHeaderChange(<>✅ <b>I:</b> Willy tries to believe in the American Dream. ✅</>);
        break;
      case 3:
        onHeaderChange(<><b>II:</b> The American Dream devalues Willy.</>);
        setModalTitle(`Willy: “Howard, I never asked a favor of any man, but I was with the firm when your father used to carry you in ... his arms.” (80).`);
        setModalImageSrc(require("../utility/4.png"));
        setModalCaption(`Having served the company for his whole life, Willy expects to be a trusted and respected salesman. Willy asks Howard for a reduced workload to accommodate worsening health. To Willy, his company owes him for years of loyal service. He expects the businessman to appreciate that he supported Howard’s father and was trusted to see Howard in his most vulnerable, newborn state. However, the company’s perspective is calculated: if Willy cannot provide for the business, then he cannot work for the business.`);
        setModalVisible(true);
        break;
      case 4:
        onHeaderChange(<><b>II:</b> Willy's dream fails him.</>);
        setModalTitle(`Willy: “Howard, I never asked a favor of any man, but I was with the firm when your father used to carry you in ... his arms.” (80).`);
        setModalImageSrc(require("../utility/4.png"));
        setModalCaption(`Having served the company for his whole life, Willy expects to be a trusted and respected salesman. Willy asks Howard for a reduced workload to accommodate worsening health. To Willy, his company owes him for years of loyal service. He expects the businessman to appreciate that he supported Howard’s father and was trusted to see Howard in his most vulnerable, newborn state. However, the company’s perspective is calculated: if Willy cannot provide for the business, then he cannot work for the business.`);
        setModalVisible(true);
        break;
      case 5:
        setModalTitle(`Howard: “I’ve got ... people to see this morning. Sit down, take five minutes, and pull yourself together, and then go home, will ya?” (84).`);
        setModalImageSrc(require("../utility/5.png"));
        setModalCaption(`Howard’s obsession with monetary gain and disregard for their families’ lifelong relationship is clear in his impatience for Willy’s exit, highlighted in his tone: “will ya?” like how a tired parent may talk to a child, when in actuality, their relationship is possibly closer to the opposite.`);
        setModalVisible(true);
        break;
      case 6:
        setModalTitle(`Willy: “You mustn’t tell me you’ve got people to see—I put thirty-four years into this firm, Howard, and now I can’t pay my insurance!” (82).`);
        setModalImageSrc(require("../utility/6.png"));
        setModalCaption(`To Willy, his decades of work seem to only amount to five minutes before his leaving: no “thank you” awarded, no celebration for Willy’s contributions, but a matter-of-fact betrayal of his loyalty. Willy’s demands for respect are fruitless. In such a profit-focused society, Howard cares only for his own success, not Willy’s legacy or history with the company.`);
        setModalVisible(true);
        break;
      case 7:
        setModalTitle(`Willy: “Today, [being a salesman] is all cut and dried ... there’s no chance for bringing friendship to bear—or personality” (81).`);
        setModalImageSrc(require("../utility/7.png"));
        setModalCaption(`In contrast to being a salesman in the past, friendship is devalued, and Willy is evaluated solely on his money-making ability. Even unable to afford insurance, Howard refuses to help what may be a family friend. The individuality and humanity of salespeople are worthless, instead, people are company property whose value is their profit.`);
        setModalVisible(true);
        break;
      case 8:
        setModalTitle(`Willy: “You can’t eat the orange and throw the peel away—a man is not a piece of fruit!” (82).`);
        setModalImageSrc(require("../utility/8.png"));
        setModalCaption(`Willy begins to recognize: he expired to Howard. Howard took the orange, the product value, from Willy and shows no appreciation for the peel, the human, that grew the orange. Willy is a worn product: sold to the Wagner company, retired by Howard.`);
        setModalVisible(true); 
        onHeaderChange(<>✅ <b>II:</b> Willy's dream fails him. ✅</>);
        break;
      case 9:
        onHeaderChange(<><b>III:</b> Willy's refuses change to his American Dream.</>);
        setModalTitle(`Willy: “What’s the matter with you, you crazy? If he’d’ve stayed with Oliver he’d be on top by now” (67).`);
        setModalImageSrc(require("../utility/9.png"));
        setModalCaption(`Linda questions if Bill Oliver would remember Biff. Willy continuously exaggerates reality throughout the play, here suggesting that Biff was Oliver’s top worker. These delusions spread to the rest of the family, with Linda believing that “Oliver always thought the highest” (65) of Biff. However, Biff was far from well-known.`);
        setModalVisible(true);
        break;
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

  const tutorialEndActions = useCallback(() => {
    setCntHighlighted(1);
    onHeaderChange(
      <>
        <b>Thesis:</b> In Arthur Miller’s <i>Death of a Salesman</i>, Willy
        dedicates his life to the misguided pursuit of an American Dream, a
        system that devalues his individuality and legacy, evident in his
        interactions with his family, his loss of a job, and his suicide.
      </>
    );
  }, []);
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
                onClick={() => { tutorialEndActions(); setTutorialPage(-1); }}
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
              onClick={() => setTutorialPage(2.5)}
            >
              Click to Continue
            </span>
          </>
        );
        break;
      case 2.5:
        setOverlay(
          <>
            <span>
              We will go through memories to discover how Willy's dream impacts him.
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
              Let's continue learning controls. Try zooming by{" "}
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
        tutorialEndActions();
        setOverlay(
          <>
            <span>OK. One memory is now highlighted. Look for it, then try clicking it.</span>
          </>
        );
        break;
      case 6:
        setOverlay(
          <>
            <span>That's it for the tutorial. See you at the end.</span>
          </>
        );
        break;
      default:
        setOverlay(null);
        break;
    }
  }, [tutorialPage, tutorialEndActions]);

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
          ${styles["absolute"]} ${styles["left-1/2"]} ${styles["top-4"]} ${styles["z-40"]}
          ${styles["-translate-x-1/2"]} ${styles["text-base"]}
          ${modalVisible ? `${styles["text-gray-400"]}` : `${styles["text-white"]}`}
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
          ${styles["-z-30"]}
          ${modalVisible ? `${styles["opacity-100"]} ${styles["!z-30"]}` : `${styles["opacity-0"]}`}
          ${styles["text-white"]}
        `}
        style={{ transitionProperty: "opacity", transitionDuration: OVERLAY_TRANSITION_MS / 2 + "ms", backdropFilter: "blur(4px)" }}
        ref={modalRef}
      >
        <div
          className={`
            ${styles["absolute"]}
            ${styles["w-[50svw]"]} ${styles["max-h-[75svh]"]} ${styles["p-16"]}
            ${styles["left-1/2"]} ${styles["top-1/2"]} ${styles["text-center"]}
            ${styles["-translate-x-1/2"]} ${styles["-translate-y-1/2"]} ${styles["overflow-y-scroll"]}
            ${styles["bg-black"]} ${styles["flex"]} ${styles["gap-4"]} ${styles["rounded"]}
            ${styles["flex-col"]} ${styles["items-center"]} ${styles["justify-center"]}
          `}
        >
          {/* modal close */}
          <div
            className={`
              ${styles["absolute"]} ${styles["top-2"]} ${styles["right-4"]}
              ${styles["block"]} ${styles["text-2xl"]} ${styles["italic"]}
              ${styles["cursor-pointer"]} ${styles["font-bold"]}
            `}
            onClick={() => {
              if (!modalRef.current) return;

              modalRef.current.style.opacity = "0";

              setTimeout(() => {
                if (!modalRef.current) return;

                setModalVisible(false);
                modalRef.current.style.removeProperty("opacity");
              }, OVERLAY_TRANSITION_MS / 2);

              if (tutorialPage === 5) {
                setTutorialPage(6);

                setTimeout(() => setTutorialPage(-1), OVERLAY_TRANSITION_MS + 5000);
              }
            }}
          >Next {">"}</div>

          {/* modal details */}
          <span className={`${styles["text-3xl"]}`}>{modalTitle}</span>
          <div style={{ width: "70%" }}>
            <img src={modalImageSrc} alt="" className={`${styles["rounded"]}`} style={{ height: "100%" }}></img>
          </div>
          <span>{modalCaption}</span>
        </div>
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
          position={[0, -100, 0]}
          angle={0.15}
          rotation={[Math.PI, 0, 0]}
          penumbra={1}
          decay={0}
          intensity={Math.PI / 2}
        />
        <spotLight
          position={[0, 100, 100]}
          angle={0.15}
          rotation={[Math.PI / 4, 0, 0]}
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
// TODO: give credit to music

export default App;
