'use client'

import VFXGrid from '@/components/VFXGrid'
import { vfxItems } from '@/data/vfx'
import { pulseCuts } from '@/data/cuts'

export default function CreativePage() {

    return (
        <main className="main-content">
            <div className="container">
                <h1 className="text-center mb-3">Creative</h1>
                <p className="text-center" style={{ fontSize: '1.2rem', color: '#B0B0B0', maxWidth: '700px', margin: '0 auto 3rem' }}>
                    Check out my latest creative content.
                </p>

                {/* Unified Creative Section */}
                <div className="creative-content-wrapper">
                    {/* VFX Section */}
                    <section className="mb-5">
                        <h2 className="section-title mb-4">VFX Works</h2>
                        <VFXGrid items={vfxItems} />
                    </section>

                    {/* Pulse Cuts Section */}
                    <section className="mb-5">
                        <h2 className="section-title mb-4">Pulse Cuts</h2>
                        <div className="pulse-grid">
                            {pulseCuts.map((video) => (
                                <div key={video.id} className="pulse-video">
                                    {video.embedUrl ? (
                                        <iframe
                                            src={video.embedUrl}
                                            allowFullScreen
                                            title={`Pulse Cut ${video.id}`}
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
                                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎥</div>
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
                    </section>
                </div>
            </div>
        </main>
    )
}
