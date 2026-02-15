'use client'

import { Project } from '@/data/projects'

interface BentoGridProps {
    projects: Project[]
}

export default function BentoGrid({ projects }: BentoGridProps) {
    return (
        <div className="project-cards">
            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className="project-card-stacked"
                    style={{ animationDelay: `${index * 0.15}s` }}
                >
                    <div className="project-card-inner">
                        <div className="project-card-top">
                            <div className="project-card-title-row">
                                <h3 className="project-card-title">
                                    {project.githubUrl ? (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            {project.title}
                                        </a>
                                    ) : (
                                        project.title
                                    )}
                                </h3>
                                {project.upcoming && (
                                    <span className="upcoming-badge">Coming Soon</span>
                                )}
                            </div>

                            <p className="project-card-desc">
                                {project.description}
                            </p>
                        </div>

                        <div className="project-card-bottom">
                            <div className="project-card-skills">
                                {project.skills.map((skill, idx) => (
                                    <span key={idx} className="project-card-skill">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-card-link"
                                >
                                    View on GitHub
                                    <span className="arrow">→</span>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Decorative glow */}
                    <div className="project-card-glow"></div>
                </div>
            ))}
        </div>
    )
}

