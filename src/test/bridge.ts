import { performStartGame } from "../features/surf-play-page/act_start_game";
import { getRuntimeSnapshot } from "../game/game-runtime";

export const TEST_BRIDGE_GLOBAL = "__SETFARM_TEST_BRIDGE__";
export const SCENARIO_MODE_GLOBAL = "__SETFARM_SCENARIO_MODE__";
export const SCENARIO_MODE_VALUE = "manual";

export interface SetfarmBridgeStates {
  STATE_APPLICATION_STATE: string;
  STATE_HIGH_SCORE: number | null;
}

export interface SetfarmTestBridge {
  readonly states: SetfarmBridgeStates;
  invokeAction(
    target: string | { actionRef?: string; action?: string },
    payload?: unknown,
  ): unknown;
}

type BridgeTarget = string | { actionRef?: string; action?: string };

function resolveActionRef(target: BridgeTarget): string {
  if (typeof target === "string") return target;
  return target?.actionRef ?? target?.action ?? "";
}

export function createTestBridge(): SetfarmTestBridge {
  const bridge: SetfarmTestBridge = {
    get states(): SetfarmBridgeStates {
      const snapshot = getRuntimeSnapshot();
      return {
        STATE_APPLICATION_STATE: snapshot.applicationState,
        STATE_HIGH_SCORE: snapshot.highScore,
      };
    },
    invokeAction(target: BridgeTarget): unknown {
      const actionRef = resolveActionRef(target);
      return performStartGame(actionRef);
    },
  };
  return bridge;
}

export function installTestBridge(): SetfarmTestBridge | null {
  if (typeof window === "undefined") return null;
  const bridge = createTestBridge();
  (window as unknown as Record<string, unknown>)[TEST_BRIDGE_GLOBAL] = bridge;
  (window as unknown as Record<string, unknown>)[SCENARIO_MODE_GLOBAL] = SCENARIO_MODE_VALUE;
  return bridge;
}
