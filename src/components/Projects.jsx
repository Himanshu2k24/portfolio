import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Campus-Bites',
            description: 'University Food Delivery Startup platform connecting students with campus food vendors. Built with modern web technologies for seamless ordering experience.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/Himanshu2k24/Campus-Bites-University-Food-Delivery-Startup',
            live: 'https://himanshu2k24.github.io/Campus-Bites-University-Food-Delivery-Startup/',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            title: 'E-Commerce Web App',
            description: 'Full-stack e-commerce application with Java and JSP backend. Features product management, user authentication, and shopping cart functionality.',
            tech: ['Java', 'JSP', 'HTML', 'CSS'],
            github: 'https://github.com/Himanshu2k24/E-commerce',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            title: 'LeetCode Solutions',
            description: 'Structured repository of Data Structures & Algorithms problem solutions. Demonstrates problem-solving skills and algorithmic thinking.',
            tech: ['Java', 'Algorithms', 'DSA'],
            github: 'https://github.com/Himanshu2k24/Leetcode',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
            title: 'Digital Media App',
            description: 'Modern media application built with Next.js and TypeScript. Features responsive design and optimized performance.',
            tech: ['TypeScript', 'Next.js', 'React'],
            github: 'https://github.com/Himanshu2k24/digital-media-app',
            live: 'https://digital-media-app.vercel.app',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        {
            title: 'JavaScript Learning Repo',
            description: 'Comprehensive repository documenting JavaScript learning journey. Includes examples, best practices, and code snippets.',
            tech: ['JavaScript', 'Web Development'],
            github: 'https://github.com/Himanshu2k24/JavaScript',
            gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
        },
        {
            title: 'Web Development Practice',
            description: 'Collection of web development projects and experiments. Showcases various techniques and modern web practices.',
            tech: ['JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/Himanshu2k24/Web-Development-Practice',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        A showcase of my recent work and personal projects
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card" style={{ '--card-gradient': project.gradient }}>
                            <div className="project-header">
                                <div className="project-icon">💻</div>
                                <h3 className="project-title">{project.title}</h3>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    Code
                                </a>
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link project-link-primary"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
