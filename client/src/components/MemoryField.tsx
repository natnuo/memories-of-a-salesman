import { useEffect, useState } from "react";
import Memory from "./Memory";

const RED = [179, 25, 66] as [number, number, number],
  BLUE = [10, 49, 97] as [number, number, number],
  WHITE = [177, 177, 177] as [number, number, number];

const
  RED_HIGHLIGHT_BRIGHTNESS_FACTOR = 8,
  BLUE_HIGHLIGHT_BRIGHTNESS_FACTOR = 12,
  WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR = 3;

const MIN_X = -5,
  MAX_X = 5,
  MIN_Y = -3,
  MAX_Y = 3;

type MemoryFieldProps = {
  paused: boolean;
  highlights: number;
  onMemoryClick: () => void;
  loading: number;
};

export default function MemoryField({ paused, highlights, onMemoryClick, loading }: MemoryFieldProps) {
  const [currentlyHighlighted, setCurrentlyHighlighted] = useState(
    Array.from({ length: MAX_X - MIN_X + 1 }, () =>
      Array.from({ length: MAX_Y - MIN_Y + 1 }, () => false)
    )
  ); // using x, y

  useEffect(() => {
    let cntHighlighted = 0;
    for (let i = 0; i <= MAX_X - MIN_X; i++) {
      for (let j = 0; j <= MAX_Y - MIN_Y; j++) {
        cntHighlighted += +currentlyHighlighted[i][j];
      }
    }

    let newCurrentlyHighlighted = Array.from(currentlyHighlighted);
    if (cntHighlighted < highlights) {
      while (cntHighlighted < highlights) {
        let randX = Math.floor(Math.random() * (MAX_X - MIN_X + 1));
        let randY = Math.floor(Math.random() * (MAX_Y - MIN_Y + 1));

        if (!newCurrentlyHighlighted[randX][randY]) {
          cntHighlighted++;
          newCurrentlyHighlighted[randX][randY] = true;
        }
      }

      setCurrentlyHighlighted(newCurrentlyHighlighted);
    }
  }, [highlights, currentlyHighlighted]);

  return (
    <group position={[0, 0, 0]} rotation={[0, 3 * Math.PI / 2, 0]}>
      <Memory
        x={-5}
        y={3}
        color={BLUE} highlightBrightnessFactor={BLUE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-5 - MIN_X][-3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-5}
        y={2}
        color={BLUE} highlightBrightnessFactor={BLUE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-5 - MIN_X][-2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-5}
        y={1}
        color={BLUE} highlightBrightnessFactor={BLUE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-5 - MIN_X][-1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-5}
        y={0}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-5 - MIN_X][-MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-5}
        y={-1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-5 - MIN_X][1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-5}
        y={-2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-5 - MIN_X][2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-5}
        y={-3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-5 - MIN_X][3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>

      <Memory
        x={-4}
        y={3}
        color={BLUE} highlightBrightnessFactor={BLUE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-4 - MIN_X][-3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-4}
        y={2}
        color={BLUE} highlightBrightnessFactor={BLUE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-4 - MIN_X][-2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-4}
        y={1}
        color={BLUE} highlightBrightnessFactor={BLUE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-4 - MIN_X][-1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-4}
        y={0}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-4 - MIN_X][-MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-4}
        y={-1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-4 - MIN_X][1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-4}
        y={-2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-4 - MIN_X][2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-4}
        y={-3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-4 - MIN_X][3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>

      <Memory
        x={-3}
        y={3}
        color={BLUE} highlightBrightnessFactor={BLUE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-3 - MIN_X][-3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-3}
        y={2}
        color={BLUE} highlightBrightnessFactor={BLUE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-3 - MIN_X][-2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-3}
        y={1}
        color={BLUE} highlightBrightnessFactor={BLUE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-3 - MIN_X][-1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-3}
        y={0}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-3 - MIN_X][-MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-3}
        y={-1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-3 - MIN_X][1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-3}
        y={-2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-3 - MIN_X][2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-3}
        y={-3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-3 - MIN_X][3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>

      <Memory
        x={-2}
        y={3}
        color={BLUE} highlightBrightnessFactor={BLUE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-2 - MIN_X][-3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-2}
        y={2}
        color={BLUE} highlightBrightnessFactor={BLUE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-2 - MIN_X][-2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-2}
        y={1}
        color={BLUE} highlightBrightnessFactor={BLUE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-2 - MIN_X][-1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-2}
        y={0}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-2 - MIN_X][-MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-2}
        y={-1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-2 - MIN_X][1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-2}
        y={-2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-2 - MIN_X][2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-2}
        y={-3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-2 - MIN_X][3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>

      <Memory
        x={-1}
        y={3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-1 - MIN_X][-3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-1}
        y={2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-1 - MIN_X][-2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-1}
        y={1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-1 - MIN_X][-1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-1}
        y={0}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-1 - MIN_X][-MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-1}
        y={-1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-1 - MIN_X][1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-1}
        y={-2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-1 - MIN_X][2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={-1}
        y={-3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-1 - MIN_X][3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>

      <Memory
        x={0}
        y={3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-MIN_X][-3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={0}
        y={2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-MIN_X][-2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={0}
        y={1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-MIN_X][-1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={0}
        y={0}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-MIN_X][-MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={0}
        y={-1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-MIN_X][1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={0}
        y={-2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-MIN_X][2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={0}
        y={-3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[-MIN_X][3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>

      <Memory
        x={1}
        y={3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[1 - MIN_X][-3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={1}
        y={2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[1 - MIN_X][-2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={1}
        y={1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[1 - MIN_X][-1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={1}
        y={0}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[1 - MIN_X][-MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={1}
        y={-1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[1 - MIN_X][1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={1}
        y={-2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[1 - MIN_X][2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={1}
        y={-3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[1 - MIN_X][3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>

      <Memory
        x={2}
        y={3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[2 - MIN_X][-3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={2}
        y={2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[2 - MIN_X][-2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={2}
        y={1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[2 - MIN_X][-1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={2}
        y={0}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[2 - MIN_X][-MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={2}
        y={-1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[2 - MIN_X][1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={2}
        y={-2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[2 - MIN_X][2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={2}
        y={-3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[2 - MIN_X][3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>

      <Memory
        x={3}
        y={3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[3 - MIN_X][-3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={3}
        y={2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[3 - MIN_X][-2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={3}
        y={1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[3 - MIN_X][-1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={3}
        y={0}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[3 - MIN_X][-MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={3}
        y={-1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[3 - MIN_X][1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={3}
        y={-2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[3 - MIN_X][2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={3}
        y={-3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[3 - MIN_X][3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>

      <Memory
        x={4}
        y={3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[4 - MIN_X][-3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={4}
        y={2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[4 - MIN_X][-2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={4}
        y={1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[4 - MIN_X][-1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={4}
        y={0}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[4 - MIN_X][-MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={4}
        y={-1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[4 - MIN_X][1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={4}
        y={-2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[4 - MIN_X][2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={4}
        y={-3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[4 - MIN_X][3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>

      <Memory
        x={5}
        y={3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[5 - MIN_X][-3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={5}
        y={2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[5 - MIN_X][-2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={5}
        y={1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[5 - MIN_X][-1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={5}
        y={0}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[5 - MIN_X][-MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={5}
        y={-1}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[5 - MIN_X][1 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={5}
        y={-2}
        color={WHITE} highlightBrightnessFactor={WHITE_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[5 - MIN_X][2 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
      <Memory
        x={5}
        y={-3}
        color={RED} highlightBrightnessFactor={RED_HIGHLIGHT_BRIGHTNESS_FACTOR}
        paused={paused}
        highlighted={currentlyHighlighted[5 - MIN_X][3 - MIN_Y]}
        onClick={onMemoryClick} loading={loading}
      ></Memory>
    </group>
  );
}
