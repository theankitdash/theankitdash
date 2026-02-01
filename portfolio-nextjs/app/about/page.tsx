import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
    title: 'About - Ankit Dash',
    description: 'My craft is building useful experiences for real people—keeping ego out, function first, and creativity free to do its job',
}

export default function AboutPage() {
    const timeline = [
        {
            id: 4,
            year: 'Accenture (2023 - Present)',
            description: `As I began my professional journey, I focused on building intelligent systems using machine learning and AI agents. 
            At Accenture, My my work and interests converged around Generative AI, agent-based architectures, and data-driven decision systems.
            Alongside my role, I actively built and experimented with AI agents and ML projects, strengthening my ability to design adaptive models, 
            orchestrate intelligent workflows, and solve complex problems at scale.`
        },
        {
            id: 3,
            year: 'College Days',
            description: `During college, I shifted my focus to coding and explored the fundamentals of computer systems. 
        Even though my stream was Electronics, I was drawn to the synergy between software and hardware and how their optimal combination improves efficiency. 
        My interest in problem-solving pushed me deeper into analysis, and as I explored further, AI and automation fascinated me with their transformative potential.`
        },
        {
            id: 2,
            year: 'Early Years',
            description: `The journey started with my love for gadgets, especially smartphones, which sparked my passion for tech. 
        I used to dive into every new feature, tweaking settings and testing limits. 
        I had a keen eye for specs, price-to-performance, GPU power, and how camera sensors worked with processors. 
        I also analyzed heat management and how manufacturers integrated network compatibility, shaping overall performance. 
        That hands-on curiosity kept me hooked on tech.`
        },
        {
            id: 1,
            year: '2001',
            description: 'Born in Bhubaneswar, Odisha, India'
        }
    ];

    return (
        <main className="main-content">
            <div className="container">
                <ScrollReveal>
                    <h1 className="text-center mb-3">About Me</h1>
                    <div className="intro text-center">
                        <p style={{ fontSize: '1.2rem', color: '#B0B0B0', maxWidth: '700px', margin: '0 auto 3rem' }}>
                            I build with code, edit with intent, roam without roots, and study films like systems—technology is the thread tying it all together.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Timeline Section */}
                <div className="timeline">
                    {timeline.map((item, index) => (
                        <ScrollReveal key={item.id} delay={index * 100}>
                            <div className="timeline-item">
                                <h3>{item.year}</h3>
                                <p>{item.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </main>
    )
}
