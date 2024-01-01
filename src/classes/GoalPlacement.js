import Placement from "./Placement";
import Sprite from "../components/object-graphics/Sprite"
import { TILES } from "../Helpers/tiles";
import { PLACEMENT_TYPE_FLOUR } from "../Helpers/constant";

export class GoalPlacement extends Placement {
    get isDisabled() {
        const nonCollectedFlour = this.level.placements.find((p) => {
          return p.type === PLACEMENT_TYPE_FLOUR && !p.hasBeenCollected;
        });
        return Boolean(nonCollectedFlour);
      }
    
      completesLevelOnCollide() {
        return !this.isDisabled;
      }
    
      renderComponent(){
        return (
            <Sprite
              frameCoord={this.isDisabled ? TILES.GOAL_DISABLED : TILES.GOAL_ENABLED}
            />
          );
    }
}