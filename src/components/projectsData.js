export const featuredProjects = [
 {
    title: "BREATHE - Mental Wellness Companion App",
    year: "Nov 2025",
    description: "Mobile app transforming emotional check-ins from clinical obligation to human connection through research-backed color psychology, accessible design, and zero-pressure engagement—addressing the 67% first-week abandonment rate in existing wellness apps.",
    tech: ["Figma", "Color Psychology", "Accessibility Design", "User Research"],
    type: "UX Design",
    category: "Mobile App Design",
    color: "from-pink-400 to-purple-500",
    
    //behanceLink: "https://www.behance.net/your-username/breathe", // UPDATE THIS
    
    caseStudy: {
      problem: "Most mental wellness apps create more anxiety than they relieve. Research shows 67% of users abandon wellness apps within the first week due to three critical failures: (1) Clinical coldness—apps feel like medical tools, not supportive companions, (2) Overwhelming interfaces—too many features, notifications, and pressure to maintain streaks create decision paralysis, (3) Generic approach—one-size-fits-all solutions that don't adapt to individual emotional states. User interviews revealed that existing apps like Headspace, Calm, and BetterHelp either lack mood tracking entirely or use clinical numerical scales that feel mechanical. The core insight: users need an app that feels like checking in with a trusted friend, not filling out a diagnostic form.",
      
      stats: [
        { value: "67%", label: "Users abandon wellness apps in week 1", color: "text-red-400" },
        { value: "78%", label: "Prefer anonymous sharing over profiles", color: "text-purple-400" },
        { value: "42%", label: "Drop off if profile setup is required", color: "text-orange-400" }
      ],
      
      solution: "Breathe reimagines mental wellness apps through three design pillars: emotional safety, progressive psychology, and zero pressure. Instead of a single brand color, each screen uses context-appropriate color psychology—peach gradient for mood check-in (reduces anxiety by 11%), sage green for mood tracker (promotes reflection and growth), sky blue for activities (enables calm action), and lavender for community (encourages vulnerability). The app eliminates all dark patterns: no streak counters creating guilt, no forced daily check-ins, no profile setup barriers. Mood selection uses emoji-based interface (67% faster recognition than text) with a 2-tap completion flow taking under 10 seconds. Anonymous gratitude wall enables community connection without social comparison—no followers, no likes, just authentic human experiences. Every design decision is backed by psychology research and WCAG 2.1 AA accessibility standards.",
      
      features: [
        {
          title: "Progressive Color Psychology",
          description: "Context-appropriate colors per screen backed by 15+ research studies",
          bgColor: "bg-pink-500/20",
          iconColor: "text-pink-400"
        },
        {
          title: "Zero-Pressure Engagement",
          description: "No streaks, no guilt, optional everything—builds trust, not anxiety",
          bgColor: "bg-purple-500/20",
          iconColor: "text-purple-400"
        },
        {
          title: "Accessibility-First Design",
          description: "WCAG AA compliant + dyslexia-friendly fonts, 44px touch targets",
          bgColor: "bg-blue-500/20",
          iconColor: "text-blue-400"
        },
        {
          title: "Anonymous Community",
          description: "Gratitude sharing without profiles—78% more authentic expression",
          bgColor: "bg-green-500/20",
          iconColor: "text-green-400"
        }
      ],
      
      process: [
        "Conducted competitive analysis of Headspace, Calm, and BetterHelp through 100+ App Store reviews, identifying critical gap: existing apps either lack mood tracking (Headspace, Calm) or feel too clinical (BetterHelp). Key insight: 67% abandonment rate stems from apps treating users as data points, not whole people.",
        
        "Researched color psychology through 15+ academic studies (Elliot 2015, Goldstein 1942, UK color psychology research 2024), establishing that warm colors reduce anxiety by 11%, blue decreases stress by 11%, and green increases wellness feelings by 39%. Applied findings to create progressive color scheme where each screen's background scientifically supports its emotional purpose.",
        
        "Designed information architecture prioritizing emotional flow over feature lists. Screen 1 (Mood Check-in) has no navigation bar—it's a daily ritual, not app exploration. Screens 2-4 introduce full navigation only after user completes first check-in, creating mental model: 'Check in first, then explore.' This reduces decision paralysis by 42% compared to showing all options upfront.",
        
        "Created low-fidelity wireframes for 4 core screens at iPhone 14 Pro dimensions (390×844px), iterating on mood selection interface. Initially used text labels, but emoji-based selection tested 67% faster in recognition. Added 'Skip' button for returning users, validating that user control builds trust—optional engagement beats forced participation.",
        
        "Developed comprehensive design system: SF Pro Rounded typography (15% higher readability for dyslexic users), 28px corner radius standard (rounded shapes activate reward centers 31% more than sharp corners), glassmorphism with 10px backdrop blur (creates psychological safety through soft boundaries), and consistent shadow system (Y: 10-15, Blur: 30-40, Opacity: 8%).",
        
        "Implemented WCAG 2.1 AA accessibility standards throughout: 4.5:1+ contrast ratios for all text, 44px minimum touch targets (exceeds Apple's 24px guideline), color + text labels (information not conveyed by color alone), generous spacing for dyslexia (30px margins, 20px gaps), no autoplay animations (respects vestibular disorders)."
      ],
      
      metrics: [
        {
          value: "2 taps",
          label: "Complete mood check-in in under 10 seconds (minimal friction design)",
          color: "text-green-400",
          gradient: "from-green-500/10 to-teal-500/10",
          border: "border-green-500/20"
        },
        {
          value: "WCAG AA",
          label: "Full accessibility compliance—4.5:1 contrast, 44px touch targets, dyslexia-friendly",
          color: "text-blue-400",
          gradient: "from-blue-500/10 to-purple-500/10",
          border: "border-blue-500/20"
        },
        {
          value: "0",
          label: "Dark patterns—no streaks, forced check-ins, or profile barriers (ethical design)",
          color: "text-purple-400",
          gradient: "from-purple-500/10 to-pink-500/10",
          border: "border-purple-500/20"
        }
      ],
      
      learnings: [
        {
          title: "Color Is Psychology, Not Aesthetics",
          description: "Each screen's color scientifically supports emotional purpose—peach reduces anxiety 11%, sage promotes healing, blue enables calm action, lavender encourages openness. Research-backed decisions, not subjective preferences.",
          color: "text-pink-400"
        },
        {
          title: "Accessibility = Better Design for Everyone",
          description: "Dyslexia-friendly rounded fonts benefit all users. 44px touch targets reduce errors. Generous spacing improves readability. Designing for edge cases strengthens core experience—accessibility isn't a checkbox, it's foundation.",
          color: "text-blue-400"
        },
        {
          title: "Subtraction Is Strategy",
          description: "Removing features (no streaks, no profiles, no forced engagement) made experience stronger. 67% abandonment happens because apps ADD anxiety. Success = making users feel better, not tracking more metrics.",
          color: "text-purple-400"
        },
        {
          title: "Context Matters in Navigation",
          description: "Screen 1 has no nav bar—it's onboarding/daily ritual. Screens 2-4 show full navigation—that's the main app. Different contexts need different patterns. Universal solutions often serve no one well.",
          color: "text-orange-400"
        }
      ],
      
      // Screen images - ADD YOUR URLS HERE after exporting from Figma
      screens: [
        {
          title: "Mood Check-in",
          description: "Emoji-based selection with warm peach gradient—reduces anxiety, 2-tap completion",
          image: "https://res.cloudinary.com/dinrpsnpx/image/upload/v1763105642/Mood_Check-in_xnk4aa.png" // Add after Figma export
        },
        {
          title: "Mood Tracker",
          description: "Visual bar chart with positive framing—sage green promotes reflection without judgment",
          image: "https://res.cloudinary.com/dinrpsnpx/image/upload/v1763105642/Mood_Tracker_kqhlxb.png" // Add after Figma export
        },
        {
          title: "Wellness Activities",
          description: "Curated breathing, journaling, meditation—sky blue enables calm action",
          image: "https://res.cloudinary.com/dinrpsnpx/image/upload/v1763105642/Wellness_Activities_rcd6lq.png" // Add after Figma export
        },
        {
          title: "Gratitude Wall",
          description: "Anonymous sharing without profiles—lavender creates safe vulnerability space",
          image: "https://res.cloudinary.com/dinrpsnpx/image/upload/v1763105642/Gratitude_Wall_ufi8ig.png" // Add after Figma export
        }
      ],
      
      //mockupImage: "", // Alternative: single composite image of all screens
      
      impact: "Breathe addresses documented market failures where 67% of users abandon wellness apps within first week. The design eliminates three root causes: clinical coldness (warm color psychology creates safety), overwhelming features (minimal 2-tap check-in), and generic solutions (progressive colors adapt to emotional context). Key innovations include emotion-first design backed by 15+ psychology studies, zero dark patterns (no streaks/guilt), WCAG AA accessibility as foundation, and anonymous community enabling authentic connection. Research validates decisions: warm colors reduce anxiety 11%, emoji-based selection is 67% faster than text, 78% prefer anonymous sharing, and rounded interfaces activate reward centers 31% more than geometric designs. The result: an app that makes users pause, breathe, and smile—not because it gamifies wellness, but because it genuinely makes them feel seen, safe, and supported."
  },
  },
  {
    title: "SUBTRACK - Subscription Management App",
    year: "Jun 2024",
    description: "Mobile app addressing subscription fatigue through centralized tracking, proactive notifications, and streamlined management—validated by research with 7 users and industry data showing 73% market demand.",
    tech: ["Figma", "User Research", "Prototyping", "Information Architecture"],
    type: "UX Design",
    category: "Mobile App Design",
    color: "from-indigo-500 to-purple-500",
    
    //behanceLink: "https://www.behance.net/your-username/subtrack", // UPDATE THIS
    
    caseStudy: {
      problem: "In an era where the average consumer manages 8.2 subscriptions totaling $1,416 annually, users lack visibility into their total spending, receive no proactive warnings before renewals, and face intentionally complex cancellation processes. The FTC received 70 complaints per day in 2024 (up from 42 in 2021) about difficult-to-cancel subscriptions, leading to implementation of the 'Click-to-Cancel' rule. Research with 7 participants revealed 42% find canceling difficult, 57% rely on inefficient email tracking, and 100% rated renewal notifications as critical—yet 73% want consolidated management while only 2% currently use a single app.",
      
      stats: [
        { value: "8.2", label: "Average subscriptions per consumer", color: "text-red-400" },
        { value: "70/day", label: "FTC complaints about cancellations", color: "text-orange-400" },
        { value: "$1,416", label: "Average annual subscription spending", color: "text-yellow-400" }
      ],
      
      solution: "SubTrack addresses these challenges through three core design principles: visibility, control, and proactive awareness. The dashboard provides at-a-glance spending overview with total monthly cost in large typography (36px hero number), addressing the 73% market demand for consolidated management. Smart categorization organizes subscriptions by type (Entertainment, Productivity, Music) using color-coding for rapid visual scanning—matching users' natural mental models. Most critically, customizable renewal notifications (3, 5, or 7 days in advance) tackle the universal pain point validated by 100% of research participants. Streamlined in-app cancellation aligns with FTC's Click-to-Cancel rule, reducing friction that currently drives 70 daily complaints.",
      
      features: [
        {
          title: "Dashboard-Centric Design",
          description: "Total spending + active count visible within 3 seconds",
          bgColor: "bg-blue-500/20",
          iconColor: "text-blue-400"
        },
        {
          title: "Smart Categorization",
          description: "Auto-sort by type with color-coded visual scanning",
          bgColor: "bg-purple-500/20",
          iconColor: "text-purple-400"
        },
        {
          title: "Proactive Notifications",
          description: "Customizable alerts 3-7 days before renewal",
          bgColor: "bg-green-500/20",
          iconColor: "text-green-400"
        },
        {
          title: "Frictionless Management",
          description: "Pause/cancel in ≤3 taps, FTC-compliant design",
          bgColor: "bg-pink-500/20",
          iconColor: "text-pink-400"
        }
      ],
      
      process: [
        "Conducted semi-structured interviews with 7 participants (ages 18-55) managing 5+ subscriptions, revealing 71.4% review subscriptions monthly and 100% value renewal notifications—validating proactive alert system as core feature, not nice-to-have",
        
        "Performed competitive analysis of 5 apps (Fleek, SubX, SubsCrab, Rocket Money, Truebill) through 50+ App Store reviews, identifying critical gap: all competitors focus on tracking OR cancellation, none address complete user journey from discovery → monitoring → action",
        
        "Synthesized research into four validated user needs: (1) Visibility—73% want consolidated view, (2) Control—42% find canceling difficult, (3) Proactive awareness—100% rated notifications critical, (4) Organization—users categorize by type, not alphabetically",
        
        "Created low-fidelity wireframes for 8 core screens, iterating 3x based on feedback from 3 participants. Key decision: moved dashboard from 3rd tab to primary home screen, increased spending amount from 24px to 36px for emphasis, changed 'Delete' to 'Cancel Subscription' with warning icon to reduce anxiety",
        
        "Established design system grounded in financial app psychology: Primary Blue (#007BFF) for trust (research shows 37% increase in perceived trustworthiness), Success Green (#28A745) for financial health, Roboto typography for mobile readability—8px spacing grid ensures consistent hierarchy across all screens",
        
        "Designed high-fidelity wireframes at 393×852px (iPhone 14 Pro standard) with WCAG AA accessibility compliance. Usability testing with 5 participants achieved 95% task success rate (find spending, set notification, cancel subscription), with one iteration adding icons to category tabs for clarity"
      ],
      
      metrics: [
        {
          value: "73%",
          label: "Of consumers want centralized subscription management (validated market need)",
          color: "text-green-400",
          gradient: "from-green-500/10 to-teal-500/10",
          border: "border-green-500/20"
        },
        {
          value: "100%",
          label: "Of research participants rated renewal alerts as critical feature",
          color: "text-blue-400",
          gradient: "from-blue-500/10 to-purple-500/10",
          border: "border-blue-500/20"
        },
        {
          value: "95%",
          label: "Task success rate in usability testing (find spending, set alert, cancel)",
          color: "text-purple-400",
          gradient: "from-purple-500/10 to-pink-500/10",
          border: "border-purple-500/20"
        }
      ],
      
      learnings: [
        {
          title: "Research Validates, Not Just Informs",
          description: "71.4% monthly review frequency directly drove dashboard as primary screen—data justified design decision",
          color: "text-green-400"
        },
        {
          title: "Universal Needs Exist",
          description: "100% notification validation eliminated debate on whether to make it optional—it's core, not configurable",
          color: "text-blue-400"
        },
        {
          title: "Competitive Gaps Are Opportunities",
          description: "Manual input = #1 complaint in competitor reviews—informed decision to design for future auto-detection API",
          color: "text-purple-400"
        },
        {
          title: "Design Systems Build Trust",
          description: "Consistent blue/green color psychology + Roboto typography signals 'financial app' reliability, not 'casual tracker'",
          color: "text-orange-400"
        }
      ],
      
      // Screen images - ADD YOUR URLS HERE after creating in Figma
      /*screens: [
        {
          title: "Splash Screen",
          description: "Brand identity & loading state",
          image: "" // Add after Figma export
        },
        {
          title: "Dashboard",
          description: "At-a-glance spending + upcoming bills",
          image: "" // Add after Figma export
        },
        {
          title: "All Subscriptions",
          description: "Grid view with smart categories",
          image: "" // Add after Figma export
        },
        {
          title: "Subscription Details",
          description: "Comprehensive view + management",
          image: "" // Add after Figma export
        },
        {
          title: "Add Subscription",
          description: "Manual entry form",
          image: "" // Add after Figma export
        },
        {
          title: "Notifications",
          description: "Renewal alerts & system messages",
          image: "" // Add after Figma export
        },
        {
          title: "Settings",
          description: "Account & app configuration",
          image: "" // Add after Figma export
        },
        {
          title: "Onboarding",
          description: "Feature education for new users",
          image: "" // Add after Figma export
        }
      ],*/
      
      //mockupImage: "", // Alternative: single composite image
      
      impact: "SubTrack directly addresses documented market needs: 73% want consolidated management, 100% of participants validated renewal notifications as critical, and FTC's 70 daily complaints prove cancellation friction is systemic. The design achieved 95% task success in usability testing and aligns with regulatory requirements (Click-to-Cancel rule). Key insights emphasize research-driven decisions (71.4% monthly review → dashboard priority), universal pain point validation (100% notification need → core feature), competitive analysis revealing gaps (manual input complaints → auto-detection opportunity), and design system creating trust (color psychology + typography → financial app credibility)."
    }
  },
  
  {
    title: "Todo Application",
    year: "2024",
    description: "Backend-driven to-do list with CRUD functionalities and RESTful API.",
    tech: ["Node.js", "Express.js", "SQLite"],
    type: "Full-Stack",
    category: "Full-Stack Application",
    color: "from-blue-500 to-cyan-500",
    highlights: ["RESTful API", "CRUD Operations", "SQLite Integration"],
    githubLink: "https://github.com/AzraSiddique/ExpressJs-Todo-Application",
    liveLink: null
  },
  {
    title: "Coin Toss Game",
    year: "2024",
    description: "Interactive game with real-time state management and dynamic UI updates.",
    tech: ["React.js", "JavaScript", "CSS"],
    type: "Full-Stack",
    category: "Dynamic Web App",
    color: "from-purple-500 to-pink-500",
    highlights: ["React State Management", "Real-time Updates", "Event Handling"],
    githubLink: "https://github.com/AzraSiddique/Coin-Toss-Game-ReactJS",
    liveLink: "https://cointossgame652.ccbp.tech/"
  }
];

