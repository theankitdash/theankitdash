import ProjectCard from '@/components/ProjectCard'
import ScrollReveal from '@/components/ScrollReveal'
import { getUpcomingProjects, getCompletedProjects } from '@/data/projects'

export const metadata = {
    title: 'Work - Ankit Dash',
    description: 'Building Smart Automations with AI, Data & Workflow Intelligence',
}

export default function WorkPage() {
    const upcomingProjects = getUpcomingProjects();
    const completedProjects = getCompletedProjects();

    return (
        <main className="main-content">
            <div className="container">
                <ScrollReveal>
                    <h1 className="text-center mb-3">My Work</h1>
                    <p className="text-center" style={{ fontSize: '1.2rem', color: '#B0B0B0', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Building Smart Automations with AI, Data & Workflow Intelligence.<br />
                    </p>
                </ScrollReveal>

                {/* Completed Projects Section */}
                <ScrollReveal delay={100}>
                    <section className="mb-4">
                        <h2 className="text-center mb-4" style={{ fontSize: '2rem', color: '#BB86FC' }}>My Projects</h2>
                        <div className="project-grid">
                            {completedProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    showVideo={true}
                                />
                            ))}
                        </div>
                    </section>
                </ScrollReveal>

                {/* Upcoming Projects Section */}
                {upcomingProjects.length > 0 && (
                    <ScrollReveal delay={200}>
                        <section>
                            <h2 className="text-center mb-4" style={{ fontSize: '2rem', color: '#BB86FC' }}>Upcoming Projects</h2>
                            <div className="project-grid">
                                {upcomingProjects.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        showVideo={true}
                                    />
                                ))}
                            </div>
                        </section>
                    </ScrollReveal>
                )}
            </div>
        </main>
    )
}
