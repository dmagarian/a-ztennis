import { Map, Clock, Phone } from 'lucide-react';

export default function Location() {
    return (
        <section id="location" style={{ position: 'relative', overflow: 'hidden' }}>

            {/* Background Gradient */}
            <div style={{
                position: 'absolute',
                top: 0, right: 0, bottom: 0, left: 0,
                background: 'radial-gradient(circle at right center, rgba(204, 255, 0, 0.05) 0%, rgba(10, 10, 10, 1) 70%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>

                    {/* Content Column */}
                    <div style={{ animation: 'fadeUp 1s var(--transition-smooth)' }}>
                        <div style={{
                            display: 'inline-flex',
                            padding: '0.25rem 1rem',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: '1rem',
                            color: 'var(--color-secondary)',
                            opacity: 0.8
                        }}>
                            Visit The Shop
                        </div>

                        <h2 style={{ marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Your Local Tennis<br />
                            <span className="text-gradient">Destination</span>
                        </h2>

                        <p style={{ opacity: 0.8, fontSize: '1.125rem', marginBottom: '3rem' }}>
                            Located right in the heart of Scottsdale. Stop by for immediate stringing service, or grab a demo racquet before heading to the courts.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{
                                    width: '48px', height: '48px',
                                    background: 'rgba(204,255,0,0.1)',
                                    borderRadius: 'var(--radius-full)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--color-accent)'
                                }}>
                                    <Map size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Location</h4>
                                    <p style={{ opacity: 0.7, margin: 0 }}>
                                        9699 N. Hayden Rd, Ste 108<br />
                                        Scottsdale, AZ 85258
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{
                                    width: '48px', height: '48px',
                                    background: 'rgba(204,255,0,0.1)',
                                    borderRadius: 'var(--radius-full)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--color-accent)'
                                }}>
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Store Hours</h4>
                                    <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '0.5rem', opacity: 0.7, fontSize: '0.95rem' }}>
                                        <span>Mon - Fri</span>
                                        <span>10:00 AM - 6:00 PM</span>
                                        <span>Saturday</span>
                                        <span>10:00 AM - 4:00 PM</span>
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{
                                    width: '48px', height: '48px',
                                    background: 'rgba(204,255,0,0.1)',
                                    borderRadius: 'var(--radius-full)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--color-accent)'
                                }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Call Us</h4>
                                    <p style={{ opacity: 0.7, margin: 0 }}>
                                        (480) 991-9808
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Map Panel */}
                    <div className="glass-panel" style={{
                        height: '600px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backgroundColor: 'rgba(255,255,255,0.02)'
                    }}>
                        {/* Minimal Map UI Simulation */}
                        <div style={{
                            width: '100%', height: '100%',
                            background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath stroke=\'rgba(255,255,255,0.05)\' stroke-width=\'1\' d=\'M50 0 L50 100 M0 50 L100 50\' fill=\'none\'/%3E%3C/svg%3E")'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '50%', left: '50%',
                                transform: 'translate(-50%, -50%)',
                                textAlign: 'center'
                            }}>
                                <a href="https://maps.app.goo.gl/PzXZ6d7HpH3ZqZQY7" target="_blank" rel="noreferrer"
                                    className="btn btn-primary"
                                    style={{ padding: '1rem 2rem' }}>
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Inline styles for media queries */}
            <style>{`
        @media (max-width: 900px) {
          #location > .container > div {
            grid-template-columns: 1fr !important;
          }
          .glass-panel {
            height: 400px !important;
          }
        }
      `}</style>
        </section>
    );
}