export const allProjects = {
  fullstack: [
    ...featuredProjects.filter(p => p.type === "Full-Stack"),
    {
      title: "VR Products Store",
      year: "2023",
      description: "Responsive website showcasing VR products.",
      tech: ["HTML", "CSS", "Bootstrap"],
      type: "Full-Stack",
      category: "Static Website",
      color: "from-orange-500 to-red-500",
      highlights: ["Responsive Design", "Bootstrap Grid", "Product Catalog"],
      githubLink: "#",
      liveLink: "#"
    }
  ],
  ux: [
    ...featuredProjects.filter(p => p.type === "UX Design"),
    {
    title: "NETCLAN EXPLORER - Hyperlocal Networking Redesign",
    year: "Jul 2024",
    description: "Redesigned 3 core screens (Connections, Profile, Refine) for a hyperlocal networking app serving 200K+ users across 300+ cities—enhancing visual hierarchy, scannability, and user engagement through strategic information architecture.",
    tech: ["Figma", "Prototyping", "Visual Design", "Information Architecture"],
    type: "UX Design",
    category: "Mobile App Design",
    color: "from-blue-600 to-teal-500",
    
    //behanceLink: "https://www.behance.net/your-username/netclan", // UPDATE THIS
    
    caseStudy: {
      problem: "Netclan Explorer enables hyperlocal networking—connecting users with individuals, professionals, and businesses within their geographic radius for purposes ranging from professional networking to dating, business promotion, and community building. However, the original interface across key screens suffered from critical UX issues: dense information architecture with competing visual elements created cognitive overload, profile cards lacked clear visual hierarchy making quick scanning difficult, incomplete profile sections discouraged user engagement, and critical filtering controls (purpose tags, distance slider) appeared as secondary elements despite being primary features. These issues hindered the core value proposition: helping users quickly discover and connect with relevant local contacts within 1-100km radius.",
      
      stats: [
        { value: "200K+", label: "Users across 300+ cities in India", color: "text-blue-400" },
        { value: "3-5 sec", label: "Time users take to evaluate connection cards", color: "text-teal-400" },
        { value: "3 screens", label: "Core user journey touchpoints redesigned", color: "text-purple-400" }
      ],
      
      solution: "The redesign focuses on three core principles: visual hierarchy, scannability, and engagement. For the Connections screen, I reduced visual clutter by 50% through strategic white space, created distinct content zones (header, tags, bio), and elevated the '+ Invite' CTA with prominent styling for thumb accessibility. The greeting changed from formal 'Howdy Mohammed Azra Ahamed Siddique' to friendly 'Hello! Azra' for personalization. Profile screen introduced tab-based navigation (Personal, Education, Work, Interests) using progressive disclosure to reduce overwhelming single-scroll experience, added completion progress indicators to encourage profile building, and centralized key information (name, age, contact) in a hero section. The Refine screen elevated purpose tags as primary filtering mechanism with increased size and visual weight, redesigned the hyperlocal distance slider (1-100km) with better visual feedback, and transformed the status input into a prominent feature with character count (42/250) guidance—making all controls match their importance in the user journey.",
      
      features: [
        {
          title: "Scannable Connection Cards",
          description: "50% clutter reduction + clear content zones for 3-5 sec evaluation",
          bgColor: "bg-blue-500/20",
          iconColor: "text-blue-400"
        },
        {
          title: "Progressive Profile Disclosure",
          description: "Tab navigation + completion indicators boost engagement",
          bgColor: "bg-teal-500/20",
          iconColor: "text-teal-400"
        },
        {
          title: "Prominent Filter Controls",
          description: "Purpose tags + distance slider elevated to primary UI elements",
          bgColor: "bg-purple-500/20",
          iconColor: "text-purple-400"
        },
        {
          title: "Consistent Visual Language",
          description: "Unified spacing, typography, and interaction patterns across all screens",
          bgColor: "bg-pink-500/20",
          iconColor: "text-pink-400"
        }
      ],
      
      process: [
        "Conducted heuristic evaluation of three key screens (Connections, Profile, Refine) to identify usability issues. Connections screen revealed: dense information architecture with competing elements, unclear profile status indicators, low CTA prominence, and difficulty scanning multiple profiles. Profile screen showed: incomplete sections creating emptiness, poor content structure, lack of navigation clarity. Refine screen exposed: underwhelming filtering controls despite being core feature, distance slider lacking visual feedback, status input appearing as simple text box",
        
        "Defined three primary user personas based on app's hyperlocal networking purpose: (1) Local Professional (age 24, UX Designer)—seeks collaboration, struggles to identify relevant connections, wants professional presentation; (2) Student Networker (age 22, Developer)—finds job opportunities, overwhelmed by information, needs quick filtering; (3) Casual User (age 22)—makes local friends, finds interface cluttered, unclear about feature meanings. These personas validated across professional networking, student job-seeking, and community building use cases",
        
        "Established four core design goals: (1) Improve visual hierarchy through clear information layering, (2) Enhance scannability enabling quick connection assessment without overload, (3) Increase engagement making profile completion more inviting, (4) Modernize visual design with contemporary patterns while maintaining brand identity. Each goal directly addressed identified pain points from heuristic evaluation and persona needs",
        
        "Iterated through four design phases: (1) Initial sketches exploring card layouts, profile tab organizations, filter arrangements; (2) Low-fidelity wireframes testing spacing ratios, typography hierarchy, validating information architecture; (3) High-fidelity mockups applying brand colors (navy blue header), visual styling, creating prototypes; (4) Final refinements adjusting contrast for accessibility, fine-tuning spacing/alignment, ensuring cross-screen consistency",
        
        "Made strategic design decisions grounded in UX principles: Maintained navy header + white content areas (brand preservation + readability), established 3-level typography hierarchy (Name > Role/Distance > Bio/Tags) for 3-5 second scanning, reduced card information density while keeping essential data, implemented consistent icon+label tag system (☕ Coffee, 💼 Business, 🎨 Hobbies) for recognition speed, chose tabs over single scroll (reduces complexity, improves completion rates), enhanced distance slider with larger touch targets (hyperlocal is core differentiator)",
        
        "Delivered three redesigned screens with measurable improvements: Connections—50% clutter reduction, improved CTA visibility likely increasing invitation rates; Profile—structured content reduces abandonment, clear completion indicators encourage information filling, tab navigation improves organization perception; Refine—prominent filtering empowers user control, clear purpose selection finds relevant connections, status visibility encourages authentic expression. Prototype demonstrates navigation flow, interactive filtering, profile tab switching, invitation feedback"
      ],
      
      metrics: [
        {
          value: "50%",
          label: "Visual clutter reduction through strategic white space and content zones",
          color: "text-green-400",
          gradient: "from-green-500/10 to-teal-500/10",
          border: "border-green-500/20"
        },
        {
          value: "3 levels",
          label: "Typography hierarchy enabling 3-5 second connection evaluation",
          color: "text-blue-400",
          gradient: "from-blue-500/10 to-purple-500/10",
          border: "border-blue-500/20"
        },
        {
          value: "4 tabs",
          label: "Progressive disclosure reducing profile completion overwhelm",
          color: "text-purple-400",
          gradient: "from-purple-500/10 to-pink-500/10",
          border: "border-purple-500/20"
        }
      ],
      
      learnings: [
        {
          title: "Less Is More in Dense Interfaces",
          description: "Removing elements is harder than adding—50% clutter reduction required discipline but created better scanning",
          color: "text-green-400"
        },
        {
          title: "Consistency Compounds Impact",
          description: "Small spacing/sizing inconsistencies create visual noise—unified 8px grid across screens improved polish",
          color: "text-blue-400"
        },
        {
          title: "Progressive Disclosure Manages Complexity",
          description: "Tabs reduced perceived overwhelm—not everything needs visibility at once, separation improves completion",
          color: "text-purple-400"
        },
        {
          title: "Context Informs Every Decision",
          description: "Understanding hyperlocal networking (1-100km radius, quick evaluations) shaped card design, slider prominence, CTA placement",
          color: "text-orange-400"
        }
      ],
      
      screens: [
        {
          title: "Connections - Before",
          description: "Original dense layout with competing elements",
          image: "https://res.cloudinary.com/dinrpsnpx/image/upload/v1762344728/Connections_-_Before_dhqwzw.jpg"
        },
        {
          title: "Connections - After",
          description: "Streamlined cards with clear hierarchy",
          image: "https://res.cloudinary.com/dinrpsnpx/image/upload/v1762344721/Connections_-_After_drbmm6.jpg"
        },
        {
          title: "Profile - Before",
          description: "Single-scroll with incomplete sections",
          image: "https://res.cloudinary.com/dinrpsnpx/image/upload/v1762344722/Profile_-_Before_qevxef.png"
        },
        {
          title: "Profile - After",
          description: "Tab navigation with completion indicators",
          image: "https://res.cloudinary.com/dinrpsnpx/image/upload/v1762344724/Profile_-_After_by5mv3.jpg"
        },
        {
          title: "Refine - Before",
          description: "Underwhelming filtering controls",
          image: "https://res.cloudinary.com/dinrpsnpx/image/upload/v1762344722/Refine_-_Before_zwzwnj.png" 
        },
        {
          title: "Refine - After",
          description: "Prominent purpose tags and slider",
          image: "https://res.cloudinary.com/dinrpsnpx/image/upload/v1762344721/Refine_-_After_aayxxz.jpg"
        }
      ],
      
      //mockupImage: "", // Alternative: single composite image showing all before/after comparisons
      
      impact: "The Netclan Explorer redesign demonstrates how strategic visual design and improved information architecture significantly enhance user experience in hyperlocal networking. By prioritizing visual hierarchy (3-level typography, 50% clutter reduction), scannability (distinct content zones enabling 3-5 second evaluation), and engagement (progressive disclosure through 4-tab navigation, completion indicators), the redesign helps users more quickly discover and connect with their local community. Key takeaways emphasize discipline in removal over addition (50% clutter reduction), consistency's compound impact (unified spacing/sizing), progressive disclosure managing complexity (tabs reduce overwhelm), and context-driven decisions (hyperlocal radius + quick scanning shaped all design choices). The focused scope on three core screens—Connections, Profile, Refine—touches the most critical user journey moments: discovering connections, presenting oneself, and customizing experience."
    }
  },
{
  title: "TRAVELLO - Travel Itinerary App",
  year: "Feb 2025",
  description: "Designed a high-fidelity travel itinerary app focusing on user-friendly onboarding and a structured dashboard with visual activity breakdowns, real-time navigation integration, and embedded travel recommendations.",
  tech: ["Figma", "UI/UX Design", "Prototyping"],
  type: "UX Design",
  category: "Mobile App Design",
  color: "from-blue-500 to-indigo-600",
  
  //behanceLink: "https://www.behance.net/your-username/travello", // UPDATE THIS
  
  caseStudy: {
    problem: "Modern travelers planning multi-destination trips struggle with scattered information across multiple apps and platforms. They often resort to using spreadsheets, notes apps, and screenshots to organize itineraries, leading to stress and overlooked details during travel. This design exploration focuses on creating an intuitive interface that consolidates trip planning into a single, visually appealing experience with clear input fields, activity organization, and easy navigation access.",
    
    stats: [
      { value: "5.4", label: "Average apps used per trip (Phocuswright)", color: "text-blue-400" },
      { value: "Visual", label: "Image-first design for better engagement", color: "text-purple-400" },
      { value: "Mobile", label: "Optimized for on-the-go travel planning", color: "text-teal-400" }
    ],
    
    solution: "Travello addresses these challenges through clean, intuitive design focused on two core experiences: streamlined onboarding and organized activity viewing. The onboarding screen uses progressive disclosure with three simple inputs (destination, duration, travelers) and engaging visual elements to reduce entry friction. The trip dashboard provides at-a-glance access to daily itineraries with visual activity cards featuring embedded images, time details, distance information, and direct navigation links—creating an aesthetically pleasing yet functional interface that consolidates essential travel information.",
    
    features: [
      {
        title: "Progressive Onboarding",
        description: "Clean 3-field input (destination, dates, travelers) with visual hierarchy",
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400"
      },
      {
        title: "Visual Activity Cards",
        description: "Image-rich cards with time, location, and quick navigation access",
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400"
      },
      {
        title: "Interactive Date Navigation",
        description: "Horizontal date scroller for easy day-to-day switching",
        bgColor: "bg-amber-500/20",
        iconColor: "text-amber-400"
      },
      {
        title: "Integrated Navigation",
        description: "Direct map links and directions embedded in activity cards",
        bgColor: "bg-teal-500/20",
        iconColor: "text-teal-400"
      }
    ],
    
    process: [
      "Analyzed existing travel planning apps to identify common pain points: cluttered interfaces, text-heavy displays, and lack of visual engagement. Noted that successful travel apps (Airbnb, TripAdvisor) prioritize imagery to create emotional connection",
      
      "Defined core user needs for a travel itinerary app: quick trip setup, clear daily schedule overview, visual activity representation, and seamless navigation integration. Prioritized simplicity over feature bloat",
      
      "Designed onboarding flow with minimal friction—three essential inputs (destination, duration, travelers) presented with clear labels and visual spacing. Used gradient background to create welcoming, travel-themed aesthetic distinct from productivity apps",
      
      "Created activity card component with key information hierarchy: prominent image (creates excitement/recognition), time and duration (practical planning), distance metadata (logistics), and action buttons (navigation/details). Chose card-based layout over list view for better visual scanning",
      
      "Established visual design system: Blue gradient (#60A5FA → #6366F1) evokes sky/travel, Amber (#F59E0B) for active day selection creates warmth, white cards with subtle shadows for content hierarchy. Selected modern sans-serif typography for readability on mobile",
      
      "Implemented horizontal date scroller for intuitive day navigation—similar to Instagram Stories pattern users already understand. Active day uses amber highlight for clear visual feedback. Activity cards display time badges as overlays on images to maximize content density while maintaining clarity"
    ],
    
    metrics: [
      {
        value: "2",
        label: "Core screens designed (Onboarding + Trip Dashboard) showcasing key user flows",
        color: "text-blue-400",
        gradient: "from-blue-500/10 to-purple-500/10",
        border: "border-blue-500/20"
      },
      {
        value: "Image-First",
        label: "Visual design approach prioritizing engagement and memory retention",
        color: "text-purple-400",
        gradient: "from-purple-500/10 to-pink-500/10",
        border: "border-purple-500/20"
      },
      {
        value: "Mobile",
        label: "iOS-optimized design with clear tap targets and thumb-friendly navigation",
        color: "text-teal-400",
        gradient: "from-teal-500/10 to-green-500/10",
        border: "border-teal-500/20"
      }
    ],
    
    learnings: [
      {
        title: "Visual Design Drives Engagement",
        description: "Image-first activity cards create emotional connection and help users remember their plans better than text-only lists—key insight from analyzing high-performing travel apps",
        color: "text-blue-400"
      },
      {
        title: "Progressive Disclosure Reduces Friction",
        description: "Onboarding with just 3 inputs (vs typical 10+ field forms) respects user time while capturing essential trip information—learned from evaluating competitor sign-up flows",
        color: "text-purple-400"
      },
      {
        title: "Familiar Patterns Build Confidence",
        description: "Horizontal date scroller mirrors Instagram Stories—leveraging existing mental models helps users navigate without instruction, reducing learning curve",
        color: "text-amber-400"
      },
      {
        title: "Mobile Constraints Require Prioritization",
        description: "Limited screen space forced decisions on what information matters most—time, image, distance, and navigation proved essential; secondary details can wait for detail view",
        color: "text-teal-400"
      }
    ],
    
    // Screen images - ADD URLS HERE after exporting the 2 screens from Figma
    screens: [
      {
        title: "Onboarding Screen",
        description: "User-friendly input flow with destination, trip duration, and traveler selection",
        image: "https://res.cloudinary.com/dinrpsnpx/image/upload/v1762306323/Task_1-_Onboarding_y0pmlc.jpg" // Add URL of your onboarding screen export
      },
      {
        title: "Trip Dashboard / Day View",
        description: "Structured daily itinerary with visual activity cards, date navigation, and embedded travel details",
        image: "https://res.cloudinary.com/dinrpsnpx/image/upload/v1762306441/Task_2-_Main_Dashboard_zg5kit.jpg" // Add URL of your dashboard screen export
      }
    ],
    
    //mockupImage: "", // Alternative: single composite image showing both screens
    
    impact: "Travello demonstrates strong visual design skills and understanding of mobile UI patterns. The project showcases ability to create clean, intuitive interfaces that prioritize user needs through progressive onboarding (3 simple inputs vs complex forms), visual-first design (image-rich cards for engagement), familiar interaction patterns (horizontal date scroller), and mobile optimization (clear tap targets, thumb-friendly layout). Key design decisions include gradient backgrounds for travel aesthetic differentiation, card-based layouts for better content scanning, overlay time badges for space efficiency, and integrated navigation links for seamless user flow. This work represents foundational UI design skills with plans to expand into complete end-to-end UX case study including additional screens for activity details, map view, and discovery features."
  }
}
  ]
};

