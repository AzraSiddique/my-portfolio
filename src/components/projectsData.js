export const featuredProjects = [
  {
    title: "Travello - Travel Itinerary App",
    year: "Feb 2025",
    description: "High-fidelity travel itinerary app with user-friendly onboarding and structured dashboard.",
    tech: ["Figma", "UI/UX Design", "Prototyping"],
    type: "UX Design",
    category: "Mobile App Design",
    color: "from-green-500 to-teal-500",
    caseStudy: {
      problem: "Travelers struggle with organizing complex itineraries and managing multiple bookings.",
      solution: "Created a comprehensive travel itinerary app with intuitive onboarding and interactive planning features.",
      process: [
        "Conducted user research",
        "Created user personas",
        "Developed wireframes",
        "Designed high-fidelity prototypes",
        "Conducted usability testing"
      ],
      impact: "Enhanced user engagement through visually appealing layouts and seamless navigation."
    }
  },
  {
    title: "SUBTRACK - Subscription Tracking App",
    year: "Jun 2024",
    description: "Simplified subscription management with automatic tracking and renewal notifications.",
    tech: ["Figma", "User Research", "Prototyping"],
    type: "UX Design",
    category: "Mobile App Design",
    color: "from-indigo-500 to-purple-500",
    caseStudy: {
      problem: "Users lose track of subscriptions, leading to unwanted charges.",
      solution: "Designed an intuitive app with automatic detection and renewal notifications.",
      process: [
        "User research with 25 participants",
        "Competitor analysis",
        "Information architecture",
        "High-fidelity wireframes",
        "Usability testing"
      ],
      impact: "Reduced subscription management time by 62% and helped users save ₹2,000-3,000 monthly."
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
      title: "Netclan Explorer Redesign",
      year: "Jul 2024",
      description: "Redesigned Profile, Refine, and Connections screens.",
      tech: ["Figma", "Prototyping"],
      type: "UX Design",
      category: "Mobile App Redesign",
      color: "from-pink-500 to-rose-500",
      caseStudy: {
        problem: "Poor visual hierarchy made navigation difficult.",
        solution: "Redesigned with improved hierarchy and clearer call-to-actions.",
        process: [
          "Analyzed existing app",
          "Gathered user feedback",
          "Redesigned key screens",
          "Created interactive prototypes"
        ],
        impact: "Improved user engagement through clearer visual hierarchy."
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