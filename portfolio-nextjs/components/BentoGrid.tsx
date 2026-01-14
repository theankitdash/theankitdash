'use client'

import React from 'react'
import { Project } from '@/data/projects'

interface BentoGridProps {
    projects: Project[]
}

export default function BentoGrid({ projects }: BentoGridProps) {
    const getItemClass = (index: number, totalProjects: number) => {
        // For 3 projects: First large (full width), then two medium side by side
        if (totalProjects === 3) {
            if (index === 0) return 'bento-large'
            return 'bento-medium'
        }

        // For 4+ projects: larger variety
        if (index === 0 || index === 3) return 'bento-large'
        if (index === 1 || index === 4) return 'bento-medium'
        return 'bento-small'
    }

    return (
        <div className="bento-grid">
            {projects.map((project, index) => {
                const itemClass = getItemClass(index, projects.length)

                return (
                    <div
                        key={project.id}
                        className={`bento-item ${itemClass}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="bento-content">
                            <div className="bento-header">
                                <h3 className="bento-title">
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

                            <p className="bento-description">
                                {project.description}
                            </p>

                            <div className="bento-skills">
                                {project.skills.map((skill, idx) => (
                                    <span key={idx} className="bento-skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="bento-glow"></div>
                        <div className="bento-gradient"></div>
                    </div>
                )
            })}
        </div>
    )
}
