import ProjectCard from '@/components/ProjectCard'
import { getFeaturedProjects } from '@/data/projects'

export default function Home() {
    const featuredProjects = getFeaturedProjects();

    return (
        <main className="main-content">
            <div className="container">
                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-content fade-in-up">
                        <h1>ANKIT DASH</h1>
                        <p className="hero-subtitle">
                            A Tech Enthusiast with love for AI and Automation.
                        </p>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="quote-section">
                    <blockquote className="belief-quote">
                        <p>
                            My craft is building useful experiences for real people—keeping ego out,
                            function first, and creativity free to do its job.
                        </p>
                    </blockquote>
                </section>

                {/* Featured Projects Section */}
                <section className="mt-4">
                    <h2 className="text-center mb-4">Featured Projects</h2>
                    <div className="project-grid">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="cta-section">
                    <p className="cta-text">
                        Let's collaborate.<br /> Feel free to drop me a line about your project or follow me on social networks to stay updated.
                    </p>
                </section>
            </div>
        </main>
    )
}
