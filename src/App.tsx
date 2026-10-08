import { useEffect, useRef, useState } from "react";

type SocialLink = {
  name: string;
  handle: string;
  description: string;
  short: string;
  color: string;
  href: string;
};

const socials: SocialLink[] = [
  {
    name: "YouTube",
    handle: "@TheMongolZ",
    description: "Match highlights, team films & vlogs",
    short: "YT",
    color: "#ff3b30",
    href: "https://www.youtube.com/@TheMongolZ",
  },
  {
    name: "YouTube Mongolia",
    handle: "@TheMongolZMN",
    description: "",
    short: "YT",
    color: "#3A86FF",
    href: "https://www.youtube.com/@TheMongolZ",
  },
  {
    name: "X / Twitter",
    handle: "@1mongolz",
    description: "Live updates, scores & announcements",
    short: "X",
    color: "#f4f1e8",
    href: "https://x.com/1mongolz",
  },
  {
    name: "TikTok",
    handle: "@themongolz",
    description: "Clips, challenges & team energy",
    short: "TT",
    color: "#32d6c8",
    href: "https://www.tiktok.com/@themongolz",
  },
  {
    name: "Threads",
    handle: "@themongolz",
    description: "Stories, conversations & team updates",
    short: "TH",
    color: "#f4f1e8",
    href: "https://www.threads.net/@themongolz",
  },
  {
    name: "Bilibili",
    handle: "The MongolZ",
    description: "",
    short: "BI",
    color: "#00aeec",
    href: "https://www.bilibili.com/",
  },
  {
    name: "Discord",
    handle: "The MongolZ",
    description: "",
    short: "DC",
    color: "#5865f2",
    href: "https://discord.com/",
  },
  {
    name: "Kick",
    handle: "The MongolZ",
    description: "",
    short: "KI",
    color: "#53fc18",
    href: "https://kick.com/",
  },
];

const teams = [
  {
    game: "CS2",
    fullName: "COUNTER-STRIKE 2",
    number: "01",
    accent: "#FFBE0B",
    channels: [
      { label: "Instagram", short: "IG", handle: "mongolz.gg", href: "https://www.instagram.com/themongolz/" },
      { label: "Facebook", short: "FB", handle: "The MongolZ CS2", href: "https://www.facebook.com/TheMongolZ/" },
      { label: "Telegram", short: "TG", handle: "mongolz.cs2", href: "https://t.me/" },
    ],
  },
  {
    game: "MLBB",
    fullName: "MOBILE LEGENDS",
    number: "02",
    accent: "#3A86FF",
    channels: [
      { label: "Instagram", short: "IG", handle: "mongolz.mlbb", href: "https://www.instagram.com/" },
      { label: "Facebook", short: "FB", handle: "The MongolZ MLBB", href: "https://www.facebook.com/" },
      { label: "Telegram", short: "TG", handle: "mongolz.mlbb", href: "https://t.me/" },
    ],
  },
  {
    game: "PUBG",
    fullName: "BATTLEGROUNDS",
    number: "03",
    accent: "#8338EC",
    channels: [
      { label: "Instagram", short: "IG", handle: "mongolz.pubgm", href: "https://www.instagram.com/" },
      { label: "Facebook", short: "FB", handle: "The MongolZ PUBG", href: "https://www.facebook.com/" },
      { label: "Telegram", short: "TG", handle: "mongolz.pubgm", href: "https://t.me/" },
    ],
  },
];

const shops = [
  {
    region: "MONGOLIA",
    title: "THE HOME STORE",
    description: "Local delivery, exclusive drops and official team gear for fans in Mongolia.",
    href: "https://themongolz.com/",
  },
  {
    region: "EUROPE",
    title: "EUROPEAN STORE",
    description: "Official jerseys and essentials with fast delivery across Europe.",
    href: "https://themongolz.com/",
  },
];

const navigation = [
  { label: "Teams", shortLabel: "Teams", href: "#teams", id: "teams" },
  { label: "Global channels", shortLabel: "Global", href: "#connect", id: "connect" },
  { label: "Official shops", shortLabel: "Shop", href: "#shop", id: "shop" },
  { label: "Partners", shortLabel: "Partners", href: "#partners", id: "partners" },
  { label: "Esport Club", shortLabel: "Esport Club", href: "#club", id: "club" },
  { label: "The Horde", shortLabel: "Horde", href: "#horde", id: "horde" },
];

