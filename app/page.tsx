'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'

const features = [
  ['01', 'HIGH ABSORBENCY', 'Advanced SAP and fluff-pulp technology rapidly captures and locks away moisture.'],
  ['02', 'LEAK PROTECTION', '3D standing leak guards provide additional protection around the legs.'],
  ['03', 'SOFT & BREATHABLE', 'Skin-friendly non-woven materials promote airflow and everyday comfort.'],
  ['04', 'ODOUR CONTROL', 'Absorbent technology helps neutralise unwanted odours for greater discretion.'],
  ['05', 'SECURE FIT', 'Refastenable side tapes help users and caregivers achieve a personalised fit.'],
  ['06', 'WETNESS INDICATOR', 'A visual indicator helps caregivers identify when a change may be required.'],
]

const layers = [
  ['A', 'ULTRA-SOFT TOP SHEET', 'A gentle, skin-friendly non-woven top layer designed for maximum comfort. It allows moisture to pass through while helping the surface remain dry.'],
  ['B', 'RAPID FLUID DISTRIBUTION WEB', 'An advanced transfer layer draws moisture away from the surface and distributes it across the absorbent core to reduce fluid pooling.'],
  ['C', 'HIGH-EFFICIENCY ABSORBENT CORE', 'A high-capacity combination of SAP and soft fluff pulp designed to capture, lock in and retain fluid while helping control odour.'],
  ['D', 'LEAK-PROOF OUTER BACKSHEET', 'A moisture-resistant outer barrier contains liquid and protects clothing and bedding while maintaining a discreet finish.'],
]

const faqs = [
  ['Who are Primasentials Adult Briefs designed for?', 'They are designed for adults who need dependable protection, including people with limited mobility, overnight users and those receiving caregiver assistance.'],
  ['How often should an adult diaper be changed?', 'Change as soon as practical after soiling, or when the wetness indicator signals that a change may be needed. Individual routines vary.'],
  ['How does Primasentials help keep skin dry?', 'The top sheet and distribution web move moisture away from the skin into a high-efficiency absorbent core.'],
  ['Can Primasentials be used overnight?', 'Yes. The absorbent core and leak protection are designed to support extended wear, including overnight use.'],
  ['Are Primasentials products discreet under clothing?', 'Yes. The quiet construction, soft materials and secure fit are designed with discretion in mind.'],
  ['How do I choose the correct size?', 'Use the waist measurement on the pack as a guide. Our current Large brief fits 100–150 cm / 39–59 in.'],
  ['Can healthcare facilities purchase in bulk?', 'Yes. Use the enquiry form to select bulk purchasing or healthcare facilities and our team will respond.'],
]

