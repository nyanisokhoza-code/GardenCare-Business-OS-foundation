import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { signOut } from "@/app/auth/actions";

export default async function Dashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  return <div className="shell"><aside className="sidebar"><div className="brand"><div className="brand-mark">G</div><div><h1>GardenCare</h1><small>Business OS</small></div></div><nav className="nav">
    <Link className="active" href="/dashboard">Dashboard</Link><Link href="/garden-scan">GardenScan AI</Link><Link href="/pricing">Pricing</Link>
    <Link href="#">Customers</Link><Link href="#">Quotes & Invoices</Link><Link href="#">Jobs</Link><Link href="#">Employees</Link><Link href="#">Recruitment</Link><Link href="#">Training</Link><Link href="#">Financials</Link><Link href="#">Reports</Link><Link href="#">AI Centre</Link><Link href="#">Developer / Admin</Link>
  </nav></aside><main className="main"><header className="topbar"><h2>Operations Dashboard</h2><form action={signOut}><button className="btn secondary">Sign out</button></form></header><section className="content">
    <div className="hero"><div><div className="eyebrow">Authenticated workspace</div><h3>Welcome to GardenCare.</h3><p>You are signed in as {user.email}.</p></div><Link className="btn primary" href="/garden-scan">Start GardenScan</Link></div>
    <div className="grid grid-4"><div className="card"><div className="metric-label">Active customers</div><div className="metric-value">0</div></div><div className="card"><div className="metric-label">Open jobs</div><div className="metric-value">0</div></div><div className="card"><div className="metric-label">Quotes this month</div><div className="metric-value">0</div></div><div className="card"><div className="metric-label">Revenue</div><div className="metric-value">R0</div></div></div>
    <div className="section-title"><h3>Production modules</h3></div><div className="grid grid-3">{[["GardenScan AI","Multi-source measurement and material estimation.","/garden-scan"],["Pricing Engine","Database-backed costs, margins and quote recommendations.","/pricing"],["Financials","Revenue, expenses, payroll and transaction reconciliation.","#"]].map(([title,desc,href])=><Link key={title} href={href} style={{textDecoration:"none",color:"inherit"}}><div className="card"><h3>{title}</h3><p className="note">{desc}</p></div></Link>)}</div>
  </section></main></div>;
}
