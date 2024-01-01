import { TILES } from "../../Helpers/tiles";
import Sprite from "../object-graphics/Sprite";
import styles from "./Hero.module.css"

export default function Hero({frameCoord, yTranslate}) {
    return (
      <div className={styles.hero} style={{
        transform: `translateY(${yTranslate}px)`,
      }}>
        <div>
          <Sprite frameCoord={TILES.SHADOW} />
        </div>
        <div className={styles.heroBody}>
          <Sprite frameCoord={frameCoord} size={32} />
        </div>
      </div>
    );
  }