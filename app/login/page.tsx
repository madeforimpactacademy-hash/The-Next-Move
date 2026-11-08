import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  return <main className="authPage">
    <div className="authCard">
      <Link href="/" className="brand">THE NEXT MOVE<span>™</span></Link>
      <div className="eyebrow">WELCOME BACK</div>
      <h1>Ready for your next move?</h1>
      <p>Sign in to continue your journey.</p>
      <form className="form" action="/dashboard">
        <label>Email<input type="email" placeholder="you@example.com" required /></label>
        <label>Password<input type="password" placeholder="••••••••" required /></label>
        <button className="primaryButton full">Sign in</button>
      </form>
      <Link href="/forgot-password" className="smallLink">Forgot your password?</Link>
      <div className="divider"><span>New here?</span></div>
      <Link href="/register" className="outlineButton full">Create an account</Link>
      <Link href="/" className="back"><ArrowLeft size={15}/> Back home</Link>
    </div>
  </main>
}