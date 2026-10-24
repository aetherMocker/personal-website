/* Site content — PLACEHOLDER DATA (all fictional, safe to publish) */

export const site = {
  site: {
    name: "Quillon Bramblewick",
    year: "2099"
  },
  themes: [
    { name: "Ink", bg: "#cdc6a2", fg: "#304c90" },
    { name: "Bluemarble", bg: "#2f2f2f", fg: "#4fd2e8" },
    { name: "Rose", bg: "#9f86a8", fg: "#b6e33c" },
    { name: "Orange", bg: "#96abbe", fg: "#ce6a48" },
    { name: "Denim", bg: "#2a354f", fg: "#b36b2b" },
    { name: "Blueberry", bg: "#56392f", fg: "#4c98b3" },
    { name: "Standard", bg: "#fcf3ea", fg: "#1e1710" },
    { name: "Notepad", bg: "#f9e093", fg: "#1d2c47" }
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],
  skills: [
    "Cloud sculpture",
    "Teapot diplomacy",
    "Spreadsheet origami",
    "Competitive napping",
    "Dragon-safe load balancing"
  ],
  hero: {
    ghostYear: "2099",
    topbarLeft: "Furniture Daydreaming ~ Applied Whimsy",
    topbarRight: "Last Updated: 32 Octember 2099",
    headline: "Quillon Bramblewick",
    tagline: "Arranger of imaginary furniture and part-time cloud sculptor, building contraptions that politely refuse to explode — from napkin sketch to wobbling prototype.",
    scrollText: "↓ Scroll to wander",
    ctaText: "View Contraptions",
    ctaHref: "#work",
    portrait: "https://picsum.photos/seed/bramble-portrait/600/800"
  },
  about: {
    bgNum: "01",
    label: "§ About",
    title: "About Me",
    tagline: "Imaginary furniture ~ cloud sculpture",
    portrait: "https://picsum.photos/seed/bramble-portrait/600/800",
    text: "I'm a <strong>professional arranger of imaginary furniture</strong> working at the border between daydream and spreadsheet. I care about the parts of a project nobody asked for — the spare buttons, the dust jackets, the way a teapot feels on a Tuesday. My background is in <strong>applied cloud sculpture and competitive napping</strong>, which is a roundabout way of saying I'm equally interested in why things float and how to politely ask them to land.",
    stats: [
      { value: "7½", label: "Years of Dozing" },
      { value: "6", label: "Contraptions" },
      { value: "12", label: "Suspicious Teapots" },
      { value: "1", label: "Golden Sock" }
    ],
    education: [
      {
        institution: "Institute of Imaginary Machines",
        degree: "M.A. Applied Whimsy & Logistics",
        dates: "2096 – current",
        note: "Coursework in biscuit-based project planning, advanced doodling, the economics of pretend markets, and leadership for groups of geese."
      },
      {
        institution: "Lower Gumble Polytechnic",
        degree: "B.Sc. Extremely Theoretical Plumbing",
        dates: "2092 – 2096",
        note: "A thorough grounding in pipes that go nowhere, valves of questionable intent, and the sociology of puddles. Thesis: a self-folding umbrella for indoor weather."
      }
    ]
  },
  work: {
    label: "§ Experience",
    title: "Work Experience",
    meta: "03 Roles",
    items: [
      {
        corner: "A—01",
        num: "001 / 2098",
        title: "Senior Wrangler of Runaway Spreadsheets",
        slug: "March 2098 – November 2099",
        desc: "Herded forty-one escaped spreadsheets back into their workbooks. Introduced the first fence, and a small bell, for cells that wander. Reduced cell-based incidents by a number I'm told is respectable.",
        tag: "Full-time Whimsy",
        cover: "https://picsum.photos/seed/bramble-work-1/800/600"
      },
      {
        corner: "A—02",
        num: "002 / 2097",
        title: "Apprentice Lighthouse Keeper (Inland Division)",
        slug: "June 2097 – February 2098",
        desc: "Kept a lighthouse lit in a landlocked valley for ships that never arrived. Wrote the manual on morale for lamps, and logged every moth by name."
      },
      {
        corner: "A—03",
        num: "003 / 2096",
        title: "Junior Translator of Dog-to-Cat Correspondence",
        slug: "January 2096 – May 2097",
        desc: "Translated a backlog of diplomatic notes between the dogs and cats of Lower Gumble. Averted two minor treaties and one major nap dispute.",
        tag: "Contract"
      }
    ]
  },
  projects: {
    label: "§ Projects",
    title: "Major Projects",
    meta: "06 Projects",
    list: [
      {
        num: "01",
        name: "The Wobbling Calendar",
        desc: "Scheduling tool for appointments with fate (2098)",
        images: [
          "https://picsum.photos/seed/bramble-p1a/800/600",
          "https://picsum.photos/seed/bramble-p1b/800/600"
        ],
        blocks: [
          {
            label: "Context",
            title: "The Guild of Unreliable Clocks",
            text: "A guild of clocks that disagreed about the time had been booking meetings on napkins. I built a calendar that wobbles gently when two appointments are about to collide."
          },
          {
            label: "My Role",
            title: "Tinkering & befriending clocks",
            text: "Interviewed three grandfather clocks, observed a cuckoo during a scheduling crisis, sketched the interface in crayon, then built it from rubber bands and enthusiasm."
          },
          {
            label: "Outcome",
            title: "Meetings now arrive roughly on time",
            text: "The clocks report fewer arguments, and one has taken up poetry. The calendar has since been adopted by a nearby colony of badgers."
          }
        ],
        links: [
          { label: "Source", href: "https://example.com/wobbling-calendar" }
        ]
      },
      {
        num: "02",
        name: "Atlas of Moderately Interesting Places",
        desc: "Interactive map of places worth a short detour (2097)",
        images: [
          "https://picsum.photos/seed/bramble-p2a/800/600"
        ],
        blocks: [
          {
            label: "Context",
            title: "A Tuesday afternoon",
            text: "Travellers had no reliable way to find places that were interesting but not too interesting. The existing guidebook only listed the extremes."
          },
          {
            label: "My Role",
            title: "Cartography & snack logistics",
            text: "Plotted four hundred detours, designed a slider for how interesting you'd like to be, and made the legend readable by torchlight."
          },
          {
            label: "Outcome",
            title: "Detours up 30%, regret down 40%",
            text: "Visitors reported arriving at precisely the right level of mild surprise. The tea shop at stop 212 has asked me to stop recommending it."
          }
        ]
      },
      {
        num: "03",
        name: "Gnome vs. Gnome",
        desc: "Two-player lawn game with a stubborn AI (2097)",
        images: [],
        blocks: [
          {
            label: "Context",
            title: "A rainy week",
            text: "I wanted a project that forced me to think about rules, grudges and small pointy hats without any framework doing the work for me."
          },
          {
            label: "My Role",
            title: "All of it",
            text: "Rulebook, opponent (a deeply petty search algorithm), board, and victory dance. Hand-carved, no dependencies."
          },
          {
            label: "Outcome",
            title: "Playable and mildly insulting",
            text: "The opponent beats me about 60% of the time and gloats in a font I did not choose."
          }
        ],
        links: [
          { label: "Play", href: "https://example.com/gnome-vs-gnome" }
        ]
      },
      {
        num: "04",
        name: "Pocket Cloud Compiler",
        desc: "Turns vague moods into weather forecasts (2096)",
        images: [
          "https://picsum.photos/seed/bramble-p4a/800/600",
          "https://picsum.photos/seed/bramble-p4b/800/600"
        ],
        blocks: [
          {
            label: "Context",
            title: "Introductory Meteorology of Feelings",
            text: "Three teams of forecasters had diverged on what 'a bit drizzly' meant. One team measured it in sighs; another, in socks."
          },
          {
            label: "My Role",
            title: "Parser author & umbrella liaison",
            text: "Built the grammar, wrote the translator from mood to millimetres, and ran office hours for people who felt vaguely overcast."
          },
          {
            label: "Outcome",
            title: "Forty forecasts translated in six weeks",
            text: "New moods no longer required a committee to decide whether they counted as fog."
          }
        ]
      },
      {
        num: "05",
        name: "Sock Drawer Inventory",
        desc: "Personal project — tracking where the other sock went (2099)",
        images: [
          "https://picsum.photos/seed/bramble-p5a/800/600",
          "https://picsum.photos/seed/bramble-p5b/800/600",
          "https://picsum.photos/seed/bramble-p5c/800/600",
          "https://picsum.photos/seed/bramble-p5d/800/600"
        ],
        blocks: [
          {
            label: "Context",
            title: "Personal project",
            text: "I kept losing one sock of every pair. I wanted to know whether the problem was the socks or my optimism."
          },
          {
            label: "My Role",
            title: "Everything",
            text: "A tiny ledger with a lost-and-found feature, a gentle chime, and an interface designed for people holding laundry with both arms."
          },
          {
            label: "Outcome",
            title: "Sock pairs reunited, mostly",
            text: "Missing socks fell sharply, and I now own more pairs than I started with. This is both a success and a mystery."
          }
        ]
      },
      {
        num: "06",
        name: "This Very Website",
        desc: "Personal project — layout, colour & tasteful nonsense (2099)",
        images: [],
        blocks: [
          {
            label: "Context",
            title: "Personal project",
            text: "A portfolio needed somewhere to live, and I needed a place to keep my teapots."
          },
          {
            label: "My Role",
            title: "Everything",
            text: "Picked eight colour schemes by closing my eyes, then arranged the rest around them like furniture."
          },
          {
            label: "Outcome",
            title: "Standing, mostly",
            text: "It loads fast, the teapots are safe, and nobody has complained about the moths."
          }
        ]
      }
    ],
    approach: {
      label: "How I Work",
      heading: "Start with the teapot, not the <em>brief</em>.",
      text: "Every contraption begins with listening — to people, to cats, to the parts of the system that are already humming. I'd rather ask a silly question on Monday than build the wrong wardrobe by Friday."
    },
    expect: {
      label: "What I Bring",
      items: [
        "Interviews with clocks, cats and other stakeholders",
        "Sketching interfaces in crayon",
        "Building in rubber bands, string, or whatever fits",
        "Gentle safety reviews for dragons",
        "Instruction manuals that outlive the contraption"
      ]
    },
    timeline: {
      label: "Typical Engagement",
      text: "Listening phase — 1–3 fortnights<br>Sketching & wobbling — 2–4 fortnights<br>Build & tinker — 4–12 fortnights"
    },
    cta: {
      text: "Send a pigeon →",
      href: "#contact"
    }
  },
  contact: {
    label: "§ Contact",
    title: "Contact",
    getInTouchLabel: "Write to Me",
    email: "nobody@example.com",
    phone: "+1 555 010 0199",
    locationLabel: "Whereabouts",
    location: "Lower Gumble + Available by Pigeon",
    resumeLabel: "Scroll of Deeds (PDF)",
    resumeHref: "files/sample-resume.pdf",
    manifesto: "Good contraptions are never just clever. They are the <em>gentlest possible</em> answer to a question nobody dared ask.",
    bigLinkText: "Send a Pigeon"
  },
  footer: {
    logo: "BRAMBLE",
    tagline: "Lower Gumble / Upper Gumble / By Pigeon",
    copyright: "© 2099 Quillon Bramblewick. All rights reserved, except the teapots.",
    attributionText: "Built from a Tooplate base",
    attributionHref: "https://www.tooplate.com/view/2161-vora-bold",
    socials: [
      { label: "GitHub", href: "https://example.com/bramblewick/code" },
      { label: "LinkedIn", href: "https://example.com/bramblewick/network" },
      { label: "Email", href: "mailto:nobody@example.com" }
    ]
  }
}