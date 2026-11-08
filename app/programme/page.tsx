import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const modules = [
  ["01", "SEEING CLEARLY", "Get honest about where you are, what is keeping you there, and what you actually want."],
  ["02", "UNDERSTANDING YOUR SEASON", "Read your current season with wisdom instead of comparing it with everybody else's timeline."],
  ["03", "FINDING YOUR DIRECTION", "Move from vague ambition to a direction you can name, test and pursue."],
  ["04", "MAKING THE MOVE", "Turn the decision into a practical plan with visible next steps."],
  ["05", "BUILDING YOUR EXECUTION SYSTEM", "Create rhythms, boundaries and accountability that make consistency easier."],
  ["06", "BECOMING THE PERSON WHO MOVES", "Build the identity and habits that allow movement to become your normal."],
];

export default function Programme() {
  return <main>
    <nav className="nav"><Link href="/" className="brand">THE NEXT MOVE<span>™</span></Link><div className="navLinks"><Link href="/about">About</Link><Link href="/login" className="navButton">Student Login</Link></div></nav>
    <section className="innerHero">
      <Link href="/" className="back"><ArrowLeft size={16}/> Back home</Link>
      <div className="eyebrow">THE PROGRAMME</div>
      <h1>A guided journey from stuck to moving.</h1>
      <p className="heroText">Six modules. Practical exercises. Reflection. Accountability. And one question that keeps coming back: <em>what is your next move?</em></p>
      <Link href="/register" className="primaryButton">Join The Next Move <ArrowRight size={18}/></Link>
    </section>
    <section className="section cream">
      <div className="moduleList">
        {modules.map(([num,title,text]) => <div className="moduleRow" key={num}><div className="moduleNum">{num}</div><div><h3>{title}</h3><p>{text}</p></div><ArrowRight size={20}/></div>)}
      </div>
    </section>
    <section className="section">
      <div className="split">
        <div><div className="eyebrow">YOU WILL LEAVE WITH</div><h2>More than inspiration.</h2></div>
        <div className="checkStack">{["A decision you can articulate", "A 90-day action plan", "A repeatable execution rhythm", "A clearer sense of what deserves your energy"].map(x=><div className="checkItem" key={x}><CheckCircle2 size={20}/>{x}</div>)}</div>
      </div>
    </section>
  </main>
}