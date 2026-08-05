import { useEffect, useState } from 'react';
import { Menu } from '@base-ui/react/menu';
import { ArrowDown, ArrowLeft, ArrowUpRight, Menu as MenuIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const projectAsset = (fileName) => `${import.meta.env.BASE_URL}projects/${fileName}`;

const projects = [
  { title: 'ATIS Strategy', image: 'atis-strategy.png', alt: 'Army star logo' },
  { title: 'ATIS CDT', image: 'atis-cdt.jpg', alt: 'U.S. Army logo', cover: true },
  { title: 'Procore Partner Experience', image: 'procore.png', alt: 'Procore logo' },
  {
    title: 'IBM Accessible Design Thinking',
    image: 'ibm-design-thinking.png',
    alt: 'Color blind bee illustration',
  },
  {
    title: 'IBM Accessibility Compliance System',
    image: 'ibm-compliance.png',
    alt: 'IBM accessibility compliance project',
  },
  {
    title: 'IBM Accessibility Toolkit',
    image: 'ibm-toolkit.png',
    alt: 'IBM accessibility toolkit project',
  },
  { title: 'IBM Aging in Place', image: 'ibm-aging.png', alt: 'IBM aging in place project' },
  {
    title: 'Job Accommodation Network (IBM)',
    image: 'jan.png',
    alt: 'Job Accommodation Network project',
  },
  { title: 'Gehry Engineering', image: 'gehry.png', alt: 'Gehry Engineering project' },
  {
    title: 'CJ Affiliate Account Manager',
    image: 'cj-affiliate.png',
    alt: 'CJ Affiliate account manager project',
  },
  { title: 'FBS Flexmls and Spark', image: 'fbs.png', alt: 'FBS Flexmls and Spark project' },
  {
    title: 'Adobe XD Accessibility',
    image: 'adobe-xd.png',
    alt: 'Adobe XD accessibility project',
    href: '#/work/adobe-xd-accessibility',
  },
];

const caseStudyAsset = (fileName) => `${import.meta.env.BASE_URL}case-studies/adobe-xd/${fileName}`;

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Bo Campbell, home">
        <span className="brand-mark" aria-hidden="true">BC</span>
        <span>Bo Campbell</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.label} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <Menu.Root>
        <Menu.Trigger className="menu-trigger" aria-label="Open navigation">
          <MenuIcon aria-hidden="true" size={21} />
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner className="menu-positioner" sideOffset={8} align="end">
            <Menu.Popup className="menu-popup">
              {navigation.map((item) => (
                <Menu.Item key={item.label} className="menu-item" render={<a href={item.href} />}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
    </header>
  );
}

function CaseStudyFigure({ src, alt, caption, className = '' }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.figure
      className={`case-figure ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <img src={caseStudyAsset(src)} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </motion.figure>
  );
}

function AdobeXdCaseStudy({ reduceMotion }) {
  return (
    <motion.div
      className="case-study"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <header className="case-hero">
        <a className="back-link" href="#work">
          <ArrowLeft aria-hidden="true" size={18} /> Selected work
        </a>
        <p className="eyebrow">IBM + Adobe XD · Proof of concept</p>
        <h1>Adobe XD Accessibility</h1>
        <p className="case-intro">
          Helping designers specify accessible interaction behavior before their work reaches engineering.
        </p>
      </header>

      <dl className="case-facts">
        <div><dt>Company</dt><dd>IBM with Adobe XD</dd></div>
        <div><dt>Role</dt><dd>UX Designer, owner</dd></div>
        <div><dt>Type</dt><dd>Proof of concept</dd></div>
      </dl>

      <section className="case-section case-copy-grid" aria-labelledby="brief-heading">
        <p className="case-kicker">The brief</p>
        <div className="case-copy">
          <h2 id="brief-heading">Move accessibility decisions upstream.</h2>
          <p>
            Adobe had a strong accessibility group, and IBM designers were adopting the newly released XD quickly. I worked with Adobe’s accessibility team on a proof of concept for features that could help designers communicate accessibility requirements directly to developers.
          </p>
          <p>
            The goal was to make accessibility part of the design specification itself, instead of leaving engineers to infer behavior after visual design was complete.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        src="keyboard-menu-spec.png"
        alt="Adobe XD proof of concept showing a keyboard interaction menu"
        caption="A proposed specification menu for keyboard interaction behavior."
        className="case-figure-wide"
      />

      <section className="case-section" aria-labelledby="focus-heading">
        <div className="case-copy narrow-copy">
          <p className="case-kicker">Design focus</p>
          <h2 id="focus-heading">Three details designers often overlook.</h2>
          <p>
            I focused the concept on tab order, keyboard interaction, and landmark regions. Each prototype showed what a designer could see while working in XD and how those choices could become implementation-ready specifications.
          </p>
        </div>
        <ol className="focus-list">
          <li><span>01</span><strong>Tab order</strong></li>
          <li><span>02</span><strong>Keyboard interaction</strong></li>
          <li><span>03</span><strong>Landmark regions</strong></li>
        </ol>
      </section>

      <CaseStudyFigure
        src="tab-stop-exported.png"
        alt="Exported Adobe XD specification identifying a keyboard tab stop"
        caption="Exported specifications carry interaction details from design to engineering."
        className="case-figure-wide"
      />

      <section className="case-section case-copy-grid" aria-labelledby="guidance-heading">
        <p className="case-kicker">Guidance in context</p>
        <div className="case-copy">
          <h2 id="guidance-heading">Useful constraints, right where decisions happen.</h2>
          <p>
            Focused dropdowns offered a limited set of appropriate accessibility options, reducing the need to repeatedly look up requirements. Warnings surfaced conflicts and missing information before handoff.
          </p>
        </div>
      </section>

      <div className="case-figure-pair">
        <CaseStudyFigure
          src="region-name.png"
          alt="Adobe XD interface for naming an accessibility landmark region"
          caption="Naming a landmark region."
        />
        <CaseStudyFigure
          src="warnings.png"
          alt="Adobe XD accessibility warning interface"
          caption="Warnings for incomplete or conflicting choices."
        />
      </div>

      <section className="case-section case-copy-grid" aria-labelledby="symbols-heading">
        <p className="case-kicker">Shared language</p>
        <div className="case-copy">
          <h2 id="symbols-heading">Accessibility symbols become part of the design.</h2>
          <p>
            Designers could overlay accessibility information on their work using included symbols, choose the relevant properties in XD, and export those decisions alongside the visual specification.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        src="regions.png"
        alt="Interface design overlaid with accessibility landmark region annotations"
        caption="Landmark regions are visible and editable in the design environment."
        className="case-figure-wide"
      />

      <section className="case-section case-copy-grid" aria-labelledby="handoff-heading">
        <p className="case-kicker">Handoff</p>
        <div className="case-copy">
          <h2 id="handoff-heading">The exported specification preserves intent.</h2>
          <p>
            The output carried the necessary accessibility information to engineers, making responsibilities explicit and reducing the difficult interpretation work that typically happens late in development.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        src="region-result.png"
        alt="Exported accessibility landmark region specification"
        caption="An exported region specification ready for implementation."
        className="case-figure-wide"
      />

      <section className="case-section case-copy-grid" aria-labelledby="example-heading">
        <p className="case-kicker">In practice</p>
        <div className="case-copy">
          <h2 id="example-heading">A complex application becomes legible.</h2>
          <p>
            Applied to IBM Verse, the specification could show an engineer exactly where each tab stop belonged across the email interface.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        src="verse-tabs.png"
        alt="IBM Verse email interface annotated with keyboard tab stops"
        caption="IBM Verse annotated with the intended keyboard tab sequence."
        className="case-figure-wide"
      />

      <section className="case-result" aria-labelledby="result-heading">
        <p className="case-kicker">Result</p>
        <h2 id="result-heading">Alignment on the need, but not the implementation.</h2>
        <p>
          Adobe’s accessibility team aligned with the idea, but the XD product managers believed annotation tools were sufficient. The concept did not ship, and the underlying challenge remains: many designers still lack an effective way to communicate accessible interaction behavior in their specifications.
        </p>
        <a className="text-link" href="#work">
          Return to selected work <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>
    </motion.div>
  );
}

function App() {
  const reduceMotion = useReducedMotion();
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (route === '#/work/adobe-xd-accessibility' || !route) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    requestAnimationFrame(() => {
      document.querySelector(route)?.scrollIntoView();
    });
  }, [route]);

  const isAdobeCaseStudy = route === '#/work/adobe-xd-accessibility';

  return (
    <div id="top" className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />

      <main id="main">
        {isAdobeCaseStudy ? (
          <AdobeXdCaseStudy reduceMotion={reduceMotion} />
        ) : (
          <>
        <motion.section
          className="intro"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Product design · Accessibility · Systems</p>
          <h1>Designing clear paths through complex problems.</h1>
          <p className="intro-copy">
            I’m Bo Campbell, a product designer focused on useful, inclusive experiences and the systems that make them possible.
          </p>
          <a className="text-link" href="#work">
            View selected work <ArrowDown aria-hidden="true" size={18} />
          </a>
        </motion.section>

        <section id="work" className="content-band" aria-labelledby="work-heading">
          <div className="section-heading">
            <p className="section-number">01</p>
            <h2 id="work-heading">Selected work</h2>
          </div>
          <div className="project-grid" aria-label="Portfolio projects">
            {projects.map((project, index) => (
              project.href ? (
              <motion.a
                className="project-tile"
                key={project.title}
                href={project.href}
                aria-label={`View case study: ${project.title}`}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.48,
                  delay: reduceMotion ? 0 : (index % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="project-media">
                  <img
                    className={`project-image${project.cover ? ' project-image-cover' : ''}`}
                    src={projectAsset(project.image)}
                    alt={project.alt}
                    loading="lazy"
                  />
                </div>
                <div className="project-meta">
                  <p className="project-index">{String(index + 1).padStart(2, '0')}</p>
                  <h3>{project.title}</h3>
                  <ArrowUpRight className="project-arrow" aria-hidden="true" size={19} />
                </div>
              </motion.a>
              ) : (
                <motion.article
                  className="project-tile"
                  key={project.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    duration: 0.48,
                    delay: reduceMotion ? 0 : (index % 3) * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="project-media">
                    <img
                      className={`project-image${project.cover ? ' project-image-cover' : ''}`}
                      src={projectAsset(project.image)}
                      alt={project.alt}
                      loading="lazy"
                    />
                  </div>
                  <div className="project-meta">
                    <p className="project-index">{String(index + 1).padStart(2, '0')}</p>
                    <h3>{project.title}</h3>
                  </div>
                </motion.article>
              )
            ))}
          </div>
        </section>

        <section id="about" className="content-band compact-band" aria-labelledby="about-heading">
          <div className="section-heading">
            <p className="section-number">02</p>
            <h2 id="about-heading">About</h2>
          </div>
        </section>

        <section id="contact" className="content-band compact-band" aria-labelledby="contact-heading">
          <div className="section-heading">
            <p className="section-number">03</p>
            <h2 id="contact-heading">Contact</h2>
          </div>
        </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