const partners = [
  {
    name: "1XBET",
    code: "MGLZ",
    href: "https://1xbet.com/",
  },
  {
    name: "CSGOSKINS",
    code: "MONGOLZ",
    href: "https://csgoskins.gg/",
  },
  {
    name: "PIRATESWAP",
    code: "MONGOLZ",
    href: "https://pirateswap.com/",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={diagonal ? "M7 17 17 7M8 7h9v9" : "M5 12h14m-5-5 5 5-5 5"}
      />
    </svg>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  const name = platform.toLowerCase();

  if (name.includes("instagram")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (name.includes("facebook")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.1 8.5V6.9c0-.8.5-1 1-1h2.6V2.1L14.3 2C10.8 2 9 4.1 9 6.6v1.9H6v4.2h3V22h4.5v-9.3h3.4l.6-4.2h-3.4Z" />
      </svg>
    );
  }

  if (name.includes("telegram")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="m21.6 3.1-3.1 17.2c-.2 1.2-.9 1.5-1.9.9l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.8-8c.4-.3-.1-.5-.6-.2L6.3 14.2l-4.7-1.5c-1-.3-1-1 .2-1.5L20 2.2c.8-.3 1.8.2 1.6.9Z" />
      </svg>
    );
  }

  if (name.includes("youtube")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0 2.2-.3 4.4-.3 4.4a2.8 2.8 0 0 1-2 2C17.9 19 12 19 12 19s-5.9 0-7.7-.6a2.8 2.8 0 0 1-2-2S2 14.2 2 12s.3-4.4.3-4.4a2.8 2.8 0 0 1 2-2C6.1 5 12 5 12 5s5.9 0 7.7.6a2.8 2.8 0 0 1 2 2S22 9.8 22 12Zm-12.1 3.1 5.2-3.1-5.2-3.1v6.2Z" />
      </svg>
    );
  }

  if (name.includes("threads")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M17.8 10.5C17.2 5.8 14.5 3 10.7 3 6.2 3 3.5 6.4 3.5 12s2.8 9 7.6 9c4 0 7-2.3 7-5.7 0-3.1-2.3-4.9-6.3-4.9-3.3 0-5.3 1.4-5.3 3.8 0 2.1 1.7 3.5 4 3.5 3.4 0 5.6-2.5 5.6-6.4 0-3.2-1.8-5.2-4.8-5.2-2 0-3.5 1-4.1 2.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name.includes("tiktok")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 2c.3 2.8 1.9 4.5 4.5 4.7v3.4a9.5 9.5 0 0 1-4.5-1.3v6.4A6.8 6.8 0 1 1 9.6 8.5v3.6a3.4 3.4 0 1 0 2.4 3.2V2h3.5Z" />
      </svg>
    );
  }

  if (name.includes("bilibili")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="m8 3 4 4 4-4M5 8h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 13v3m8-3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name.includes("discord")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.5 5.3A17.2 17.2 0 0 0 15.2 4l-.5 1a15 15 0 0 0-5.4 0l-.5-1a17 17 0 0 0-4.3 1.3C1.8 9.3 1 13.2 1.4 17a17.5 17.5 0 0 0 5.3 2.7L8 18a10 10 0 0 1-2-1l.5-.4a12.3 12.3 0 0 0 11 0l.5.4a9 9 0 0 1-2 1l1.3 1.7a17.4 17.4 0 0 0 5.3-2.7c.5-4.4-.8-8.3-3.1-11.7ZM8.3 14.8c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Zm7.4 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Z" />
      </svg>
    );
  }

  if (name.includes("kick")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h6v6h2V7h2V5h2V3h6v6h-2v2h-2v2h2v2h2v6h-6v-2h-2v-2h-2v4H3V3Z" />
      </svg>
    );
  }

  if (name.includes("douyin")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 2c.3 2.8 1.9 4.5 4.5 4.7v3.4a9.5 9.5 0 0 1-4.5-1.3v6.4A6.8 6.8 0 1 1 9.6 8.5v3.6a3.4 3.4 0 1 0 2.4 3.2V2h3.5Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h4.8l4.4 6.2L17.5 3H21l-7.2 8.6L21.5 21h-4.8l-4.8-6.8L6.2 21H2.7l7.6-9.2L3 3Zm3.1 2 11.6 14h1.7L7.8 5H6.1Z" />
    </svg>
  );
}

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className="group flex items-center gap-3"
      aria-label="The MongolZ home"
    >
      <img className="nav-logo-image" src="/mongolz-nav.png" alt="" />
    </a>
  );
}

