import {
  PLACEMENT_TYPE_FLOUR,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_WALL,
  PLACEMENT_TYPE_CELEBRATION
} from "../Helpers/constant";
import { WallPlacement } from "../components/level-layout/WallPlacement";
import { FlourPlacement } from "./FlourPlacement";
import { GoalPlacement } from "./GoalPlacement";
import { HeroPlacement } from "./HeroPlacement";
import {CelebrationPlacement} from "./CelebrationPlacement"
const placementTypeClassMap = {
  [PLACEMENT_TYPE_HERO]: HeroPlacement,
  [PLACEMENT_TYPE_GOAL]: GoalPlacement,
  [PLACEMENT_TYPE_WALL]: WallPlacement,
  [PLACEMENT_TYPE_FLOUR]: FlourPlacement,
  [PLACEMENT_TYPE_CELEBRATION]: CelebrationPlacement,
};

class PlacementFactory {
  createPLacement(config, level) {
    const placementClass = placementTypeClassMap[config.type];
     if (!placementClass) {
       console.warn("NO TYPE FOUND", config.type);
     }
     // Generate a new instance with random ID
     const instance = new placementClass(config, level);
     instance.id = Math.floor(Math.random() * 9999999) + 1;
     return instance;
  }
}

export const placementFactory = new PlacementFactory();
