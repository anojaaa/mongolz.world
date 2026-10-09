import { useEffect, useRef, useState } from "react";

// Swap this file to feature a different animated identity for campaigns or special events.
const heroVideoSrc = "downloads/mongolz-hero.mp4";

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
    name: "The MongolZ",
    handle: "@TheMongolZ",
    description: "Match highlights, team films & vlogs",
    short: "YT",
    color: "#ff3b30",
    href: "https://www.youtube.com/@1Mongolz",
  },
  {
    name: "The MongolZ Studio",
    handle: "@TheMongolZMN",
    description: "",
    short: "YT",
    color: "#3A86FF",
    href: "https://www.youtube.com/@TheMongolZStudio",
  },
  {
    name: "1mongolz",
    handle: "@1mongolz",
    description: "Live updates, scores & announcements",
    short: "X",
    color: "#f4f1e8",
    href: "https://x.com/1mongolz",
  },
  {
    name: "@1mongolz",
    handle: "@themongolz",
    description: "Clips, challenges & team energy",
    short: "TT",
    color: "#32d6c8",
    href: "https://www.tiktok.com/@1mongolz",
  },
  {
    name: "@mongolz.gg",
    handle: "@themongolz",
    description: "Stories, conversations & team updates",
    short: "TH",
    color: "#f4f1e8",
    href: "https://www.threads.com/@mongolz.gg",
  },
  {
    name: "The MongolZ",
    handle: "The MongolZ",
    description: "",
    short: "BI",
    color: "#00aeec",
    href: "https://space.bilibili.com/38651630",
  },
  {
    name: "The MongolZ",
    handle: "The MongolZ",
    description: "",
    short: "DC",
    color: "#5865f2",
    href: "https://discord.gg/rHEuhBhuJg",
  },
];

const teams = [
  {
    game: "CS2",
    est: "2016",
    fullName: "COUNTER-STRIKE 2",
    number: "01",
    accent: "#FFBE0B",
    channels: [
      { label: "Instagram", short: "IG", handle: "mongolz.gg", href: "https://www.instagram.com/mongolz.gg/" },
      { label: "Facebook", short: "FB", handle: "The MongolZ CS2", href: "https://www.facebook.com/TheMongolZ" },
      { label: "Telegram", short: "TG", handle: "mongolz.cs2", href: "https://t.me/mongolzcs2" },
    ],
  },
  {
    game: "MLBB",
    est: "2024",
    fullName: "MOBILE LEGENDS",
    number: "02",
    accent: "#3A86FF",
    channels: [
      { label: "Instagram", short: "IG", handle: "mongolz.mlbb", href: "https://www.instagram.com/mongolz.mlbb/" },
      { label: "Facebook", short: "FB", handle: "The MongolZ MLBB", href: "https://www.facebook.com/profile.php?id=61555435149698" },
      { label: "Telegram", short: "TG", handle: "mongolz.mlbb", href: "https://t.me/mongolzmlbb" },
    ],
  },
  {
    game: "PUBG",
    est: "2025",
    fullName: "BATTLEGROUNDS",
    number: "03",
    accent: "#8338EC",
    channels: [
      { label: "Instagram", short: "IG", handle: "mongolz.pubgm", href: "https://www.instagram.com/mongolz.pubgm/" },
      { label: "Facebook", short: "FB", handle: "The MongolZ PUBG", href: "https://www.facebook.com/TheMongolzPUBGM/" },
      { label: "Telegram", short: "TG", handle: "mongolz.pubgm", href: "https://t.me/mongolzpubgm" },
    ],
  },
];

const shops = [
  {
    region: "MONGOLIA",
    title: "THE HOME\nSTORE",
    description: "Local delivery, exclusive drops for fans in Mongolia.",
    href: "https://mongolz.shop/",
    email: "contact@mongolz.shop",
  },
  {
    region: "INTERNATIONAL",
    title: "INTERNATIONAL\nSTORE",
    description: "Official jerseys and essentials with worldwide delivery.",
    href: "https:",
    email: "contact@mongolz.supply",
  },
];

const navigation = [
  {
    label: "Socials",
    shortLabel: "Socials",
    href: "#teams",
    id: "teams",
  },
  { label: "Official shops", shortLabel: "Shop", href: "#shop", id: "shop" },
  { label: "Partners", shortLabel: "Partners", href: "#partners", id: "partners" },
  { label: "Esport Club", shortLabel: "Esport Club", href: "#club", id: "club" },
  { label: "The Horde", shortLabel: "Horde", href: "#horde", id: "horde" },
];

