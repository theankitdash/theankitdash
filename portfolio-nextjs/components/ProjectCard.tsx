'use client'

import React, { useState } from 'react'
import { Project } from '@/data/projects'

interface ProjectCardProps {
    project: Project;
    showVideo?: boolean; // Show video overlay on hover for Work page
}

export default function ProjectCard({ project, showVideo = false }: ProjectCardProps) {
    const [videoError, setVideoError] = useState(false);

    return (
        <div className="project-card-wrapper">
            <div className="card">
                <div className="card-content">
                    <h3 className="mb-2">
                        {project.githubUrl ? (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        ) : (
                            project.title
                        )}
                    </h3>
                    <p style={{ color: '#B0B0B0', marginBottom: '1rem', flexGrow: 1 }}>
                        {project.description}
                    </p>
                    <div className="skills" style={{ marginTop: 'auto' }}>
                        {project.skills.map((skill, index) => (
                            <span key={index} className="skill-tag">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video overlay for Work page */}
            {showVideo && project.videoUrl && !videoError && (
                <div className="video-overlay">
                    <video
                        src={project.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        onError={() => setVideoError(true)}
                        style={{ maxWidth: '90%', maxHeight: '90%' }}
                    />
                </div>
            )}
        </div>
    )
}
