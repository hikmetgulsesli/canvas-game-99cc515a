import { useEffect } from "react";
import { PlayPageCanvasGame } from "./screens/PlayPageCanvasGame";
import {
  ProdCanvasGameProvider,
  useProdCanvasGame,
} from "./features/prod-canvas-game/prod-canvas-game.store";
import { installTestBridge } from "./test/bridge";

installTestBridge();

function PlayPageSurface() {
  const { snapshot, startGame } = useProdCanvasGame();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.pathname !== "/play") {
      window.history.replaceState({}, "", "/play");
    }
  }, []);

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="min-h-screen bg-slate-50 text-slate-950"
    >
      <PlayPageCanvasGame
        actions={{ "start-game-1": () => startGame() }}
        state={{
          applicationState: snapshot.applicationState,
          highScore: snapshot.highScore,
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <ProdCanvasGameProvider>
      <PlayPageSurface />
    </ProdCanvasGameProvider>
  );
}