const partners = [
  {
    name: "1XBET",
    code: "1XMONGOLZ",
    href: "https://playgemscs.com/FmLKKw1S",
  },
  {
    name: "CSGOSKINS",
    code: "MONGOLZ",
    href: "https://csgo-skins.com/?ref=mongolz",
  },
  {
    name: "PIRATESWAP",
    code: "MONGOLZ",
    href: "https://pirateswap.com/?ref=mongolz",
  },
];

const footerTeams = [
  { game: "CS2", accent: "#FFBE0B" },
  { game: "MLBB", accent: "#3A86FF" },
  { game: "PUBGM", accent: "#8338EC" },
  { game: "CHESS", accent: "#06D6A0" },
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
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.7 11.1c-.1 0-.2-.1-.3-.1-.2-3-1.8-4.7-4.6-4.7-1.7 0-3.1.7-3.9 2l1.5 1c.6-.9 1.6-1.1 2.4-1.1 1 0 1.7.3 2.1.9.3.4.5 1 .6 1.7-.8-.1-1.7-.2-2.6-.1-2.6.1-4.3 1.7-4.2 3.8.1 1.1.6 2 1.5 2.6.8.5 1.8.8 2.8.7 1.4-.1 2.5-.6 3.2-1.6.6-.7.9-1.7 1-2.9.7.4 1.2 1 1.5 1.6.5 1.1.5 2.9-1 4.4-1.3 1.3-2.9 1.9-5.3 1.9-2.6 0-4.6-.9-5.9-2.5-1.2-1.5-1.8-3.7-1.9-6.5 0-2.8.7-5 1.9-6.5C7.8 4.1 9.8 3.3 12.4 3.2c2.7 0 4.7.9 6 2.5.7.8 1.2 1.8 1.5 2.9l1.8-.5c-.4-1.4-1-2.6-1.9-3.7C18.1 2.4 15.6 1.3 12.4 1.3c-3.2 0-5.6 1.1-7.3 3.2C3.6 6.4 2.8 9 2.8 12c0 3.2.8 5.8 2.3 7.7 1.7 2.1 4.1 3.1 7.3 3.2 2.8 0 4.8-.7 6.5-2.4 2.2-2.2 2.1-4.9 1.4-6.6-.5-1.2-1.5-2.2-2.6-2.8Zm-4.9 4.5c-1.1.1-2.3-.4-2.3-1.5 0-.8.6-1.7 2.4-1.8h.6c.6 0 1.2.1 1.8.2-.2 2.6-1.4 3-2.5 3.1Z" />
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
      <img className="nav-logo-image"  src="downloads/mongolz-nav.png" alt="" />
    </a>
  );
}

const globalPlatforms: Record<string, string> = {
  YT: "youtube",
  X: "x",
  TT: "tiktok",
  TH: "threads",
  BI: "bilibili",
  DC: "discord",
  KI: "kick",
};

function SocialCard({ item }: { item: SocialLink }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="social-card group"
      aria-label={`${item.name}: ${item.handle}`}
      style={{ "--social": item.color } as React.CSSProperties}
    >
      <div className="social-icon">
        <SocialIcon platform={globalPlatforms[item.short] ?? item.name} />
      </div>
      <span className="social-tooltip">{item.name}</span>
      <span className="sr-only">{item.name}</span>
    </a>
  );
}

