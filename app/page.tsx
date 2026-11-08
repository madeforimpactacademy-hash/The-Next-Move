import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Sparkles, Target, Zap } from "lucide-react";

const outcomes = [
  { icon: Compass, title: "See clearly", text: "Understand what is really happening beneath the feeling of being stuck." },
  { icon: Target, title: "Choose deliberately", text: "Identify the direction that deserves your attention in this season." },
  { icon: Zap, title: "Move consistently", text: "Turn insight into practical action without waiting for perfect conditions." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <Link href="/" className="brand">THE NEXT MOVE<span>™</span></Link>
        <div className="navLinks">
          <Link href="/programme">Programme</Link>
          <Link href="/about">About</Link>
          <Link href="/login" className="navButton">Sign in</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="eyebrow"><span className="dot" /> CLARITY • DIRECTION • ACTION</div>
        <h1>You don't need another year of feeling stuck.</h1>
        <p className="heroLead">You need your next move.</p>
        <p className="heroText">
          The Next Move is a guided coaching programme for professionals who know there is more in them—but need clarity on what to do next and the structure to actually do it.
        </p>
        <div className="heroActions">
          <Link href="/programme" className="primaryButton">Explore the programme <ArrowRight size={18} /></Link>
          <Link href="/about" className="textButton">Meet your coach</Link>
        </div>
        <div className="heroNote"><Sparkles size={16} /> No reinvention theatre. Just clarity, direction and movement.</div>
      </section>

      <section className="section cream">
        <div className="sectionHeader">
          <div className="eyebrow">THE PROBLEM</div>
          <h2>Knowing you can do more is not the same as knowing what to do next.</h2>
          <p>Sometimes the problem isn't a lack of ability. It's too many options, too much noise, and no clear system for turning potential into movement.</p>
        </div>
        <div className="outcomes">
          {outcomes.map(({icon: Icon, title, text}) => (
            <div className="outcome" key={title}>
              <div className="iconBox"><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="split">
          <div>
            <div className="eyebrow light">THE NEXT MOVE METHOD</div>
            <h2>Confusion → Clarity → Direction → Action → Consistent Execution.</h2>
          </div>
          <div>
            <p className="largeText">This isn't about becoming a completely different person. It's about finally putting your attention, energy and capability behind the move that matters.</p>
            <Link href="/programme" className="outlineButton">See how it works <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader centered">
          <div className="eyebrow">WHAT YOU'LL BUILD</div>
          <h2>A clearer relationship with your next season.</h2>
        </div>
        <div className="checkGrid">
          {["A clear picture of where you are", "A defined direction worth pursuing", "A practical 90-day movement plan", "A personal execution rhythm", "Decision-making confidence", "A system for keeping promises to yourself"].map(item => (
            <div className="checkItem" key={item}><CheckCircle2 size={20}/><span>{item}</span></div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="eyebrow light">YOUR NEXT MOVE STARTS HERE</div>
        <h2>Stop circling the question.<br/>Start moving.</h2>
        <Link href="/programme" className="primaryButton creamButton">Explore The Next Move <ArrowRight size={18}/></Link>
      </section>

      <footer className="footer">
        <div><strong>THE NEXT MOVE™</strong><br/><span>People Builder | Clarity & Purpose Coach</span></div>
        <div className="footerLinks"><Link href="/programme">Programme</Link><Link href="/about">About</Link><Link href="/login">Student Login</Link></div>
        <div>© 2026 Ayomikun Oluwaseun Aluko</div>
      </footer>
    </main>
  );
}