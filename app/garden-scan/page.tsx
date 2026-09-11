use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { bagsFromCoverage } from "@/lib/pricing";

export default function GardenScanPage() {
  const [known, setKnown] = useState(100);
  const [ar, setAr] = useState(98);
  const [ai, setAi] = useState(103);
  const [coverage, setCoverage] = useState(8);
  const [wastage, setWastage] = useState(5);

  const result = useMemo(() => {
    const values = [known, ar, ai].filter(v => Number.isFinite(v) && v > 0);
    const area = values.reduce((a, b) => a + b, 0) / values.length;
    const spread = Math.max(...values) - Math.min(...values);
    const confidence = Math.max(50, Math.min(99, Math.round(99 - spread * 1.5)));
    return {
      area: Math.round(area * 10) / 10,
      confidence,
      bags: bagsFromCoverage(area, coverage, wastage)
    };
  }, [known, ar, ai, coverage, wastage]);

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark">G</div><div><h1>GardenCare</h1><small>Business OS</small></div></div>
        <nav className="nav">
          <Link href="/">Dashboard</Link>
          <Link className="active" href="/garden-scan">GardenScan AI</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar"><h2>GardenScan AI</h2><span className="badge amber">Human confirmation required</span></header>
        <section className="content">
          <div className="hero">
            <div>
              <div className="eyebrow">A + B + D measurement strategy</div>
              <h3>Cross-check the garden before quoting.</h3>
              <p>Use a known physical measurement, phone AR measurement and AI photo/video analysis. GPS boundary can be added as a fourth evidence source.</p>
            </div>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <h3>A — Known measurement</h3>
              <p className="note">A real-world measurement supplied by the technician.</p>
              <div className="field"><label>Estimated area (m²)</label><input type="number" value={known} onChange={e=>setKnown(Number(e.target.value))}/></div>
            </div>
            <div className="card">
              <h3>B — Phone AR</h3>
              <p className="note">Placeholder input for the mobile AR measurement module.</p>
              <div className="field"><label>AR area (m²)</label><input type="number" value={ar} onChange={e=>setAr(Number(e.target.value))}/></div>
            </div>
            <div className="card">
              <h3>D — AI photo/video</h3>
              <p className="note">Placeholder input for vision analysis. Final implementation will analyse uploaded media.</p>
              <div className="field"><label>AI area (m²)</label><input type="number" value={ai} onChange={e=>setAi(Number(e.target.value))}/></div>
            </div>
          </div>

          <div className="section-title"><h3>Cross-check result</h3></div>
          <div className="result">
            <div className="big-number">{result.area} m²</div>
            <p><strong>{result.confidence}% confidence</strong> based on three independent inputs.</p>
            <p className="note">This is an estimate until the technician confirms the final measurement. Large disagreement between sources should trigger another measurement.</p>
            <button className="btn primary">Confirm Measurement</button>
          </div>

          <div className="section-title"><h3>Material estimate</h3></div>
          <div className="card">
            <div className="form-grid">
              <div className="field"><label>Coverage per bag (m²)</label><input type="number" value={coverage} onChange={e=>setCoverage(Number(e.target.value))}/></div>
              <div className="field"><label>Wastage allowance (%)</label><input type="number" value={wastage} onChange={e=>setWastage(Number(e.target.value))}/></div>
            </div>
            <div className="result" style={{marginTop:16}}>
              <strong>Recommended quantity: {result.bags} bags</strong>
              <p className="note">The actual coverage/application rate must be configured from the selected product before production quoting.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
