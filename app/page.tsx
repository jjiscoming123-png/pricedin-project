"use client";

import Logo from "@/components/Logo";

const PRICED_ITEMS = [
  "War in the Middle East", "Fed rate decision", "Alien contact",
  "Your student loans", "The next pandemic", "AI taking your job",
  "Your ex texting back", "Elon's next tweet", "Heat death of the universe",
  "Bitcoin at $1M", "The simulation breaking", "This token existing",
];

export default function Page() {
  return (
    <div className="scanlines">
      {/* ── TICKER TAPE ── */}
      <div className="fixed top-0 w-full z-50 bg-[var(--color-surface)] border-b border-[var(--color-border)] py-1.5 overflow-hidden">
        <div className="ticker text-[10px] text-[var(--color-green)]/50">
          {[...PRICED_ITEMS, ...PRICED_ITEMS].map((item, i) => (
            <span key={i} className="shrink-0">
              {item} <span className="text-[var(--color-green)]">✓ PRICED IN</span>
              <span className="mx-3 text-[var(--color-green)]/20">│</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── NAV ── */}
      <nav className="fixed top-7 w-full z-40 bg-[var(--color-bg)]/80 backdrop-blur-sm border-b border-[var(--color-border)] px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size={20} />
          <span className="text-[10px] font-semibold tracking-[0.2em] text-[var(--color-green)]/60">PRICEDIN</span>
        </div>
        <a href="https://x.com/PricedInToken" target="_blank" rel="noopener noreferrer"
          className="text-[10px] font-mono font-semibold text-black bg-[var(--color-green)] px-3 py-1 hover:bg-[var(--color-green-dim)] transition-colors">
          FOLLOW →
        </a>
      </nav>

      {/* ── HERO: Terminal Boot Screen ── */}
      <section className="min-h-[100svh] flex items-center justify-center px-6 pt-20 relative">
        {/* Matrix-style ambient glow */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[var(--color-green)]/[0.03] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-2xl w-full anim-up d1">
          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <div className="terminal-dot active" />
              <span className="text-[10px] text-[var(--color-green)]/40 ml-2 font-mono">pricedin.exe — market omniscience terminal</span>
            </div>
            <div className="terminal-body">
              <p className="text-[var(--color-green)]/40 mb-4">$ initializing market analysis...</p>
              <p className="text-[var(--color-green)]/40 mb-4">$ scanning all possible futures...</p>
              <p className="text-[var(--color-green)]/40 mb-6">$ result:</p>
              <h1 className="text-3xl md:text-5xl font-bold text-white glow mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                Everything is already<br />
                <span className="text-[var(--color-green)]">priced in.</span>
              </h1>
              <p className="text-[var(--color-muted)] text-sm mb-6">
                Your fear. Your hope. Your existence.<br />
                The market knew before you did.
              </p>
              <p className="text-[var(--color-green)]/60 text-xs cursor">
                &gt; status: CONFIRMED
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATUS BOARD ── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] text-[var(--color-green)]/40 tracking-[0.3em] uppercase mb-6">REAL-TIME ASSESSMENT</p>
          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dot active" />
              <span className="text-[10px] text-[var(--color-green)]/40 ml-2 font-mono">status_board.sh</span>
            </div>
            <div className="px-5 py-3">
              {PRICED_ITEMS.map((item, i) => (
                <div key={i} className="status-row">
                  <span className="text-[var(--color-text)]">{item}</span>
                  <span className="text-[var(--color-green)] font-semibold tracking-wider">✓ PRICED IN</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THESIS ── */}
      <section className="py-16 md:py-24 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-xl mx-auto space-y-12">
          <p className="text-[10px] text-[var(--color-green)]/40 tracking-[0.3em] uppercase mb-8">THE THESIS</p>
          {[
            { cmd: "$ explain --market-omniscience", title: "The market knows everything.", text: "Before you read the headline, the market already moved. Before you felt the fear, it was already priced in. You're not trading information — you're trading the echo of information." },
            { cmd: "$ explain --emotional-lag", title: "Your emotions are a lagging indicator.", text: "By the time you panic, the panic is over. By the time you feel hope, hope is already sold. The market front-runs your feelings like they're public filings." },
            { cmd: "$ explain --recursion", title: "Even this is priced in.", text: "You reading this? Priced in. You buying? Priced in. You thinking about whether this is priced in? Also priced in. The recursion never ends." },
            { cmd: "$ explain --meta", title: "The only honest thing in finance.", text: "Not a prediction. Not alpha. Just the cold truth that every possible outcome is already reflected in the price. Always has been." },
          ].map((item, i) => (
            <div key={i} className="group">
              <p className="text-[10px] text-[var(--color-green)]/30 mb-3 font-mono">{item.cmd}</p>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-green)] transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>{item.title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 px-6 border-t border-[var(--color-border)] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.02)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-lg mx-auto text-center relative z-10">
          <div className="terminal inline-block mb-8 px-6 py-3">
            <p className="text-xs text-[var(--color-green)]/40 font-mono">$ query "Is $PRICEDIN priced in?"</p>
            <p className="text-2xl font-bold text-white mt-2 glow" style={{ fontFamily: 'var(--font-sans)' }}>
              Yes. <span className="text-[var(--color-green)]">Even this.</span>
            </p>
          </div>
          <p className="text-sm text-[var(--color-muted)] mb-8">And yet here you are. Which means you already know what to do.</p>
          <a href="https://x.com/PricedInToken" target="_blank" rel="noopener noreferrer"
            className="inline-block text-xs font-mono font-semibold text-black bg-[var(--color-green)] px-6 py-3 hover:bg-[var(--color-green-dim)] transition-colors">
            ACKNOWLEDGE ✓ →
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[var(--color-border)] py-6 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size={14} />
          <span className="text-[9px] tracking-[0.2em] text-[var(--color-green)]/30">PRICEDIN</span>
        </div>
        <p className="text-[9px] text-[var(--color-green)]/15 font-mono">This message is also priced in.</p>
      </footer>
    </div>
  );
}
