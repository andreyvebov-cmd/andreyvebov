import FluidSubconscious from '../sections/FluidSubconscious'
import HeroOverlay from '../sections/HeroOverlay'
import DeepSpaceFold from '../sections/DeepSpaceFold'
import GenerativeCascade from '../sections/GenerativeCascade'
import { useEffect, useState } from 'react'
import { paintingConfig, graphicsConfig, footerConfig } from '../config'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const hasFooter =
    !!footerConfig.brandText ||
    footerConfig.taglineLines.length > 0 ||
    footerConfig.navigationLinks.length > 0 ||
    footerConfig.contactLinks.length > 0 ||
    !!footerConfig.copyright

  return (
    <>
      <FluidSubconscious />

      <main>
        <HeroOverlay />
        <GenerativeCascade config={paintingConfig} sectionId="painting" />
        <DeepSpaceFold />
        <GenerativeCascade config={graphicsConfig} sectionId="graphics" />

        {hasFooter && (
          <footer
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              background: '#000000',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              padding: 'clamp(60px, 10vh, 120px) clamp(24px, 6vw, 80px)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '48px',
                maxWidth: '1400px',
                margin: '0 auto',
              }}
            >
              <div style={{ maxWidth: '400px' }}>
                {footerConfig.brandText && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '16px',
                    }}
                  >
                    <img
                      src="/images/logo.webp"
                      alt="Лого"
                      style={{
                        width: '40px',
                        height: '40px',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                    <span
                      className="font-serif-display"
                      style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {footerConfig.brandText}
                    </span>
                  </div>
                )}
                {footerConfig.taglineLines.length > 0 && (
                  <div
                    className="font-mono-data"
                    style={{
                      fontSize: '0.7rem',
                      color: 'rgba(255,255,255,0.35)',
                      lineHeight: 1.8,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {footerConfig.taglineLines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </div>

              {(footerConfig.navigationLinks.length > 0 || footerConfig.contactLinks.length > 0) && (
                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(32px, 6vw, 80px)',
                    flexWrap: 'wrap',
                  }}
                >
                  {footerConfig.navigationLinks.length > 0 && (
                    <div>
                      {footerConfig.navigationHeading && (
                        <div
                          className="font-mono-data"
                          style={{
                            fontSize: '0.6rem',
                            color: 'rgba(255,255,255,0.3)',
                            letterSpacing: '0.2em',
                            marginBottom: '16px',
                          }}
                        >
                          {footerConfig.navigationHeading}
                        </div>
                      )}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {footerConfig.navigationLinks.map((link) => {
                          const scrollTo = () => {
                            if (link.href && link.href.startsWith('#')) {
                              const el = document.querySelector(link.href)
                              if (el) el.scrollIntoView({ behavior: 'smooth' })
                            } else {
                              window.scrollTo({ top: 0, behavior: 'smooth' })
                            }
                          }
                          return (
                            <span
                              key={link.label}
                              onClick={scrollTo}
                              style={{
                                fontSize: '0.85rem',
                                color: 'rgba(255,255,255,0.55)',
                                letterSpacing: '0.06em',
                                fontWeight: 300,
                                cursor: 'pointer',
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')
                              }
                            >
                              {link.label}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {footerConfig.contactLinks.length > 0 && (
                    <div>
                      {footerConfig.contactHeading && (
                        <div
                          className="font-mono-data"
                          style={{
                            fontSize: '0.6rem',
                            color: 'rgba(255,255,255,0.3)',
                            letterSpacing: '0.2em',
                            marginBottom: '16px',
                          }}
                        >
                          {footerConfig.contactHeading}
                        </div>
                      )}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {footerConfig.contactLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono-data"
                            style={{
                              fontSize: '0.75rem',
                              color: 'rgba(255,255,255,0.45)',
                              letterSpacing: '0.06em',
                              textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {(footerConfig.copyright || footerConfig.creditText) && (
              <div
                style={{
                  marginTop: 'clamp(48px, 8vh, 80px)',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px',
                  maxWidth: '1400px',
                  margin: 'clamp(48px, 8vh, 80px) auto 0',
                }}
              >
                {footerConfig.copyright && (
                  <div
                    className="font-mono-data"
                    style={{
                      fontSize: '0.6rem',
                      color: 'rgba(255,255,255,0.2)',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {footerConfig.copyright}
                  </div>
                )}
                {footerConfig.creditText && (
                  <div
                    className="font-mono-data"
                    style={{
                      fontSize: '0.6rem',
                      color: 'rgba(255,255,255,0.15)',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {footerConfig.creditText}
                  </div>
                )}
              </div>
            )}
          </footer>
        )}

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              position: 'fixed',
              bottom: '32px',
              right: '32px',
              zIndex: 999,
              width: '44px',
              height: '44px',
              borderRadius: '4px',
              background: '#e1a374',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              transition: 'opacity 0.3s ease, transform 0.2s ease',
              color: '#ffffff',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            ↑
          </button>
        )}
      </main>
    </>)
}