function CopyEmail({
  email,
  dark = false,
  className = "",
}: {
  email: string;
  dark?: boolean;
  className?: string;
}) {
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
      className={`copy-email ${dark ? "copy-email-dark" : ""} ${className}`.trim()}
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
  const velocityRef = useRef(0);
  const lastMoveRef = useRef(0);
  const [dragging, setDragging] = useState(false);

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
        const dt = time - previousTime;
        // Flick momentum decays back toward the idle spin speed.
        velocityRef.current += (0.04 - velocityRef.current) * Math.min(1, dt * 0.003);
        angleRef.current += dt * velocityRef.current;
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
    setDragging(true);
    velocityRef.current = 0;
    lastMoveRef.current = performance.now();
    pointerAngleRef.current = pointerAngle(event);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const scratch = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const nextPointerAngle = pointerAngle(event);
    let delta = nextPointerAngle - pointerAngleRef.current;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    const now = performance.now();
    const dt = Math.max(1, now - lastMoveRef.current);
    velocityRef.current = velocityRef.current * 0.5 + (delta / dt) * 0.5;
    lastMoveRef.current = now;
    angleRef.current += delta;
    pointerAngleRef.current = nextPointerAngle;
    applyAngle();
  };

  const stopScratch = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    setDragging(false);
    if (performance.now() - lastMoveRef.current > 80) velocityRef.current = 0;
    velocityRef.current = Math.max(-3, Math.min(3, velocityRef.current));
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
    <div className={`vinyl-wrap${dragging ? " is-scratching" : ""}`}>
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
        <img className="vinyl-logo" src="downloads/horde-logo.png" alt="" draggable={false} />
      </div>
      <span className="vinyl-hint">DRAG TO SCRATCH</span>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [navMailCopied, setNavMailCopied] = useState(false);
  const navMailTimer = useRef<number | undefined>(undefined);

  const copyNavMail = async () => {
    const email = "info@mongolz.world";
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setNavMailCopied(true);
    window.clearTimeout(navMailTimer.current);
    navMailTimer.current = window.setTimeout(() => setNavMailCopied(false), 1800);
  };

  const closeMenu = () => setMenuOpen(false);

  const navigateToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (!target) return;

    setMenuOpen(false);
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
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));
    let frame = 0;

    const updateActiveSection = () => {
      setScrolled(window.scrollY > 24);
      const activationLine = window.innerHeight / 2;
      const currentSection = sections.find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= activationLine && bounds.bottom > activationLine;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
        return;
      }

      const lastPassedSection = [...sections]
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= activationLine);
      setActiveSection(lastPassedSection?.id ?? "");
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#111111] text-[#FAFAFA]">
      <nav
        className={`nav-v2 ${scrolled || menuOpen ? "nav-v2-solid" : ""} ${menuOpen ? "nav-v2-open" : ""}`}
        aria-label="Main navigation"
      >
        <div className="nav-v2-bar">
          <Logo onClick={closeMenu} />

          <div className="nav-v2-links">
            {navigation.map((item, index) => (
              <a
                key={item.id}
                className={`nav-v2-link ${activeSection === item.id ? "is-active" : ""}`}
                href={item.href}
                onClick={(event) => navigateToSection(event, item.id)}
                aria-current={activeSection === item.id ? "location" : undefined}
              >
                <span className="nav-v2-index">0{index + 1}</span>
                {item.shortLabel}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="nav-v2-cta"
            onClick={copyNavMail}
            aria-label={navMailCopied ? "Copied info@mongolz.world" : "Copy info@mongolz.world"}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="1" />
              <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {navMailCopied ? "Copied" : "Mail"}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="nav-v2-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
          </button>
        </div>

        <div id="mobile-navigation" className="nav-v2-panel" aria-hidden={!menuOpen}>
          <div className="nav-v2-panel-links">
            {navigation.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(event) => navigateToSection(event, item.id)}
                tabIndex={menuOpen ? 0 : -1}
                className={activeSection === item.id ? "is-active" : ""}
                aria-current={activeSection === item.id ? "location" : undefined}
                style={{ "--delay": `${80 + index * 45}ms` } as React.CSSProperties}
              >
                <span className="nav-v2-index">0{index + 1}</span>
                <span className="nav-v2-panel-label">{item.label}</span>
                <Arrow diagonal />
              </a>
            ))}
          </div>
          <div className="nav-v2-panel-footer">
            <button
              type="button"
              className="nav-v2-cta nav-v2-cta-block"
              onClick={copyNavMail}
              tabIndex={menuOpen ? 0 : -1}
              aria-label={navMailCopied ? "Copied info@mongolz.world" : "Copy info@mongolz.world"}
            >
              <span>{navMailCopied ? "Copied" : "Mail"}</span>
              <span className="nav-v2-mail-address">info@mongolz.world</span>
            </button>
          </div>
        </div>
      </nav>

      <header className="hero-v3">
        <h1 className="sr-only">The MongolZ</h1>

        <div className="hero-v3-meta">
          <span>Esports organization</span>
          <span>Ulaanbaatar &middot; Mongolia</span>
        </div>

        <div className="hero-v3-stage">
          <video
            className="hero-v3-video"
            src={heroVideoSrc}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="auto"
            disablePictureInPicture
            aria-label="The MongolZ animated identity"
          />

          <div className="hero-v3-row">
            <div className="hero-v3-actions">
              <a
                href="#teams"
                className="hero-v3-primary"
                onClick={(event) => navigateToSection(event, "teams")}
              >
                Meet our teams
                <Arrow />
              </a>
              <a
                href="#shop"
                className="hero-v3-secondary"
                onClick={(event) => navigateToSection(event, "shop")}
              >
                Official shop
              </a>
            </div>
          </div>
        </div>

        <div className="footer-strip hero-v3-strip" aria-hidden="true">
          <span style={{ background: "#FFBE0B" }} />
          <span style={{ background: "#3A86FF" }} />
          <span style={{ background: "#8338EC" }} />
          <span style={{ background: "#06D6A0" }} />
          <span style={{ background: "#FF006E" }} />
        </div>
      </header>

      <section id="teams" className="section-dark scroll-mt-20">
        <div className="section-heading">
          <div>
            <h2>OUR TEAMS</h2>
          </div>
        </div>
        <div className="teams-grid grid border-l border-t border-white/10 md:grid-cols-3">
          {teams.map((team) => (
            <article
              key={team.game}
              className="team-card"
              style={{ "--team": team.accent } as React.CSSProperties}
            >
              <div>
                <h3 className="text-5xl font-black tracking-[-0.06em]">{team.game}</h3>
                <p className="team-est">Est. {team.est}</p>
              </div>
              <div className="team-socials">
                {team.channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="team-channel"
                    aria-label={`${team.game} on ${channel.label}`}
                    data-account={channel.handle}
                    data-platform={channel.label}
                  >
                    <SocialIcon platform={channel.label} />
                    <span className="sr-only">{channel.label}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div id="connect" className="combined-global-block scroll-mt-20">
          <div className="global-channels-panel">
            <div className="global-channels-copy">
              <h2>GLOBAL CHANNELS</h2>
            </div>
            <div className="global-channels-dock">
              <div className="global-social-orbit">
                {socials.map((item) => (
                  <SocialCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="vertical-strip-wrap">
        <div className="vertical-strip" aria-hidden="true">
          <span style={{ background: "#FFBE0B" }} />
          <span style={{ background: "#3A86FF" }} />
          <span style={{ background: "#8338EC" }} />
          <span style={{ background: "#06D6A0" }} />
          <span style={{ background: "#FF006E" }} />
        </div>
      <section id="shop" className="relative scroll-mt-20 bg-[#FAFAFA] text-[#111111]">
        <div className="shop-pattern absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="shop-header flex items-end justify-between gap-6">
            <div>
            <p className="mb-5 text-[10px] font-bold tracking-[0.28em] text-black/45">
              OFFICIAL TEAM STORE
            </p>
            <h2 className="max-w-4xl text-6xl font-black leading-[0.86] tracking-[-0.065em] sm:text-8xl lg:text-[105px]">
              OFFICIAL SHOPS
            </h2>
            </div>
            <div className="shop-contact-row shop-header-socials">
            <a className="shop-social" href="https://www.instagram.com/mongolz.shop/" target="_blank" rel="noreferrer" aria-label="Shop on Instagram" data-account="mongolz.shop" data-platform="Instagram">
              <SocialIcon platform="Instagram" /> <span className="sr-only">Instagram</span>
            </a>
            <a className="shop-social" href="https://www.facebook.com/profile.php?id=61583142564401" target="_blank" rel="noreferrer" aria-label="Shop on Facebook" data-account="The MongolZ Shop" data-platform="Facebook">
              <SocialIcon platform="Facebook" /> <span className="sr-only">Facebook</span>
            </a>
            </div>
          </div>
          <div className="shop-grid mt-10 border-l border-t border-black/20">
            {shops.map((shop) => (
              <article key={shop.region} className="shop-card">
                <p>{shop.region} STORE</p>
                <h3>{shop.title}</h3>
                <span>{shop.description}</span>
                <CopyEmail email={shop.email} className="shop-email-button shop-card-email" />
                <a href={shop.href} target="_blank" rel="noreferrer">
                  SHOP NOW <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-20 bg-[#FAFAFA] text-[#111111]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <p className="eyebrow !text-[#8a8a8a]">COMMUNITY PARTNERS</p>
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div>
              <h2 className="text-5xl font-black tracking-[-0.055em] sm:text-7xl">
                PARTNER OFFERS
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-black/50 md:pt-2">
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
              A home for players and fans to meet, compete, and grow Mongolia's
              gaming community together.
            </span>
          </div>
          <a href="https://www.facebook.com/TheMongolZEsportClub/" target="_blank" rel="noreferrer" aria-label="Esport Club on Facebook" data-account="The MongolZ Esport Club" data-platform="Facebook">
            <SocialIcon platform="Facebook" />
          </a>
        </div>
      </section>

      <section id="horde" className="horde-section scroll-mt-20">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FOR THE GLORY OF MONGOLZ</p>
              <h2>JOIN THE HORDE</h2>
            </div>
          </div>
          <div className="horde-grid">
            <div className="playlist-card">
              <InteractiveVinyl />
              <div>
                <p>OFFICIAL SPOTIFY PLAYLIST</p>
                <h3>HORDE<br />ANTHEMS</h3>
                <a
                  href="https://open.spotify.com/user/315ag5xcf3f7gq4wgxm5aecerl6m?si=C8m3oc1lQ6G1JDsLglkjCA&nd=1&dlsi=b5bfc6eeffcd46a3"
                  target="_blank"
                  rel="noreferrer"
                  className="playlist-action"
                >
                  PLAY ON SPOTIFY <Arrow diagonal />
                </a>
              </div>
            </div>
            <div className="horde-links">
              <a
                href={`${import.meta.env.BASE_URL}downloads/mongolz-horde-kit.zip`}
                download="mongolz-horde-kit.zip"
                aria-label="Download the Horde Kit (desktop and phone wallpapers)"
              >
                <span className="horde-link-icon">↓</span>
                <div>
                  <p>DOWNLOAD PACK</p>
                  <h3>HORDE KIT</h3>
                  <span>Wallpapers &amp; sticker packs &amp; assets made for our Horde</span>
                </div>
                <Arrow diagonal />
              </a>
              <div className="horde-community">
                <p>HORDE CHANNELS</p>
                <h3>FOLLOW THE COMMUNITY</h3>
                <div className="horde-socials">
                  {[
                    { platform: "Facebook", account: "The Horde.gg", href: "https://www.facebook.com/thehorde.gg" },
                    { platform: "Instagram", account: "horde.gg", href: "https://www.instagram.com/horde.gg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" },
                    { platform: "YouTube", account: "Horde_gg", href: "https://www.youtube.com/@Horde_gg" },
                    { platform: "X", account: "Horde_gg", href: "https://x.com/Horde_gg?s=20" },
                    { platform: "Telegram", account: "horde gg", href: "https://t.me/hordegg" },
                    { platform: "Kick", account: "horde_gg", href: "https://kick.com/horde_gg" },
                    { platform: "TikTok", account: "horde.gg", href: "https://www.tiktok.com/@horde.gg?_r=1&_t=ZS-98NmvqbZF7X" },
                    { platform: "Threads", account: "horde.gg", href: "https://www.threads.com/@horde.gg" },
                  ].map((social) => (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Horde on ${social.platform}: ${social.account}`}
                      data-account={social.account}
                      data-platform={social.platform}
                    >
                      <SocialIcon platform={social.platform} />
                    </a>
                  ))}
                  <CopyEmail email="horde@mongolz.world" dark />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-hero">
            <div>
              <p className="eyebrow">THE MONGOLZ / ESPORTS ORGANIZATION</p>
              <h2 className="footer-statement">
                A man can be destroyed
                <br />
                but not defeated
              </h2>
            </div>
            <a href="#top" className="footer-top-button" aria-label="Back to top">
              <span>Back to top</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M12 19V5m-6 6 6-6 6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="footer-grid">
            <div className="footer-brand">
              <Logo />
              <p>The MongolZ - Landing Page</p>
              <CopyEmail email="info@mongolz.world" dark />
            </div>

            <div className="footer-column">
              <h3>Explore</h3>
              <ul>
                {navigation.map((item) => (
                  <li key={item.id}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3>Teams</h3>
              <ul>
                {footerTeams.map((team) => (
                  <li key={team.game}>
                    <a href="#teams" style={{ "--accent": team.accent } as React.CSSProperties}>
                      <span className="footer-dot" aria-hidden="true" />
                      {team.game}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-strip" aria-hidden="true">
            <span style={{ background: "#FFBE0B" }} />
            <span style={{ background: "#3A86FF" }} />
            <span style={{ background: "#8338EC" }} />
            <span style={{ background: "#06D6A0" }} />
            <span style={{ background: "#FF006E" }} />
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} The MongolZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
