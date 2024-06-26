import { useEffect } from "react";
import { SPRITE_SHEET_SRC } from "./Helpers/constant";
import RenderLevel from "./components/level-layout/RenderLevel";
import { useRecoilState } from "recoil";
import { spriteSheetImageAtom } from "./atoms/spriteSheetImageAtom";

function App() {
  const [spriteSheetImage, setSpriteSheetImage] = useRecoilState(spriteSheetImageAtom);

  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    image.onload = () => {
      setSpriteSheetImage(image);
    };
  },[setSpriteSheetImage]);

  if(!spriteSheetImage){
    return null;
  }

  return (
    <div>
    <RenderLevel />
    </div>
  );
}

export default App;