function Arrow() { return <span aria-hidden="true">↗</span> }
function Brand({ light = false }: { light?: boolean }) {
  return <div className={`brand ${light ? 'brand-light' : ''}`}>
    <Image src="/assets/primassentials-logo.webp" alt="Primasentials" width={420} height={280} className="brand-logo" priority />
  </div>
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLayer, setActiveLayer] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if ((form.elements.namedItem('_honey') as HTMLInputElement)?.value) return
    setSending(true)
    setError(false)
    try {
      const response = await fetch('https://formsubmit.co/ajax/info@primassentials.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!response.ok) throw new Error('Request failed')
      setSent(true)
      form.reset()
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return <main>
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#top" aria-label="Primasentials home"><Brand /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><span /><span /><span /></button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {[
            ['About', '#about-us'],
            ['Solutions', '#solutions'],
            ['Technology', '#technology'],
            ['Care Standards', '#why-primasentials'],
            ['Partners', '#contact'],
            ['Contact', '#contact'],
          ].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="button button-small" href="#contact" onClick={() => setMenuOpen(false)}>Speak to Us <Arrow /></a>
        </nav>
      </div>
    </header>

    <section className="hero" id="top">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="eyebrow"><span /> PRIMASENTIALS CARE</p>
          <h1>Better care starts<br /><em>with dignity.</em></h1>
          <p className="hero-intro">We create dependable incontinence care for families, caregivers and healthcare partners who want better comfort, confidence and everyday quality of life.</p>
          <div className="button-row"><a className="button" href="#about-us">Learn About Us <Arrow /></a><a className="text-link" href="#contact">Speak to Our Team <Arrow /></a></div>
          <p className="trust-line"><span className="trust-mark">✦</span> Designed for comfort. Built for real life.</p>
        </div>
        <div className="hero-product"><div className="hero-orbit" /><Image src="/assets/primassentials-packaging.webp" alt="Primasentials product packaging" width={1200} height={800} priority className="hero-packaging" /><div className="hero-caption"><strong>Primasentials Adult Briefs</strong><span>Large · 10 pieces per pack</span></div></div>
      </div>

      <div className="container">
        <div className="company-stats">
          <div className="stats-item"><strong>12hr</strong><span>maximum comfort support</span></div>
          <div className="stats-item"><strong>Premium</strong><span>skin-friendly protection</span></div>
          <div className="stats-item"><strong>South Africa</strong><span>proudly local</span></div>
          <div className="stats-item"><strong>Built for</strong><span>caregivers & households</span></div>
        </div>
      </div>
    </section>

    <section className="intro-band"><div className="container intro-inner"><p className="eyebrow">OUR PURPOSE</p><h2>Care that supports everyday confidence and dignity.</h2><p>Thoughtful design, considered materials and dependable performance come together to make everyday care feel more comfortable, more humane and more confident.</p></div></section>

    <section className="feature-section" id="solutions"><div className="container"><div className="section-head"><div><p className="eyebrow">WHAT GUIDES US</p><h2>Built for real life,<br /><em>not just the label.</em></h2></div><p className="section-note">We design protection around the realities of home care, caregiver support and everyday comfort.</p></div><div className="feature-grid">{features.map(([number, title, text]) => <article className="feature-card" key={title}><span className="feature-number">{number}</span><div className="feature-icon">◒</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="product-section"><div className="container product-grid"><div className="product-visual"><div className="visual-label">THE BRIEF<br /><strong>UP CLOSE</strong></div><Image src="/assets/adult-brief.webp" alt="Primasentials adult brief with open fit, leak guards and refastenable tapes" width={1054} height={854} /><div className="swatch-row"><span>SOFT TOUCH</span><span>QUIET FIT</span><span>DAY / NIGHT</span></div></div><div className="product-copy"><p className="eyebrow">THE EVERYDAY ESSENTIAL</p><h2>Primasentials<br /><em>Adult Briefs</em></h2><p className="lead">Premium adult incontinence protection for the moments that matter.</p><p>Designed for individuals who need dependable protection, including users with limited mobility, people requiring caregiver assistance and overnight use.</p><ul className="check-list">{['High-absorbency SAP core', 'Soft breathable top sheet', '3D leak guards', 'Refastenable tapes', 'Wetness indicator', 'Odour-control technology', 'Quiet, discreet construction'].map(item => <li key={item}><span>✓</span>{item}</li>)}</ul><div className="size-card"><div><small>AVAILABLE NOW</small><strong>Large (L)</strong></div><div><small>WAIST</small><strong>100–150 cm <span>/</span> 39–59″</strong></div><div><small>PACK</small><strong>10 pieces</strong></div></div><div className="button-row"><a className="button" href="#contact">View Product Details <Arrow /></a><a className="text-link" href="#contact">Request Pricing <Arrow /></a></div></div></div></section>

    <section className="technology-section" id="technology"><div className="container technology-grid"><div className="technology-copy"><p className="eyebrow">HOW IT WORKS</p><h2>Four layers.<br /><em>One purpose.</em></h2><p className="lead">Complete protection, thoughtfully engineered.</p><p>From the first touch to the final barrier, every layer works together to help deliver comfort, dryness and confidence.</p><div className="layer-tabs">{layers.map(([letter, title], index) => <button key={letter} className={activeLayer === index ? 'active' : ''} onClick={() => setActiveLayer(index)}><span>{letter}</span><strong>{title}</strong></button>)}</div><div className="layer-detail"><strong>Layer {layers[activeLayer][0]} — {layers[activeLayer][1]}</strong><p>{layers[activeLayer][2]}</p></div></div><div className="layers-visual"><Image src="/assets/layers-ad.webp" alt="Exploded view of the four Primasentials absorbent layers" width={1024} height={1024} /><div className="layer-tag tag-a">A</div><div className="layer-tag tag-b">B</div><div className="layer-tag tag-c">C</div><div className="layer-tag tag-d">D</div></div></div></section>

    <section className="why-section" id="why-primasentials"><div className="container why-grid"><div className="why-image"><Image src="/assets/feature-callouts.webp" alt="Primasentials product features and adult brief" width={1239} height={848} /></div><div className="why-copy"><p className="eyebrow">A BETTER STANDARD OF CARE</p><h2>Care without<br /><em>compromise.</em></h2>{[['PERFORMANCE', 'Advanced multi-layer absorption designed for dependable protection.'], ['COMFORT', 'Soft, breathable materials designed with sensitive and ageing skin in mind.'], ['DIGNITY', 'Quiet construction, odour management and discreet fit help users feel confident.'], ['ACCESSIBILITY', 'Quality incontinence care for individuals, families, caregivers and care facilities.']].map(([title, text]) => <div className="pillar" key={title}><span>+</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

    <section className="serve-section"><div className="container"><div className="serve-head"><div><p className="eyebrow">FOR EVERY KIND OF CARE</p><h2>Protection designed<br /><em>for real life.</em></h2></div><p>From the home to the hospital, Primasentials helps people give and receive better care.</p></div><div className="serve-grid">{['Individuals & Families', 'Caregivers', 'Care Homes', 'Hospitals & Clinics', 'Healthcare Distributors'].map((item, index) => <div className="serve-card" key={item}><span>0{index + 1}</span><h3>{item}</h3><Arrow /></div>)}</div><a className="button button-dark" href="#contact">Become a Distribution Partner <Arrow /></a></div></section>

    <section className="story-section" id="about-us"><div className="story-art"><Image src="/assets/primassentials-brand.webp" alt="Primasentials brand artwork" width={1030} height={687} /></div><div className="story-copy"><p className="eyebrow">MADE WITH CARE</p><h2>Care designed with<br /><em>dignity in mind.</em></h2><p>Primasentials is focused on delivering dependable, dignified incontinence care to individuals, families, caregivers and healthcare organisations across South Africa and beyond.</p><p>Because better care is not only about what a product does. It is about how it helps someone feel.</p><a className="text-link" href="#contact">Get to know Primasentials <Arrow /></a></div></section>

    <section className="faq-section" id="faq"><div className="container faq-grid"><div><p className="eyebrow">QUESTIONS, ANSWERED</p><h2>Good care starts<br />with <em>clarity.</em></h2><p className="faq-aside">Need more detail? Our team is here to help with product guidance, sizing and bulk enquiries.</p><a className="text-link" href="#contact">Talk to our team <Arrow /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><b>{openFaq === index ? '−' : '+'}</b></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

    <section className="contact-section" id="contact"><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow">START A CONVERSATION</p><h2>Let’s talk about<br /><em>better care.</em></h2><p>Whether you are looking for personal product guidance, bulk purchasing or a distribution partnership, we would be glad to hear from you.</p><div className="contact-options"><span>General enquiries</span><span>Bulk purchasing</span><span>Healthcare facilities</span><span>Distribution partnerships</span><span>Retail enquiries</span></div><a className="contact-email" href="mailto:info@primassentials.com">info@primassentials.com</a></div><form className="contact-form" onSubmit={submitForm}>{sent ? <div className="form-success"><span>✓</span><h3>Thank you for reaching out.</h3><p>Your enquiry has been received. A Primasentials team member will follow up using the details you provided.</p><button type="button" className="text-link" onClick={() => setSent(false)}>Send another enquiry <Arrow /></button></div> : <><input type="hidden" name="_subject" value="New enquiry from primassentials.com" /><input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" /><div className="form-row"><label>Full Name<input required name="name" placeholder="Your name" /></label><label>Company / Organisation<input name="company" placeholder="Optional" /></label></div><div className="form-row"><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Phone<input name="phone" placeholder="+27 ..." /></label></div><label>Enquiry Type<select required name="type" defaultValue=""><option value="" disabled>Select an enquiry type</option><option>General enquiries</option><option>Bulk purchasing</option><option>Healthcare facilities</option><option>Distribution partnerships</option><option>Retail enquiries</option></select></label><label>Message<textarea required name="message" rows={4} placeholder="How can we help?" /></label>{error && <p className="form-error" role="alert">Something went wrong sending your enquiry. Please try again or email us directly.</p>}<button className="button" type="submit" disabled={sending}>{sending ? 'Sending…' : <>Send Enquiry <Arrow /></>}</button><small>Prefer email? Contact us at info@primassentials.com.</small></>}</form></div></section>

    <footer className="site-footer"><div className="container footer-top"><div><Brand light /><p>Care You Can Trust,<br />Comfort You Deserve.</p></div><div className="footer-links"><div><strong>PRODUCTS</strong><a href="#solutions">Adult Briefs</a><a href="#technology">Our Technology</a></div><div><strong>COMPANY</strong><a href="#about-us">About Us</a><a href="#why-primasentials">Why Primasentials</a></div><div><strong>SUPPORT</strong><a href="#faq">FAQ</a><a href="#contact">Contact</a></div><div><strong>CONTACT</strong><a href="mailto:info@primassentials.com">info@primassentials.com</a><a href="#contact">Send an enquiry</a></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Primasentials. All Rights Reserved.</span></div></footer>
  </main>
}
