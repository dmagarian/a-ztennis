import { Activity, ShieldCheck, Trophy, BadgePercent } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: <Activity size={32} />,
            title: "Custom Stringing",
            desc: "Expert stringing using state-of-the-art electronic machines. We offer a 'Frequent Stringing Program' to keep your gear fresh.",
            highlight: true
        },
        {
            icon: <Trophy size={32} />,
            title: "Latest Racquets",
            desc: "We carry all the top frames from Wilson, Babolat, Head, and Yonex for players of every level."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Demo Program",
            desc: "Try before you buy. Sign up for our demo program and find the perfect racquet for your game."
        },
        {
            icon: <BadgePercent size={32} />,
            title: "Apparel & Accessories",
            desc: "Look good, play great. Premium tennis shoes, clothing, bags, and essential accessories."
        }
    ];

    return (
        <section id="services" style={{ background: 'var(--color-primary)' }}>
            <div className="container">

                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Everything You Need</h2>
                    <p style={{ margin: '0 auto' }}>
                        Beyond just sales, we provide the expertise and services required to elevate your performance on the court.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((svc, i) => (
                        <div
                            key={i}
                            className="glass-panel"
                            style={{
                                padding: '3rem 2rem',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'transform var(--transition-fast)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'rgba(204, 255, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                            }}
                        >
                            <div style={{
                                marginBottom: '1.5rem',
                                color: svc.highlight ? 'var(--color-primary)' : 'var(--color-accent)',
                                background: svc.highlight ? 'var(--color-accent)' : 'rgba(204, 255, 0, 0.1)',
                                width: '64px',
                                height: '64px',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {svc.icon}
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{svc.title}</h3>
                            <p style={{ fontSize: '1rem', opacity: 0.8, lineHeight: 1.7, margin: 0 }}>
                                {svc.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
