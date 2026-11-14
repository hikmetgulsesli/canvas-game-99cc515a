import {
  DEFAULT_HIGH_SCORE,
  type ProdCanvasGameSnapshot,
} from "../features/prod-canvas-game/prod-canvas-game.types";

export const INITIAL_PROD_CANVAS_GAME_SNAPSHOT: ProdCanvasGameSnapshot = {
  applicationState: "ready",
  highScore: null,
};

export function createInitialProdCanvasGameSnapshot(
  persistedHighScore: number | null,
): ProdCanvasGameSnapshot {
  return {
    applicationState: "ready",
    highScore: persistedHighScore ?? null,
  };
}

export const PROD_CANVAS_GAME_FIXTURE = {
  defaultHighScore: DEFAULT_HIGH_SCORE,
  initialSnapshot: INITIAL_PROD_CANVAS_GAME_SNAPSHOT,
};
