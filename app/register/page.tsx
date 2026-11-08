import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Register() {
  return <main className="authPage"><div className="authCard">
    <Link href="/" className="brand">THE NEXT MOVE<span>™</span></Link>
    <div className="eyebrow">START MOVING</div><h1>Create your account.</h1><p>Your next chapter needs somewhere to begin.</p>
    <form className="form" action="/dashboard">
      <label>Full name<input type="text" placeholder="Your name" required /></label>
      <label>Email<input type="email" placeholder="you@example.com" required /></label>
      <label>Password<input type="password" placeholder="Create a password" required /></label>
      <button className="primaryButton full">Create account</button>
    </form>
    <p className="smallText">Already enrolled? <Link href="/login">Sign in</Link></p>
    <Link href="/" className="back"><ArrowLeft size={15}/> Back home</Link>
  </div></main>
}