function SocialCard({ item }: { item: SocialLink }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="social-card group"
      style={{ "--social": item.color } as React.CSSProperties}
    >
      <div className="social-icon" title={item.name}>
        <SocialIcon platform={item.name} />
      </div>
      <span className="social-tooltip">{item.handle}</span>
      <span className="sr-only">{item.name}</span>
    </a>
  );
}

function CopyEmail({ email, dark = false }: { email: string; dark?: boolean }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={`copy-email ${dark ? "copy-email-dark" : ""}`}
      aria-label={`Copy ${email}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="7" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="m7 8 5 4 5-4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="copy-value">
        <span className={copied ? "copy-original copy-original-hidden" : "copy-original"}>
          {email}
        </span>
        <span className={copied ? "copy-status copy-status-visible" : "copy-status"}>
          COPIED
        </span>
      </span>
    </button>
  );
}

function PromoPartner({ partner }: { partner: (typeof partners)[number] }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard?.writeText(partner.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <article className="promo-partner">
      <div className="promo-partner-heading">
        <a href={partner.href} target="_blank" rel="noreferrer">
          {partner.name}
        </a>
        <a
          className="promo-partner-arrow"
          href={partner.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${partner.name}`}
        >
          <Arrow diagonal />
        </a>
      </div>
      <button
        className="promo-code"
        type="button"
        onClick={copyCode}
        aria-label={`Copy promo code ${partner.code}`}
      >
        <span>
          <small>PROMO CODE</small>
          <b className="copy-value">
            <span className={copied ? "copy-original copy-original-hidden" : "copy-original"}>
              {partner.code}
            </span>
            <span className={copied ? "copy-status copy-status-visible" : "copy-status"}>
              COPIED
            </span>
          </b>
        </span>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <rect x="8" y="8" width="11" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 8V5H5v11h3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </article>
  );
}

