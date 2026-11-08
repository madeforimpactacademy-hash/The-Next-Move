import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Download, PlayCircle } from "lucide-react";

export default async function Lesson({ params }: { params: Promise<{module:string; lesson:string}> }) {
  const {module, lesson} = await params;
  return <main className="appShell"><aside className="sidebar"><Link href="/" className="brand">THE NEXT MOVE<span>™</span></Link><div className="sideNav"><Link href="/dashboard">Overview</Link><Link className="active" href="/course">My course</Link><Link href="/workbook">Workbook</Link><Link href="/community">Community</Link><Link href="/profile">Profile</Link></div></aside><div className="appMain lessonPage">
    <Link href="/course" className="back"><ArrowLeft size={15}/> Course</Link>
    <div className="lessonMeta"><span>MODULE {module}</span><span>LESSON {lesson}</span><span>~18 MIN</span></div>
    <h1>The difference between desire and direction.</h1>
    <p className="lessonIntro">You can want something deeply and still have no clear direction for pursuing it. Today, we separate the two.</p>
    <div className="videoPlaceholder"><PlayCircle size={58}/><span>Lesson video / audio player</span><small>Replace this placeholder with your course media.</small></div>
    <article className="lessonContent"><h2>Start here.</h2><p>There is a particular kind of frustration that comes from knowing you want more but being unable to articulate what “more” actually means.</p><p>Desire is a signal. Direction is a decision about where that signal deserves your attention.</p><blockquote>Clarity is not having every answer. It is knowing what deserves your next honest step.</blockquote><h2>Reflect</h2><div className="reflection"><p>What have you been saying you want that you have not yet given a direction?</p><textarea placeholder="Write your reflection here..." rows={5}/></div><h2>Your Next Move</h2><div className="nextMoveBox"><CheckCircle2 size={24}/><div><strong>Choose one thing.</strong><p>Write one sentence describing the direction you are willing to explore for the next 90 days.</p></div></div><button className="primaryButton">I've made my move <CheckCircle2 size={17}/></button><a className="downloadLink"><Download size={16}/> Download lesson worksheet</a></article>
    <div className="lessonNav"><Link href="/course"><ArrowLeft size={17}/> Previous</Link><Link href="/course">Back to module <ArrowRight size={17}/></Link><Link href="/course">Next lesson <ArrowRight size={17}/></Link></div>
  </div></main>
}