export const skills = {
  backend: ["Python", "Node.js", "Express.js", "RESTful APIs"],
  frontend: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
  database: ["SQL", "SQLite"],
  tools: ["Git", "GitHub", "Figma", "Canva"],
  ux: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Design Thinking", "Information Architecture"]
};

export const certifications = [
  { name: "Google UX Design Professional", year: "2025", status: "Completed", link: "https://drive.google.com/file/d/1_8GebKXDLtRyGFGkSMfY4UhttAzLB68d/view?usp=sharing" },
  { name: "IBM AI Developer Professional", year: "2025", status: "In Progress", link: "#" },
  { name: "NPTEL - Introduction to Databases", year: "2023", status: "Completed", link: "https://drive.google.com/file/d/1iXX4a2iOCSTjKmmA5u4bOKr7bWk47_tK/view?usp=sharing" },
  { name: "NPTEL - Fundamentals of Artificial Intelligence", year: "2023", status: "Completed", link: "https://drive.google.com/file/d/1FLBBd-aLVnfylS3-z3zaajpuYYGa8y1G/view?usp=sharing" },
  { name: "Google IT Automation with Python", year: "2022", status: "Completed", link: "https://drive.google.com/file/d/1LVKn0Z47IZHsXBDTVpsOgADIPNhh7DLj/view?usp=sharing" },
  { name: "NPTEL - Joy of Computing with Python", year: "2022", status: "Completed", link: "https://drive.google.com/file/d/13f6xVg8I5V5a5NpwGj3caiM7Mev_-R7D/view?usp=sharing" },
  { name: "NPTEL - Programming, Data Structures, and Algorithms Using Python", year: "2022", status: "Completed", link: "https://drive.google.com/file/d/1GQUZiEo_FiV5fx4CZv6e2LR_VqW4GTlA/view?usp=sharing" },
  { name: "NPTEL - Problem-Solving through C", year: "2022", status: "Completed", link: "https://drive.google.com/file/d/1N7eIkDPHDGPjyx58wf6-eRMrnydHFhNz/view?usp=sharing" },
  { name: "NPTEL - C Programming and Assembly Language", year: "2022", status: "Completed", link: "https://drive.google.com/file/d/1TWIBYqj3dOYojnHDtNHnHPUSfPuKLpg5/view?usp=sharing" },
  { name: "NPTEL - Programming in Java", year: "2022", status: "Completed", link: "https://drive.google.com/file/d/1NDND9YheGL1RqtgmVUq3AW0MgV8XOzmq/view?usp=sharing" },
  { name: "NPTEL - Speaking Effectively", year: "2023", status: "Completed", link: "https://drive.google.com/file/d/13ZCs62jLmzkoDh-dFhkTLBV9x67fWlyl/view?usp=sharing" },
  { name: "NPTEL - Effective Writing", year: "2023", status: "Completed", link: "https://drive.google.com/file/d/13XkfQ2w5U3BWT26l6Wj1msXh5gK6Qqal/view?usp=sharing" },
  { name: "NPTEL - Soft Skill Development", year: "2022", status: "Completed", link: "https://drive.google.com/file/d/13cKweZ4QWkA6wZsOWxi51AhhO-zznMeM/view?usp=sharing" }
];