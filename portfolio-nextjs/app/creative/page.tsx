'use client'

import React, { useState } from 'react'

export default function CreativePage() {

    const [instagramVideos] = useState([
        {
            id: 1,
            embedUrl: 'https://www.instagram.com/reel/DSfnq1-E76R/embed',
            placeholder: 'Instagram Video 1 - Paste embed URL in instagramVideos array'
        },
        {
            id: 2,
            embedUrl: 'https://www.instagram.com/reel/DAOK0f1srXv/embed',
            placeholder: 'Instagram Video 2 - Paste embed URL in instagramVideos array'
        },
        {
            id: 3,
            embedUrl: 'https://www.instagram.com/reel/DSxbsDHkTbO/embed',
            placeholder: 'Instagram Video 3 - Paste embed URL in instagramVideos array'
        }
    ]);

    return (
        <main className="main-content">
            <div className="container">
                <h1 className="text-center mb-3">Creative</h1>
                <p className="text-center" style={{ fontSize: '1.2rem', color: '#B0B0B0', maxWidth: '700px', margin: '0 auto 3rem' }}>
                    Check out my latest creative content.
                </p>

                <div className="instagram-grid">
                    {instagramVideos.map((video) => (
                        <div key={video.id} className="instagram-video">
                            {video.embedUrl ? (
                                <iframe
                                    src={video.embedUrl}
                                    allowFullScreen
                                    title={`Instagram Video ${video.id}`}
                                />
                            ) : (
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '2rem',
                                    textAlign: 'center',
                                    color: '#888'
                                }}>
                                    <div>
                                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📸</div>
                                        <p>{video.placeholder}</p>
                                        <p style={{ fontSize: '0.9rem', marginTop: '1rem', color: '#666' }}>
                                            To add: Go to Instagram → Select Reel → Click &quot;...&quot; → &quot;Embed&quot; → Copy embed code
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
