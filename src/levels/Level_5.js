import {
    LEVEL_THEMES,
    PLACEMENT_TYPE_FLOUR,
    PLACEMENT_TYPE_GOAL,
    PLACEMENT_TYPE_HERO,
    PLACEMENT_TYPE_WALL,
  } from "../Helpers/constant";
  
  const level = {
    theme: LEVEL_THEMES.GRAY,
    tilesWidth: 9,
    tilesHeight: 10,
    placements: [
      { x: 2, y: 2, type: PLACEMENT_TYPE_HERO },
      { x: 5, y: 6, type: PLACEMENT_TYPE_GOAL },
      { x: 4, y: 6, type: PLACEMENT_TYPE_WALL },
      { x: 4, y: 5, type: PLACEMENT_TYPE_WALL },
      { x: 4, y: 4, type: PLACEMENT_TYPE_WALL },
      { x: 4, y: 3, type: PLACEMENT_TYPE_WALL },
      { x: 4, y: 2, type: PLACEMENT_TYPE_WALL },
      { x: 5, y: 7, type: PLACEMENT_TYPE_WALL },
      { x: 6, y: 6, type: PLACEMENT_TYPE_WALL },
      { x: 6, y: 5, type: PLACEMENT_TYPE_WALL },
      { x: 6, y: 4, type: PLACEMENT_TYPE_WALL },
      { x: 6, y: 3, type: PLACEMENT_TYPE_WALL },
      { x: 6, y: 2, type: PLACEMENT_TYPE_WALL },
      { x: 1, y: 1, type: PLACEMENT_TYPE_FLOUR },
      { x: 1, y: 10, type: PLACEMENT_TYPE_FLOUR },
      { x: 9, y: 1, type: PLACEMENT_TYPE_FLOUR },
      { x: 9, y: 10, type: PLACEMENT_TYPE_FLOUR },
    ],
  };
  
  export default level;