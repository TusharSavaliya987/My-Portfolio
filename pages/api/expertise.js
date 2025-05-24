const aboutMeData = [
  {
    id: 0,
    title: "Frontend Developer",
    description_structured: [
      {
        type: "paragraph",
        content:
          "I'm a passionate and detail-oriented Frontend Developer with a strong foundation in modern web technologies and a deep appreciation for clean, scalable, and accessible user interfaces. I specialize in building responsive, performant, and visually engaging websites that deliver exceptional user experiences.",
      },
      {
        type: "paragraph",
        content:
          "With hands-on experience in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and Tailwind CSS, I enjoy turning complex problems into elegant, user-friendly solutions. I have a keen eye for design and a commitment to writing clean, maintainable code.",
      },
      {
        type: "paragraph",
        content:
          "I thrive in collaborative environments where continuous learning, creativity, and user-first thinking drive innovation. Whether I'm working on a dynamic web app or refining the UI/UX of an existing platform, my goal is to bridge the gap between design and development.",
      },
      { type: "heading", content: "Skills & Tools" },
      {
        type: "listItem",
        content: "Languages: TypeScript, JavaScript, HTML5, CSS3, SCSS",
      },
      {
        type: "listItem",
        content:
          "Frameworks/Libraries: React.js, Next.js, Redux Toolkit, Radix UI, Axios, Tailwind CSS, Bootstrap",
      },
      {
        type: "listItem",
        content:
          "Tools & Platforms: Git, GitHub, VS Code, Figma, npm/pnpm, Vite, Webpack",
      },
      {
        type: "listItem",
        content:
          "Practices: Responsive Design, Accessibility (WCAG), Cross-browser Compatibility, SEO Basics, API Integration",
      },
      {
        type: "listItem",
        content:
          "Backend: Node.js, MongoDB, MySQL, PHP (Basic knowledge of Laravel)",
      },
      {
        type: "listItem",
        content: "Deployment Tools: Vercel, Docker, Render",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(aboutMeData);
}
