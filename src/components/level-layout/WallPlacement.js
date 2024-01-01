import { THEME_TILES_MAP } from "../../Helpers/constant";
import Placement from "../../classes/Placement"
import Sprite from "../object-graphics/Sprite"

export class WallPlacement extends Placement{

    isSolidForBody(_body){
        return true;
      }

    renderComponent(){
        const wallTileCoord = THEME_TILES_MAP[this.level.theme].WALL;
        return <Sprite frameCoord={wallTileCoord}/>;
    };
}