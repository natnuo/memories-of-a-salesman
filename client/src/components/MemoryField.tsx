import Memory from "./Grave";

const RED = "#B31942", BLUE = "#0A3161", WHITE = "#FFFFFF";

export default function MemoryField({ paused }: { paused: boolean }) {
  return (
    <group position={[ 0, 0, -10 ]}>
      <Memory x={-5} y={3} color={BLUE} paused={paused}></Memory>
      <Memory x={-5} y={2} color={BLUE} paused={paused}></Memory>
      <Memory x={-5} y={1} color={BLUE} paused={paused}></Memory>
      <Memory x={-5} y={0} color={WHITE} paused={paused}></Memory>
      <Memory x={-5} y={-1} color={RED} paused={paused}></Memory>
      <Memory x={-5} y={-2} color={WHITE} paused={paused}></Memory>
      <Memory x={-5} y={-3} color={RED} paused={paused}></Memory>
      
      <Memory x={-4} y={3} color={BLUE} paused={paused}></Memory>
      <Memory x={-4} y={2} color={BLUE} paused={paused}></Memory>
      <Memory x={-4} y={1} color={BLUE} paused={paused}></Memory>
      <Memory x={-4} y={0} color={WHITE} paused={paused}></Memory>
      <Memory x={-4} y={-1} color={RED} paused={paused}></Memory>
      <Memory x={-4} y={-2} color={WHITE} paused={paused}></Memory>
      <Memory x={-4} y={-3} color={RED} paused={paused}></Memory>

      <Memory x={-3} y={3} color={BLUE} paused={paused}></Memory>
      <Memory x={-3} y={2} color={BLUE} paused={paused}></Memory>
      <Memory x={-3} y={1} color={BLUE} paused={paused}></Memory>
      <Memory x={-3} y={0} color={WHITE} paused={paused}></Memory>
      <Memory x={-3} y={-1} color={RED} paused={paused}></Memory>
      <Memory x={-3} y={-2} color={WHITE} paused={paused}></Memory>
      <Memory x={-3} y={-3} color={RED} paused={paused}></Memory>
        
      <Memory x={-2} y={3} color={BLUE} paused={paused}></Memory>
      <Memory x={-2} y={2} color={BLUE} paused={paused}></Memory>
      <Memory x={-2} y={1} color={BLUE} paused={paused}></Memory>
      <Memory x={-2} y={0} color={WHITE} paused={paused}></Memory>
      <Memory x={-2} y={-1} color={RED} paused={paused}></Memory>
      <Memory x={-2} y={-2} color={WHITE} paused={paused}></Memory>
      <Memory x={-2} y={-3} color={RED} paused={paused}></Memory>
      
      <Memory x={-1} y={3} color={RED} paused={paused}></Memory>
      <Memory x={-1} y={2} color={WHITE} paused={paused}></Memory>
      <Memory x={-1} y={1} color={RED} paused={paused}></Memory>
      <Memory x={-1} y={0} color={WHITE} paused={paused}></Memory>
      <Memory x={-1} y={-1} color={RED} paused={paused}></Memory>
      <Memory x={-1} y={-2} color={WHITE} paused={paused}></Memory>
      <Memory x={-1} y={-3} color={RED} paused={paused}></Memory>
        
      <Memory x={0} y={3} color={RED} paused={paused}></Memory>
      <Memory x={0} y={2} color={WHITE} paused={paused}></Memory>
      <Memory x={0} y={1} color={RED} paused={paused}></Memory>
      <Memory x={0} y={0} color={WHITE} paused={paused}></Memory>
      <Memory x={0} y={-1} color={RED} paused={paused}></Memory>
      <Memory x={0} y={-2} color={WHITE} paused={paused}></Memory>
      <Memory x={0} y={-3} color={RED} paused={paused}></Memory>
      
      <Memory x={1} y={3} color={RED} paused={paused}></Memory>
      <Memory x={1} y={2} color={WHITE} paused={paused}></Memory>
      <Memory x={1} y={1} color={RED} paused={paused}></Memory>
      <Memory x={1} y={0} color={WHITE} paused={paused}></Memory>
      <Memory x={1} y={-1} color={RED} paused={paused}></Memory>
      <Memory x={1} y={-2} color={WHITE} paused={paused}></Memory>
      <Memory x={1} y={-3} color={RED} paused={paused}></Memory>
      
      <Memory x={2} y={3} color={RED} paused={paused}></Memory>
      <Memory x={2} y={2} color={WHITE} paused={paused}></Memory>
      <Memory x={2} y={1} color={RED} paused={paused}></Memory>
      <Memory x={2} y={0} color={WHITE} paused={paused}></Memory>
      <Memory x={2} y={-1} color={RED} paused={paused}></Memory>
      <Memory x={2} y={-2} color={WHITE} paused={paused}></Memory>
      <Memory x={2} y={-3} color={RED} paused={paused}></Memory>
      
      <Memory x={3} y={3} color={RED} paused={paused}></Memory>
      <Memory x={3} y={2} color={WHITE} paused={paused}></Memory>
      <Memory x={3} y={1} color={RED} paused={paused}></Memory>
      <Memory x={3} y={0} color={WHITE} paused={paused}></Memory>
      <Memory x={3} y={-1} color={RED} paused={paused}></Memory>
      <Memory x={3} y={-2} color={WHITE} paused={paused}></Memory>
      <Memory x={3} y={-3} color={RED} paused={paused}></Memory>
      
      <Memory x={4} y={3} color={RED} paused={paused}></Memory>
      <Memory x={4} y={2} color={WHITE} paused={paused}></Memory>
      <Memory x={4} y={1} color={RED} paused={paused}></Memory>
      <Memory x={4} y={0} color={WHITE} paused={paused}></Memory>
      <Memory x={4} y={-1} color={RED} paused={paused}></Memory>
      <Memory x={4} y={-2} color={WHITE} paused={paused}></Memory>
      <Memory x={4} y={-3} color={RED} paused={paused}></Memory>
      
      <Memory x={5} y={3} color={RED} paused={paused}></Memory>
      <Memory x={5} y={2} color={WHITE} paused={paused}></Memory>
      <Memory x={5} y={1} color={RED} paused={paused}></Memory>
      <Memory x={5} y={0} color={WHITE} paused={paused}></Memory>
      <Memory x={5} y={-1} color={RED} paused={paused}></Memory>
      <Memory x={5} y={-2} color={WHITE} paused={paused}></Memory>
      <Memory x={5} y={-3} color={RED} paused={paused}></Memory>
    </group>
  );
}
