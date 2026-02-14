'use client'

import { VFXItem } from '@/data/vfx'
import Link from 'next/link'

interface CreativeShowcaseProps {
    items: VFXItem[]
}

export default function CreativeShowcase({ items }: CreativeShowcaseProps) {
    return (
        <div className="creative-showcase-container">
            <div className="creative-strip">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="creative-card"
                        style={{ '--index': index } as any}
                    >
                        <div className="creative-image-wrapper">
                            {item.type === 'video' ? (
                                <video
                                    src={item.url}
                                    className="creative-image"
                                    muted
                                    loop
                                    playsInline
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
                                    className="creative-image"
                                />
                            )}
                        </div>
                        <div className="creative-info">
                            <h4>{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <div className="creative-cta">
                <Link href="/creative" className="creative-link">
                    Explore More Works
                    <span className="arrow">→</span>
                </Link>
            </div>


        </div>
    )
}
