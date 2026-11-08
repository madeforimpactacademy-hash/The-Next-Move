import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function About() {
  return <main>
    <nav className="nav"><Link href="/" className="brand">THE NEXT MOVE<span>™</span></Link><div className="navLinks"><Link href="/programme">Programme</Link><Link href="/login" className="navButton">Sign in</Link></div></nav>
    <section className="innerHero">
      <Link href="/" className="back"><ArrowLeft size={16}/> Back home</Link>
      <div className="eyebrow">YOUR COACH</div>
      <h1>Meet Ayomikun.</h1>
      <p className="heroText">People Builder. Clarity & Purpose Coach. University administrator. Lifelong student of what helps people move from potential to purposeful action.</p>
    </section>
    <section className="section cream">
      <div className="aboutGrid">
        <div className="portraitPlaceholder"><span>AOA</span></div>
        <div>
          <div className="eyebrow">WHY THIS WORK</div>
          <h2>Because potential without direction can become a very sophisticated form of procrastination.</h2>
          <p>I have spent years working with people who are capable, responsible and intelligent—but somehow know they are not fully using what they carry.</p>
          <p>The Next Move grew from that observation: sometimes people do not need another motivational speech. They need a clearer picture of themselves, a better question, a decision, and a structure that makes movement easier.</p>
          <p>That is the work here.</p>
          <Link href="/programme" className="primaryButton">Explore the programme <ArrowRight size={18}/></Link>
        </div>
      </div>
    </section>
  </main>
}