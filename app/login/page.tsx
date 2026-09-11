import { signIn } from "@/app/auth/actions";

export default async function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  const params = searchParams;
  return <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:24}}><div className="card" style={{width:"100%",maxWidth:430}}>
    <div className="eyebrow">GardenCare Business OS</div><h1>Sign in</h1>
    <p className="note">Authorised users only. Business data is protected by authenticated access.</p>
    {params.error && <div className="badge red" style={{display:"inline-block",marginBottom:14}}>{params.error === "missing" ? "Enter your email and password." : params.error}</div>}
    <form action={signIn} style={{display:"grid",gap:14}}>
      <div className="field"><label>Email</label><input name="email" type="email" autoComplete="email" required /></div>
      <div className="field"><label>Password</label><input name="password" type="password" autoComplete="current-password" required /></div>
      <button className="btn primary" type="submit">Sign in</button>
    </form></div></main>;
}
