"use client";

import Logo from "@/components/Logo";

const PRICED_IN_ITEMS = [
  "War in the Middle East",
  "Fed rate decision",
  "Your student loans",
  "Alien contact",
  "The heat death of the universe",
  "Your ex texting back",
  "AI taking your job",
  "The next pandemic",
  "Bitcoin at $1M",
  "Your existential crisis",
  "Elon's next tweet",
  "The simulation breaking",
];

const MANIFESTO = [
  {
    num: "01",
    title: "The market knows everything",
    text: "Before you read the headline, the market already moved. Before you felt the fear, it was already priced in. You are not trading information — you are trading the echo of information.",
  },
  {
    num: "02",
    title: "Your emotions are a lagging indicator",
    text: "By the time you panic, the panic is over. By the time you feel hope, hope is already sold. The market front-runs your feelings like they're public filings.",
  },
  {
    num: "03",
    title: "Everything is already priced in",
    text: "This is not a joke. This is not a meme. This is the most honest thing anyone has ever said in finance. Every outcome, every scenario, every apocalypse — already in the price.",
  },
  {
    num: "04",
    title: "Even this is priced in",
    text: "You reading this? Priced in. You buying? Priced in. You thinking about whether this is priced in? Also priced in. The recursion never ends.",
  },
];

export default function Home() {
  return (
    <>
      <div className="scanlines" />

      {/* Ticker Tape */}
      <div className="fixed top-0 w-full z-50 bg-[#39ff14]/10 border-b border-[#39ff14]/20 py-1 overflow-hidden">
        <div className="ticker-tape flex gap-8 text-xs font-mono text-[#39ff14]/70">
          {[...PRICED_IN_ITEMS, ...PRICED_IN_ITEMS].map((item, i) => (
            <span key={i} className="shrink-0">
              {item} <span className="text-[#39ff14]/30">— PRICED IN ✓</span>
              <span className="mx-4 text-[#39ff14]/20">│</span>
            </span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav className="fixed top-8 w-full z-40 backdrop-blur-md bg-[#0f0f1a]/80 border-b border-[#39ff14]/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size={28} />
            <span className="font-mono font-bold text-sm text-[#39ff14]/80 tracking-wider">PRICEDIN</span>
          </div>
          <a href="https://x.com/PricedInToken" target="_blank" rel="noopener noreferrer"
            className="text-xs font-mono px-4 py-1.5 border border-[#39ff14]/30 text-[#39ff14]/80 hover:bg-[#39ff14]/10 transition-all">
            Follow →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="fade-up fade-up-1 font-mono text-xs text-[#39ff14]/50 tracking-[0.4em] mb-6">
            &gt; MARKET_STATUS: OMNISCIENT
          </p>
          <h1 className="fade-up fade-up-2 text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            <span className="text-white">Everything is</span>
            <br />
            <span className="text-[#39ff14] glow-text">already priced in</span>
          </h1>
          <p className="fade-up fade-up-3 font-mono text-sm text-[#a0a0b0] max-w-lg mx-auto leading-relaxed mb-10">
            Your fear. Your hope. Your existence.
            <br />
            The market knew before you did.
            <span className="cursor-blink" />
          </p>
          <div className="fade-up fade-up-4">
            <a href="https://x.com/PricedInToken" target="_blank" rel="noopener noreferrer"
              className="inline-block font-mono text-sm px-8 py-3 bg-[#39ff14] text-black font-bold hover:bg-[#39ff14]/90 transition-all">
              ACKNOWLEDGE →
            </a>
          </div>
        </div>
      </section>

      {/* Status Board */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="section-divider mb-16" />
          <p className="text-center font-mono text-xs text-[#39ff14]/40 tracking-[0.3em] mb-4">
            &gt; REAL_TIME_STATUS
          </p>
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-12 tracking-tight">
            Current Market Assessment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {PRICED_IN_ITEMS.map((item, i) => (
              <div key={i} className="terminal-card rounded px-4 py-3 flex items-center justify-between">
                <span className="text-xs text-[#a0a0b0]">{item}</span>
                <span className="text-xs text-[#39ff14] font-bold tracking-wider">PRICED IN ✓</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-16" />
          <p className="text-center font-mono text-xs text-[#39ff14]/40 tracking-[0.3em] mb-4">
            &gt; PROTOCOL_MANIFESTO
          </p>
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-16 tracking-tight">
            The Priced In Thesis
          </h2>
          <div className="space-y-12">
            {MANIFESTO.map((m) => (
              <div key={m.num} className="group">
                <div className="flex items-start gap-6">
                  <span className="font-mono text-[#39ff14]/30 text-xs mt-1 shrink-0">{m.num}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#39ff14] transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-sm text-[#a0a0b0] leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-divider mb-16" />
          <div className="terminal-card glow-border rounded-lg p-12">
            <p className="font-mono text-xs text-[#39ff14]/50 mb-4">&gt; QUERY: Is $PRICEDIN priced in?</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Yes. <span className="text-[#39ff14]">Even this.</span>
            </h2>
            <p className="text-sm text-[#a0a0b0] mb-8">
              And yet here you are. Which means you already know what to do.
            </p>
            <a href="https://x.com/PricedInToken" target="_blank" rel="noopener noreferrer"
              className="inline-block font-mono text-sm px-10 py-3 bg-[#39ff14] text-black font-bold hover:bg-[#39ff14]/90 transition-all">
              IT WAS ALWAYS PRICED IN →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#39ff14]/10 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo size={18} />
            <span className="font-mono text-xs text-[#39ff14]/40">PRICEDIN</span>
          </div>
          <p className="font-mono text-[10px] text-[#39ff14]/20">
            This message is also priced in.
          </p>
          <a href="https://x.com/PricedInToken" target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-[#a0a0b0]/50 hover:text-[#39ff14] transition-colors">𝕏</a>
        </div>
      </footer>
    </>
  );
}
