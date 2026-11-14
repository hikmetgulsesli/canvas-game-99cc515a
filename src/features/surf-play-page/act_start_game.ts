import { setRuntimeSnapshot } from "../../game/game-runtime";
import { writeHighScore } from "../prod-canvas-game/prod-canvas-game.repo";
import {
  DEFAULT_HIGH_SCORE,
  START_GAME_ACTION_REF,
  type ProdCanvasGameSnapshot,
} from "../prod-canvas-game/prod-canvas-game.types";

export interface StartGameOutcome {
  actionRef: string;
  snapshot: ProdCanvasGameSnapshot;
  persistedHighScore: number | null;
}

export function isStartGameAction(actionRef: string): boolean {
  return actionRef === START_GAME_ACTION_REF;
}

/**
 * ACT_START_GAME
 * - sets STATE_APPLICATION_STATE to "playing"
 * - sets STATE_HIGH_SCORE to 0
 * - writes ENTITY_HIGH_SCORE to PERSIST_HIGH_SCORE_LOCAL_STORAGE
 * - navigation: stay
 */
export function performStartGame(actionRef: string = START_GAME_ACTION_REF): StartGameOutcome {
  if (!isStartGameAction(actionRef)) {
    throw new Error(`UNSUPPORTED_ACTION:${actionRef}`);
  }

  const snapshot = setRuntimeSnapshot({
    applicationState: "playing",
    highScore: DEFAULT_HIGH_SCORE,
  });

  const persisted = writeHighScore(DEFAULT_HIGH_SCORE);

  return {
    actionRef,
    snapshot,
    persistedHighScore: persisted ? DEFAULT_HIGH_SCORE : null,
  };
}
