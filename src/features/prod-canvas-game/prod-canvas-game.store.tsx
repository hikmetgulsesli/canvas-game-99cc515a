import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { performStartGame } from "../surf-play-page/act_start_game";
import { getRuntimeSnapshot, subscribeRuntime } from "../../game/game-runtime";
import type { ProdCanvasGameSnapshot } from "./prod-canvas-game.types";

export interface ProdCanvasGameStoreValue {
  snapshot: ProdCanvasGameSnapshot;
  startGame: () => void;
}

const ProdCanvasGameStoreContext = createContext<ProdCanvasGameStoreValue | null>(null);

export function ProdCanvasGameProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribeRuntime,
    getRuntimeSnapshot,
    getRuntimeSnapshot,
  );

  const value = useMemo<ProdCanvasGameStoreValue>(
    () => ({
      snapshot,
      startGame: () => {
        performStartGame();
      },
    }),
    [snapshot],
  );

  return (
    <ProdCanvasGameStoreContext.Provider value={value}>
      {children}
    </ProdCanvasGameStoreContext.Provider>
  );
}

export function useProdCanvasGame(): ProdCanvasGameStoreValue {
  const value = useContext(ProdCanvasGameStoreContext);
  if (!value) {
    throw new Error("PROD_CANVAS_GAME_STORE_MISSING");
  }
  return value;
}
