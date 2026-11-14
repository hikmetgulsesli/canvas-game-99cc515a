import { createInitialProdCanvasGameSnapshot } from "../__fixtures__/prod-canvas-game.fixture";
import { readHighScore } from "../features/prod-canvas-game/prod-canvas-game.repo";
import type { ProdCanvasGameSnapshot } from "../features/prod-canvas-game/prod-canvas-game.types";

const listeners = new Set<() => void>();

let snapshot: ProdCanvasGameSnapshot = createInitialProdCanvasGameSnapshot(null);

export function getRuntimeSnapshot(): ProdCanvasGameSnapshot {
  return snapshot;
}

export function subscribeRuntime(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function setRuntimeSnapshot(next: ProdCanvasGameSnapshot): ProdCanvasGameSnapshot {
  snapshot = next;
  for (const listener of Array.from(listeners)) listener();
  return snapshot;
}

export function hydrateRuntimeSnapshot(): ProdCanvasGameSnapshot {
  return setRuntimeSnapshot(createInitialProdCanvasGameSnapshot(readHighScore()));
}

hydrateRuntimeSnapshot();
