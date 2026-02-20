import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{
            background: 'rgba(10, 10, 10, 1)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            padding: 'var(--spacing-lg) 0 2rem 0',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>

                    {/* Brand */}
                    <div>
                        <div style={{
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            marginBottom: '1rem',
                            letterSpacing: '-0.05em'
                        }}>
                            A-Z<span className="text-gradient">TENNIS</span>
                        </div>
                        <p style={{ opacity: 0.7, marginBottom: '2rem', fontSize: '0.95rem' }}>
                            Arizona's finest tennis pro shop since 1993. Offering premium equipment, expert stringing, and outstanding service.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: 'var(--color-secondary)', opacity: 0.6 }}><Instagram size={20} /></a>
                            <a href="#" style={{ color: 'var(--color-secondary)', opacity: 0.6 }}><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['Services', 'Demo Program', 'Our Staff', 'Contact'].map(link => (
                                <li key={link}>
                                    <a href="#" style={{
                                        color: 'var(--color-secondary)',
                                        textDecoration: 'none',
                                        opacity: 0.7,
                                        transition: 'opacity var(--transition-fast)'
                                    }}
                                        onMouseEnter={(e) => e.target.style.opacity = '1'}
                                        onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                                    >{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Hours */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>Visit Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.8, fontSize: '0.95rem' }}>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                <MapPin size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                                <span>9699 N. Hayden Rd, Ste 108<br />Scottsdale, AZ 85258</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <Phone size={18} style={{ color: 'var(--color-accent)' }} />
                                <span>(480) 991-9808</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <Mail size={18} style={{ color: 'var(--color-accent)' }} />
                                <span>Kent@a-zTennis.com</span>
                            </div>
                        </div>

                        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.7 }}>
                                <span>Mon - Fri</span>
                                <span>10:00 AM - 6:00 PM</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.7 }}>
                                <span>Saturday</span>
                                <span>10:00 AM - 4:00 PM</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', opacity: 0.7 }}>
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{
                    textAlign: 'center',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    fontSize: '0.85rem',
                    opacity: 0.5
                }}>
                    &copy; {new Date().getFullYear()} A-Z Tennis. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
