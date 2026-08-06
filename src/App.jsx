import { useEffect, useState } from 'react';
import { Menu } from '@base-ui/react/menu';
import { useForm, ValidationError } from '@formspree/react';
import { ArrowDown, ArrowLeft, ArrowUpRight, CheckCircle2, LockKeyhole, Menu as MenuIcon, Rocket, Send } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const projectAsset = (fileName) => `${import.meta.env.BASE_URL}projects/${fileName}`;

const projects = [
  {
    title: 'ATIS CDT',
    image: 'atis-cdt.jpg',
    alt: 'U.S. Army logo',
    position: '51% 35%',
    locked: true,
    tags: ['Design Strategy', 'AI Prototyping'],
    href: '#/work/atis-command-directed-training',
  },
  {
    title: 'Procore Partner Experience',
    image: 'procore.png',
    alt: 'Procore logo',
    tags: ['Design Strategy', 'User Research'],
    href: '#/work/procore-partner-experience',
  },
  {
    title: 'IBM Accessible Design Thinking',
    image: 'ibm-design-thinking.png',
    alt: 'Color blind bee illustration',
    tags: ['Accessibility', 'Design Strategy'],
    href: '#/work/ibm-accessible-design-thinking',
  },
  {
    title: 'IBM Accessibility Compliance System',
    image: 'ibm-compliance.png',
    alt: 'IBM accessibility compliance project',
    tags: ['Accessibility', 'Systems Design'],
    href: '#/work/ibm-accessibility-compliance-system',
  },
  {
    title: 'IBM Accessibility Toolkit',
    image: 'ibm-toolkit.png',
    alt: 'IBM accessibility toolkit project',
    tags: ['Accessibility', 'Information Architecture'],
    href: '#/work/ibm-accessibility-toolkit',
  },
  {
    title: 'IBM Aging in Place',
    image: 'ibm-aging.png',
    alt: 'IBM aging in place project',
    tags: ['Ethnographic Research', 'Service Design'],
    href: '#/work/ibm-aging-in-place',
  },
  {
    title: 'Job Accommodation Network (IBM)',
    image: 'jan.png',
    alt: 'Job Accommodation Network project',
    tags: ['User Research', 'Product Management'],
    href: '#/work/job-accommodation-network',
  },
  {
    title: 'Gehry Engineering',
    image: 'gehry.png',
    alt: 'Gehry Engineering project',
    tags: ['Prototyping', 'Collaboration'],
    href: '#/work/gehry-engineering',
  },
  {
    title: 'CJ Affiliate Account Manager',
    image: 'cj-affiliate.png',
    alt: 'CJ Affiliate account manager project',
    tags: ['Interaction Design', 'Usability Testing'],
    href: '#/work/cj-affiliate-account-manager',
  },
  {
    title: 'FBS Flexmls and Spark',
    image: 'fbs.png',
    alt: 'FBS Flexmls and Spark project',
    tags: ['Marketplace', 'Information Architecture'],
    href: '#/work/flexmls-spark',
  },
  {
    title: 'Adobe XD Accessibility',
    image: 'adobe-xd.png',
    alt: 'Adobe XD accessibility project',
    tags: ['Accessibility', 'Prototyping'],
    href: '#/work/adobe-xd-accessibility',
  },
];

const caseStudyAsset = (study, fileName) => `${import.meta.env.BASE_URL}case-studies/${study}/${fileName}`;

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Bo Campbell, home">
        <span className="brand-mark" aria-hidden="true"><Rocket size={18} strokeWidth={2} /></span>
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

