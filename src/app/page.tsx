// src/app/page.tsx

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-zinc-100">
      <div className="max-w-2xl px-4 text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          AIFlow Labs — Exec Domain
        </h1>
        <p className="text-sm md:text-base text-zinc-400">
          This frontend is reserved for the executive layer of AI Digest:
          Constitution access, Reconstruction Logs, Audit Matrix and Core Control tools.
        </p>
        <p className="text-xs text-zinc-500">
          Main public site: aiflowlabs.studio · Exec channel: exec.aiflowlabs.studio
          Main public site: aiflowlabs.studio · Exec channel: exec.aiflowlabs.studio
        </p>
      </div>
    </main>
  );
}
