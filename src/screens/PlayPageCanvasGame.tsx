// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Page - Canvas Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasGameActionId = "start-game-1";

export interface PlayPageCanvasGameProps {
  actions?: {
    "start-game-1"?: () => void;
  };

}

export type PlayPageCanvasGameActionCallbacks = NonNullable<PlayPageCanvasGameProps["actions"]>;

export function PlayPageCanvasGame({ actions }: PlayPageCanvasGameProps) {
  return (
    <>
      {/* Root Surface: SURF_PLAY_PAGE */}
        <div data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col min-h-screen" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_GAME_STARTED_MESSAGE OBS_START_GAME_PLAY_ROUTE_RETAINED">
          
          {/* Top Navigation Chrome (Non-actionable decorative chrome) */}
          <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
                G
              </div>
              <div>
                <h1 className="text-lg font-semibold tracking-wide text-white">Canvas Game</h1>
                <p className="text-xs text-slate-400">Route: /play</p>
              </div>
            </div>
            
            {/* Status Indicators & Scoreboard */}
            <div className="flex items-center space-x-6">
              {/* High Score Status Observable */}
              <div className="flex items-center space-x-2 bg-slate-800/80 px-4 py-1.5 rounded-full border border-slate-700/60">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">High score</span>
                <span className="text-sm font-bold text-amber-400 tabular-nums" data-setfarm-element-ref="E000002" role="status" aria-label="High score" data-observable-refs="OBS_START_GAME_HIGH_SCORE_VALUE">0</span>
              </div>
      
              <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-800 text-xs text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                <span>Ready to Play</span>
              </div>
            </div>
          </header>
      
          {/* Main Content Area */}
          <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 flex flex-col items-center justify-center">
            
            {/* Game Container Card */}
            <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 flex flex-col items-center">
              
              {/* Header Controls & Status */}
              <div className="w-full flex items-center justify-between mb-4 pb-4 border-b border-slate-800/80">
                <div>
                  <h2 className="text-xl font-bold text-slate-100">Playfield</h2>
                  <p className="text-xs text-slate-400">Click start to launch the session</p>
                </div>
      
                <div className="flex items-center space-x-4">
                  {/* Hidden / Post-action notification observable placeholder */}
                  <div className="text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-md hidden">
                    Game started
                  </div>
      
                  {/* Single Physical Actionable Control: CSLOT_START_GAME_START_BUTTON */}
                  <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition-colors flex items-center space-x-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900" data-setfarm-element-ref="E000003" data-observable-refs="OBS_START_GAME_START_BUTTON_AVAILABILITY" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                    <span>Start Game</span>
                  </button>
                </div>
              </div>
      
              {/* Contained Surface: SURF_GAME_CANVAS */}
              <div data-surface-id="SURF_GAME_CANVAS" className="w-full aspect-[16/9] max-h-[520px] bg-slate-950 border border-slate-800/80 rounded-xl relative overflow-hidden flex flex-col items-center justify-center shadow-inner group" data-setfarm-element-ref="E000004">
                {/* Decorative Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
      
                {/* Canvas Placeholder Display */}
                <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-4">
                  <div className="h-16 w-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-inner">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={true}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-300">Canvas Surface Ready</p>
                    <p className="text-xs text-slate-500 max-w-xs mt-1">Press "Start Game" to begin the game loop</p>
                  </div>
                </div>
      
                {/* Decorative Game Canvas Frame Overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-slate-500 font-mono pointer-events-none select-none">
                  <span>RES: 1280x720</span>
                  <span>FPS: 60</span>
                </div>
              </div>
      
            </div>
      
          </main>
      
          {/* Footer Chrome (Non-actionable decorative text) */}
          <footer className="border-t border-slate-900 bg-slate-950/80 px-8 py-3 text-center text-xs text-slate-500">
            <p>Canvas Game © 2025. All rights reserved.</p>
          </footer>
      
        </div>
    </>
  );
}
