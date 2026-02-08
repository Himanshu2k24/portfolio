import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: [
                { name: 'Java', level: 90, icon: '☕' },
                { name: 'JavaScript', level: 85, icon: '⚡' },
                { name: 'HTML/CSS', level: 90, icon: '🎨' },
                { name: 'TypeScript', level: 75, icon: '📘' }
            ]
        },
        {
            title: 'Frameworks & Libraries',
            skills: [
                { name: 'React', level: 85, icon: '⚛️' },
                { name: 'Next.js', level: 80, icon: '▲' },
                { name: 'JSP', level: 75, icon: '🔧' },
                { name: 'Node.js', level: 70, icon: '🟢' }
            ]
        },
        {
            title: 'Tools & Technologies',
            skills: [
                { name: 'Git & GitHub', level: 90, icon: '🔀' },
                { name: 'VS Code', level: 95, icon: '💻' },
                { name: 'npm', level: 85, icon: '📦' },
                { name: 'Vercel', level: 80, icon: '🚀' }
            ]
        },
        {
            title: 'Core Competencies',
            skills: [
                { name: 'Data Structures', level: 90, icon: '🗂️' },
                { name: 'Algorithms', level: 88, icon: '🧮' },
                { name: 'Backend Development', level: 85, icon: '⚙️' },
                { name: 'Problem Solving', level: 92, icon: '🧩' }
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Skills & Expertise</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        Technologies and tools I work with
                    </p>
                </div>

                <div className="skills-content">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-header">
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