function InteractiveVinyl() {
  const vinylRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const pointerAngleRef = useRef(0);
  const draggingRef = useRef(false);

  const pointerAngle = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    return (
      Math.atan2(
        event.clientY - (bounds.top + bounds.height / 2),
        event.clientX - (bounds.left + bounds.width / 2),
      ) *
      (180 / Math.PI)
    );
  };

  const applyAngle = () => {
    if (vinylRef.current) {
      vinylRef.current.style.transform = `rotate(${angleRef.current}deg)`;
    }
  };

  useEffect(() => {
    let frame = 0;
    let previousTime = performance.now();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = (time: number) => {
      if (!draggingRef.current && !reduceMotion) {
        angleRef.current += (time - previousTime) * 0.04;
        applyAngle();
      }
      previousTime = time;
      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const startScratch = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    pointerAngleRef.current = pointerAngle(event);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const scratch = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const nextPointerAngle = pointerAngle(event);
    let delta = nextPointerAngle - pointerAngleRef.current;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    angleRef.current += delta;
    pointerAngleRef.current = nextPointerAngle;
    applyAngle();
  };

  const stopScratch = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const spinWithKeyboard = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const direction = event.key === "ArrowLeft" ? -1 : event.key === "ArrowRight" ? 1 : 0;
    if (!direction) return;
    event.preventDefault();
    angleRef.current += direction * 18;
    applyAngle();
  };

  return (
    <div className="vinyl-wrap">
      <div
        ref={vinylRef}
        className="vinyl vinyl-interactive"
        role="img"
        tabIndex={0}
        aria-label="Interactive Horde record. Drag or use the arrow keys to spin."
        onPointerDown={startScratch}
        onPointerMove={scratch}
        onPointerUp={stopScratch}
        onPointerCancel={stopScratch}
        onKeyDown={spinWithKeyboard}
      >
        <span>MZ</span>
      </div>
      <span className="vinyl-hint">DRAG TO SCRATCH</span>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const closeMenu = () => setMenuOpen(false);

  const navigateToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (!target) return;

    setMenuOpen(false);
    setActiveSection(sectionId);
    window.requestAnimationFrame(() => {
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `#${sectionId}`);
    });
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-76px 0px -55% 0px", threshold: [0, 0.1, 0.3] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#111111] text-[#FAFAFA]">
      <nav className="site-nav fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111111]/85 backdrop-blur-xl">
        <div className="nav-bar mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo onClick={closeMenu} />
          <div className="desktop-nav hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[0.18em] text-white/55 md:flex">
            {navigation.map((item) => (
              <a
                key={item.id}
                className={`nav-link ${activeSection === item.id ? "nav-link-active" : ""}`}
                href={item.href}
                onClick={(event) => navigateToSection(event, item.id)}
                aria-current={activeSection === item.id ? "location" : undefined}
              >
                {item.shortLabel}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="menu-button md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={menuOpen ? "rotate-45 translate-y-[5px]" : ""} />
            <span className={menuOpen ? "opacity-0" : ""} />
            <span className={menuOpen ? "-rotate-45 -translate-y-[5px]" : ""} />
          </button>
        </div>
        <div
          className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
          aria-hidden={!menuOpen}
        >
          {navigation.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(event) => navigateToSection(event, item.id)}
              tabIndex={menuOpen ? 0 : -1}
              className={activeSection === item.id ? "mobile-nav-active" : ""}
              aria-current={activeSection === item.id ? "location" : undefined}
            >
              <span>0{index + 1}</span>
              {item.label}
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </nav>

      <header className="hero-video-section relative border-b border-white/10">
        <h1 className="sr-only">The MongolZ</h1>
        <video
          className="hero-background-video"
          src="/mongolz-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          disablePictureInPicture
          aria-label="The MongolZ animated identity"
        />
        <div className="hero-video-shade" />
        <div className="hero-video-content">
          <a
            href="#teams"
            className="primary-button hero-cta"
            onClick={(event) => navigateToSection(event, "teams")}
          >
            MEET OUR TEAMS <Arrow />
          </a>
        </div>
      </header>

      <section id="teams" className="section-dark scroll-mt-20">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CHOOSE YOUR GAME</p>
            <h2>OUR TEAMS</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/45">
            Follow each roster on its dedicated Instagram, Facebook, and Telegram channels.
          </p>
        </div>
        <div className="grid border-l border-t border-white/10 lg:grid-cols-3">
          {teams.map((team) => (
            <article
              key={team.game}
              className="team-card"
              style={{ "--team": team.accent } as React.CSSProperties}
            >
              <div className="flex items-start justify-between">
              <div className="text-[12px] font-black tracking-[0.2em]" style={{ color: team.accent }}>
                {team.fullName}
              </div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/30">
                  / {team.number}
                </span>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-bold tracking-[0.22em] text-white/35">
                  {team.fullName}
                </p>
                <h3 className="text-5xl font-black tracking-[-0.06em]">{team.game}</h3>
              </div>
              <div className="grid grid-cols-3 border-l border-t border-white/10">
                {team.channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="team-channel"
                    aria-label={`${team.game} on ${channel.label}`}
                    data-account={channel.handle}
                  >
                    <SocialIcon platform={channel.label} />
                    <span className="sr-only">{channel.label}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="connect" className="section-dark scroll-mt-20">
        <div className="section-heading">
          <div>
            <p className="eyebrow">STAY IN THE LOOP</p>
            <h2>GLOBAL CHANNELS</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/45">
            One MongolZ voice across X, YouTube, TikTok and Threads.
          </p>
        </div>
        <div className="global-social-orbit">
          {socials.map((item) => (
            <SocialCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section id="shop" className="relative scroll-mt-20 bg-[#FAFAFA] text-[#111111]">
        <div className="shop-pattern absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div>
            <p className="mb-5 text-[10px] font-bold tracking-[0.28em] text-black/45">
              OFFICIAL TEAM STORE
            </p>
            <h2 className="max-w-4xl text-6xl font-black leading-[0.86] tracking-[-0.065em] sm:text-8xl lg:text-[105px]">
              OFFICIAL SHOPS.
            </h2>
          </div>
          <div className="shop-grid mt-10 border-l border-t border-black/20">
            {shops.map((shop) => (
              <article key={shop.region} className="shop-card">
                <p>{shop.region} STORE</p>
                <h3>{shop.title}</h3>
                <span>{shop.description}</span>
                <a href={shop.href} target="_blank" rel="noreferrer">
                  SHOP NOW <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="mr-2 text-[10px] font-bold tracking-[0.2em] text-black/50">
              SHOP CONTACT
            </span>
            <a className="shop-social" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Shop on Instagram" data-account="mongolz.shop">
              <SocialIcon platform="Instagram" /> <span className="sr-only">Instagram</span>
            </a>
            <a className="shop-social" href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Shop on Facebook" data-account="The MongolZ Shop">
              <SocialIcon platform="Facebook" /> <span className="sr-only">Facebook</span>
            </a>
            <CopyEmail email="shop@mongolz.world" />
          </div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-20 bg-[#FAFAFA] text-[#111111]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow !text-[#111111]/45">COMMUNITY PARTNERS</p>
              <h2 className="text-5xl font-black tracking-[-0.055em] sm:text-7xl">
                PARTNER OFFERS
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-black/50">
              Use our official codes to access partner rewards while supporting The MongolZ.
              Terms apply on partner sites.
            </p>
          </div>
          <div className="partner-name-grid">
            {partners.map((partner) => (
              <PromoPartner key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      <section id="club" className="club-section scroll-mt-20">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center lg:px-12">
          <div>
            <p>LOCAL COMMUNITY</p>
            <h2>THE MONGOLZ ESPORT CLUB</h2>
            <span className="club-description">
              A home for players and fans to meet, compete, watch matches, and grow Mongolia's
              gaming community together.
            </span>
          </div>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Esport Club on Facebook" data-account="The MongolZ Esport Club">
            <SocialIcon platform="Facebook" />
          </a>
        </div>
      </section>

      <section id="horde" className="horde-section scroll-mt-20">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE 12TH PLAYER</p>
              <h2>JOIN THE HORDE</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/45">
              The sound, the colors, and the people behind every MongolZ match.
            </p>
          </div>
          <div className="horde-grid">
            <div className="playlist-card">
              <InteractiveVinyl />
              <div>
                <p>OFFICIAL SPOTIFY PLAYLIST</p>
                <h3>HORDE<br />ANTHEMS</h3>
                <a
                  href="https://open.spotify.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="playlist-action"
                >
                  PLAY ON SPOTIFY <Arrow diagonal />
                </a>
              </div>
            </div>
            <div className="horde-links">
              <a href="https://themongolz.com/" target="_blank" rel="noreferrer">
                <span className="horde-link-icon">↓</span>
                <div>
                  <p>DOWNLOAD PACK</p>
                  <h3>HORDE KIT</h3>
                  <span>Wallpapers, profile pictures & match assets</span>
                </div>
                <Arrow diagonal />
              </a>
              <div className="horde-community">
                <p>HORDE CHANNELS</p>
                <h3>FOLLOW THE COMMUNITY</h3>
                <div className="horde-socials">
                  {["Instagram", "Facebook", "X", "Threads", "TikTok", "YouTube", "Telegram"].map(
                    (social) => (
                      <a
                        key={social}
                        href={social === "Telegram" ? "https://t.me/" : `https://${social.toLowerCase()}.com/`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Horde on ${social}`}
                        data-account="@mongolzhorde"
                      >
                        <SocialIcon platform={social} />
                      </a>
                    ),
                  )}
                  <CopyEmail email="horde@mongolz.world" dark />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111]">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center">
            <Logo />
            <p className="max-w-xs text-sm leading-6 text-white/40">
              From Mongolia to the world.
              <br />We play for something bigger.
            </p>
            <div className="flex flex-col items-start gap-2">
              <CopyEmail email="info@mongolz.world" dark />
            </div>
            <a href="#top" className="circle-button" aria-label="Back to top">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m6 15 6-6 6 6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/30 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} The MongolZ. All rights reserved.</p>
            <p>Made for the steppe. Built for the world.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
