import { HIGH_SCORE_STORAGE_KEY } from "./prod-canvas-game.types";

function getStorage(): Storage | null {
  try {
    if (typeof window === "undefined") return null;
    const storage = window.localStorage;
    return storage ?? null;
  } catch {
    return null;
  }
}

export function readHighScore(): number | null {
  const storage = getStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(HIGH_SCORE_STORAGE_KEY);
    if (raw === null) return null;
    const parsed = Number(raw);
    return Number.isFinite(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function writeHighScore(value: number): boolean {
  const storage = getStorage();
  if (!storage) return false;
  try {
    storage.setItem(HIGH_SCORE_STORAGE_KEY, String(value));
    return true;
  } catch {
    return false;
  }
}

export function clearHighScore(): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.removeItem(HIGH_SCORE_STORAGE_KEY);
  } catch {
    /* persistence is best effort */
  }
}