function CaseStudyFigure({ study = 'adobe-xd', src, alt, caption, className = '' }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.figure
      className={`case-figure ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <img src={caseStudyAsset(study, src)} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </motion.figure>
  );
}

function FlexmlsCaseStudy({ reduceMotion }) {
  return (
    <motion.div
      className="case-study"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <header className="case-hero flexmls-hero">
        <a className="back-link" href="#work">
          <ArrowLeft aria-hidden="true" size={18} /> Selected work
        </a>
        <p className="eyebrow">FBS Data Systems · Marketplace</p>
        <h1>Flexmls Spark App Store</h1>
        <p className="case-intro">
          A two-sided marketplace where developers publish real estate tools and agents find the apps that support their work.
        </p>
      </header>

      <dl className="case-facts">
        <div><dt>Company</dt><dd>FBS Data Systems</dd></div>
        <div><dt>Role</dt><dd>UX Designer</dd></div>
        <div><dt>Type</dt><dd>Web and mobile application</dd></div>
      </dl>

      <section className="case-section case-copy-grid" aria-labelledby="flex-brief-heading">
        <p className="case-kicker">The brief</p>
        <div className="case-copy">
          <h2 id="flex-brief-heading">Create a marketplace around the listing platform.</h2>
          <p>
            FBS is one of the primary real estate listing services brokers and agents use to manage their businesses. The opportunity was to create an app store where developers could sell compatible tools and Flexmls users could discover useful additions to their workflow.
          </p>
          <p>
            Most of the design effort centered on the administration experience: developers needed a clear way to submit an app, set pricing, and maintain their listing over time.
          </p>
        </div>
      </section>

      <div className="case-figure-pair flexmls-wireframes">
        <CaseStudyFigure
          study="flexmls"
          src="admin-wireframe-03.jpg"
          alt="Medium-fidelity wireframe for the Spark developer administration flow"
          caption="Exploring the developer submission flow."
        />
        <CaseStudyFigure
          study="flexmls"
          src="admin-wireframe-02.jpg"
          alt="Medium-fidelity wireframe for managing an app in Spark"
          caption="Organizing app details, pricing, and maintenance."
        />
      </div>

      <section className="case-section case-copy-grid" aria-labelledby="flex-process-heading">
        <p className="case-kicker">Process</p>
        <div className="case-copy">
          <h2 id="flex-process-heading">From sketches to a guided publishing flow.</h2>
          <p>
            I began with sketches, then moved into medium-fidelity wireframes in Microsoft Visio. The flow reduced app publishing to a sequence developers could follow without needing to understand the inner workings of the Flexmls ecosystem.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="flexmls"
        src="store-admin.jpg"
        alt="Refined Spark App Store developer administration interface"
        caption="The refined administration experience guides developers through introducing an app to the Flexmls community."
        className="case-figure-wide flexmls-screen"
      />

      <section className="case-section" aria-labelledby="flex-system-heading">
        <div className="case-copy narrow-copy">
          <p className="case-kicker">Two-sided system</p>
          <h2 id="flex-system-heading">One path to publish. Another to discover.</h2>
          <p>
            The product connected a focused developer workflow with a familiar customer storefront. Each side had different needs, but both depended on consistent app information and a simple path through the system.
          </p>
        </div>
        <ol className="focus-list">
          <li><span>01</span><strong>Submit and maintain</strong></li>
          <li><span>02</span><strong>Search and browse</strong></li>
          <li><span>03</span><strong>Evaluate and purchase</strong></li>
        </ol>
      </section>

      <CaseStudyFigure
        study="flexmls"
        src="store-home.jpg"
        alt="Spark App Store homepage showing real estate applications"
        caption="A familiar storefront supports keyword search, recent searches, and category browsing."
        className="case-figure-wide flexmls-screen"
      />

      <section className="case-section case-copy-grid" aria-labelledby="flex-discovery-heading">
        <p className="case-kicker">Discovery</p>
        <div className="case-copy">
          <h2 id="flex-discovery-heading">Borrow the conventions users already understand.</h2>
          <p>
            The customer-facing store followed established marketplace patterns and launched with applications already used in the community. Agents could search by keyword, revisit recent searches, or browse by category.
          </p>
          <p>
            Once an application looked promising, its detail view provided more imagery, product information, and pricing, followed by a direct purchase path.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="flexmls"
        src="store-detail.jpg"
        alt="Spark App Store application detail and pricing page"
        caption="The detail experience brings product context and purchasing into one focused view."
        className="case-figure-wide flexmls-screen"
      />

      <section className="case-result flexmls-result" aria-labelledby="flex-result-heading">
        <p className="case-kicker">Result</p>
        <h2 id="flex-result-heading">A clear route from app submission to adoption.</h2>
        <p>
          The finished concept gave developers a manageable publishing workflow and agents a recognizable place to find, assess, and purchase tools built for their real estate platform.
        </p>
        <a className="text-link" href="#work">
          Return to selected work <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>
    </motion.div>
  );
}

function CjAffiliateCaseStudy({ reduceMotion }) {
  return (
    <motion.div
      className="case-study"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <header className="case-hero cj-hero">
        <a className="back-link" href="#work">
          <ArrowLeft aria-hidden="true" size={18} /> Selected work
        </a>
        <p className="eyebrow">CJ Affiliate · Platform redesign</p>
        <h1>CJ Affiliate Account Manager</h1>
        <p className="case-intro">
          Redesigning publisher and advertiser tools through continuous research, prototyping, and delivery across three agile teams.
        </p>
      </header>

      <dl className="case-facts">
        <div><dt>Company</dt><dd>CJ Affiliate</dd></div>
        <div><dt>Role</dt><dd>Interaction Designer</dd></div>
        <div><dt>Type</dt><dd>Web application</dd></div>
      </dl>

      <section className="case-section case-copy-grid" aria-labelledby="cj-brief-heading">
        <p className="case-kicker">The brief</p>
        <div className="case-copy">
          <h2 id="cj-brief-heading">Modernize two critical customer platforms.</h2>
          <p>
            CJ set out to redesign its publisher and advertiser platforms in response to user feedback and a changing technology foundation. The account manager was central to how thousands of customers managed the advertising activity behind their income.
          </p>
          <p>
            As the sole designer supporting three agile teams, I conducted on-site research, created sketches and prototypes, delivered high-fidelity mockups, and paired directly with developers during implementation.
          </p>
        </div>
      </section>

      <section className="case-section cj-sprint-section" aria-labelledby="cj-sprint-heading">
        <div className="case-copy narrow-copy">
          <p className="case-kicker">Working model</p>
          <h2 id="cj-sprint-heading">Design inside the sprint, not ahead of it.</h2>
          <p>
            Every two-week sprint included design, testing, and development. I tested each iteration with five to seven users before changes were submitted, then worked alongside engineers to keep the implementation close to what had been validated.
          </p>
        </div>
        <ol className="focus-list">
          <li><span>01</span><strong>Research on site</strong></li>
          <li><span>02</span><strong>Prototype use cases</strong></li>
          <li><span>03</span><strong>Test every iteration</strong></li>
        </ol>
      </section>

      <CaseStudyFigure
        study="cj-affiliate"
        src="balsamiq-wireframes.jpg"
        alt="Low-fidelity Balsamiq wireframes for CJ Affiliate account management"
        caption="Low-fidelity prototypes kept early conversations focused on use cases and interaction."
        className="case-figure-wide cj-wide-figure"
      />

      <section className="case-section case-copy-grid" aria-labelledby="cj-use-cases-heading">
        <p className="case-kicker">Shared understanding</p>
        <div className="case-copy">
          <h2 id="cj-use-cases-heading">Make every use case visible before polishing the interface.</h2>
          <p>
            CJ’s product managers knew their customers deeply and had a clear view of what needed to be built. I worked with them to enumerate use cases, then translated those scenarios into low-fidelity Balsamiq prototypes for review.
          </p>
          <p>
            I also encouraged product managers to sketch their own ideas in Balsamiq. That shared medium made feedback more concrete while detailed wireframes kept attention on behavior instead of visual styling.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="cj-affiliate"
        src="cloud-grid.png"
        alt="Detailed CJ Affiliate account manager grid interface"
        caption="Detailed wireframes resolved dense account-management interactions before visual refinement."
        className="case-figure-wide cj-interface"
      />

      <section className="case-section case-copy-grid" aria-labelledby="cj-fidelity-heading">
        <p className="case-kicker">Increasing fidelity</p>
        <div className="case-copy">
          <h2 id="cj-fidelity-heading">Add realism only when it helps answer the next question.</h2>
          <p>
            As the interaction model stabilized, prototypes moved into Adobe Flex with richer behavior and more realistic user data. The added fidelity made it possible to evaluate complex account-management tasks in a setting closer to the production experience.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="cj-affiliate"
        src="advertiser-links-06.jpg"
        alt="Higher-fidelity CJ Affiliate advertiser links interface"
        caption="A functional prototype with realistic content supported deeper task-based evaluation."
        className="case-figure-wide cj-interface"
      />

      <section className="case-section cj-testing-grid" aria-labelledby="cj-testing-heading">
        <div className="case-copy">
          <p className="case-kicker">Validation</p>
          <h2 id="cj-testing-heading">Test, adjust, and return to the sprint.</h2>
          <p>
            Once the medium-fidelity interface was functional, I tested it with users and iterated until the major usability issues were resolved. Much of this happened rapidly with employees working through representative customer scenarios during the sprint.
          </p>
        </div>
        <CaseStudyFigure
          study="cj-affiliate"
          src="usability-test.jpg"
          alt="Participant completing a CJ Affiliate usability test"
          caption="Scenario-based testing fit directly into the two-week delivery cycle."
          className="cj-testing-photo"
        />
      </section>

      <CaseStudyFigure
        study="cj-affiliate"
        src="advertiser-links-05.png"
        alt="Final CJ Affiliate account manager advertiser links interface"
        caption="The redesigned account manager prepared for release."
        className="case-figure-wide cj-interface"
      />

      <section className="case-result cj-result" aria-labelledby="cj-result-heading">
        <p className="case-kicker">Result</p>
        <h2 id="cj-result-heading">A full interface replacement without disruption.</h2>
        <p>
          The new account manager was released over a weekend without incident. The team replaced the entire interface at once, and the response from customers who relied on it every day was very positive.
        </p>
        <a className="text-link" href="#work">
          Return to selected work <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>
    </motion.div>
  );
}

function GehryCaseStudy({ reduceMotion }) {
  return (
    <motion.div
      className="case-study"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <header className="case-hero gehry-hero">
        <a className="back-link" href="#work">
          <ArrowLeft aria-hidden="true" size={18} /> Selected work
        </a>
        <p className="eyebrow">Gehry Engineering · G-Team</p>
        <h1>Gehry Engineering</h1>
        <p className="case-intro">
          A collaborative building-information workspace designed for the complexity of Frank Gehry’s architecture.
        </p>
      </header>

      <dl className="case-facts">
        <div><dt>Company</dt><dd>Gehry Engineering</dd></div>
        <div><dt>Role</dt><dd>Lead Designer, contract</dd></div>
        <div><dt>Type</dt><dd>Web application</dd></div>
      </dl>

      <section className="case-section case-copy-grid" aria-labelledby="gehry-brief-heading">
        <p className="case-kicker">The brief</p>
        <div className="case-copy">
          <h2 id="gehry-brief-heading">Support buildings that push conventional systems past their limits.</h2>
          <p>
            Frank Gehry’s architecture is known for expressive, flowing forms. Those structures also place extraordinary demands on traditional building information modeling systems. Gehry assembled a startup team to create a BIM platform capable of supporting these unconventional designs.
          </p>
          <p>
            Working from one of Gehry’s Los Angeles design studios, our team set out to give engineers a collaborative application for viewing building-system data and storing the files they needed to coordinate their work.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="gehry"
        src="balsamiq-concept.jpg"
        alt="Low-fidelity Balsamiq concept for the Gehry G-Team interface"
        caption="Early wireframes gave the team and users a common model to review and test."
        className="case-figure-wide gehry-screen"
      />

      <section className="case-section" aria-labelledby="gehry-process-heading">
        <div className="case-copy narrow-copy">
          <p className="case-kicker">Process</p>
          <h2 id="gehry-process-heading">Prototype together, then build together.</h2>
          <p>
            I began with low-fidelity Balsamiq wireframes that the team could review and test with users. Higher-fidelity prototypes followed, giving us a more realistic environment for validation before the development team translated the work into code.
          </p>
          <p>
            Design and engineering collaborated online in real time, allowing the interface to evolve quickly as the team worked through the behavior of a new kind of building-information system.
          </p>
        </div>
        <ol className="focus-list">
          <li><span>01</span><strong>Information architecture</strong></li>
          <li><span>02</span><strong>Experience design</strong></li>
          <li><span>03</span><strong>Visual design</strong></li>
        </ol>
      </section>

      <section className="case-section case-copy-grid" aria-labelledby="gehry-workspace-heading">
        <p className="case-kicker">The workspace</p>
        <div className="case-copy">
          <h2 id="gehry-workspace-heading">One place to view, share, resolve, and store.</h2>
          <p>
            The G-Team interface brought building information and collaboration into the same environment. Engineers could inspect BIM data, share material with the project team, identify and fix issues, and maintain the files that documented the building.
          </p>
        </div>
      </section>

      <div className="gehry-gallery">
        <CaseStudyFigure
          study="gehry"
          src="gteam-01.jpg"
          alt="G-Team building information overview interface"
          caption="Building information organized for the engineering team."
          className="gehry-gallery-primary"
        />
        <CaseStudyFigure
          study="gehry"
          src="gteam-02.jpg"
          alt="G-Team collaboration and issue-management interface"
          caption="Collaboration and issue resolution in context."
        />
        <CaseStudyFigure
          study="gehry"
          src="gteam-03.jpg"
          alt="G-Team building file management interface"
          caption="Project files connected to the building model."
        />
      </div>

      <section className="case-result gehry-result" aria-labelledby="gehry-result-heading">
        <p className="case-kicker">Result</p>
        <h2 id="gehry-result-heading">A shared interface for unusually complex work.</h2>
        <p>
          G-Team translated dense building information into a collaborative workspace where engineers could coordinate data, files, and issues around architectural forms that conventional BIM tools struggled to support.
        </p>
        <a className="text-link" href="#work">
          Return to selected work <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>
    </motion.div>
  );
}

function JanCaseStudy({ reduceMotion }) {
  const mobileScreens = [
    { src: 'mobile-01.png', alt: 'JAN mobile application launch screen', caption: 'JAN application launch.' },
    { src: 'mobile-02.png', alt: 'Audience selection for employer, service provider, or individual', caption: 'A role-specific starting point.' },
    { src: 'mobile-03.png', alt: 'People list with active accommodation counts', caption: 'People and active requests at a glance.' },
    { src: 'mobile-04.png', alt: 'Employee profile listing workplace accommodations', caption: 'Accommodation history organized by person.' },
    { src: 'mobile-05.png', alt: 'Step-by-step workplace accommodation request process', caption: 'A visible path through the request process.' },
    { src: 'mobile-06.png', alt: 'Accommodation detail with status, dates, and supporting documents', caption: 'Status and documentation in one record.' },
  ];

  return (
    <motion.div
      className="case-study"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <header className="case-hero jan-hero">
        <a className="back-link" href="#work">
          <ArrowLeft aria-hidden="true" size={18} /> Selected work
        </a>
        <p className="eyebrow">IBM + West Virginia University</p>
        <h1>Mobile Accommodation Tracker</h1>
        <p className="case-intro">
          Helping employees and rehabilitation professionals navigate workplace accommodation requests with greater clarity.
        </p>
      </header>

      <dl className="case-facts">
        <div><dt>Client</dt><dd>Job Accommodation Network</dd></div>
        <div><dt>Role</dt><dd>Lead Designer, Product Manager</dd></div>
        <div><dt>Type</dt><dd>Web and mobile application</dd></div>
      </dl>

      <section className="case-section case-copy-grid" aria-labelledby="jan-brief-heading">
        <p className="case-kicker">The brief</p>
        <div className="case-copy">
          <h2 id="jan-brief-heading">Turn a manual, intimidating process into a guided experience.</h2>
          <p>
            The Job Accommodation Network is a nonprofit based at West Virginia University. JAN contracted IBM to build a mobile application that could help employees request accommodations in the workplace.
          </p>
          <p>
            The existing process was confusing for employees and rehabilitation professionals alike. JAN provided the information people needed to navigate the system, but the work was manual and the organization was overwhelmed by demand.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="jan"
        src="stakeholders.jpg"
        alt="Stakeholder map for the workplace accommodation process"
        caption="Mapping the many roles involved in requesting, evaluating, and providing accommodations."
        className="case-figure-wide jan-landscape"
      />

      <section className="case-section case-copy-grid" aria-labelledby="jan-research-heading">
        <p className="case-kicker">Research</p>
        <div className="case-copy">
          <h2 id="jan-research-heading">Understand the system through every participant.</h2>
          <p>
            As lead designer, I facilitated the design-thinking exercises and research. Because the service touched many roles and professions, we began by mapping stakeholders together and identifying the perspectives the product needed to support.
          </p>
          <p>
            I then developed personas for the target audiences, including the service providers responsible for helping employees evaluate and implement appropriate solutions.
          </p>
        </div>
      </section>

      <div className="case-figure-pair jan-research-pair">
        <CaseStudyFigure
          study="jan"
          src="rehab-professional-empathy.jpg"
          alt="Empathy map for a rehabilitation professional"
          caption="An empathy exercise for the rehabilitation-professional role."
        />
        <CaseStudyFigure
          study="jan"
          src="service-provider-persona.png"
          alt="Service provider persona for the Job Accommodation Network"
          caption="A persona grounded the service-provider experience."
        />
      </div>

      <section className="case-section case-copy-grid" aria-labelledby="jan-architecture-heading">
        <p className="case-kicker">Information architecture</p>
        <div className="case-copy">
          <h2 id="jan-architecture-heading">Rebuild deep reference material around the task.</h2>
          <p>
            The existing JAN website exposed a large body of information spread across many layers and pages. Translating that material to mobile created an opportunity to form new relationships between the content and the accommodation process.
          </p>
          <p>
            The resulting architecture replaced exploration through a deep site structure with a more linear flow, helping people encounter the right information in the context of the task they were completing.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="jan"
        src="information-architecture.png"
        alt="Information architecture diagram for JAN accommodation content"
        caption="Restructuring JAN’s existing material around a more direct task flow."
        className="case-figure-wide jan-landscape"
      />

      <section className="case-section case-copy-grid" aria-labelledby="jan-prototype-heading">
        <p className="case-kicker">Prototype</p>
        <div className="case-copy">
          <h2 id="jan-prototype-heading">Connect research, structure, and interaction.</h2>
          <p>
            I created the interactive prototype in Adobe XD, using the architecture to connect role-specific entry points, people and accommodation records, a visible request process, and the documentation required along the way.
          </p>
          <p>
            We tested the prototype with sponsor users and professionals from the industry, using their feedback to refine the flow and language.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="jan"
        src="xd-prototype-map.png"
        alt="Adobe XD prototype map for the JAN mobile accommodation tracker"
        caption="The complete Adobe XD prototype connected the end-to-end accommodation workflow."
        className="jan-prototype-map"
      />

      <section className="case-section" aria-labelledby="jan-mobile-heading">
        <div className="case-copy narrow-copy">
          <p className="case-kicker">Mobile experience</p>
          <h2 id="jan-mobile-heading">Make progress visible and records manageable.</h2>
          <p>
            The mobile concept adapts to the user’s role, keeps people and requests organized, and turns the accommodation process into a set of recognizable steps. Status, timing, and supporting documents remain attached to each accommodation record.
          </p>
        </div>
      </section>

      <div className="jan-mobile-gallery">
        {mobileScreens.map((screen) => (
          <CaseStudyFigure key={screen.src} study="jan" {...screen} />
        ))}
      </div>

      <section className="case-result jan-result" aria-labelledby="jan-result-heading">
        <p className="case-kicker">Result</p>
        <h2 id="jan-result-heading">A clearer path through a daunting request.</h2>
        <p>
          The concept reorganized JAN’s extensive guidance around the accommodation task itself, giving employees and professionals a linear way to understand progress, manage information, and keep the request moving.
        </p>
        <a className="text-link" href="#work">
          Return to selected work <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>
    </motion.div>
  );
}

function AtisCdtCaseStudy({ reduceMotion }) {
  const [isUnlocked, setIsUnlocked] = useState(
    () => window.sessionStorage.getItem('atis-cdt-unlocked') === 'true',
  );
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUnlock = (event) => {
    event.preventDefault();

    if (password === 'ATIS26') {
      window.sessionStorage.setItem('atis-cdt-unlocked', 'true');
      setIsUnlocked(true);
      setPasswordError('');
      return;
    }

    setPasswordError('That password is not correct.');
  };

  if (!isUnlocked) {
    return (
      <motion.section
        className="atis-password-gate"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        aria-labelledby="atis-password-heading"
      >
        <LockKeyhole aria-hidden="true" size={28} strokeWidth={1.7} />
        <p className="case-kicker">Protected case study</p>
        <h1 id="atis-password-heading">Command Directed Training</h1>
        <p>Enter the password to view this project.</p>
        <form className="atis-password-form" onSubmit={handleUnlock}>
          <label htmlFor="atis-password">Password</label>
          <div className="atis-password-controls">
            <input
              id="atis-password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setPasswordError('');
              }}
              autoComplete="current-password"
              aria-describedby={passwordError ? 'atis-password-error' : undefined}
              aria-invalid={Boolean(passwordError)}
              autoFocus
            />
            <button type="submit">Unlock</button>
          </div>
          {passwordError && <p id="atis-password-error" role="alert">{passwordError}</p>}
        </form>
        <a className="back-link" href="#work">
          <ArrowLeft aria-hidden="true" size={18} /> Selected work
        </a>
      </motion.section>
    );
  }

  const personas = [
    { title: 'Commander', level: 'Division and above', src: 'persona-leader.png' },
    { title: 'Unit leader', level: 'Company, battery, troop', src: 'persona-soldier.png' },
    { title: 'Soldier', level: 'Individual', src: 'persona-soldier.png' },
  ];

  const prototypeScreens = [
    { src: 'prototype-01.png', alt: 'ATIS command-directed training prototype overview' },
    { src: 'prototype-02.png', alt: 'ATIS training creation prototype screen' },
    { src: 'prototype-03.png', alt: 'ATIS unit assignment prototype screen' },
    { src: 'prototype-04.png', alt: 'ATIS training status prototype screen' },
    { src: 'prototype-05.png', alt: 'ATIS acknowledgment prototype screen' },
    { src: 'prototype-06.png', alt: 'ATIS completion dashboard prototype screen' },
  ];

  return (
    <motion.div
      className="case-study"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <header className="case-hero atis-hero">
        <a className="back-link" href="#work">
          <ArrowLeft aria-hidden="true" size={18} /> Selected work
        </a>
        <p className="eyebrow">U.S. Army training systems</p>
        <h1>Command Directed Training</h1>
        <p className="case-intro">
          A responsive system for creating, assigning, tracking, and reporting the ad hoc training that falls outside the Army's standardized mandatory programs.
        </p>
      </header>

      <dl className="case-facts">
        <div><dt>Company</dt><dd>Logistics Management Institute</dd></div>
        <div><dt>Role</dt><dd>Lead Product Designer</dd></div>
        <div><dt>Type</dt><dd>Responsive web application</dd></div>
      </dl>

      <section className="case-section case-copy-grid" aria-labelledby="atis-brief-heading">
        <p className="case-kicker">The brief</p>
        <div className="case-copy">
          <h2 id="atis-brief-heading">Give ad hoc training a dependable system of record.</h2>
          <p>
            Most Army training appears in mandatory guides that are standardized across soldiers and supported by official lists. Commanders also create unique events for particular units, but there was no digital system for creating, assigning, and recording that work.
          </p>
          <p>
            Events could be lost, assignments could not adapt cleanly as personnel moved, and leaders lacked a dashboard view of completion. The goal was real-time preparedness information from the top of the command structure down to individual soldiers.
          </p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="atis-personas-heading">
        <div className="case-copy narrow-copy">
          <p className="case-kicker">Understanding the system</p>
          <h2 id="atis-personas-heading">Design across three levels of responsibility.</h2>
          <p>
            Documentation review, internal subject-matter interviews, and user research revealed three primary perspectives: senior commanders monitoring readiness, small-unit leaders coordinating assignments, and soldiers completing training.
          </p>
        </div>
        <div className="atis-personas">
          {personas.map((persona) => (
            <div key={persona.title} className="atis-persona">
              <img src={caseStudyAsset('atis-cdt', persona.src)} alt="" />
              <div><h3>{persona.title}</h3><p>{persona.level}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="case-section case-copy-grid" aria-labelledby="atis-interviews-heading">
        <p className="case-kicker">Interviews</p>
        <div className="case-copy">
          <h2 id="atis-interviews-heading">Learn how training moves through the command structure today.</h2>
          <p>
            Eight soldiers participated across five sessions. Our UX researcher facilitated, and the team synthesized each recorded interview in Dovetail, using its AI tools to identify repeated points across the material.
          </p>
        </div>
      </section>

      <section className="atis-interview-quotes" aria-label="Selected interview quotes">
        <blockquote>
          <p>Command directed training should be its own category in the navigation hierarchy, separate from mandatory training and tasks.</p>
          <footer>Sergeant Major</footer>
        </blockquote>
        <blockquote>
          <p>CG has asked for a way to see ourselves in regards to H2F... it's been challenging to find the right metrics and then be able to put it into a visual that's easy to understand.</p>
          <footer>Colonel</footer>
        </blockquote>
        <blockquote>
          <p>First Corps requires a system to track and visualize command-directed training events like 12-mile ruck marches and 4-mile timed runs.</p>
          <footer>Lieutenant Colonel</footer>
        </blockquote>
      </section>

      <section className="case-section case-copy-grid" aria-labelledby="atis-workflow-heading">
        <p className="case-kicker">Journey and workflow</p>
        <div className="case-copy">
          <h2 id="atis-workflow-heading">Translate field knowledge into an end-to-end operating model.</h2>
          <p>
            Using what we learned from soldiers and subject-matter experts, the team mapped the complete workflow from command creation through unit acknowledgment, assignment, completion, and reporting.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="atis-cdt"
        src="workflow.jpg"
        alt="ATIS command-directed training user journey and workflow"
        caption="The shared workflow connected command decisions to completion at the soldier level."
        className="case-figure-wide atis-diagram"
      />

      <section className="case-section case-copy-grid" aria-labelledby="atis-iteration-heading">
        <p className="case-kicker">Ideation and prototyping</p>
        <div className="case-copy">
          <h2 id="atis-iteration-heading">Move quickly from chunky concepts to testable behavior.</h2>
          <p>
            The lead architect wanted to participate directly in prototyping and proposed moving from low to high fidelity in Lucidchart rather than Figma. We tested the approach, beginning with deliberately rough interfaces for discussion and progressively refining them through team reviews.
          </p>
          <p>
            Working with a junior designer, I then created clickable prototypes in VS Code with Codex and our design library. That let us move rapidly from wireframes to realistic interactions that could go back in front of users.
          </p>
        </div>
      </section>

      <div className="atis-iteration-gallery">
        <article className="atis-fidelity-stage">
          <header><span>01</span><h3>Low Fidelity Wires</h3></header>
          <CaseStudyFigure study="atis-cdt" src="low-fidelity.jpg" alt="Low-fidelity ATIS interface concepts" caption="Chunky low-fidelity screens made structural discussion fast." />
        </article>
        <article className="atis-fidelity-stage">
          <header><span>02</span><h3>Medium Fidelity Progression</h3></header>
          <CaseStudyFigure study="atis-cdt" src="medium-fidelity.jpg" alt="Medium-fidelity ATIS interface progression" caption="Repeated reviews moved the workflow toward user validation." />
          <CaseStudyFigure study="atis-cdt" src="high-fidelity.png" alt="Refined ATIS interface progression" caption="The refined interface established the direction for the coded prototype." />
        </article>
        <article className="atis-fidelity-stage">
          <header><span>03</span><h3>High Fidelity, Clickable AI-enabled Prototyping</h3></header>
          <div className="atis-prototype-gallery">
            {prototypeScreens.map((screen, index) => (
              <CaseStudyFigure
                key={screen.src}
                study="atis-cdt"
                {...screen}
                caption={`Prototype view ${String(index + 1).padStart(2, '0')}`}
              />
            ))}
          </div>
        </article>
      </div>

      <section className="case-section case-copy-grid" aria-labelledby="atis-challenges-heading">
        <p className="case-kicker">Core challenges</p>
        <div className="case-copy">
          <h2 id="atis-challenges-heading">Make dates and acknowledgments survive personnel movement.</h2>
          <ol className="atis-challenge-list">
            <li>
              <span>01</span>
              <p>Standard training came with general completion dates, but ad hoc training required custom “suspense” dates. Those dates had to preserve credit when soldiers moved into or out of units.</p>
            </li>
            <li>
              <span>02</span>
              <p>Training could be assigned at high command levels but executed several levels down by companies, batteries, and troops. The system needed an acknowledgment and notification process that traveled reliably through every layer.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="case-section case-copy-grid" aria-labelledby="atis-validation-heading">
        <p className="case-kicker">Checking the work</p>
        <div className="case-copy">
          <h2 id="atis-validation-heading">Review usability, architecture, delivery, and field fit on a regular cadence.</h2>
          <ol className="atis-check-list">
            <li>
              <span>01</span>
              <div>
                <h3>Bi-weekly Design Critiques</h3>
                <p>Twice a week I held a design critique meeting where the design team discussed designs. Any new progress was reviewed and discussed for usability and consistency.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Weekly Architecture Reviews</h3>
                <p>Each week I met with the architecture lead and the program manager to review progress for any red flags in the technical foundation.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Sprint/Iteration Reviews and Demos</h3>
                <p>Every two weeks we demoed our interface during sprint iteration reviews that included development team and program team leads.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>User Validation Interviews</h3>
                <p>We returned to two different users who we had interviewed previously to validate our work.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="case-section case-copy-grid" aria-labelledby="atis-lessons-heading">
        <p className="case-kicker">Lessons learned</p>
        <div className="case-copy">
          <h2 id="atis-lessons-heading">Speed inside a small group can create debt outside it.</h2>
          <p>
            Rapid prototyping with product management and architecture moved quickly, but we went too far without including a key product owner and developers. Late stakeholder input and data-structure problems forced changes to designs and workflows.
          </p>
          <p>
            On the next project, we involved every key stakeholder throughout the process and moved from research to high fidelity more successfully. The lesson was not to slow down, but to make the fast loop broad enough.
          </p>
        </div>
      </section>

      <section className="case-result atis-result" aria-labelledby="atis-result-heading">
        <p className="case-kicker">Delivery</p>
        <h2 id="atis-result-heading">A build-ready prototype with two ways to understand the interaction.</h2>
        <p>
          Prototype screens returned to Figma with flow arrows documenting behavior, while the exported VS Code project let the lead developer run and inspect interactions directly. Development was in progress as of July 21, 2026.
        </p>
        <a className="text-link" href="#work">
          Return to selected work <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>
    </motion.div>
  );
}

function ProcorePartnerCaseStudy({ reduceMotion }) {
  const personas = [
    { src: 'persona-customer.png', alt: 'Procore customer persona', caption: 'Customers use apps to extend Procore into specialty work.' },
    { src: 'persona-partner.png', alt: 'Procore app partner persona', caption: 'Partners create and publish apps for the marketplace.' },
    { src: 'persona-manager.png', alt: 'Procore integration manager persona', caption: 'Integration managers support partners through approval.' },
  ];

  return (
    <motion.div
      className="case-study"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <header className="case-hero procore-hero">
        <a className="back-link" href="#work">
          <ArrowLeft aria-hidden="true" size={18} /> Selected work
        </a>
        <p className="eyebrow">Procore Ecosystem</p>
        <h1>Partner Experience</h1>
        <p className="case-intro">
          A long-range vision and first incremental release for helping partners build, approve, and publish apps across Procore's connected ecosystem.
        </p>
      </header>

      <dl className="case-facts">
        <div><dt>Company</dt><dd>Procore Technologies</dd></div>
        <div><dt>Role</dt><dd>Staff Product Designer</dd></div>
        <div><dt>Scope</dt><dd>Strategy, research, design, delivery</dd></div>
      </dl>

      <section className="case-section case-copy-grid" aria-labelledby="procore-brief-heading">
        <p className="case-kicker">The ecosystem</p>
        <div className="case-copy">
          <h2 id="procore-brief-heading">Help customers extend one construction platform into specialized work.</h2>
          <p>
            The Procore Ecosystem connects the Marketplace, Developer Portal, and App Administration. Customer acquisition and retention depend on extending Procore into specialty contract areas without forcing construction teams to fragment work across more software and administration.
          </p>
          <p>
            The Ecosystem team set out to establish a three-to-five-year vision, create an iterative roadmap, and begin delivering it. As staff product designer, I represented users in strategy and prioritization while owning product design from research through implementation.
          </p>
        </div>
      </section>

      <section className="case-result procore-jtbd" aria-labelledby="procore-jtbd-heading">
        <p className="case-kicker">Customer job to be done</p>
        <h2 id="procore-jtbd-heading">Keep construction work, data, and administration in one system.</h2>
        <p>
          Customers wanted consolidated data, fewer software fees, and fewer systems to administer so they could finish projects on time and on budget.
        </p>
      </section>

      <section className="case-section case-copy-grid" aria-labelledby="procore-problem-heading">
        <p className="case-kicker">The problem</p>
        <div className="case-copy">
          <h2 id="procore-problem-heading">A fast start had become a difficult path to scale.</h2>
          <p>
            The Ecosystem began quickly after a hackathon to provide a framework for app creation. Over time, direct research, user feedback, and internal feedback showed gaps that prevented customers from extending Procore easily where they needed it most.
          </p>
          <p>
            As a newcomer to the domain, I facilitated stakeholder and affinity mapping with the full team. We identified three primary archetypes: customers who use apps, partners who create them, and Procore integration managers who support the process.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="procore-partner"
        src="stakeholder-map.png"
        alt="Stakeholder map for the Procore Ecosystem"
        caption="The stakeholder exercise clarified who our decisions would affect."
        className="case-figure-wide procore-artifact"
      />

      <section className="case-section case-copy-grid" aria-labelledby="procore-journey-heading">
        <p className="case-kicker">Journey research</p>
        <div className="case-copy">
          <h2 id="procore-journey-heading">Follow an app from proposal to marketplace approval.</h2>
          <p>
            I mapped the partner journey using ten partner interviews conducted with the product manager, an integration-manager focus group, UserVoice feedback, a heuristic evaluation, and two interviews with Procore salespeople.
          </p>
          <p>
            The map exposed pain across all three user groups. Apps could take from one week to three months to approve, PIM approvals required 44 steps, and many problems traced back to a development process with too little guidance.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="procore-partner"
        src="journey-map.png"
        alt="Journey map for proposing and approving a Procore Marketplace app"
        caption="The partner journey connected development friction to downstream approval delays."
        className="case-figure-wide procore-wide-diagram"
      />

      <section className="case-section procore-vision-section" aria-labelledby="procore-vision-heading">
        <div className="case-copy-grid">
          <p className="case-kicker">Vision story</p>
          <div className="case-copy">
            <h2 id="procore-vision-heading">Turn research into a North Star the organization could support.</h2>
            <p>
              Together with the product manager, I compiled the research that we had about our users and stakeholders and wrote a story that compared the as-is experience to a vision of what the ecosystem could be in three to five years. The story was presented to the executive leadership team for approval and became our “Northstar” direction for the team.
            </p>
          </div>
        </div>

        <div className="procore-vision-artifacts">
          <CaseStudyFigure
            study="procore-partner"
            src="research-takeaways.png"
            alt="Overview of the complete Procore Ecosystem vision story"
            caption="The complete story moves from the current ecosystem and stakeholder experience through the as-is journey to a three-to-five-year future state."
            className="case-figure-wide procore-wide-diagram"
          />

          <CaseStudyFigure
            study="procore-partner"
            src="vision-story.png"
            alt="Future-state slide from the Procore Ecosystem vision story"
            caption="A future-state slide shows an inductive, step-by-step developer experience within the larger vision."
            className="case-figure-wide procore-artifact"
          />
        </div>
      </section>

      <section className="case-section" aria-labelledby="procore-personas-heading">
        <div className="case-copy narrow-copy">
          <p className="case-kicker">Knowing the users</p>
          <h2 id="procore-personas-heading">Design for the whole ecosystem, then start at its highest-leverage point.</h2>
          <p>
            I created personas around the jobs and pain of our primary stakeholders. Many issues began while partners were creating apps in the Developer Portal, making development-process improvements the highest-impact, lowest-effort place to begin.
          </p>
        </div>
      </section>

      <div className="procore-persona-gallery">
        {personas.map((persona) => (
          <CaseStudyFigure key={persona.src} study="procore-partner" {...persona} />
        ))}
      </div>

      <section className="case-section case-copy-grid" aria-labelledby="procore-testing-heading">
        <p className="case-kicker">Baseline usability</p>
        <div className="case-copy">
          <h2 id="procore-testing-heading">The documented path was not the path people followed.</h2>
          <p>
            To validate our priorities and establish baseline metrics, I facilitated five open-ended, one-hour usability sessions with internal developers. The work confirmed our assumptions and revealed issues we had not previously seen.
          </p>
          <p>
            Documentation was intended to move developers repeatedly from instruction to action. In practice, every participant took a different unguided route toward difficult success or failure, with manifest-code editing creating the most confusion.
          </p>
        </div>
      </section>

      <div className="procore-paths">
        <CaseStudyFigure
          study="procore-partner"
          src="intended-path.png"
          alt="Intended path between Procore documentation and app-building actions"
          caption="The intended path alternated cleanly between documentation and action."
        />
        <CaseStudyFigure
          study="procore-partner"
          src="actual-path.png"
          alt="Actual path taken by a developer through Procore app creation"
          caption="Observed paths were fragmented, inconsistent, and sometimes unsuccessful."
        />
      </div>

      <section className="case-section case-copy-grid" aria-labelledby="procore-focus-heading">
        <p className="case-kicker">Product focus</p>
        <div className="case-copy">
          <h2 id="procore-focus-heading">Replace manifest code editing with a guided form.</h2>
          <p>
            Manifest creation caused the most stumbling, so we focused the first increment there. The goal was to remove code editing, copying, and pasting while maintaining the capabilities of the existing system.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="procore-partner"
        src="legacy-manifest.png"
        alt="Legacy Procore manifest-creation modal"
        caption="The existing manifest modal exposed technical structure without enough guidance."
        className="case-figure-wide procore-artifact"
      />

      <section className="case-section case-copy-grid" aria-labelledby="procore-architecture-heading">
        <p className="case-kicker">Architecture and discovery</p>
        <div className="case-copy">
          <h2 id="procore-architecture-heading">Design the solution with technical constraints in the room.</h2>
          <p>
            Once the team committed to a form-based manifest flow, we held architectural sessions to uncover technical constraints and define the intended user path together. I translated those discussions into alternative flows that we could evaluate as a group.
          </p>
        </div>
      </section>

      <div className="procore-discovery-gallery">
        <CaseStudyFigure
          study="procore-partner"
          src="architecture.png"
          alt="Technical architecture exploration for manifest creation"
          caption="Architecture sessions exposed constraints before interface decisions hardened."
        />
        <CaseStudyFigure
          study="procore-partner"
          src="user-flow.png"
          alt="Proposed user flow for form-based manifest creation"
          caption="Shared flow reviews aligned product, design, and engineering."
        />
        <CaseStudyFigure
          study="procore-partner"
          src="low-fidelity.png"
          alt="Detailed possible user flow showing pages, user actions, system actions, questions, and alternate paths"
          caption="A detailed possible flow mapped user and system actions across app creation and component configuration."
        />
      </div>

      <section className="case-section case-copy-grid" aria-labelledby="procore-prototype-heading">
        <p className="case-kicker">Iterative prototyping</p>
        <div className="case-copy">
          <h2 id="procore-prototype-heading">Keep early reviews about behavior, then add system fidelity.</h2>
          <p>
            I used a low-fidelity Figma library so reviews stayed focused on the experience rather than visual polish. I created seven iterations, reviewed them with the product manager, brought three to the full team, and walked stakeholders through the strongest directions.
          </p>
          <p>
            I then rebuilt the selected experience with design-system components. The high-fidelity prototype gave stakeholders the complete flow and provided the team with a practical reference while building and refining interactions in agile development.
          </p>
        </div>
      </section>

      <div className="procore-prototype-gallery">
        <CaseStudyFigure study="procore-partner" src="iteration-review.png" alt="Manifest prototype iterations reviewed by the product team" caption="Seven iterations narrowed toward a shared direction." />
        <CaseStudyFigure study="procore-partner" src="high-fidelity-flow.png" alt="High-fidelity form-based manifest flow" caption="Design-system components made the intended experience implementation-ready." />
        <CaseStudyFigure
          study="procore-partner"
          src="final-interface.png"
          alt="Final Procore form-based app and manifest creation interface"
          caption="The first release replaced code editing with a guided form-based experience."
          className="procore-final-interface"
        />
      </div>

      <section className="case-result procore-result" aria-labelledby="procore-result-heading">
        <p className="case-kicker">First incremental release</p>
        <h2 id="procore-result-heading">A simpler manifest flow without creating debt on the road to the vision.</h2>
        <p>
          Partners could now create an app entirely through forms instead of editing code and searching documentation. The release maintained parity with the legacy system and introduced a mutable app version, eliminating unnecessary version creation while moving the Developer Portal toward the North Star.
        </p>
        <a className="text-link" href="#work">
          Return to selected work <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>
    </motion.div>
  );
}

function AccessibleDesignThinkingCaseStudy({ reduceMotion }) {
  const researchStreams = [
    {
      number: '01',
      title: 'Product teams',
      text: 'We interviewed teams responsible for high-priority products and ran a company-wide survey to understand where accessibility broke down during delivery.',
    },
    {
      number: '02',
      title: 'Designers',
      text: 'Through IBM Design Operations and Design Camp, I studied designers\' prior knowledge and mapped the moments in Design Thinking where accessibility could have the greatest effect.',
    },
    {
      number: '03',
      title: 'Design Camp cohorts',
      text: 'Across one year, three camps and 18 teams let us test different ways of teaching accessibility, then observe how that learning changed real six-week product projects.',
    },
  ];

  const solutionPillars = [
    {
      number: '01',
      title: 'Design education',
      text: 'A focused one-hour presentation built empathy, clarified who accessibility serves, and introduced a guided approach without overwhelming designers with technical detail.',
    },
    {
      number: '02',
      title: 'Design framework',
      text: 'The need for ongoing, contextual guidance led to the IBM Accessibility Toolkit: a role-aware guide that placed accessibility tasks at the right points in Design Thinking so designers, product managers, and developers could prevent debt as they worked.',
    },
    {
      number: '03',
      title: 'Implementation tools',
      text: 'Usability testing and redesign made IBM\'s developer testing and reporting tools more intuitive for the teams responsible for implementation.',
    },
    {
      number: '04',
      title: 'Advocacy',
      text: 'Workshops and talks brought the approach to the wider accessibility community at LinkedIn, Adobe MAX, Human Factors International, and South by Southwest.',
    },
  ];

  return (
    <motion.div
      className="case-study"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <header className="case-hero design-thinking-hero">
        <a className="back-link" href="#work">
          <ArrowLeft aria-hidden="true" size={18} /> Selected work
        </a>
        <p className="eyebrow">IBM Accessibility + IBM Design Thinking</p>
        <h1>Accessible Design Thinking</h1>
        <p className="case-intro">
          Integrating accessibility into IBM's product-development framework so teams could create inclusive products without accumulating technical debt.
        </p>
      </header>

      <dl className="case-facts">
        <div><dt>Company</dt><dd>IBM</dd></div>
        <div><dt>Role</dt><dd>Lead Designer, IBM Accessibility</dd></div>
        <div><dt>Status</dt><dd>Delivered</dd></div>
      </dl>

      <section className="case-section case-copy-grid" aria-labelledby="design-thinking-brief-heading">
        <p className="case-kicker">The brief</p>
        <div className="case-copy">
          <h2 id="design-thinking-brief-heading">Make accessibility part of the work, not a repair before release.</h2>
          <p>
            IBM Design Thinking gave product teams a shared way to understand users and deliver valuable products. Every IBM product also needed to meet WCAG AA, yet accessibility was frequently addressed late, after decisions had hardened and significant technical debt had accumulated.
          </p>
          <p>
            As lead designer for IBM Accessibility, I was responsible for integrating accessibility into that framework so teams could produce inclusive outcomes throughout development rather than depending on months of remediation.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="accessible-design-thinking"
        src="design-thinking-process.png"
        alt="Human-centered accessibility symbol rendered as a color-vision test"
        caption="Accessibility became a lens applied throughout the product-development process."
        className="case-figure-wide design-thinking-artifact"
      />

      <section className="case-section" aria-labelledby="design-thinking-research-heading">
        <div className="case-copy narrow-copy">
          <p className="case-kicker">Research</p>
          <h2 id="design-thinking-research-heading">Study the system from three connected perspectives.</h2>
          <p>
            We combined interviews, a company-wide survey, direct access to design operations, and longitudinal experiments inside real product work. That mix helped distinguish knowledge gaps from process failures.
          </p>
        </div>
        <ol className="design-thinking-streams">
          {researchStreams.map((stream) => (
            <li key={stream.number}>
              <span>{stream.number}</span>
              <div>
                <h3>{stream.title}</h3>
                <p>{stream.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="case-section case-copy-grid" aria-labelledby="design-thinking-findings-heading">
        <p className="case-kicker">Findings</p>
        <div className="case-copy">
          <h2 id="design-thinking-findings-heading">Teams wanted to include everyone, but lacked timely guidance.</h2>
          <p>
            Product teams were frustrated because accessibility arrived too late. Developers then spent months working with specialists to repair unexpected issues, creating severe friction with executives who had committed to delivery dates.
          </p>
          <p>
            Most designers had only cursory accessibility knowledge and did not know when or how to address it within Design Thinking. Experience varied widely, but nearly everyone expressed empathy for people with disabilities and a desire to design products that worked for all users.
          </p>
          <p>
            Design Camp experiments showed that the specific disability assigned to a team mattered less than consistently focusing attention on accessibility during each exercise. They also showed that designers could not retain every technical requirement; ongoing, contextual guidance was essential.
          </p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="design-thinking-solution-heading">
        <div className="case-copy narrow-copy">
          <p className="case-kicker">The system</p>
          <h2 id="design-thinking-solution-heading">Intervene before debt forms, then support teams through delivery.</h2>
          <p>
            The research made early attention the central strategy. Designers became a key focus, while the wider product team received guidance and simpler tools for carrying accessible intent through implementation.
          </p>
        </div>
        <ol className="design-thinking-pillars">
          {solutionPillars.map((pillar) => (
            <li key={pillar.number}>
              <span>{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </li>
          ))}
        </ol>
        <div className="design-thinking-resources">
          <p>Toolkit resources</p>
          <nav aria-label="Accessibility Toolkit resources">
            <a href="https://www.ibm.com/able/toolkit/" target="_blank" rel="noreferrer">
              <span>Live toolkit</span>
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
            <a href="#/work/ibm-accessibility-toolkit">
              <span>Toolkit case study</span>
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </nav>
        </div>
      </section>

      <CaseStudyFigure
        study="accessible-design-thinking"
        src="accessibility-toolkit.png"
        alt="IBM Accessibility Toolkit aligned to the IBM Design Thinking framework"
        caption="The guide placed role-specific accessibility work within the existing Design Thinking process."
        className="design-thinking-toolkit"
      />

      <section className="case-result design-thinking-result" aria-labelledby="design-thinking-result-heading">
        <p className="case-kicker">Result</p>
        <h2 id="design-thinking-result-heading">A repeatable path from empathy to accessible implementation.</h2>
        <p>
          The program reframed accessibility as a continuous product responsibility rather than a final compliance gate. Education established empathy, the framework supplied timely guidance, improved tools supported implementation, and advocacy carried the model beyond IBM.
        </p>
        <a className="text-link" href="#work">
          Return to selected work <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>
    </motion.div>
  );
}

function AccessibilityComplianceCaseStudy({ reduceMotion }) {
  return (
    <motion.div
      className="case-study"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <header className="case-hero compliance-hero">
        <a className="back-link" href="#work">
          <ArrowLeft aria-hidden="true" size={18} /> Selected work
        </a>
        <p className="eyebrow">IBM Accessibility</p>
        <h1>Accessibility Compliance System</h1>
        <p className="case-intro">
          Redesigning the certification system used across IBM products to remove friction, clarify complex work, and reach full participation.
        </p>
      </header>

      <dl className="case-facts">
        <div><dt>Company</dt><dd>IBM</dd></div>
        <div><dt>Role</dt><dd>Lead UX Designer</dd></div>
        <div><dt>Type</dt><dd>Internal web application</dd></div>
      </dl>

      <section className="case-section case-copy-grid" aria-labelledby="compliance-brief-heading">
        <p className="case-kicker">The brief</p>
        <div className="case-copy">
          <h2 id="compliance-brief-heading">Turn a required process into one people could complete confidently.</h2>
          <p>
            IBM's legacy compliance system supported accessibility certification for every product. The redesign aimed for 100 percent participation by making a difficult, high-stakes workflow easier to understand and complete.
          </p>
          <p>
            Because our team maintained the existing application, we already knew its users and had substantial feedback. We began with current-state scenarios that made familiar pain points visible and actionable.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="accessibility-compliance"
        src="as-is-scenario.png"
        alt="Current-state journey through the IBM accessibility compliance process"
        caption="The current-state scenario exposed friction across the certification journey."
        className="case-figure-wide compliance-artifact"
      />

      <section className="case-section case-copy-grid" aria-labelledby="compliance-priorities-heading">
        <p className="case-kicker">Journey and priorities</p>
        <div className="case-copy">
          <h2 id="compliance-priorities-heading">Validate assumptions, then scope around the most consequential pain.</h2>
          <p>
            I facilitated a journey-mapping exercise to understand the user path and locate its sharpest pain points. We reviewed the map with users and stakeholders, validated our assumptions, and prioritized the issues that the initial release needed to solve.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="accessibility-compliance"
        src="priorities.png"
        alt="Prioritized pain points for the compliance system redesign"
        caption="Validated pain points were prioritized to define the initial scope."
        className="case-figure-wide compliance-artifact"
      />

      <section className="case-section case-copy-grid" aria-labelledby="compliance-architecture-heading">
        <p className="case-kicker">Information architecture</p>
        <div className="case-copy">
          <h2 id="compliance-architecture-heading">Explore the tradeoffs imposed by the design system.</h2>
          <p>
            While the team scoped the release, I explored how the information should be organized. Design-system constraints forced difficult choices, so I compared multiple architecture scenarios and reviewed the benefits and drawbacks of each with the team.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="accessibility-compliance"
        src="architecture.png"
        alt="Information architecture options for the compliance system"
        caption="Architecture alternatives made system constraints and navigation tradeoffs explicit."
        className="case-figure-wide compliance-architecture"
      />

      <section className="case-section case-copy-grid" aria-labelledby="compliance-sketching-heading">
        <p className="case-kicker">Sketching and wireframes</p>
        <div className="case-copy">
          <h2 id="compliance-sketching-heading">Move freely on paper, then make the solution reviewable.</h2>
          <p>
            With an architecture in place, I sketched by hand to explore solutions without the influence or constraints of digital tools. The strongest ideas became wireframes that the product team, stakeholders, and users could review together.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="accessibility-compliance"
        src="sketches.jpg"
        alt="Hand-drawn interface sketches for the compliance system"
        caption="Hand sketches opened the solution space before interface details hardened."
        className="case-figure-wide compliance-sketches"
      />

      <div className="case-figure-pair compliance-wireframes">
        <CaseStudyFigure
          study="accessibility-compliance"
          src="wireframe-01.png"
          alt="Early compliance system welcome-page wireframe"
          caption="Early welcome-page direction."
        />
        <CaseStudyFigure
          study="accessibility-compliance"
          src="wireframe-02.png"
          alt="Refined compliance system welcome-page wireframe"
          caption="A refined state ready for wider review."
        />
      </div>

      <section className="case-section case-copy-grid" aria-labelledby="compliance-prototype-heading">
        <p className="case-kicker">Prototype and testing</p>
        <div className="case-copy">
          <h2 id="compliance-prototype-heading">Test the prioritized workflow with a realistic system.</h2>
          <p>
            I expanded the wireframes into a fully functional Sketch prototype using Craft and InVision. The prototype addressed the prioritized pain points and gave us enough fidelity to validate the complete interaction rather than isolated screens.
          </p>
          <p>
            We ran two rounds of five remote sessions with people at varied experience levels. The research took place during COVID-19, so every session was conducted remotely.
          </p>
        </div>
      </section>

      <div className="case-figure-pair compliance-validation-gallery">
        <CaseStudyFigure
          study="accessibility-compliance"
          src="prototype.png"
          alt="Functional prototype of the IBM Accessibility Compliance System"
          caption="A connected prototype supported realistic task validation."
        />
        <CaseStudyFigure
          study="accessibility-compliance"
          src="remote-testing.png"
          alt="Remote usability testing session for the compliance system"
          caption="Two rounds of remote testing covered varied experience levels."
        />
      </div>

      <section className="case-section case-copy-grid" aria-labelledby="compliance-build-heading">
        <p className="case-kicker">Agile development</p>
        <div className="case-copy">
          <h2 id="compliance-build-heading">Build validated sections while design continued elsewhere.</h2>
          <p>
            Once a section was complete and validated, development began while design continued in other parts of the workflow. Close cross-functional work quickly produced a coded React application built with IBM Carbon components.
          </p>
          <p>
            The internal application shipped on time, with the team aware that several interactions would need further attention after release.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="accessibility-compliance"
        src="carbon-application.jpg"
        alt="Implemented IBM Accessibility Compliance System interface"
        caption="The coded application used React and the IBM Carbon Design System."
        className="case-figure-wide compliance-product"
      />

      <section className="case-section case-copy-grid" aria-labelledby="compliance-evaluation-heading">
        <p className="case-kicker">Heuristic evaluation</p>
        <div className="case-copy">
          <h2 id="compliance-evaluation-heading">Turn newly visible problems into implementation-ready critique.</h2>
          <p>
            Testing and a UX heuristic evaluation uncovered additional opportunities. I presented annotated critiques to stakeholders alongside annotated solutions that developers could use directly.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="accessibility-compliance"
        src="heuristic-review.png"
        alt="Annotated heuristic evaluation of the compliance interface"
        caption="Annotated findings connected usability issues to proposed changes."
        className="case-figure-wide compliance-artifact"
      />

      <div className="case-figure-pair compliance-annotations">
        <CaseStudyFigure
          study="accessibility-compliance"
          src="annotated-flow-01.jpg"
          alt="Annotated compliance publishing workflow"
          caption="Detailed critique of the publishing workflow."
        />
        <CaseStudyFigure
          study="accessibility-compliance"
          src="annotated-flow-02.jpg"
          alt="Proposed annotated solution for the publishing workflow"
          caption="A proposed interaction ready for stakeholder and developer review."
        />
      </div>

      <section className="case-result compliance-result" aria-labelledby="compliance-result-heading">
        <p className="case-kicker">Retrospective</p>
        <h2 id="compliance-result-heading">The partial redesign proved the case for finishing the whole journey.</h2>
        <p>
          Executive reviews remained difficult because confusing legacy features still surrounded the three redesigned areas. After three weeks, we changed course and committed to addressing the entire flow. We lost some time, but the evidence earned executive backing for a complete redesign rather than another partial fix.
        </p>
        <a className="text-link" href="#work">
          Return to selected work <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>
    </motion.div>
  );
}

function AccessibilityToolkitCaseStudy({ reduceMotion }) {
  return (
    <motion.div
      className="case-study"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <header className="case-hero toolkit-hero">
        <a className="back-link" href="#work">
          <ArrowLeft aria-hidden="true" size={18} /> Selected work
        </a>
        <p className="eyebrow">IBM Accessibility</p>
        <h1>Accessibility Website and Toolkit</h1>
        <p className="case-intro">
          One clear entry point for IBM accessibility guidance, with role-based tools that help product teams build inclusion into everyday delivery.
        </p>
      </header>

      <dl className="case-facts">
        <div><dt>Company</dt><dd>IBM</dd></div>
        <div><dt>Role</dt><dd>Lead UX Designer</dd></div>
        <div><dt>Product</dt><dd>Public website and team toolkit</dd></div>
      </dl>

      <section className="case-section case-copy-grid" aria-labelledby="toolkit-brief-heading">
        <p className="case-kicker">The brief</p>
        <div className="case-copy">
          <h2 id="toolkit-brief-heading">Make accessibility work easier to find and easier to begin.</h2>
          <p>
            IBM needed a single point of entry for its accessibility materials and a practical toolkit development teams could use throughout the product cycle. The goal was a clear, intuitive experience for finding guidance and integrating accessibility into day-to-day operations.
          </p>
          <p>
            After identifying stakeholders and learning from the people who would use the system, I moved from sketches to mid-fidelity prototypes in Sketch and worked with the product team through a rapid, agile build.
          </p>
        </div>
      </section>

      <CaseStudyFigure
        study="accessibility-toolkit"
        src="site-overview.png"
        alt="IBM Accessibility website shown across desktop and mobile layouts"
        caption="The website creates one public entry point for IBM accessibility resources."
        className="case-figure-wide toolkit-site-overview"
      />

      <section className="case-section case-copy-grid" aria-labelledby="toolkit-alignment-heading">
        <p className="case-kicker">Alignment</p>
        <div className="case-copy">
          <h2 id="toolkit-alignment-heading">Connect user needs to the people who could make change happen.</h2>
          <p>
            A stakeholder map kept the team focused on the impact of the work for both users and the business. It also exposed the partners whose knowledge and support would be essential during design and delivery.
          </p>
          <p>
            Empathy mapping translated what we learned into a shared view of team behaviors, questions, and obstacles, giving the product group a durable reference point for decisions.
          </p>
        </div>
      </section>

      <div className="case-figure-pair toolkit-research-gallery">
        <CaseStudyFigure
          study="accessibility-toolkit"
          src="stakeholder-map.png"
          alt="Stakeholder map for the IBM Accessibility Toolkit"
          caption="Mapping influence and impact across the organization."
        />
        <CaseStudyFigure
          study="accessibility-toolkit"
          src="empathy-map.png"
          alt="Empathy map for IBM product team members"
          caption="A shared picture of product-team needs and barriers."
        />
      </div>

      <section className="case-section case-copy-grid" aria-labelledby="toolkit-architecture-heading">
        <p className="case-kicker">Information architecture</p>
        <div className="case-copy">
          <h2 id="toolkit-architecture-heading">Create a usable path within evolving system constraints.</h2>
          <p>
            The experience had to follow two standards that were still changing: IBM's Gatsby guidance and the Carbon Design System. A required two-level left navigation shaped the architecture from the beginning.
          </p>
          <p>
            The home page became both the toolkit entrance and the jumping-off point for accessibility information across IBM. Organizing the toolkit by role let designers, developers, and product managers quickly find their own responsibilities.
          </p>
        </div>
      </section>

      <div className="case-figure-pair toolkit-sketches">
        <CaseStudyFigure
          study="accessibility-toolkit"
          src="toolkit-sketch-01.jpg"
          alt="Early sketch exploring the Accessibility Toolkit structure"
          caption="Early navigation and content-structure exploration."
        />
        <CaseStudyFigure
          study="accessibility-toolkit"
          src="toolkit-sketch-02.jpg"
          alt="Early sketch of an Accessibility Toolkit page"
          caption="Sketching the relationship between guidance and tasks."
        />
      </div>

      <section className="case-section" aria-labelledby="toolkit-guidance-heading">
        <div className="case-copy narrow-copy">
          <p className="case-kicker">Role-based guidance</p>
          <h2 id="toolkit-guidance-heading">Show each person what to do, and in what order.</h2>
          <p>
            One of the hardest parts of accessible design is knowing where to begin. We created a cumulative, three-level hierarchy of tasks so designers could establish a foundation first, then progress into deeper accessibility work without losing context.
          </p>
        </div>
      </section>

      <div className="toolkit-product-gallery">
        <CaseStudyFigure
          study="accessibility-toolkit"
          src="toolkit-home.png"
          alt="IBM Accessibility Toolkit home page"
          caption="The toolkit home routes team members to guidance organized around their role."
        />
        <CaseStudyFigure
          study="accessibility-toolkit"
          src="designer-role.png"
          alt="Designer role page in the IBM Accessibility Toolkit"
          caption="Role pages make individual responsibilities immediately visible."
        />
        <CaseStudyFigure
          study="accessibility-toolkit"
          src="task-hierarchy.png"
          alt="Cumulative accessibility task hierarchy for designers"
          caption="Progressive task levels answer what to do first and what comes next."
        />
      </div>

      <section className="case-section case-copy-grid" aria-labelledby="toolkit-delivery-heading">
        <p className="case-kicker">Visual design and delivery</p>
        <div className="case-copy">
          <h2 id="toolkit-delivery-heading">Give practical guidance a recognizable voice.</h2>
          <p>
            I partnered closely with a visual designer to create assets that conveyed the meaning of the guidance and gave the experience a distinctive visual language. During development, I stayed embedded with the product team and supplied high-fidelity prototypes and annotated wireframes to support a fast build.
          </p>
        </div>
      </section>

      <section className="case-result toolkit-result" aria-labelledby="toolkit-result-heading">
        <p className="case-kicker">Result</p>
        <h2 id="toolkit-result-heading">Accessibility guidance that could scale beyond a central team.</h2>
        <p>
          The IBM Accessibility website and toolkit launched for IBM's workforce and the public. Designers, developers, and product managers could now take on more accessibility work themselves, with less dependence on direct support from specialists.
        </p>
        <a className="text-link" href="#work">
          Return to selected work <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>
    </motion.div>
  );
}

function AgingInPlaceCaseStudy({ reduceMotion }) {
  return (
    <motion.div
      className="case-study"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <header className="case-hero aging-hero">
        <a className="back-link" href="#work">
          <ArrowLeft aria-hidden="true" size={18} /> Selected work
        </a>
        <p className="eyebrow">IBM Accessibility + IBM Research</p>
        <h1>Aging in Place</h1>
        <p className="case-intro">
          Exploring how smart-home activity patterns could help seniors remain independent while giving care teams earlier signals of risk.
        </p>
      </header>

      <dl className="case-facts">
        <div><dt>Company</dt><dd>IBM Accessibility, IBM Research</dd></div>
        <div><dt>Role</dt><dd>Lead UX Researcher and Designer</dd></div>
        <div><dt>Type</dt><dd>Web and mobile proof of concept</dd></div>
      </dl>

      <section className="case-section case-copy-grid" aria-labelledby="aging-brief-heading">
        <p className="case-kicker">The brief</p>
        <div className="case-copy">
          <h2 id="aging-brief-heading">Recognize meaningful changes in everyday activity.</h2>
          <p>
            IBM Accessibility explored a smart-home system for seniors and others aging in place. The concept used sensors to learn an individual’s routines and notify care professionals when activity deviated in a potentially negative way.
          </p>
          <p>
            Better awareness at home could reduce repeated trips between a residence and a care facility, help families respond sooner, and allow seniors to remain in familiar surroundings for longer.
          </p>
        </div>
      </section>

      <section className="case-section case-copy-grid" aria-labelledby="aging-research-heading">
        <p className="case-kicker">Ethnography</p>
        <div className="case-copy">
          <h2 id="aging-research-heading">Start with how care happens today.</h2>
          <p>
            I spent three days conducting ethnographic research at a senior care facility in Portland, Oregon. Nursing staff described frequent transitions between homes and the facility, a difficult cycle for care teams, families, and seniors.
          </p>
          <p>
            I also observed complicated manual processes for recording and storing information. Aging alert systems and handwritten shift notes made it difficult to build a continuous, shared view of a person’s condition.
          </p>
        </div>
      </section>

      <div className="aging-observation-gallery">
        <CaseStudyFigure
          study="aging-in-place"
          src="manual-work.jpg"
          alt="Care professional completing manual administrative work"
          caption="Manual processes competed with time for direct care."
        />
        <CaseStudyFigure
          study="aging-in-place"
          src="shift-notes.jpg"
          alt="Handwritten nursing shift notes"
          caption="Personal observations passed between shifts on paper."
        />
        <CaseStudyFigure
          study="aging-in-place"
          src="legacy-alert.jpg"
          alt="Legacy care-facility alert system"
          caption="Existing alerts offered limited context."
        />
      </div>

      <section className="case-section case-copy-grid" aria-labelledby="aging-monitoring-heading">
        <p className="case-kicker">Remote monitoring</p>
        <div className="case-copy">
          <h2 id="aging-monitoring-heading">Turn sensor data into a view of daily life.</h2>
          <p>
            I designed dashboards around real data from test homes where sensors had been installed throughout living spaces. The interface allowed professionals and family members to monitor status remotely without reducing a person’s life to isolated alerts.
          </p>
          <p>
            Timing was essential. A twenty-four-hour visualization helped distinguish normal daily variation from a pattern that might indicate something was wrong.
          </p>
        </div>
      </section>

      <div className="aging-dashboard-grid">
        <CaseStudyFigure
          study="aging-in-place"
          src="care-dashboard.png"
          alt="Aging in Place remote care dashboard"
          caption="A dashboard summarizes status across monitored homes."
        />
        <CaseStudyFigure
          study="aging-in-place"
          src="activity-visualization.png"
          alt="Twenty-four-hour activity and alert visualization"
          caption="A full-day view gives individual alerts temporal context."
          className="aging-activity-visualization"
        />
      </div>

      <section className="case-section" aria-labelledby="aging-mobile-heading">
        <div className="case-copy narrow-copy">
          <p className="case-kicker">Mobile care</p>
          <h2 id="aging-mobile-heading">Keep monitoring available away from the desk.</h2>
          <p>
            The system depended on mobile access so nursing professionals could continue caring for others and family members could remain informed while moving through their day.
          </p>
        </div>
      </section>

      <div className="aging-mobile-gallery">
        <CaseStudyFigure
          study="aging-in-place"
          src="mobile-01.png"
          alt="Mobile Aging in Place overview screen"
          caption="Status overview."
        />
        <CaseStudyFigure
          study="aging-in-place"
          src="mobile-02.png"
          alt="Mobile Aging in Place resident detail screen"
          caption="Resident detail."
        />
        <CaseStudyFigure
          study="aging-in-place"
          src="mobile-03.png"
          alt="Mobile Aging in Place activity alert screen"
          caption="Activity and alerts."
        />
      </div>

      <section className="case-section case-copy-grid" aria-labelledby="aging-technician-heading">
        <p className="case-kicker">Service operations</p>
        <div className="case-copy">
          <h2 id="aging-technician-heading">Design for the people keeping the system alive.</h2>
          <p>
            In-home sensors required installation and ongoing maintenance. I storyboarded the technician experience, then designed a dashboard for viewing installed equipment, checking current status, and responding to automated work orders from administrators.
          </p>
        </div>
      </section>

      <div className="case-figure-pair aging-storyboards">
        <CaseStudyFigure
          study="aging-in-place"
          src="senior-storyboard.jpg"
          alt="Storyboard of a senior interacting with the monitoring service"
          caption="The monitored-home experience."
        />
        <CaseStudyFigure
          study="aging-in-place"
          src="technician-storyboard.jpg"
          alt="Storyboard of a technician servicing an in-home sensor system"
          caption="The technician service journey."
        />
      </div>

      <CaseStudyFigure
        study="aging-in-place"
        src="technician-dashboard.png"
        alt="Repair technician dashboard with sensor status and work orders"
        caption="Technicians can see sensor health and the status of assigned service work."
        className="case-figure-wide aging-technician-dashboard"
      />

      <section className="case-result aging-result" aria-labelledby="aging-result-heading">
        <p className="case-kicker">Result</p>
        <h2 id="aging-result-heading">A promising concept constrained by sensitive data.</h2>
        <p>
          The proof of concept was presented to executives for adoption but did not receive funding. The sensitivity of in-home monitoring data and strengthening data-storage laws made the model difficult to advance at the time.
        </p>
        <a className="text-link" href="#work">
          Return to selected work <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>
    </motion.div>
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

function ContactForm() {
  const [state, handleSubmit] = useForm('xgawvokl');

  if (state.succeeded) {
    return (
      <div className="contact-success" role="status">
        <CheckCircle2 aria-hidden="true" size={28} />
        <p className="case-kicker">Message sent</p>
        <h3>Thanks for reaching out.</h3>
        <p>I’ll get back to you as soon as I can.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required />
        <ValidationError className="form-error" prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="contact-field contact-message-field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="7" required />
        <ValidationError className="form-error" prefix="Message" field="message" errors={state.errors} />
      </div>

      <input type="hidden" name="_subject" value="New portfolio inquiry" />
      <input className="contact-honeypot" type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />

      <button className="contact-submit" type="submit" disabled={state.submitting}>
        <Send aria-hidden="true" size={18} />
        {state.submitting ? 'Sending...' : 'Send message'}
      </button>
    </form>
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
    if (route.startsWith('#/work/') || !route) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    requestAnimationFrame(() => {
      document.querySelector(route)?.scrollIntoView();
    });
  }, [route]);

  const isAdobeCaseStudy = route === '#/work/adobe-xd-accessibility';
  const isFlexmlsCaseStudy = route === '#/work/flexmls-spark';
  const isCjAffiliateCaseStudy = route === '#/work/cj-affiliate-account-manager';
  const isGehryCaseStudy = route === '#/work/gehry-engineering';
  const isJanCaseStudy = route === '#/work/job-accommodation-network';
  const isAgingInPlaceCaseStudy = route === '#/work/ibm-aging-in-place';
  const isAccessibilityToolkitCaseStudy = route === '#/work/ibm-accessibility-toolkit';
  const isAccessibilityComplianceCaseStudy = route === '#/work/ibm-accessibility-compliance-system';
  const isAccessibleDesignThinkingCaseStudy = route === '#/work/ibm-accessible-design-thinking';
  const isProcorePartnerCaseStudy = route === '#/work/procore-partner-experience';
  const isAtisCdtCaseStudy = route === '#/work/atis-command-directed-training';

  return (
    <div id="top" className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />

      <main id="main">
        {isAdobeCaseStudy ? (
          <AdobeXdCaseStudy reduceMotion={reduceMotion} />
        ) : isFlexmlsCaseStudy ? (
          <FlexmlsCaseStudy reduceMotion={reduceMotion} />
        ) : isCjAffiliateCaseStudy ? (
          <CjAffiliateCaseStudy reduceMotion={reduceMotion} />
        ) : isGehryCaseStudy ? (
          <GehryCaseStudy reduceMotion={reduceMotion} />
        ) : isJanCaseStudy ? (
          <JanCaseStudy reduceMotion={reduceMotion} />
        ) : isAgingInPlaceCaseStudy ? (
          <AgingInPlaceCaseStudy reduceMotion={reduceMotion} />
        ) : isAccessibilityToolkitCaseStudy ? (
          <AccessibilityToolkitCaseStudy reduceMotion={reduceMotion} />
        ) : isAccessibilityComplianceCaseStudy ? (
          <AccessibilityComplianceCaseStudy reduceMotion={reduceMotion} />
        ) : isAccessibleDesignThinkingCaseStudy ? (
          <AccessibleDesignThinkingCaseStudy reduceMotion={reduceMotion} />
        ) : isProcorePartnerCaseStudy ? (
          <ProcorePartnerCaseStudy reduceMotion={reduceMotion} />
        ) : isAtisCdtCaseStudy ? (
          <AtisCdtCaseStudy reduceMotion={reduceMotion} />
        ) : (
          <>
        <motion.section
          className="intro"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Product design · Design Strategy · Accessibility</p>
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
                aria-label={`View case study: ${project.title}${project.locked ? ' (password protected)' : ''}`}
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
                    className="project-image"
                    src={projectAsset(project.image)}
                    alt={project.alt}
                    loading="lazy"
                    style={{ objectPosition: project.position ?? '50% 50%' }}
                  />
                  {project.locked && (
                    <span className="project-lock" title="Password protected">
                      <LockKeyhole aria-hidden="true" size={17} />
                    </span>
                  )}
                </div>
                <div className="project-meta">
                  <p className="project-index">{String(index + 1).padStart(2, '0')}</p>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    {project.tags && (
                      <ul className="project-tags" aria-label={`${project.title} tags`}>
                        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                      </ul>
                    )}
                  </div>
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
                      className="project-image"
                      src={projectAsset(project.image)}
                      alt={project.alt}
                      loading="lazy"
                      style={{ objectPosition: project.position ?? '50% 50%' }}
                    />
                    {project.locked && (
                      <span className="project-lock" title="Password protected">
                        <LockKeyhole aria-hidden="true" size={17} />
                      </span>
                    )}
                  </div>
                  <div className="project-meta">
                    <p className="project-index">{String(index + 1).padStart(2, '0')}</p>
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      {project.tags && (
                        <ul className="project-tags" aria-label={`${project.title} tags`}>
                          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                        </ul>
                      )}
                    </div>
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
          <div className="about-layout">
            <div className="about-portrait-wrap">
              <img
                className="about-portrait"
                src={`${import.meta.env.BASE_URL}about/bo-campbell.jpg`}
                alt="Bo Campbell"
                width="200"
                height="200"
                loading="lazy"
              />
              <p>Bo Campbell, MS HCI</p>
              <span>Santa Barbara, California</span>
            </div>

            <div className="about-copy">
              <p className="case-kicker">Product designer · Researcher · Accessibility advocate</p>
              <h3>I make complex systems easier for people to understand and use.</h3>
              <p>
                I’m a product design leader who works from research through delivery, specializing in complex workflows, inclusive products, and the organizational alignment needed to bring them to life. My experience spans enterprise platforms, marketplaces, developer tools, construction technology, real estate, and U.S. Army training systems.
              </p>
              <p>
                I bring empathy and rigor to the work, but also diplomacy. The strongest outcomes happen when users, product, engineering, and leadership can see the same problem clearly enough to solve it together.
              </p>

              <div className="about-profile-grid">
                <section className="about-profile-group" aria-labelledby="about-skills-heading">
                  <div className="about-profile-heading">
                    <span aria-hidden="true">01</span>
                    <h4 id="about-skills-heading">Skills</h4>
                  </div>
                  <ul>
                    <li>Design Leadership</li>
                    <li>Design Strategy</li>
                    <li>Design Mentoring</li>
                    <li>User Research</li>
                    <li>AI Prototyping</li>
                    <li>Usability Testing</li>
                    <li>Information Architecture</li>
                    <li>Accessible Design</li>
                    <li>Project Management</li>
                  </ul>
                </section>

                <section className="about-profile-group" aria-labelledby="about-tools-heading">
                  <div className="about-profile-heading">
                    <span aria-hidden="true">02</span>
                    <h4 id="about-tools-heading">Tools</h4>
                  </div>
                  <ul>
                    <li>Figma, Figma Make, FigJam</li>
                    <li>Codex, Claude</li>
                    <li>Lucid, Miro, Mural</li>
                    <li>Sketch</li>
                    <li>Axure</li>
                    <li>InVision</li>
                    <li>Balsamiq</li>
                    <li>Jira, GitLab</li>
                    <li>Adobe Creative Cloud</li>
                  </ul>
                </section>

                <section className="about-profile-group" aria-labelledby="about-experience-heading">
                  <div className="about-profile-heading">
                    <span aria-hidden="true">03</span>
                    <h4 id="about-experience-heading">Experience</h4>
                  </div>
                  <ul>
                    <li>Logistics Management Institute</li>
                    <li>Procore Technologies</li>
                    <li>IBM</li>
                    <li>FBS Data Systems</li>
                    <li>ProductPlan</li>
                    <li>Gehry Technologies</li>
                    <li>CJ Affiliate</li>
                    <li>Santa Barbara Zoo</li>
                    <li>Yardi Systems</li>
                  </ul>
                </section>
              </div>

              <div className="about-personal">
                <p>
                  Away from the screen, I’m usually outside: surfing, mountain or road biking, snowboarding, golfing, or watching live sports. A balanced life and time with the people I love keep the work grounded.
                </p>
                <a
                  className="text-link"
                  href="https://www.linkedin.com/in/bojcampbell"
                  target="_blank"
                  rel="noreferrer"
                >
                  View LinkedIn <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="content-band compact-band" aria-labelledby="contact-heading">
          <div className="section-heading">
            <p className="section-number">03</p>
            <h2 id="contact-heading">Contact</h2>
          </div>
          <div className="contact-layout">
            <div className="contact-intro">
              <p className="case-kicker">Start a conversation</p>
              <h3>Have a complex problem worth making simpler?</h3>
              <p>Tell me a little about the product, team, or challenge. I’ll respond directly by email.</p>
            </div>
            <ContactForm />
          </div>
        </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
