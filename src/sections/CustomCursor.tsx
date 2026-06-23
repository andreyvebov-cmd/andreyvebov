import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: -100, y: -100 })
  const targetRef = useRef({ x: -100, y: -100 })
  const hoverRef = useRef(false)
  const rafRef = useRef(0)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      dot.style.display = 'none'
      document.body.style.cursor = 'auto'
      return
    }

    const onMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX
      targetRef.current.y = e.clientY
    }

    const isClickable = (el: HTMLElement): boolean => {
      if (!el) return false
      const tag = el.tagName
      if (tag === 'A' || tag === 'BUTTON') return true
      if (el.getAttribute('data-cursor-hover') !== null) return true
      if (el.style.cursor === 'pointer') return true
      if (el.closest('a') || el.closest('button')) return true
      if (el.closest('[data-cursor-hover]')) return true
      if (el.closest('[style*="cursor: pointer"]') || el.closest('[style*="cursor:pointer"]')) return true
      return false
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isClickable(target)) {
        hoverRef.current = true
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isClickable(target)) {
        hoverRef.current = false
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate)
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15

      const isHover = hoverRef.current
      const size = isHover ? 40 : 4
      const borderWidth = isHover ? 1.5 : 0
      const bgColor = isHover ? 'transparent' : '#ffffff'
      const borderColor = isHover ? 'rgba(150,150,150,0.7)' : 'transparent'

      dot.style.transform = `translate(${posRef.current.x - size / 2}px, ${posRef.current.y - size / 2}px)`
      dot.style.width = `${size}px`
      dot.style.height = `${size}px`
      dot.style.background = bgColor
      dot.style.borderWidth = `${borderWidth}px`
      dot.style.borderColor = borderColor
      dot.style.mixBlendMode = isHover ? 'normal' : 'difference'
    }
    animate()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        background: '#ffffff',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transition: 'width 0.25s ease, height 0.25s ease, background 0.25s ease, border-color 0.25s ease, border-width 0.25s ease',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderColor: 'transparent',
        willChange: 'transform',
      }}
    />
  )
}
