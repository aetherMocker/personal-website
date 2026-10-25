/* All Site content. Every UI component grabs from this export. */

export const site = {
  site: {
    name: "Aether Mocker",
    year: "2026"
  },

  /* fun UI twist to personal website-- colors swatch-themes!!! */
  themes: [
    { name: "Tulip", bg: "#e2e8e8", fg: "#2e398b" },
    { name: "Ink", bg: "#cdc6a2", fg: "#304c90" },
    { name: "Terminal", bg: "#222223", fg: "#5ce67a" },
    { name: "Rose", bg: "#897491", fg: "#c5ed56" },
    { name: "Orange", bg: "#c9d7e4", fg: "#c15e3d" },
    { name: "Stone", bg: "#d1d1d1", fg: "#454545" },
    { name: "Blueberry", bg: "#9dc5a1", fg: "#34505a" },
    { name: "Notepad", bg: "#f9e093", fg: "#14284e" }
  ],
  // site navigation (works best when on narrow window screen/phone)
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],

  skills: [
    "Full-Stack Development",
    "Software Engineering",
    "UI/UX Design",
    "UX Research",
    "Project Management",
    "Operations & Technology Management"
  ],
  /* ABOUT SECTION */
  about: {
    bgNum: "01",
    label: "§ About",
    title: "About Me",
    tagline: "Software Engineering ~ Project Management",
    portrait: "images/portrait-protected-intensity-DEFAULT-V2.jpg",
    // BIO blurb
    text: "Hello. I'm a <strong>recent Computer Science graduate</strong> from the University of Portland, now pursuing an M.S. in Operations & Technology Management. I work across the full stack, from UX research and Figma prototypes to Laravel, React, and Vue builds, and I've done undergraduate research on human-robot interaction and brain-computer interfaces. I want to bridge engineering and product/operations, and I look forward to bringing any number of my <strong>creative-thinking skills, communication, and positive attitude</strong> to any role.",
    stats: [
      { value: "4", label: "Symposium Presentations" },
      { value: "2", label: "Research Roles" },
      { value: "7", label: "Major Projects" },
      { value: "11", label: "Programming Languages" }
    ],
    education: [
      {
        institution: "University of Portland",
        degree: "M.S. Operations & Technology Management",
        dates: "Expected 2027",
        note: "Foundations in Information Technology and Information Systems, Business Analytics, Technology Management, and Machine Learning programming for Business."
      },
      {
        institution: "University of Portland",
        degree: "B.S. Computer Science",
        dates: "2022 – 2026",
        note: "Advanced understanding in the programming, development, and management of Software, Analysis of Algorithms, Operating Systems & Compilers, and further Software Engineering."
      }
    ]
  },
  /* WORK EXPERIENCE SECTION */
  work: {
    label: "§ Experience",
    title: "Work Experience",
    items: [
      {
        corner: "A—02",
        num: "University of Portland",
        title: "Mental Model Development during Human-Robot Interactions",
        slug: "May 2025 – August 2026",
        desc: "Research Assistant. Investigated Mental Model development during Human-Robot Interactions. Conducted thematic qualitative analysis on participant data using MaxQDA and Excel. Learned that people's preconceptions of robots may influence how they interact with robots. Presented findings at the Undergraduate Research Symposium (October 2025) at UP.",
      },
      {
        corner: "A—01",
        num: "University of Portland",
        title: "Brain Activity Analysis with Brain Computer Interface",
        slug: "January 2024 – August 2024",
        desc: "Research Assistant. Studied & observed changes in EEG brainwave data due to stimuli (true vs. false statements) with a Brain Computer Interface. Assembled the recording headgear (OpenBCI) and hosted participants from the UP community. Processed recorded brain wave data in Python for analysis. Found brain activity spikes significantly more when presented with \"false\" statements compared to \"true\" statements. Presented at the UP Scholarship Day Student Symposium (April 2024).",
        tag: "Undergraduate Research"
      }
    ]
  },
  /* PROJECTS SECTION */
  projects: {
    label: "§ Projects",
    title: "Major Projects",
    list: [
      {
        num: "Fall 2026",
        name: "Art Portfolio App",
        desc: "Personal project — Showcasing all my artwork, my way.",
        images: [],
        blocks: [
          {
            label: "Context",
            title: "Personal project",
            text: "My dream is to see my art in a gallery some day, and a good start is a digital portfolio. Something to catalog all my pieces over the years with an easy import mechanism- an Excel spreadsheet."
          },
          {
            label: "My Role",
            title: "Design & development",
            text: "Designed a unique themed UI, prototyped it in HTML & CSS then worked in Figma Make, then converted it into a Vue 3 + Vite application."
          },
          {
            label: "Outcome",
            title: "Still in Progress",
            text: "Currently in development, this app will allow me to see my 50+ paintings, 300+ digital works, and much more, record their various mediums, and enjoy a professional looking site for all my creative pieces."
          }
        ],
        links: [
          { label: "Prototype", href: "https://scrub-most-88172555.figma.site" },
          { label: "Repo", href: "https://github.com/aetherMocker/personal-portfolio" },
          { label: "Published (TBD)", href: "#" } // TODO: Github pages publish!
        ]
      },
      {
        num: "Summer 2026",
        name: "Plant Log Tracker",
        desc: "Personal project — tracking watering, soil moisture & light",
        images: [
          "images/plant-log-1-protected-intensity-DEFAULT-V2.png",
          "images/plant-log-2-protected-intensity-DEFAULT-V2.png",
          "images/plant-log-3-protected-intensity-DEFAULT-V2.png",
          "images/plant-log-4-protected-intensity-DEFAULT-V2.png",
        ],
        blocks: [
          {
            label: "Context",
            title: "Personal project",
            text: "I kept both overwatering and neglecting my plants. I needed a platform to track & manage all the aspects of plantcare in one, as a locally stored web application."
          },
          {
            label: "My Role",
            title: "Design & development",
            text: "Designed and developed the app to track watering cycles, soil moisture, and light. Prototyped in HTML & CSS and run with Node.js."
          },
          {
            label: "Outcome",
            title: "A working plant-care log",
            text: "My plants are thriving, I am not stressing, and I can navigate it all thanks to my web-app. It saves up to 20 backups into the /backups project directory, which prevents large data losses from being possible-- much needed if the project ever gets moved in my computer's files."
          }
        ],
        links: [
          { label: "Repo", href: "https://github.com/aetherMocker/plant-log" } // TODO: make repo public
        ]
      },
      {
        num: "Summer 2026",
        name: "This Very Website",
        desc: "Personal project — resume, projects & themed UI ",
        images: [],
        blocks: [
          {
            label: "Context",
            title: "Personal project",
            text: "A portfolio needed somewhere to live: an interactive site that outlines my resume, projects, and personal information. More than any regular personal website, I wanted information quick and easily accessible, like an infographic you can interact with."
          },
          {
            label: "My Role",
            title: "Design & development",
            text: "Designed a unique themed UI, prototyped it in HTML & CSS, then converted it into a Vue 3 + Vite application. It evolved from a Tooplate base and was changed through many versions to become what it is now."
          },
          {
            label: "Outcome",
            title: "Live and themeable",
            text: "An interactive site with multiple colour themes, including high-contrast options for accessibility. Information is quick and compact, live links to public repos, images from past projects, and details of most all the work I've done in my field."
          }
        ],
        links: [
          { label: "Repo", href: "https://github.com/aetherMocker/personal-website" } // TODO: make repo public
        ]
      },
      {
        num: "Fall 2025 + Spring 2026",
        name: "Pilot Builder",
        desc: "Senior Capstone Project for University of Portland Athletics",
        images: [
          "images/proj-pilot-1-protected-intensity-DEFAULT-V2.jpg",
          "images/proj-pilot-2-protected-intensity-DEFAULT-V2.jpg",
          "images/proj-pilot-3-protected-intensity-DEFAULT-V2.jpg",
          "images/proj-pilot-4-protected-intensity-DEFAULT-V2.jpg",
        ],
        blocks: [
          {
            label: "Context",
            title: "Senior Capstone for UP Athletics",
            text: "A year-long capstone project in a team of 5 members built for University of Portland Athletics, taking a feature set from prototype through to quality-tested implementation. Meant to improve the information sharing between departments, detailed into 7 main categories."
          },
          {
            label: "My Role",
            title: "Full-Stack Developer, UI/UX Designer & UX Researcher",
            text: "Designed prototypes in Canva and Figma, led UX research with participants and collated their feedback, and learned Laravel, PHP, and React to implement and quality-test multiple features. Developed the feature for Sports Performance and Coaches: training schedule creation & planning."
          },
          {
            label: "Outcome",
            title: "Deployed and User-tested",
            text: "The 10 participants, ranging from faculty and staff to student-athletes, gave amazing feedback with much excitement. Currently deployed to the UP server for select access on UP wifi connection. Presented at the Scholarship Day Student Symposium (April 2026) and the Shiley Showcase (May 2026) at UP."
          }
        ],
        links: [
          { label: "Prototype", href: "https://linked-grain-36391756.figma.site/"},
          { label: "Repo", href: "https://github.com/aetherMocker/pilot-builder" }
        ]
      },
      {
        num: "Spring 2025",
        name: "Mini-Java Compiler",
        desc: "Compiler for a simplified Java, targeting MIPS",
        images: [],
        blocks: [
          {
            label: "Context",
            title: "Compiler Design course project",
            text: "Implement the main components of a compiler for a simplified version of Java for a Compiler Design course."
          },
          {
            label: "My Role",
            title: "All components",
            text: "Programmed every component of the compiler, including translation into MIPS instructions."
          },
          {
            label: "Outcome",
            title: "Completed",
            text: "Built a full compiler (lexer, parser, semantic analysis, code generation) that translates simplified Java into MIPS assembly, passing the course’s full test suite."
          }
        ],
        links: []
      },
      {
        num: "Spring 2024",
        name: "CISGO Map Visualization",
        desc: "Software Engineering course project",
        images: [
          "images/proj-cisgo-1-protected-intensity-DEFAULT-V2.jpg",
          "images/proj-cisgo-2-protected-intensity-DEFAULT-V2.jpg",
          "images/proj-cisgo-3-protected-intensity-DEFAULT-V2.jpg",
          "images/proj-cisgo-4-protected-intensity-DEFAULT-V2.png",
        ],
        blocks: [
          {
            label: "Context",
            title: "Software Engineering course project",
            text: "A map visualization website built as a team project for a Software Engineering course. The Client, University of Portland Study Abroad (CISGO) didn't have a platform to display past & current abroad opportunities, ranging from exchange programs, research projects, and study abroad opportunities that had been collected from a Qualtrics survey."
          },
          {
            label: "My Role",
            title: "Full-Stack & UI/UX Developer, UX Designer",
            text: "Designed the UI and implemented most of the frontend components in HTML & CSS, then created the database and connected it to the frontend using MySQL & JS. Contributed feature to search the 100+ \"pins\" by opportunity type, past vs. current, and by search-bar."
          },
          {
            label: "Outcome",
            title: "Ready for Deployment",
            text: "Delivered a working website with a designed interface and a live database connection behind it. Packaged project for future work in deployment."
          }
        ],
        /* links: [
          { label: "Repo", href: "https://github.com/aetherMocker/cs341-cisgo" } // TODO: figure out how to make public... or cope bc i already have images and the proj files myself
        ] */
      },
      {
        num: "Fall 2023",
        name: "Cribbage Game",
        desc: "Android card game for Object Oriented Programming",
        images: [],
        blocks: [
          {
            label: "Context",
            title: "Object Oriented Programming course project",
            text: "A school project to implement the card game Cribbage as a software application for Android."
          },
          {
            label: "My Role",
            title: "Full-stack Developer & UI Designer",
            text: "Used Android Studio to implement -- in Java for front + backend -- the card shuffling and drawing mechanics, game rule checks, and one of two AI players."
          },
          {
            label: "Outcome",
            title: "A playable Android Cribbage",
            text: "A working game with core card mechanics, rule enforcement, and two AI-computer opponents."
          }
        ],
        // no repo for this proj...
        /* links: [
          { label: "Repo", href: "https://github.com/aetherMocker" }
        ] */
      },
    ],
    /* ABOUT ME/ SKILLS (APPROACH) */
    approach: {
      label: "How I Work",
      heading: "Start with the <em>people</em>, then build the prototype.",
      text: "Every project begins with listening: to participants, users, and stakeholders. I prototype early in Figma, Canva or HTML & CSS, gather feedback, and then build and test the real thing."
    },
    expect: {
      label: "What I Bring",
      items: [
        "Languages: C, C++, CSS, Java, JavaScript, HTML, Python, Rust, Haskell, Prolog, MIPS",
        "Systems: Linux/Unix, iOS, macOS",
        "IDE & Tools: Visual Studio Code, git, Android Studio, Visual Studio",
        "Design: Figma, Canva, Adobe InDesign, Adobe Illustrator, Adobe Photoshop",
        "Analysis Tools: MaxQDA, Excel",
        "Business Analytics: Tableau, JMP"
      ]
    },
    timeline: {
      label: "Typical Process",
      text: "Research & listening<br>Planning & Prototyping<br>Client-feedback informed decision-making<br>Build & Quality-test"
    },
    cta: {
      text: "Get in touch →",
      href: "#contact"
    }
  },
  /* CONTACT SECTION */
  contact: {
    label: "§ Contact",
    title: "Contact",
    getInTouchLabel: "Connect",
    email: "aethermock@gmail.com",
    locationLabel: "Location",
    location: "Portland, OR + Open to Remote",
    manifesto: "Devoted to software that isn't just functional, but provides <em>smart, creative,</em> and <em>unique</em> solutions to problems actual people face.",
    bigLinkText: "Get in Touch"
  },
  /* FOOTER */
  footer: {
    lastUpdated: "Last Updated: 24 October 2026",
    copyright: "© 2026 Aether Mocker. All rights reserved.",
    attributionText: "Built from a Tooplate base",
    attributionHref: "https://www.tooplate.com/view/2161-vora-bold",
    socials: [
      { label: "GitHub", href: "https://www.github.com/aetherMocker" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/aethermock" },
      { label: "Email", href: "mailto:aethermock@gmail.com" }
    ]
  }
}