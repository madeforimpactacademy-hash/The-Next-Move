import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Lock } from "lucide-react";

const modules = [
  ["01","Seeing Clearly","Get honest about where you are.",["The truth about stuck","The noise around you","Your current reality"]],
  ["02","Understanding Your Season","Read your season without comparison.",["What season are you in?","Capacity, constraints & context","What this season is asking of you"]],
  ["03","Finding Your Direction","Turn vague ambition into a direction.",["Desire vs direction","The intersection","Choosing what matters"]],
  ["04","Making the Move","Turn clarity into action.",["The decision","Your first 30 days","Build the runway"]],
  ["05","Building Your Execution System","Make consistency easier.",["Your personal operating rhythm","Boundaries & distractions","Accountability","The weekly reset"]],
  ["06","Becoming the Person Who Moves","Make movement part of who you are.",["Identity and evidence","Keeping promises to yourself","The next chapter"]]
];

export default function Course() { return <main className="appShell"><aside className="sidebar"><Link href="/" className="brand">THE NEXT MOVE<span>™</span></Link><div className="sideNav"><Link href="/dashboard">Overview</Link><Link className="active" href="/course">My course</Link><Link href="/workbook">Workbook</Link><Link href="/community">Community</Link><Link href="/profile">Profile</Link></div></aside><div className="appMain"><Link href="/dashboard" className="back"><ArrowLeft size={15}/> Dashboard</Link><div className="courseHead"><div><div className="eyebrow">THE NEXT MOVE</div><h1>Your course journey</h1><p>Work through each module in order. Don't rush the reflection.</p></div><div className="bigProgress">28%</div></div><div className="moduleCards">{modules.map(([n,t,desc,lessons],i)=><div className={"moduleCard "+(i>2?"locked":"")} key={n}><div className="moduleNumber">{n}</div><div className="moduleBody"><div className="moduleTag">{i<2?"COMPLETED":i===2?"IN PROGRESS":"UP NEXT"}</div><h2>{t}</h2><p>{desc}</p><div className="lessonLinks">{lessons.map((lesson,j)=><Link key={`${i}-${j}`} href={i<=2?`/course/${parseInt(n)}/${j+1}`:"#"} className={i>2?"disabled":""}>{i>2?<Lock size={14}/>:j<1&&i<2?<CheckCircle2 size={14}/>:<span className="lessonDot"/>}{lesson}<ArrowRight size={14}/></Link>)}</div></div></div>)}</div></div></main> }
