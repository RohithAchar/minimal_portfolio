import { useState, useEffect } from "react";
import { useSEO } from "./hooks/useSEO";
import {
  User,
  FolderKanban,
  GraduationCap,
  BookOpen,
  Mail,
  Home,
  Code,
  Globe,
  Database,
  Server,
  GitBranch,
  Cloud,
  Terminal,
  Play,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [isDark, setIsDark] = useState(false);

  // SEO configuration
  const getBaseUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.origin;
    }
    return "";
  };

  const seoConfig = {
    title: "Rohith Achar - Full Stack Developer & Tech Blogger",
    description:
      "Portfolio and blog of Rohith Achar, a full stack developer sharing daily learnings and building meaningful projects. Based in Bengaluru, India.",
    keywords:
      "web development, react, node.js, portfolio, tech blog, full stack developer, next.js, typescript, rohith achar, bengaluru",
    author: "Rohith Achar",
    url: getBaseUrl(),
    image: getBaseUrl() ? `${getBaseUrl()}/og-image.jpg` : "",
  };

  // Update SEO meta tags based on active section
  const getSectionSEO = () => {
    const baseUrl = seoConfig.url;
    const sections = {
      about: {
        title: `About - ${seoConfig.title}`,
        description:
          "Learn about my journey as a full stack developer, my skills, and what I'm currently learning.",
        url: `${baseUrl}/#about`,
      },
      projects: {
        title: `Projects - ${seoConfig.title}`,
        description:
          "Explore my portfolio of web applications and projects built with modern technologies.",
        url: `${baseUrl}/#projects`,
      },
      education: {
        title: `Education - ${seoConfig.title}`,
        description:
          "My educational background including SSLC, PUC, BCA, and current MCA studies.",
        url: `${baseUrl}/#education`,
      },
      blog: {
        title: `Blog - ${seoConfig.title}`,
        description:
          "Daily learnings and technical insights about web development, React, Node.js, and more.",
        url: `${baseUrl}/#blog`,
      },
      contact: {
        title: `Contact - ${seoConfig.title}`,
        description:
          "Get in touch with me for opportunities, collaborations, or just to chat about technology.",
        url: `${baseUrl}/#contact`,
      },
    };

    const section = sections[activeSection] || sections.about;
    return {
      ...seoConfig,
      title: section.title,
      description: section.description,
      url: section.url,
    };
  };

  // Apply SEO
  useSEO(getSectionSEO());

  // Add structured data (JSON-LD) for better SEO
  useEffect(() => {
    // Remove existing structured data script if any
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Person schema
    const currentUrl =
      typeof window !== "undefined" ? window.location.origin : null;
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Rohith Achar",
      jobTitle: "Full Stack Developer",
      description:
        "Full stack developer sharing daily learnings and building meaningful projects",
      email: "rohithachar2000@gmail.com",
      ...(currentUrl && { url: currentUrl }),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/RohithAchar",
        "https://www.linkedin.com/in/rohith-achar-bbb189311/",
      ],
      knowsAbout: [
        "Web Development",
        "React",
        "Next.js",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "AWS",
        "Linux",
      ],
    };

    // WebSite schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Rohith Achar - Portfolio & Blog",
      ...(currentUrl && { url: currentUrl }),
      description:
        "Portfolio and blog of Rohith Achar, a full stack developer based in Bengaluru, India",
      author: {
        "@type": "Person",
        name: "Rohith Achar",
      },
    };

    // Create and inject JSON-LD scripts
    const personScript = document.createElement("script");
    personScript.type = "application/ld+json";
    personScript.text = JSON.stringify(personSchema);
    document.head.appendChild(personScript);

    const websiteScript = document.createElement("script");
    websiteScript.type = "application/ld+json";
    websiteScript.text = JSON.stringify(websiteSchema);
    document.head.appendChild(websiteScript);

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  // Load theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Sync theme with html/body for overscroll background
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  // Save theme preference
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const projects = [
    {
      title: "Animated Carousel",
      description:
        "An interactive animated carousel built with React and GSAP, featuring smooth animations created with Adobe After Effects. This project helped me learn GSAP library fundamentals and After Effects basics for web animations.",
      tech: ["React", "GSAP", "Adobe After Effects", "Tailwind CSS"],
      link: "https://animated-carousal.vercel.app/",
      github: "https://github.com/RohithAchar/animated-carousal",
    },
    {
      title: "3D Galaxy",
      description:
        "An immersive 3D galaxy visualization built with Three.js and WebGL. This project deepened my understanding of how GPUs render pixels on screen, exploring WebGL rendering pipelines and 3D graphics programming.",
      tech: ["Three.js", "WebGL", "React"],
      link: "https://galaxy-delta-hazel.vercel.app/",
      github: "https://github.com/RohithAchar/galaxy",
    },
    {
      title: "Music Application",
      description:
        "A collaborative music streaming application where multiple users can join rooms, add songs from YouTube, and vote for tracks. The highest voted song plays next. Features real-time synchronization via WebSocket connections, queue management, and a modern UI built with Next.js and shadcn/ui. Frontend hosted on Vercel, backend on Render.",
      tech: ["Next.js", "TypeScript", "shadcn/ui", "WebSocket", "Node.js"],
      link: "https://music-frontend-one.vercel.app/",
      github: "https://github.com/RohithAchar/music-frontend",
      githubBackend: "https://github.com/RohithAchar/music-backend",
    },
    {
      title: "YouTube Clone",
      description:
        "A YouTube clone built to learn cloud storage and video processing. The main focus was understanding how to store data in AWS S3 buckets and process videos using FFmpeg. Features a Next.js frontend with a simple UI and a TypeScript backend for video upload, processing, and streaming.",
      tech: ["Next.js", "TypeScript", "AWS S3", "FFmpeg", "Tailwind CSS"],
      link: "https://www.youtube.com/watch?v=shKFkITugSc",
      github: "https://github.com/RohithAchar/yt-clone",
    },
    {
      title: "E-commerce Store & CMS",
      description:
        "A full-stack e-commerce platform with two applications: an Admin CMS dashboard for managing multiple stores, products, and sales monitoring, and a customer-facing store for browsing products and making purchases. Features include multi-store management, product CRUD operations, Stripe payment integration, Clerk authentication, Prisma ORM with PostgreSQL, and Zustand for state management. Built with Next.js, TypeScript, shadcn/ui, and Tailwind CSS.",
      tech: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Stripe",
        "Clerk",
        "Zustand",
        "shadcn/ui",
        "Tailwind CSS",
      ],
      link: "https://e-commerce-store-six-pearl.vercel.app/",
      linkCms:
        "https://e-commerce-admin-lovat-kappa.vercel.app/1cf3b91c-85d5-49aa-ad50-79f4fe0ceaa8",
      github: "https://github.com/RohithAchar/e-commerce-store",
      githubCms: "https://github.com/RohithAchar/e-commerce-admin",
    },
    {
      title: "Knight Travail",
      description:
        "An interactive website that visualizes the Knight's Tour problem on a chessboard. Demonstrates the Breadth-First Search (BFS) algorithm to find the shortest path for a knight to move from one square to another. Features an interactive chessboard where users can click to place the knight and visualize the algorithm's pathfinding process.",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://rohithachar.github.io/Knights-Travails/",
      github: "https://github.com/RohithAchar/Knights-Travails",
    },
  ];

  const blogs = [
    {
      title: "Understanding React Hooks",
      date: "Nov 28, 2025",
      preview:
        "Today I learned about the useCallback and useMemo hooks and when to actually use them for performance optimization. The key is understanding that these hooks are about referential equality, not performance by default...",
      readTime: "5 min read",
      tags: ["React", "JavaScript"],
      slug: "understanding-react-hooks",
    },
    {
      title: "CSS Grid vs Flexbox",
      date: "Nov 25, 2025",
      preview:
        "Explored the differences between CSS Grid and Flexbox, and discovered that Grid is better for two-dimensional layouts while Flexbox excels at one-dimensional layouts. Here's when to use each...",
      readTime: "4 min read",
      tags: ["CSS", "Web Design"],
      slug: "css-grid-vs-flexbox",
    },
    {
      title: "API Design Best Practices",
      date: "Nov 22, 2025",
      preview:
        "Key principles I learned about RESTful API design including proper status codes, versioning, and error handling. Consistency is more important than perfection...",
      readTime: "6 min read",
      tags: ["Backend", "API"],
      slug: "api-design-best-practices",
    },
    {
      title: "Docker Containers Explained",
      date: "Nov 20, 2025",
      preview:
        "Finally understood how Docker actually works under the hood. Containers aren't virtual machines - they're isolated processes that share the host OS kernel...",
      readTime: "7 min read",
      tags: ["DevOps", "Docker"],
      slug: "docker-containers-explained",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Semantic Header with proper heading hierarchy */}
      <header
        className={`border-b transition-colors ${
          isDark ? "border-zinc-800" : "border-gray-200"
        }`}
        role="banner"
      >
        <div className="max-w-2xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 w-full">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-3 truncate">
                Rohith Achar
              </h1>
              <p
                className={`text-base sm:text-lg md:text-xl mb-2 sm:mb-4 ${
                  isDark ? "text-zinc-300" : "text-gray-600"
                }`}
              >
                Full Stack Developer
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? "bg-zinc-800 hover:bg-zinc-700 text-yellow-400"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDark ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>
          </div>
          <p
            className={`max-w-2xl mb-6 ${
              isDark ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            Building projects and learning.
          </p>
          <nav aria-label="Social media links">
            <ul className="flex gap-6 text-sm list-none">
              <li>
                <a
                  href="https://github.com/RohithAchar"
                  className={`transition-colors ${
                    isDark
                      ? "text-zinc-400 hover:text-zinc-100"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="GitHub Profile"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rohith-achar-bbb189311/"
                  className={`transition-colors ${
                    isDark
                      ? "text-zinc-400 hover:text-zinc-100"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="LinkedIn Profile"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:rohithachar2000@gmail.com"
                  className={`transition-colors ${
                    isDark
                      ? "text-zinc-400 hover:text-zinc-100"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  aria-label="Email contact"
                >
                  Email
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Navigation - Desktop */}
      <nav
        className={`hidden md:block border-b sticky top-0 z-10 backdrop-blur-sm transition-colors ${
          isDark
            ? "bg-zinc-900/95 border-zinc-800"
            : "bg-white/95 border-gray-200"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-2xl mx-auto px-6">
          <ul className="flex gap-6 md:gap-8 list-none">
            <li>
              <button
                onClick={() => setActiveSection("about")}
                className={`py-4 border-b-2 transition-colors ${
                  activeSection === "about"
                    ? isDark
                      ? "border-zinc-100 text-zinc-100 font-medium"
                      : "border-gray-900 text-gray-900 font-medium"
                    : isDark
                    ? "border-transparent text-zinc-500 hover:text-zinc-100"
                    : "border-transparent text-gray-500 hover:text-gray-900"
                }`}
                aria-current={activeSection === "about" ? "page" : undefined}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("projects")}
                className={`py-4 border-b-2 transition-colors ${
                  activeSection === "projects"
                    ? isDark
                      ? "border-zinc-100 text-zinc-100 font-medium"
                      : "border-gray-900 text-gray-900 font-medium"
                    : isDark
                    ? "border-transparent text-zinc-500 hover:text-zinc-100"
                    : "border-transparent text-gray-500 hover:text-gray-900"
                }`}
                aria-current={activeSection === "projects" ? "page" : undefined}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("education")}
                className={`py-4 border-b-2 transition-colors ${
                  activeSection === "education"
                    ? isDark
                      ? "border-zinc-100 text-zinc-100 font-medium"
                      : "border-gray-900 text-gray-900 font-medium"
                    : isDark
                    ? "border-transparent text-zinc-500 hover:text-zinc-100"
                    : "border-transparent text-gray-500 hover:text-gray-900"
                }`}
                aria-current={
                  activeSection === "education" ? "page" : undefined
                }
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("blog")}
                className={`py-4 border-b-2 transition-colors ${
                  activeSection === "blog"
                    ? isDark
                      ? "border-zinc-100 text-zinc-100 font-medium"
                      : "border-gray-900 text-gray-900 font-medium"
                    : isDark
                    ? "border-transparent text-zinc-500 hover:text-zinc-100"
                    : "border-transparent text-gray-500 hover:text-gray-900"
                }`}
                aria-current={activeSection === "blog" ? "page" : undefined}
              >
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("contact")}
                className={`py-4 border-b-2 transition-colors ${
                  activeSection === "contact"
                    ? isDark
                      ? "border-zinc-100 text-zinc-100 font-medium"
                      : "border-gray-900 text-gray-900 font-medium"
                    : isDark
                    ? "border-transparent text-zinc-500 hover:text-zinc-100"
                    : "border-transparent text-gray-500 hover:text-gray-900"
                }`}
                aria-current={activeSection === "contact" ? "page" : undefined}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content - Semantic HTML */}
      <main
        className="max-w-2xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 pb-20 md:pb-12"
        role="main"
      >
        {/* About Section */}
        {activeSection === "about" && (
          <div className="space-y-12 transition-colors duration-200">
            <section aria-labelledby="about-heading">
              <h2
                id="about-heading"
                className={`text-2xl font-bold mb-6 transition-colors duration-200 ${
                  isDark ? "text-zinc-100" : "text-gray-900"
                }`}
              >
                My Coding Journey
              </h2>
              <div className="prose prose-gray max-w-none">
                <p
                  className={`leading-relaxed mb-4 transition-colors duration-200 ${
                    isDark ? "text-zinc-300" : "text-gray-700"
                  }`}
                >
                  My interest in technology began through gaming, which
                  naturally evolved into exploring system-level modifications
                  including custom ROMs, device rooting, and performance
                  optimization. This hands-on technical exploration laid the
                  foundation for my passion for software development.
                </p>
                <p
                  className={`leading-relaxed mb-4 ${
                    isDark ? "text-zinc-300" : "text-gray-700"
                  }`}
                >
                  During my Bachelor's in Computer Applications, I enrolled in
                  the Wipro TalentNext program where I began my formal coding
                  journey. I further enhanced my skills by completing{" "}
                  <a
                    href="https://youtube.com/playlist?list=PLhQjrBD2T383q7Vn8QnTsVgSvyLpsqL_R&si=K5PGbXwHXqeM8Dd3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${
                      isDark
                        ? "text-zinc-100 hover:text-zinc-300"
                        : "text-gray-900 hover:text-gray-700"
                    }`}
                  >
                    Harvard University's CS50
                  </a>{" "}
                  course,{" "}
                  <a
                    href="https://www.theodinproject.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${
                      isDark
                        ? "text-zinc-100 hover:text-zinc-300"
                        : "text-gray-900 hover:text-gray-700"
                    }`}
                  >
                    The Odin Project's
                  </a>{" "}
                  comprehensive web development curriculum, and{" "}
                  <a
                    href="https://harkirat.classx.co.in/new-courses/8-live-0-100-complete"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${
                      isDark
                        ? "text-zinc-100 hover:text-zinc-300"
                        : "text-gray-900 hover:text-gray-700"
                    }`}
                  >
                    Harkirat Singh's
                  </a>{" "}
                  advanced development course. Throughout these programs, I
                  built multiple projects, reinforcing my belief in learning
                  through practical application and hands-on experience.
                </p>
                <p
                  className={`leading-relaxed ${
                    isDark ? "text-zinc-300" : "text-gray-700"
                  }`}
                >
                  Currently pursuing a Master's in Computer Applications at MS
                  Ramaiah College, where I'm deepening my knowledge of Python
                  programming and data structures using C. I maintain a strong
                  interest in Linux systems (currently using Fedora with GNOME)
                  and continuously explore emerging technologies to stay current
                  with industry trends.
                </p>
              </div>
            </section>

            <section aria-labelledby="skills-heading">
              <h2
                id="skills-heading"
                className={`text-2xl font-bold mb-6 transition-colors duration-200 ${
                  isDark ? "text-zinc-100" : "text-gray-900"
                }`}
              >
                Skills & Approach
              </h2>
              <div className="prose prose-gray max-w-none">
                <p
                  className={`leading-relaxed mb-4 transition-colors duration-200 ${
                    isDark ? "text-zinc-300" : "text-gray-700"
                  }`}
                >
                  I'm proficient in JavaScript and various web development
                  libraries and frameworks. However, I believe that companies
                  don't just need developers who know many technologies—they
                  need problem solvers.
                </p>
                <p
                  className={`leading-relaxed mb-6 ${
                    isDark ? "text-zinc-300" : "text-gray-700"
                  }`}
                >
                  My approach is to analyze each problem, identify the most
                  suitable tool or technology for the task, learn it if needed,
                  and then implement the solution effectively. This
                  problem-solving mindset, combined with the ability to quickly
                  learn and adapt, allows me to deliver solutions that truly
                  address the requirements at hand.
                </p>
                <div className="mt-6 overflow-hidden w-full">
                  <div className="flex gap-4 animate-marquee">
                    {/* First set */}
                    {[
                      { name: "React", svg: "/logo-react.svg" },
                      { name: "Next.js", svg: "/nextjs-icon-svgrepo-com.svg" },
                      {
                        name: "Tailwind CSS",
                        svg: "/tailwindcss-svgrepo-com.svg",
                      },
                      { name: "shadcn/ui", svg: "/shadcn-ui-seeklogo.svg" },
                      { name: "Figma", svg: "/logo-figma.svg" },
                      { name: "Node.js", svg: "/logo-nodejs.svg" },
                      { name: "Python", svg: "/logo-python.svg", border: true },
                      { name: "C", icon: Terminal, border: true },
                      { name: "Supabase", icon: Cloud },
                      { name: "AWS", svg: "/aws-svgrepo-com.svg" },
                      { name: "Vercel", icon: Play, fill: true },
                      { name: "MongoDB", svg: "/mongodb-svgrepo-com.svg" },
                      {
                        name: "PostgreSQL",
                        svg: "/postgresql-svgrepo-com.svg",
                      },
                      { name: "Git", svg: "/git-branch-outline.svg" },
                      { name: "GitHub", svg: "/logo-github.svg" },
                      {
                        name: "Linux",
                        svg: "/linux-svgrepo-com.svg",
                      },
                    ].map((tech, idx) => {
                      return (
                        <div
                          key={`first-${idx}`}
                          className={`p-3 rounded-lg transition-colors duration-200 shrink-0 flex items-center justify-center ${
                            tech.border
                              ? isDark
                                ? "bg-zinc-800 text-zinc-200 border border-zinc-600"
                                : "bg-gray-100 text-gray-800 border border-gray-300"
                              : isDark
                              ? "bg-zinc-800 text-zinc-200"
                              : "bg-gray-100 text-gray-800"
                          }`}
                          title={tech.name}
                        >
                          {tech.svg ? (
                            <img
                              src={tech.svg}
                              alt={tech.name}
                              className="w-6 h-6 object-contain"
                              style={{
                                filter:
                                  isDark && !tech.noInvert
                                    ? "invert(1)"
                                    : "none",
                              }}
                            />
                          ) : tech.icon ? (
                            <tech.icon
                              className="w-6 h-6"
                              fill={tech.fill ? "currentColor" : "none"}
                            />
                          ) : null}
                        </div>
                      );
                    })}
                    {/* Duplicate set for seamless loop */}
                    {[
                      { name: "React", svg: "/logo-react.svg" },
                      { name: "Next.js", svg: "/nextjs-icon-svgrepo-com.svg" },
                      {
                        name: "Tailwind CSS",
                        svg: "/tailwindcss-svgrepo-com.svg",
                      },
                      { name: "shadcn/ui", svg: "/shadcn-ui-seeklogo.svg" },
                      { name: "Figma", svg: "/logo-figma.svg" },
                      { name: "Node.js", svg: "/logo-nodejs.svg" },
                      { name: "Python", svg: "/logo-python.svg", border: true },
                      { name: "C", icon: Terminal, border: true },
                      { name: "Supabase", icon: Cloud },
                      { name: "AWS", svg: "/aws-svgrepo-com.svg" },
                      { name: "Vercel", icon: Play, fill: true },
                      { name: "MongoDB", svg: "/mongodb-svgrepo-com.svg" },
                      {
                        name: "PostgreSQL",
                        svg: "/postgresql-svgrepo-com.svg",
                      },
                      { name: "Git", svg: "/git-branch-outline.svg" },
                      { name: "GitHub", svg: "/logo-github.svg" },
                      {
                        name: "Linux",
                        svg: "/linux-svgrepo-com.svg",
                        noInvert: true,
                      },
                    ].map((tech, idx) => {
                      return (
                        <div
                          key={`second-${idx}`}
                          className={`p-3 rounded-lg transition-colors duration-200 shrink-0 flex items-center justify-center ${
                            tech.border
                              ? isDark
                                ? "bg-zinc-800 text-zinc-200 border border-zinc-600"
                                : "bg-gray-100 text-gray-800 border border-gray-300"
                              : isDark
                              ? "bg-zinc-800 text-zinc-200"
                              : "bg-gray-100 text-gray-800"
                          }`}
                          title={tech.name}
                        >
                          {tech.svg ? (
                            <img
                              src={tech.svg}
                              alt={tech.name}
                              className="w-6 h-6 object-contain"
                              style={{
                                filter:
                                  isDark && !tech.noInvert
                                    ? "invert(1)"
                                    : "none",
                              }}
                            />
                          ) : tech.icon ? (
                            <tech.icon
                              className="w-6 h-6"
                              fill={tech.fill ? "currentColor" : "none"}
                            />
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="learning-heading">
              <h2
                id="learning-heading"
                className={`text-2xl font-bold mb-6 transition-colors duration-200 ${
                  isDark ? "text-zinc-100" : "text-gray-900"
                }`}
              >
                Currently Learning
              </h2>
              <ul
                className={`space-y-2 transition-colors duration-200 ${
                  isDark ? "text-zinc-300" : "text-gray-700"
                }`}
              >
                <li>Python programming</li>
                <li>Data structures using C</li>
                <li>Advanced web development concepts</li>
                <li>Linux system administration and customization</li>
              </ul>
            </section>
          </div>
        )}

        {/* Projects Section - Semantic HTML */}
        {activeSection === "projects" && (
          <section
            aria-labelledby="projects-heading"
            className="transition-colors duration-200"
          >
            <h2
              id="projects-heading"
              className={`text-2xl font-bold mb-8 transition-colors duration-200 ${
                isDark ? "text-zinc-100" : "text-gray-900"
              }`}
            >
              Projects
            </h2>
            <div className="space-y-10">
              {projects.map((project, i) => (
                <article
                  key={i}
                  className={`border-b pb-10 last:border-0 transition-colors duration-200 ${
                    isDark ? "border-zinc-800" : "border-gray-200"
                  }`}
                >
                  <h3
                    className={`text-2xl font-semibold mb-3 transition-colors duration-200 ${
                      isDark ? "text-zinc-100" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-4 leading-relaxed transition-colors duration-200 ${
                      isDark ? "text-zinc-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                  <ul
                    className="flex gap-2 flex-wrap mb-4 list-none"
                    aria-label="Technologies used"
                  >
                    {project.tech.map((t, j) => (
                      <li
                        key={j}
                        className={`text-xs px-3 py-1 rounded-full ${
                          isDark
                            ? "bg-zinc-800 text-zinc-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 text-sm flex-wrap">
                    {project.link && (
                      <a
                        href={project.link}
                        className={`hover:underline font-medium ${
                          isDark ? "text-zinc-100" : "text-gray-900"
                        }`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {project.linkCms ? "View Store →" : "View Project →"}
                      </a>
                    )}
                    {project.linkCms && (
                      <a
                        href={project.linkCms}
                        className={`hover:underline font-medium ${
                          isDark ? "text-zinc-100" : "text-gray-900"
                        }`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        View CMS →
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className={`transition-colors ${
                          isDark
                            ? "text-zinc-400 hover:text-zinc-100"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        {project.githubBackend
                          ? "GitHub (Frontend)"
                          : project.githubCms
                          ? "GitHub (Store)"
                          : "GitHub"}
                      </a>
                    )}
                    {project.githubBackend && (
                      <a
                        href={project.githubBackend}
                        className={`transition-colors ${
                          isDark
                            ? "text-zinc-400 hover:text-zinc-100"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={`View ${project.title} backend on GitHub`}
                      >
                        GitHub (Backend)
                      </a>
                    )}
                    {project.githubCms && (
                      <a
                        href={project.githubCms}
                        className={`transition-colors ${
                          isDark
                            ? "text-zinc-400 hover:text-zinc-100"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={`View ${project.title} CMS on GitHub`}
                      >
                        GitHub (CMS)
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === "education" && (
          <section
            aria-labelledby="education-heading"
            className="transition-colors duration-200"
          >
            <h2
              id="education-heading"
              className={`text-2xl font-bold mb-8 transition-colors duration-200 ${
                isDark ? "text-zinc-100" : "text-gray-900"
              }`}
            >
              Education
            </h2>
            <div className="space-y-8">
              <div
                className={`border-b pb-8 last:border-0 transition-colors duration-200 ${
                  isDark ? "border-zinc-800" : "border-gray-200"
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-2 transition-colors duration-200 ${
                    isDark ? "text-zinc-200" : "text-gray-800"
                  }`}
                >
                  SSLC
                </h3>
                <p
                  className={`mb-1 transition-colors duration-200 ${
                    isDark ? "text-zinc-300" : "text-gray-700"
                  }`}
                >
                  Karnataka Public School Koteshwara
                </p>
                <p
                  className={`text-sm transition-colors duration-200 ${
                    isDark ? "text-zinc-400" : "text-gray-600"
                  }`}
                >
                  82% • 2019
                </p>
              </div>

              <div
                className={`border-b pb-8 last:border-0 transition-colors duration-200 ${
                  isDark ? "border-zinc-800" : "border-gray-200"
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-2 transition-colors duration-200 ${
                    isDark ? "text-zinc-200" : "text-gray-800"
                  }`}
                >
                  PUC
                </h3>
                <p
                  className={`mb-1 transition-colors duration-200 ${
                    isDark ? "text-zinc-300" : "text-gray-700"
                  }`}
                >
                  Viveka PU College Kota
                </p>
                <p
                  className={`text-sm transition-colors duration-200 ${
                    isDark ? "text-zinc-400" : "text-gray-600"
                  }`}
                >
                  82% • 2021
                </p>
              </div>

              <div
                className={`border-b pb-8 last:border-0 transition-colors duration-200 ${
                  isDark ? "border-zinc-800" : "border-gray-200"
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-2 transition-colors duration-200 ${
                    isDark ? "text-zinc-200" : "text-gray-800"
                  }`}
                >
                  BCA
                </h3>
                <p
                  className={`mb-1 transition-colors duration-200 ${
                    isDark ? "text-zinc-300" : "text-gray-700"
                  }`}
                >
                  Bhandarkar's Arts and Science College Kundapura
                </p>
                <p
                  className={`text-sm transition-colors duration-200 ${
                    isDark ? "text-zinc-400" : "text-gray-600"
                  }`}
                >
                  8.6 CGPA • 2024
                </p>
              </div>

              <div>
                <h3
                  className={`text-xl font-semibold mb-2 transition-colors duration-200 ${
                    isDark ? "text-zinc-200" : "text-gray-800"
                  }`}
                >
                  MCA
                </h3>
                <p
                  className={`mb-1 transition-colors duration-200 ${
                    isDark ? "text-zinc-300" : "text-gray-700"
                  }`}
                >
                  MS Ramaiah Institute of Technology
                </p>
                <p
                  className={`text-sm transition-colors duration-200 ${
                    isDark ? "text-zinc-400" : "text-gray-600"
                  }`}
                >
                  Current
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Blog Section - Semantic HTML with proper article structure */}
        {activeSection === "blog" && (
          <section
            aria-labelledby="blog-heading"
            className="transition-colors duration-200"
          >
            <h2
              id="blog-heading"
              className={`text-2xl font-bold mb-8 transition-colors duration-200 ${
                isDark ? "text-zinc-100" : "text-gray-900"
              }`}
            >
              Blog
            </h2>
            <p
              className={`mb-10 transition-colors duration-200 ${
                isDark ? "text-zinc-400" : "text-gray-600"
              }`}
            >
              Daily learnings and technical insights
            </p>
            <div className="space-y-10">
              {blogs.map((post, i) => (
                <article
                  key={i}
                  className={`border-b pb-10 last:border-0 transition-colors duration-200 ${
                    isDark ? "border-zinc-800" : "border-gray-200"
                  }`}
                >
                  <header>
                    <h3
                      className={`text-2xl font-semibold mb-2 transition-colors duration-200 ${
                        isDark ? "text-zinc-100" : "text-gray-900"
                      }`}
                    >
                      <a
                        href={`/blog/${post.slug}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </a>
                    </h3>
                    <div
                      className={`text-sm transition-colors duration-200 ${
                        isDark ? "text-zinc-500" : "text-gray-500"
                      }`}
                    >
                      <time dateTime={post.date}>{post.date}</time>
                      <span> · {post.readTime}</span>
                    </div>
                  </header>
                  <p
                    className={`my-4 leading-relaxed transition-colors duration-200 ${
                      isDark ? "text-zinc-400" : "text-gray-600"
                    }`}
                  >
                    {post.preview}
                  </p>
                  <footer>
                    <ul
                      className="flex gap-2 flex-wrap list-none"
                      aria-label="Post tags"
                    >
                      {post.tags.map((tag, j) => (
                        <li
                          key={j}
                          className={`text-xs px-3 py-1 rounded-full ${
                            isDark
                              ? "bg-zinc-800 text-zinc-400"
                              : "bg-gray-50 text-gray-600"
                          }`}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </footer>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section
            aria-labelledby="contact-heading"
            className="w-full transition-colors duration-200"
          >
            <h2
              id="contact-heading"
              className={`text-2xl font-bold mb-6 transition-colors duration-200 ${
                isDark ? "text-zinc-100" : "text-gray-900"
              }`}
            >
              Get In Touch
            </h2>
            <p
              className={`mb-8 leading-relaxed transition-colors duration-200 ${
                isDark ? "text-zinc-300" : "text-gray-700"
              }`}
            >
              I'm always interested in hearing about new opportunities,
              collaborations, or just chatting about technology. Feel free to
              reach out!
            </p>

            <address className="space-y-6 not-italic">
              <div>
                <h3
                  className={`font-semibold text-lg mb-3 transition-colors duration-200 ${
                    isDark ? "text-zinc-200" : "text-gray-800"
                  }`}
                >
                  Email
                </h3>
                <a
                  href="mailto:rohithachar2000@gmail.com"
                  className={`transition-colors ${
                    isDark
                      ? "text-zinc-400 hover:text-zinc-100"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  rohithachar2000@gmail.com
                </a>
              </div>

              <div>
                <h3
                  className={`font-semibold text-lg mb-3 transition-colors duration-200 ${
                    isDark ? "text-zinc-200" : "text-gray-800"
                  }`}
                >
                  Social
                </h3>
                <ul className="space-y-2 list-none">
                  <li>
                    <a
                      href="https://github.com/RohithAchar"
                      className={`transition-colors ${
                        isDark
                          ? "text-zinc-400 hover:text-zinc-100"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub - @RohithAchar
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/rohith-achar-bbb189311/"
                      className={`transition-colors ${
                        isDark
                          ? "text-zinc-400 hover:text-zinc-100"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      LinkedIn - Rohith Achar
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className={`pt-6 border-t transition-colors duration-200 ${
                  isDark ? "border-zinc-800" : "border-gray-200"
                }`}
              >
                <h3
                  className={`font-semibold text-lg mb-3 transition-colors duration-200 ${
                    isDark ? "text-zinc-200" : "text-gray-800"
                  }`}
                >
                  Location
                </h3>
                <p
                  className={`transition-colors duration-200 ${
                    isDark ? "text-zinc-400" : "text-gray-600"
                  }`}
                >
                  Bengaluru, India
                </p>
                <p
                  className={`text-sm mt-1 transition-colors duration-200 ${
                    isDark ? "text-zinc-500" : "text-gray-500"
                  }`}
                >
                  Open to remote opportunities
                </p>
              </div>
            </address>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer
        className={`border-t mt-20 ${
          isDark ? "border-zinc-800" : "border-gray-200"
        }`}
        role="contentinfo"
      >
        <div className="max-w-2xl mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <p
              className={`text-sm ${
                isDark ? "text-gray-500" : "text-gray-500"
              }`}
            >
              Built with{" "}
              <span className="text-red-500 animate-pulse" aria-label="love">
                ♥
              </span>{" "}
              and React
            </p>
            <p
              className={`text-xs ${
                isDark ? "text-zinc-600" : "text-gray-400"
              }`}
            >
              <code className="font-mono">
                console.log("Thanks for visiting!")
              </code>
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex justify-center gap-6 pt-2 list-none">
                <li>
                  <a
                    href="/rss.xml"
                    className={`text-xs transition-colors ${
                      isDark
                        ? "text-zinc-600 hover:text-zinc-100"
                        : "text-gray-400 hover:text-gray-900"
                    }`}
                  >
                    RSS Feed
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/yourusername/portfolio"
                    className={`text-xs transition-colors ${
                      isDark
                        ? "text-zinc-600 hover:text-zinc-100"
                        : "text-gray-400 hover:text-gray-900"
                    }`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Source
                  </a>
                </li>
                <li>
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className={`text-xs transition-colors ${
                      isDark
                        ? "text-zinc-600 hover:text-zinc-100"
                        : "text-gray-400 hover:text-gray-900"
                    }`}
                    aria-label="Scroll to top"
                  >
                    Back to Top ↑
                  </button>
                </li>
              </ul>
            </nav>
            <p
              className={`text-xs pt-2 ${
                isDark ? "text-zinc-600" : "text-gray-400"
              }`}
            >
              © 2025 Rohith Achar
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 border-t transition-colors ${
          isDark
            ? "bg-zinc-900/95 border-zinc-800 backdrop-blur-sm"
            : "bg-white/95 border-gray-200 backdrop-blur-sm"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="max-w-2xl mx-auto">
          <ul className="flex items-center justify-around list-none">
            <li className="flex-1">
              <button
                onClick={() => setActiveSection("about")}
                className={`w-full flex flex-col items-center justify-center py-3 transition-colors ${
                  activeSection === "about"
                    ? isDark
                      ? "text-zinc-100"
                      : "text-gray-900"
                    : isDark
                    ? "text-zinc-500"
                    : "text-gray-500"
                }`}
                aria-current={activeSection === "about" ? "page" : undefined}
              >
                <User className="w-5 h-5 mb-1" />
                <span className="text-xs">About</span>
              </button>
            </li>
            <li className="flex-1">
              <button
                onClick={() => setActiveSection("projects")}
                className={`w-full flex flex-col items-center justify-center py-3 transition-colors ${
                  activeSection === "projects"
                    ? isDark
                      ? "text-zinc-100"
                      : "text-gray-900"
                    : isDark
                    ? "text-zinc-500"
                    : "text-gray-500"
                }`}
                aria-current={activeSection === "projects" ? "page" : undefined}
              >
                <FolderKanban className="w-5 h-5 mb-1" />
                <span className="text-xs">Projects</span>
              </button>
            </li>
            <li className="flex-1">
              <button
                onClick={() => setActiveSection("blog")}
                className={`w-full flex flex-col items-center justify-center py-3 transition-colors ${
                  activeSection === "blog"
                    ? isDark
                      ? "text-zinc-100"
                      : "text-gray-900"
                    : isDark
                    ? "text-zinc-500"
                    : "text-gray-500"
                }`}
                aria-current={activeSection === "blog" ? "page" : undefined}
              >
                <BookOpen className="w-5 h-5 mb-1" />
                <span className="text-xs">Blog</span>
              </button>
            </li>
            <li className="flex-1">
              <button
                onClick={() => setActiveSection("education")}
                className={`w-full flex flex-col items-center justify-center py-3 transition-colors ${
                  activeSection === "education"
                    ? isDark
                      ? "text-zinc-100"
                      : "text-gray-900"
                    : isDark
                    ? "text-zinc-500"
                    : "text-gray-500"
                }`}
                aria-current={
                  activeSection === "education" ? "page" : undefined
                }
              >
                <GraduationCap className="w-5 h-5 mb-1" />
                <span className="text-xs">Education</span>
              </button>
            </li>
            <li className="flex-1">
              <button
                onClick={() => setActiveSection("contact")}
                className={`w-full flex flex-col items-center justify-center py-3 transition-colors ${
                  activeSection === "contact"
                    ? isDark
                      ? "text-zinc-100"
                      : "text-gray-900"
                    : isDark
                    ? "text-zinc-500"
                    : "text-gray-500"
                }`}
                aria-current={activeSection === "contact" ? "page" : undefined}
              >
                <Mail className="w-5 h-5 mb-1" />
                <span className="text-xs">Contact</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
