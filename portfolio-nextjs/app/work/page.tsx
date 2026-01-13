import ProjectCard from '@/components/ProjectCard'
import { getUpcomingProjects, getCompletedProjects } from '@/data/projects'

export const metadata = {
    title: 'Work - Ankit Dash',
    description: 'Explore my AI/ML projects and automation solutions',
}

export default function WorkPage() {
    const upcomingProjects = getUpcomingProjects();
    const completedProjects = getCompletedProjects();

    return (
        <main className="main-content">
            <div className="container">
                <h1 className="text-center mb-3">My Work</h1>
                <p className="text-center" style={{ fontSize: '1.2rem', color: '#B0B0B0', maxWidth: '700px', margin: '0 auto 3rem' }}>
                    Building Smart Automations with AI, Data & Workflow Intelligence.<br />
                    Hover over projects to see demos (coming soon).
                </p>

                {/* Upcoming Projects Section */}
                {upcomingProjects.length > 0 && (
                    <section className="mb-4">
                        <h2 className="text-center mb-4" style={{ fontSize: '2rem', color: '#82A9FF' }}>Upcoming Projects</h2>
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
                )}

                {/* Completed Projects Section */}
                <section>
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
            </div>
        </main>
    )
}
