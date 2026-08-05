import { Menu } from '@base-ui/react/menu';
import { ArrowDown, Menu as MenuIcon } from 'lucide-react';
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
  },
];

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

function App() {
  const reduceMotion = useReducedMotion();

  return (
    <div id="top" className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />

      <main id="main">
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
      </main>
    </div>
  );
}

export default App;
