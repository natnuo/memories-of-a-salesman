import { useEffect, useState } from "react";
import Memory from "./Memory";

const
  RED = [179, 25, 66] as [number, number, number],
  BLUE = [10, 49, 97] as [number, number, number],
  WHITE = [255, 255, 255] as [number, number, number];

const MIN_X = -5, MAX_X = 5, MIN_Y = -3, MAX_Y = 3;

type MemoryFieldProps = {
  paused: boolean;
  highlights: number;
};

export type MemoryData = {

} | null;

const memoriesAvailable = {
  0: {},
  0.5: {}  // choose max lesser key
};

export default function MemoryField({ paused, highlights }: MemoryFieldProps) {
  const [currentlyHighlighted, setCurrentlyHighlighted] = useState<MemoryData[][]>(
    Array.from({ length: MAX_X - MIN_X + 1 }, () =>
      Array.from({ length: MAX_Y - MIN_Y + 1 }, () => null)
    )
  );  // using x, y

  useEffect(() => {
    let cntHighlighted = 0;
    for (let i=0;i<=MAX_X-MIN_X;i++) {
      for (let j=0;j<=MAX_Y-MIN_Y;j++) {
        cntHighlighted += +(currentlyHighlighted[i][j] !== null);
      }
    }

    while (highlights < cntHighlighted) {
      let randX = Math.random() * (MAX_X - MIN_X + 1);
    }
      setCurrentlyHighlighted(highlights);
  }, [highlights, currentlyHighlighted]);

  return (
    <group position={[ 0, 0, -10 ]}>
      <Memory x={-5} y={3} color={BLUE} paused={paused} highlighted={currentlyHighlighted[-5 - MIN_X][-3 - MIN_Y]}></Memory>
      <Memory x={-5} y={2} color={BLUE} paused={paused} highlighted={currentlyHighlighted[-5 - MIN_X][-2 - MIN_Y]}></Memory>
      <Memory x={-5} y={1} color={BLUE} paused={paused} highlighted={currentlyHighlighted[-5 - MIN_X][-1 - MIN_Y]}></Memory>
      <Memory x={-5} y={0} color={WHITE} paused={paused} highlighted={currentlyHighlighted[-5 - MIN_X][- MIN_Y]}></Memory>
      <Memory x={-5} y={-1} color={RED} paused={paused} highlighted={currentlyHighlighted[-5 - MIN_X][1 - MIN_Y]}></Memory>
      <Memory x={-5} y={-2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[-5 - MIN_X][2 - MIN_Y]}></Memory>
      <Memory x={-5} y={-3} color={RED} paused={paused} highlighted={currentlyHighlighted[-5 - MIN_X][3 - MIN_Y]}></Memory>
      
      <Memory x={-4} y={3} color={BLUE} paused={paused} highlighted={currentlyHighlighted[-4 - MIN_X][-3 - MIN_Y]}></Memory>
      <Memory x={-4} y={2} color={BLUE} paused={paused} highlighted={currentlyHighlighted[-4 - MIN_X][-2 - MIN_Y]}></Memory>
      <Memory x={-4} y={1} color={BLUE} paused={paused} highlighted={currentlyHighlighted[-4 - MIN_X][-1 - MIN_Y]}></Memory>
      <Memory x={-4} y={0} color={WHITE} paused={paused} highlighted={currentlyHighlighted[-4 - MIN_X][- MIN_Y]}></Memory>
      <Memory x={-4} y={-1} color={RED} paused={paused} highlighted={currentlyHighlighted[-4 - MIN_X][1 - MIN_Y]}></Memory>
      <Memory x={-4} y={-2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[-4 - MIN_X][2 - MIN_Y]}></Memory>
      <Memory x={-4} y={-3} color={RED} paused={paused} highlighted={currentlyHighlighted[-4 - MIN_X][3 - MIN_Y]}></Memory>

      <Memory x={-3} y={3} color={BLUE} paused={paused} highlighted={currentlyHighlighted[-3 - MIN_X][-3 - MIN_Y]}></Memory>
      <Memory x={-3} y={2} color={BLUE} paused={paused} highlighted={currentlyHighlighted[-3 - MIN_X][-2 - MIN_Y]}></Memory>
      <Memory x={-3} y={1} color={BLUE} paused={paused} highlighted={currentlyHighlighted[-3 - MIN_X][-1 - MIN_Y]}></Memory>
      <Memory x={-3} y={0} color={WHITE} paused={paused} highlighted={currentlyHighlighted[-3 - MIN_X][- MIN_Y]}></Memory>
      <Memory x={-3} y={-1} color={RED} paused={paused} highlighted={currentlyHighlighted[-3 - MIN_X][1 - MIN_Y]}></Memory>
      <Memory x={-3} y={-2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[-3 - MIN_X][2 - MIN_Y]}></Memory>
      <Memory x={-3} y={-3} color={RED} paused={paused} highlighted={currentlyHighlighted[-3 - MIN_X][3 - MIN_Y]}></Memory>
        
      <Memory x={-2} y={3} color={BLUE} paused={paused} highlighted={currentlyHighlighted[-2 - MIN_X][-3 - MIN_Y]}></Memory>
      <Memory x={-2} y={2} color={BLUE} paused={paused} highlighted={currentlyHighlighted[-2 - MIN_X][-2 - MIN_Y]}></Memory>
      <Memory x={-2} y={1} color={BLUE} paused={paused} highlighted={currentlyHighlighted[-2 - MIN_X][-1 - MIN_Y]}></Memory>
      <Memory x={-2} y={0} color={WHITE} paused={paused} highlighted={currentlyHighlighted[-2 - MIN_X][- MIN_Y]}></Memory>
      <Memory x={-2} y={-1} color={RED} paused={paused} highlighted={currentlyHighlighted[-2 - MIN_X][1 - MIN_Y]}></Memory>
      <Memory x={-2} y={-2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[-2 - MIN_X][2 - MIN_Y]}></Memory>
      <Memory x={-2} y={-3} color={RED} paused={paused} highlighted={currentlyHighlighted[-2 - MIN_X][3 - MIN_Y]}></Memory>
      
      <Memory x={-1} y={3} color={RED} paused={paused} highlighted={currentlyHighlighted[-1 - MIN_X][-3 - MIN_Y]}></Memory>
      <Memory x={-1} y={2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[-1 - MIN_X][-2 - MIN_Y]}></Memory>
      <Memory x={-1} y={1} color={RED} paused={paused} highlighted={currentlyHighlighted[-1 - MIN_X][-1 - MIN_Y]}></Memory>
      <Memory x={-1} y={0} color={WHITE} paused={paused} highlighted={currentlyHighlighted[-1 - MIN_X][- MIN_Y]}></Memory>
      <Memory x={-1} y={-1} color={RED} paused={paused} highlighted={currentlyHighlighted[-1 - MIN_X][1 - MIN_Y]}></Memory>
      <Memory x={-1} y={-2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[-1 - MIN_X][2 - MIN_Y]}></Memory>
      <Memory x={-1} y={-3} color={RED} paused={paused} highlighted={currentlyHighlighted[-1 - MIN_X][3 - MIN_Y]}></Memory>
        
      <Memory x={0} y={3} color={RED} paused={paused} highlighted={currentlyHighlighted[- MIN_X][-3 - MIN_Y]}></Memory>
      <Memory x={0} y={2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[- MIN_X][-2 - MIN_Y]}></Memory>
      <Memory x={0} y={1} color={RED} paused={paused} highlighted={currentlyHighlighted[- MIN_X][-1 - MIN_Y]}></Memory>
      <Memory x={0} y={0} color={WHITE} paused={paused} highlighted={currentlyHighlighted[- MIN_X][- MIN_Y]}></Memory>
      <Memory x={0} y={-1} color={RED} paused={paused} highlighted={currentlyHighlighted[- MIN_X][1 - MIN_Y]}></Memory>
      <Memory x={0} y={-2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[- MIN_X][2 - MIN_Y]}></Memory>
      <Memory x={0} y={-3} color={RED} paused={paused} highlighted={currentlyHighlighted[- MIN_X][3 - MIN_Y]}></Memory>
      
      <Memory x={1} y={3} color={RED} paused={paused} highlighted={currentlyHighlighted[1 - MIN_X][-3 - MIN_Y]}></Memory>
      <Memory x={1} y={2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[1 - MIN_X][-2 - MIN_Y]}></Memory>
      <Memory x={1} y={1} color={RED} paused={paused} highlighted={currentlyHighlighted[1 - MIN_X][-1 - MIN_Y]}></Memory>
      <Memory x={1} y={0} color={WHITE} paused={paused} highlighted={currentlyHighlighted[1 - MIN_X][- MIN_Y]}></Memory>
      <Memory x={1} y={-1} color={RED} paused={paused} highlighted={currentlyHighlighted[1 - MIN_X][1 - MIN_Y]}></Memory>
      <Memory x={1} y={-2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[1 - MIN_X][2 - MIN_Y]}></Memory>
      <Memory x={1} y={-3} color={RED} paused={paused} highlighted={currentlyHighlighted[1 - MIN_X][3 - MIN_Y]}></Memory>
      
      <Memory x={2} y={3} color={RED} paused={paused} highlighted={currentlyHighlighted[2 - MIN_X][-3 - MIN_Y]}></Memory>
      <Memory x={2} y={2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[2 - MIN_X][-2 - MIN_Y]}></Memory>
      <Memory x={2} y={1} color={RED} paused={paused} highlighted={currentlyHighlighted[2 - MIN_X][-1 - MIN_Y]}></Memory>
      <Memory x={2} y={0} color={WHITE} paused={paused} highlighted={currentlyHighlighted[2 - MIN_X][- MIN_Y]}></Memory>
      <Memory x={2} y={-1} color={RED} paused={paused} highlighted={currentlyHighlighted[2 - MIN_X][1 - MIN_Y]}></Memory>
      <Memory x={2} y={-2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[2 - MIN_X][2 - MIN_Y]}></Memory>
      <Memory x={2} y={-3} color={RED} paused={paused} highlighted={currentlyHighlighted[2 - MIN_X][3 - MIN_Y]}></Memory>
      
      <Memory x={3} y={3} color={RED} paused={paused} highlighted={currentlyHighlighted[3 - MIN_X][-3 - MIN_Y]}></Memory>
      <Memory x={3} y={2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[3 - MIN_X][-2 - MIN_Y]}></Memory>
      <Memory x={3} y={1} color={RED} paused={paused} highlighted={currentlyHighlighted[3 - MIN_X][-1 - MIN_Y]}></Memory>
      <Memory x={3} y={0} color={WHITE} paused={paused} highlighted={currentlyHighlighted[3 - MIN_X][- MIN_Y]}></Memory>
      <Memory x={3} y={-1} color={RED} paused={paused} highlighted={currentlyHighlighted[3 - MIN_X][1 - MIN_Y]}></Memory>
      <Memory x={3} y={-2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[3 - MIN_X][2 - MIN_Y]}></Memory>
      <Memory x={3} y={-3} color={RED} paused={paused} highlighted={currentlyHighlighted[3 - MIN_X][3 - MIN_Y]}></Memory>
      
      <Memory x={4} y={3} color={RED} paused={paused} highlighted={currentlyHighlighted[4 - MIN_X][-3 - MIN_Y]}></Memory>
      <Memory x={4} y={2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[4 - MIN_X][-2 - MIN_Y]}></Memory>
      <Memory x={4} y={1} color={RED} paused={paused} highlighted={currentlyHighlighted[4 - MIN_X][-1 - MIN_Y]}></Memory>
      <Memory x={4} y={0} color={WHITE} paused={paused} highlighted={currentlyHighlighted[4 - MIN_X][- MIN_Y]}></Memory>
      <Memory x={4} y={-1} color={RED} paused={paused} highlighted={currentlyHighlighted[4 - MIN_X][1 - MIN_Y]}></Memory>
      <Memory x={4} y={-2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[4 - MIN_X][2 - MIN_Y]}></Memory>
      <Memory x={4} y={-3} color={RED} paused={paused} highlighted={currentlyHighlighted[4 - MIN_X][3 - MIN_Y]}></Memory>
      
      <Memory x={5} y={3} color={RED} paused={paused} highlighted={currentlyHighlighted[5 - MIN_X][-3 - MIN_Y]}></Memory>
      <Memory x={5} y={2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[5 - MIN_X][-2 - MIN_Y]}></Memory>
      <Memory x={5} y={1} color={RED} paused={paused} highlighted={currentlyHighlighted[5 - MIN_X][-1 - MIN_Y]}></Memory>
      <Memory x={5} y={0} color={WHITE} paused={paused} highlighted={currentlyHighlighted[5 - MIN_X][- MIN_Y]}></Memory>
      <Memory x={5} y={-1} color={RED} paused={paused} highlighted={currentlyHighlighted[5 - MIN_X][1 - MIN_Y]}></Memory>
      <Memory x={5} y={-2} color={WHITE} paused={paused} highlighted={currentlyHighlighted[5 - MIN_X][2 - MIN_Y]}></Memory>
      <Memory x={5} y={-3} color={RED} paused={paused} highlighted={currentlyHighlighted[5 - MIN_X][3 - MIN_Y]}></Memory>
    </group>
  );
}
