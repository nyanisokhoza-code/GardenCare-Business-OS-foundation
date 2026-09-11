use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { calculatePricing } from "@/lib/pricing";

export default function PricingPage() {
  const [bags, setBags] = useState(15);
  const [bagCost, setBagCost] = useState(50);
  const [markup, setMarkup] = useState(30);
  const [labour, setLabour] = useState(700);
  const [vehicle, setVehicle] = useState(300);
  const [equipment, setEquipment] = useState(300);
  const [consumables, setConsumables] = useState(100);
  const [disposal, setDisposal] = useState(0);
  const [overhead, setOverhead] = useState(100);
  const [margin, setMargin] = useState(35);

  const p = useMemo(() => calculatePricing({
    areaM2: 100, bags, bagCost, materialMarkup: markup, labourCost: labour,
    vehicleCost: vehicle, equipmentCost: equipment, consumablesCost: consumables,
    disposalCost: disposal, overheadCost: overhead, targetMargin: margin
  }), [bags, bagCost, markup, labour, vehicle, equipment, consumables, disposal, overhead, margin]);

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark">G</div><div><h1>GardenCare</h1><small>Business OS</small></div></div>
        <nav className="nav"><Link href="/">Dashboard</Link><Link href="/garden-scan">GardenScan AI</Link><Link className="active" href="/pricing">Pricing</Link></nav>
      </aside>
      <main className="main">
        <header className="topbar"><h2>Pricing Engine</h2><span className="badge green">Cost-based</span></header>
        <section className="content">
          <div className="hero">
            <div><div className="eyebrow">Minimum → Recommended → Premium</div><h3>Never quote blind.</h3><p>The production engine will pull approved costs and rules from the database instead of relying on hard-coded assumptions.</p></div>
          </div>

          <div className="card">
            <div className="form-grid">
              {[
                ["Bags", bags, setBags], ["Bag supplier cost (R)", bagCost, setBagCost],
                ["Material markup (%)", markup, setMarkup], ["Labour cost (R)", labour, setLabour],
                ["Vehicle cost (R)", vehicle, setVehicle], ["Equipment (R)", equipment, setEquipment],
                ["Consumables (R)", consumables, setConsumables], ["Disposal (R)", disposal, setDisposal],
                ["Overhead allocation (R)", overhead, setOverhead], ["Target margin (%)", margin, setMargin],
              ].map(([label, value, setter]) => (
                <div className="field" key={label as string}>
                  <label>{label as string}</label>
                  <input type="number" value={value as number} onChange={e=>(setter as Function)(Number(e.target.value))}/>
                </div>
              ))}
            </div>
          </div>

          <div className="section-title"><h3>Quote recommendation</h3></div>
          <div className="grid grid-3">
            <div className="card"><div className="metric-label">Minimum price</div><div className="metric-value">R{p.minimum.toFixed(0)}</div><p className="note">Covers configured cost base.</p></div>
            <div className="card"><div className="metric-label">Recommended</div><div className="metric-value">R{p.recommended.toFixed(0)}</div><p className="note">Uses target gross margin.</p></div>
            <div className="card"><div className="metric-label">Premium</div><div className="metric-value">R{p.premium.toFixed(0)}</div><p className="note">For higher-demand jobs.</p></div>
          </div>

          <div className="card" style={{marginTop:18}}>
            <strong>Material cost: R{p.materialCost.toFixed(0)}</strong>
            <span> · </span>
            <strong>Customer material charge: R{p.materialSell.toFixed(0)}</strong>
            <p className="note">These are demonstration values until the database configuration is connected.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
