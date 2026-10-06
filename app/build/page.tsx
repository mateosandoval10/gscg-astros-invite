'use client';

import { useEffect, useMemo, useState } from 'react';
import { SEGMENTS, SEGMENT_ORDER, type SegmentKey } from '@/lib/content';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

function makeUrl(origin: string, org: string, type: string, from: string, lang: string) {
  const p = new URLSearchParams();
  if (org) p.set('org', org);
  if (type && type !== 'other') p.set('type', type);
  if (from) p.set('from', from);
  if (lang === 'es') p.set('lang', 'es');
  const q = p.toString();
  return `${origin}${BASE}/${q ? `?${q}` : ''}`;
}

export default function Builder() {
  const [org, setOrg] = useState('');
  const [type, setType] = useState<SegmentKey>('school');
  const [from, setFrom] = useState('');
  const [lang, setLang] = useState('en');
  const [bulk, setBulk] = useState('Lincoln Elementary, school\nGrace Community Church, faith\nEastside Food Bank, nonprofit\nIBEW Local 716, union, es');
  const [copied, setCopied] = useState('');
  const [origin, setOrigin] = useState('');
  useEffect(() => setOrigin(window.location.origin), []);

  const single = makeUrl(origin, org.trim(), type, from.trim(), lang);
  const rows = useMemo(() => bulk.split('\n').map((l) => l.split(',').map((x) => x.trim())).filter((r) => r[0]).map(([o, ty = 'other', lg = 'en']) => {
    const k = (SEGMENT_ORDER as string[]).includes(ty) ? ty : 'other';
    return { org: o, type: k, url: makeUrl(origin, o, k, from.trim(), lg) };
  }), [bulk, origin, from]);

  const copy = async (s: string) => { try { await navigator.clipboard.writeText(s); setCopied(s); setTimeout(() => setCopied(''), 1500); } catch {} };
  const csv = 'organization,type,link\n' + rows.map((r) => `"${r.org.replace(/"/g, '""')}",${r.type},${r.url}`).join('\n');
  const download = () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = 'astros-group-invite-links.csv';
    a.click();
  };

  return (
    <main className="builder">
      <div className="banner" role="note">Internal tool for the outreach team. Nothing entered here is saved or sent anywhere.</div>
      <div className="wrap narrow">
        <a href={`${BASE}/`} className="back">← Back to the invitation</a>
        <p className="kicker">Outreach automation</p>
        <h1>Personalize an invitation link</h1>
        <p className="sub">One template, any group. The link fills in the organization’s name, highlights ideas for their kind of group, and can open in Spanish.</p>

        <div className="bcard">
          <h2>One link</h2>
          <label>Organization name<input value={org} onChange={(e) => setOrg(e.target.value)} placeholder="e.g. Lincoln Elementary" /></label>
          <label>Type of group
            <select value={type} onChange={(e) => setType(e.target.value as SegmentKey)}>
              {SEGMENT_ORDER.map((k) => <option key={k} value={k}>{SEGMENTS.en[k].label}</option>)}
            </select>
          </label>
          <label>Invited by (optional)<input value={from} onChange={(e) => setFrom(e.target.value)} placeholder="e.g. your name and team" /></label>
          <label>Language
            <select value={lang} onChange={(e) => setLang(e.target.value)}><option value="en">English</option><option value="es">Español</option></select>
          </label>
          <div className="out"><code>{single}</code><button className="btn primary" onClick={() => copy(single)}>{copied === single ? 'Copied' : 'Copy'}</button></div>
          <a className="preview" href={single} target="_blank" rel="noopener noreferrer">Preview ↗</a>
        </div>

        <div className="bcard">
          <h2>Many links at once</h2>
          <p className="sub">One organization per line: <code>name, type, language</code>. Types: {SEGMENT_ORDER.join(', ')}. Language is optional (en or es).</p>
          <textarea rows={6} value={bulk} onChange={(e) => setBulk(e.target.value)} />
          <table>
            <thead><tr><th>Organization</th><th>Type</th><th>Link</th></tr></thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.url}><td>{r.org}</td><td>{SEGMENTS.en[r.type as SegmentKey].label}</td><td><button className="linkbtn" onClick={() => copy(r.url)}>{copied === r.url ? 'Copied' : 'Copy link'}</button></td></tr>
              ))}
            </tbody>
          </table>
          <button className="btn primary" onClick={download}>Download CSV for your email or text tool</button>
        </div>
      </div>
    </main>
  );
}
