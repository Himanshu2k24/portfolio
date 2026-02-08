import './About.css';

const About = () => {
    const stats = [
        { label: 'Projects', value: '12+' },
        { label: 'GitHub Repos', value: '12' },
        { label: 'LeetCode', value: 'Active' },
        { label: 'Location', value: 'Noida, IN' }
    ];

    const highlights = [
        {
            icon: '🎓',
            title: 'Education',
            description: 'BTech in Computer Science Engineering'
        },
        {
            icon: '💻',
            title: 'Backend Focus',
            description: 'Building scalable and efficient backend systems'
        },
        {
            icon: '📊',
            title: 'DSA Expert',
            description: 'Strong foundation in Data Structures & Algorithms'
        },
        {
            icon: '🤖',
            title: 'ML & AI',
            description: 'Exploring AI-driven applications and solutions'
        }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        Passionate developer focused on creating impactful solutions
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            Hi! I'm <strong>Himanshu Tiwary</strong>, a BTech Computer Science student
                            based in Noida, India. I'm passionate about building robust backend systems
                            and solving complex problems through code.
                        </p>
                        <p>
                            My journey in tech is driven by curiosity and a desire to create scalable
                            solutions. I specialize in backend development while maintaining a strong
                            foundation in full-stack technologies.
                        </p>
                        <p>
                            I'm constantly learning and exploring new technologies, with a particular
                            interest in Machine Learning and AI-driven applications. When I'm not coding,
                            you'll find me solving algorithmic challenges on LeetCode to sharpen my
                            problem-solving skills.
                        </p>

                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card">
                                    <h3 className="stat-value">{stat.value}</h3>
                                    <p className="stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-highlights">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="highlight-card">
                                <div className="highlight-icon">{highlight.icon}</div>
                                <div className="highlight-content">
                                    <h3>{highlight.title}</h3>
                                    <p>{highlight.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
