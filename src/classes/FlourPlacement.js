import Placement from "./Placement";
import { TILES } from "../Helpers/tiles";
import ElevatedSprite from "../components/object-graphics/ElevateSprite";
import { PLACEMENT_TYPE_FLOUR } from "../Helpers/constant";

export class FlourPlacement extends Placement{

    addsItemToInventoryOnCollide(){
        return PLACEMENT_TYPE_FLOUR;
    }
    renderComponent(){
        return <ElevatedSprite frameCoord={TILES.FLOUR} />;
    }
}