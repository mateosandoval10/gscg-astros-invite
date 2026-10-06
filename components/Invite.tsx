'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { OFFICIAL, SEGMENTS, SEGMENT_ORDER, T, type Lang, type SegmentKey } from '@/lib/content';

const clean = (s: string | null, max = 80) => (s ?? '').replace(/[<>]/g, '').trim().slice(0, max);

export default function Invite() {
  const params = useSearchParams();
  const org = clean(params.get('org'));
  const from = clean(params.get('from'), 60);
  const typeParam = params.get('type') as SegmentKey | null;
  const initialType: SegmentKey = typeParam && SEGMENT_ORDER.includes(typeParam) ? typeParam : 'other';

  const [lang, setLang] = useState<Lang>(params.get('lang') === 'es' ? 'es' : 'en');
  const [seg, setSeg] = useState<SegmentKey>(initialType);
  const [size, setSize] = useState(40);
  const [when, setWhen] = useState<number | null>(null);
  const [wants, setWants] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const t = T[lang];
  const segs = SEGMENTS[lang];
  const active = segs[seg];
  const orgName = org || (lang === 'es' ? 'Nuestro grupo' : 'Our group');

  const sketch = useMemo(
    () => t.planResult(orgName, size, when === null ? '' : t.when[when], wants.map((w) => t.wants[w])),
    [t, orgName, size, when, wants]
  );
  const mailto = `mailto:${OFFICIAL.email}?subject=${encodeURIComponent(
    (lang === 'es' ? 'Salida grupal: ' : 'Group outing: ') + orgName
  )}&body=${encodeURIComponent(sketch)}`;

  const toggleWant = (i: number) => setWants((w) => (w.includes(i) ? w.filter((x) => x !== i) : [...w, i]));
  const copy = async () => {
    try { await navigator.clipboard.writeText(sketch); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch {}
  };

  return (
    <>
      <div className="banner" role="note">{t.banner}</div>

      <header className="top">
        <div className="wrap top-inner">
          <a className="brand" href="#top" aria-label="Back to top">
            <Ball /> <span>Daikin Park <em>{lang === 'es' ? 'Grupos' : 'Groups'}</em></span>
          </a>
          <nav aria-label="Sections" className="nav">
            <a href="#why">{t.nav.why}</a>
            <a href="#groups">{t.nav.groups}</a>
            <a href="#day">{t.nav.day}</a>
            <a href="#plan">{t.nav.plan}</a>
            <a href="#faq">{t.nav.faq}</a>
          </nav>
          <button className="lang" onClick={() => setLang(lang === 'en' ? 'es' : 'en')} aria-label={`Switch language to ${t.langLabel}`}>
            {t.langLabel}
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <Diamond />
          <div className="wrap hero-inner">
            <p className="kicker light">{t.heroKicker}</p>
            {from && <p className="from">{lang === 'es' ? 'Invitación de ' : 'Invited by '}{from}</p>}
            <h1>{org ? t.heroTitleOrg(org) : t.heroTitle}</h1>
            <p className="lede">{t.heroSub(active.people)}</p>
            <div className="hero-ctas">
              <a className="btn primary" href="#plan">{t.heroCta}</a>
              <a className="btn ghost" href="#day">{t.heroSecondary}</a>
            </div>
            <p className="note">{t.heroNote(OFFICIAL.groupMinimum)}</p>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="section">
          <div className="wrap">
            <p className="kicker">{t.whyKicker}</p>
            <h2>{t.whyTitle}</h2>
            <div className="grid four">
              {t.why.map((w, i) => (
                <article className="card" key={w.t}>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{w.t}</h3>
                  <p>{w.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GROUPS */}
        <section id="groups" className="section tint">
          <div className="wrap">
            <p className="kicker">{t.groupsKicker}</p>
            <h2>{t.groupsTitle}</h2>
            <p className="sub">{t.groupsSub}</p>
            <div className="tabs" role="tablist" aria-label={t.groupsKicker}>
              {SEGMENT_ORDER.map((k) => (
                <button key={k} role="tab" aria-selected={seg === k} className={seg === k ? 'tab on' : 'tab'} onClick={() => setSeg(k)}>
                  <span aria-hidden="true">{segs[k].icon}</span> {segs[k].label}
                </button>
              ))}
            </div>
            <div className="seg-panel" role="tabpanel">
              <div>
                <p className="seg-line">{active.line}</p>
                <ul className="ideas">
                  {active.ideas.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
              <aside className="belong">
                <h3>{t.belongTitle}</h3>
                <p>{t.belongText}</p>
              </aside>
            </div>
          </div>
        </section>

        {/* DAY */}
        <section id="day" className="section">
          <div className="wrap">
            <p className="kicker">{t.dayKicker}</p>
            <h2>{t.dayTitle}</h2>
            <ol className="timeline">
              {t.day.map((d) => (
                <li key={d.t}>
                  <span className="when">{d.when}</span>
                  <h3>{d.t}</h3>
                  <p>{d.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* EXTRAS */}
        <section className="section navy">
          <div className="wrap">
            <p className="kicker light">{t.extrasKicker}</p>
            <h2>{t.extrasTitle}</h2>
            <div className="grid three">
              {t.extras.map((e) => (
                <article className="xcard" key={e.t}>
                  <h3>{e.t}</h3>
                  <p>{e.d}</p>
                </article>
              ))}
            </div>
            <p className="fine">{t.extrasNote}</p>
          </div>
        </section>

        {/* PLAN */}
        <section id="plan" className="section">
          <div className="wrap plan">
            <div>
              <p className="kicker">{t.planKicker}</p>
              <h2>{t.planTitle}</h2>
              <p className="sub">{t.planSub}</p>

              <label className="field-label" htmlFor="size">{t.planSize} <strong>{size}</strong></label>
              <input id="size" type="range" min={10} max={500} step={5} value={size} onChange={(e) => setSize(+e.target.value)} />
              {size < OFFICIAL.groupMinimum && <p className="hint">{t.planBelow(OFFICIAL.groupMinimum)}</p>}

              <p className="field-label">{t.planWhen}</p>
              <div className="chips">
                {t.when.map((w, i) => (
                  <button key={w} className={when === i ? 'chip on' : 'chip'} aria-pressed={when === i} onClick={() => setWhen(when === i ? null : i)}>{w}</button>
                ))}
              </div>

              <p className="field-label">{t.planWant}</p>
              <div className="chips">
                {t.wants.map((w, i) => (
                  <button key={w} className={wants.includes(i) ? 'chip on' : 'chip'} aria-pressed={wants.includes(i)} onClick={() => toggleWant(i)}>{w}</button>
                ))}
              </div>
            </div>

            <div className="ticket" aria-live="polite">
              <div className="ticket-top">
                <span>{t.planResultTitle}</span>
                <Ball />
              </div>
              <p className="ticket-body">{sketch}</p>
              <div className="ticket-actions">
                <a className="btn primary" href={mailto}>{t.planSend}</a>
                <button className="btn ghost dark" onClick={copy}>{copied ? t.planCopied : t.planCopy}</button>
              </div>
              <div className="perf" aria-hidden="true" />
              <p className="ticket-foot">Daikin Park · Houston, TX</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section tint">
          <div className="wrap narrow">
            <p className="kicker">{t.faqKicker}</p>
            <h2>{t.faqTitle}</h2>
            {t.faq.map((f) => (
              <details key={f.q} className="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="wrap narrow center">
            <p className="kicker light">{t.ctaKicker}</p>
            <h2>{t.ctaTitle}</h2>
            <p className="lede">{t.ctaSub}</p>
            <a className="btn primary big" href={OFFICIAL.requestUrl} target="_blank" rel="noopener noreferrer">{t.ctaBtn} ↗</a>
            <p className="call">{t.ctaOr} <a href={OFFICIAL.phoneHref}>{OFFICIAL.phone}</a></p>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <p>{t.footer}</p>
          <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/build/`}>{t.builder} →</a>
        </div>
      </footer>
    </>
  );
}

function Ball() {
  return (
    <svg viewBox="0 0 40 40" width="26" height="26" aria-hidden="true" className="ball">
      <circle cx="20" cy="20" r="18" fill="#fffaf2" stroke="currentColor" strokeWidth="2" />
      <path d="M9 7c5 4 5 22 0 26M31 7c-5 4-5 22 0 26" fill="none" stroke="#e8562a" strokeWidth="2" strokeDasharray="3 2.5" />
    </svg>
  );
}

function Diamond() {
  return (
    <svg className="diamond" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="glow" cx="75%" cy="20%" r="70%">
          <stop offset="0" stopColor="#e8562a" stopOpacity=".55" />
          <stop offset=".6" stopColor="#e8562a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#glow)" />
      <g fill="none" stroke="#fffaf2" strokeOpacity=".12" strokeWidth="2">
        <path d="M560 560 L760 360 L560 160 L360 360 Z" />
        <path d="M560 560 L860 260 M560 560 L260 260" />
        <circle cx="560" cy="360" r="38" />
        <path d="M120 600 Q 560 -120 1000 600" />
      </g>
    </svg>
  );
}
