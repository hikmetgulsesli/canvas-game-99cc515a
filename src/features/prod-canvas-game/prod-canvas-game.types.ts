export const HIGH_SCORE_STORAGE_KEY = "setfarm.canvas_game.high_score_local_storage.v1";

export const START_GAME_ACTION_REF = "ACT_START_GAME";

export const DEFAULT_HIGH_SCORE = 0;

export type ApplicationStateKind = "ready" | "playing";

export interface ProdCanvasGameSnapshot {
  applicationState: ApplicationStateKind;
  highScore: number | null;
}

export interface ProdCanvasGameViewState {
  applicationState: ApplicationStateKind;
  highScore: number | null;
}
