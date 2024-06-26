import Sprite from "../object-graphics/Sprite";
 import { CELL_SIZE } from "../../Helpers/constant";
 export default function MapCell({ x, y, frameCoord }) {
   return (
     <div
       style={{
         position: "absolute",
         left: x * CELL_SIZE,
         top: y * CELL_SIZE,
       }}
     >
       <Sprite frameCoord={frameCoord}  />
     </div>
   );
 }