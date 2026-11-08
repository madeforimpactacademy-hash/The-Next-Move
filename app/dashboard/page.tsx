import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Download, LogOut } from "lucide-react";

type DashboardModule = [   moduleNumber: string,   title: string,   lesson: string,   done: boolean ];  const modules: DashboardModule[] = [
  ["01","Seeing Clearly","3 lessons",true],["02","Understanding Your Season","3 lessons",true],["03","Finding Your Direction","4 lessons",false],["04","Making the Move","3 lessons",false],["05","Building Your Execution System","4 lessons",false],["06","Becoming the Person Who Moves","3 lessons",false]
];

export default function Dashboard() {
  return <main className="appShell">
    <aside className="sidebar"><Link href="/" className="brand">THE NEXT MOVE<span>™</span></Link><div className="sideNav"><Link className="active" href="/dashboard">Overview</Link><Link href="/course">My course</Link><Link href="/workbook">Workbook</Link><Link href="/community">Community</Link><Link href="/profile">Profile</Link></div><Link href="/" className="logout"><LogOut size={16}/> Exit</Link></aside>
    <div className="appMain"><header className="appHeader"><div><div className="eyebrow">YOUR DASHBOARD</div><h1>Welcome back, Richwoman.</h1></div><div className="avatar">R</div></header>
      <section className="progressHero"><div><div className="eyebrow light">YOUR PROGRESS</div><h2>You're already moving.</h2><p>Keep going. Small, deliberate moves compound.</p></div><div className="progressCircle">28%</div></section>
      <section className="dashGrid"><div className="dashCard"><div className="cardTop"><BookOpen/><span>CONTINUE LEARNING</span></div><h2>Finding Your Direction</h2><p>Lesson 1: The difference between desire and direction.</p><Link href="/course/3/1" className="primaryButton">Continue <ArrowRight size={17}/></Link></div>
      <div className="dashCard"><div className="cardTop"><Download/><span>YOUR WORKBOOK</span></div><h2>Your Next Move Workbook</h2><p>Capture the thinking. Make the decisions. Build the plan.</p><Link href="/workbook" className="outlineButton">Open workbook <ArrowRight size={17}/></Link></div></section>
      <section className="courseProgress"><div className="sectionMini"><div><div className="eyebrow">COURSE MAP</div><h2>Your journey</h2></div><span>28% complete</span></div>{modules.map(([n,t,l,done])=><Link href={done ? `/course/${n.replace("0","")}/1` : "/course"} className="courseRow" key={n}><div className={"status "+(done?"done":"")}>{done?<CheckCircle2 size={18}/>:n}</div><div><strong>{t}</strong><small>{l}</small></div><ArrowRight size={18}/></Link>)}</section>
    </div>
  </main>
}
