import BentoGrid from '@/components/BentoGrid'
import ScrollReveal from '@/components/ScrollReveal'
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
                            Tech Enthusiast <br /> 
                            Xperimenting, Engineering the Future of Work <br />
                            Craftiing Intelligent Experiences with AI & Automation.
                            
                        </p>
                    </div>
                </section>

                {/* Quote Section */}
                <ScrollReveal>
                    <section className="quote-section">
                        <blockquote className="belief-quote">
                            <p>
                                My craft is building useful experiences for real people—keeping ego out,
                                function first, and creativity free to do its job.
                            </p>
                        </blockquote>
                    </section>
                </ScrollReveal>

                {/* Featured Projects Section */}
                <ScrollReveal delay={100}>
                    <section className="mt-4">
                        <h2 className="text-center mb-4">Featured Projects</h2>
                        <BentoGrid projects={featuredProjects} />
                    </section>
                </ScrollReveal>

                {/* Call to Action */}
                <ScrollReveal delay={200}>
                    <section className="cta-section">
                        <p className="cta-text">
                            Let&apos;s collaborate and build something amazing together.<br />
                            Drop me a line about your project or connect on social networks.
                        </p>
                    </section>
                </ScrollReveal>
            </div>
        </main>
    )
}
