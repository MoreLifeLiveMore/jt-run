import {
    LEVEL_THEMES,
    PLACEMENT_TYPE_FLOUR,
    PLACEMENT_TYPE_GOAL,
    PLACEMENT_TYPE_HERO,
    PLACEMENT_TYPE_WALL,
  } from "../Helpers/constant";
  
  const level = {
    theme: LEVEL_THEMES.BLUE,
    tilesWidth: 8,
    tilesHeight: 8,
    placements: [
      { x: 5, y: 8, type: PLACEMENT_TYPE_HERO },
      { x: 8, y: 1, type: PLACEMENT_TYPE_GOAL },
      { x: 1, y: 1, type: PLACEMENT_TYPE_WALL },
      { x: 2, y: 2, type: PLACEMENT_TYPE_WALL },
      { x: 3, y: 3, type: PLACEMENT_TYPE_WALL },
      { x: 4, y: 2, type: PLACEMENT_TYPE_WALL },
      { x: 6, y: 1, type: PLACEMENT_TYPE_WALL },
      { x: 7, y: 2, type: PLACEMENT_TYPE_WALL },
      { x: 8, y: 5, type: PLACEMENT_TYPE_WALL },
      { x: 3, y: 7, type: PLACEMENT_TYPE_WALL },
      { x: 5, y: 5, type: PLACEMENT_TYPE_WALL },
      { x: 1, y: 6, type: PLACEMENT_TYPE_WALL },
      { x: 5, y: 7, type: PLACEMENT_TYPE_FLOUR },
      { x: 4, y: 6, type: PLACEMENT_TYPE_FLOUR },
      { x: 3, y: 8, type: PLACEMENT_TYPE_FLOUR },
    ],
  };
  
  export default level;