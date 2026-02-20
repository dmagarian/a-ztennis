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
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.9080228771457!2d-111.9015091234971!3d33.58172924378036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b75a1377a00f1%3A0xe6759fe5ab120a8!2sA-Z%20Tennis!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.7) contrast(1.2)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="A-Z Tennis Location Map"
                        ></iframe>
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
