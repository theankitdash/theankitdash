'use client'

import { VFXItem } from '@/data/vfx'

interface VFXGridProps {
    items: VFXItem[]
}

export default function VFXGrid({ items }: VFXGridProps) {
    return (
        <div className="vfx-grid">
            {items.map((item) => (
                <div key={item.id} className="vfx-item-card">
                    <div className="vfx-media-wrapper">
                        {item.type === 'video' ? (
                            <video
                                src={item.url}
                                poster={item.thumbnail}
                                muted
                                loop
                                playsInline
                                className="vfx-media"
                                onMouseEnter={(e) => e.currentTarget.play()}
                                onMouseLeave={(e) => {
                                    e.currentTarget.pause();
                                    e.currentTarget.currentTime = 0;
                                }}
                            />
                        ) : (
                            <img
                                src={item.url}
                                alt={item.title}
                                className="vfx-media"
                            />
                        )}
                        <div className="vfx-overlay">
                            <h3 className="vfx-title">{item.title}</h3>
                            <p className="vfx-desc">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}
