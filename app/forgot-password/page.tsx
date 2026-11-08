import Link from "next/link";
export default function ForgotPassword() {
  return <main className="authPage"><div className="authCard">
    <Link href="/" className="brand">THE NEXT MOVE<span>™</span></Link>
    <div className="eyebrow">ACCOUNT ACCESS</div><h1>Reset your password.</h1><p>Enter your email and we'll send you a reset link.</p>
    <form className="form"><label>Email<input type="email" placeholder="you@example.com" required /></label><button className="primaryButton full">Send reset link</button></form>
    <Link href="/login" className="smallLink">Back to sign in</Link>
  </div></main>
}