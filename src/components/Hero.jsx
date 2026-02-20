import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '80px' // Offset for fixed nav
            }}
        >
            {/* Background Effects */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'var(--color-accent)',
                filter: 'blur(150px)',
                opacity: 0.15,
                borderRadius: 'var(--radius-full)',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-10%',
                width: '400px',
                height: '400px',
                background: '#ffffff',
                filter: 'blur(120px)',
                opacity: 0.05,
                borderRadius: 'var(--radius-full)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    maxWidth: '800px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    animation: 'fadeUp 1s var(--transition-smooth)'
                }}>

                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: 'var(--gradient-glass)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 'var(--radius-full)',
                        width: 'fit-content',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'var(--color-accent)'
                    }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: 'var(--color-accent)',
                            boxShadow: '0 0 10px var(--color-accent)'
                        }} />
                        Serving Arizona Since 1993
                    </div>

                    <h1 style={{ marginBottom: '0.5rem' }}>
                        Elevate Your <br />
                        <span className="text-gradient" style={{ position: 'relative', display: 'inline-block' }}>
                            Game
                        </span>
                        {' '}Today.
                    </h1>

                    <p style={{ fontSize: '1.25rem', marginBottom: '1rem', opacity: 0.8 }}>
                        Experience the finest selection of tennis equipment, premium stringing services, and expert advice at Arizona's premier pro shop.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        marginTop: '1rem'
                    }}>
                        <a href="#services" className="btn btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem' }}>
                            Our Services
                            <ArrowRight size={20} />
                        </a>
                        <a href="#demo" className="btn btn-outline" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem' }}>
                            <Play size={20} fill="currentColor" />
                            Demo Program
                        </a>
                    </div>

                    {/* Stats Bar */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                        gap: '2rem',
                        marginTop: '4rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        {[
                            { label: 'Years Experience', value: '30+' },
                            { label: 'Racquets Strung', value: '50k+' },
                            { label: 'Top Brands', value: '25+' }
                        ].map(stat => (
                            <div key={stat.label}>
                                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-secondary)' }}>
                                    {stat.value}
                                </div>
                                <div style={{ fontSize: '0.875rem', opacity: 0.6, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
