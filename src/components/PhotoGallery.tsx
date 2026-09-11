import { useState, useRef } from 'react'
import type { MouseEvent } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { X } from 'lucide-react'

export type GalleryPhoto = {
  src: string
  caption: string
  alt: string
}

function TiltCard({ photo, onOpen }: { photo: GalleryPhoto; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 25 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 25 })

  function handleMouseMove(e: MouseEvent<HTMLButtonElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onOpen}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-[var(--color-border)] shadow-sm"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.img
        layoutId={`gallery-${photo.src}`}
        src={photo.src}
        alt={photo.alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <span className="p-3 font-serif text-sm italic text-white">{photo.caption}</span>
      </div>
    </motion.button>
  )
}

export function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [openSrc, setOpenSrc] = useState<string | null>(null)
  const openPhoto = photos.find((p) => p.src === openSrc) ?? null

  return (
    <>
      <div className="mx-auto grid max-w-xl grid-cols-2 gap-3 sm:max-w-2xl sm:gap-4">
        {photos.map((photo) => (
          <TiltCard key={photo.src} photo={photo} onOpen={() => setOpenSrc(photo.src)} />
        ))}
      </div>

      <AnimatePresence>
        {openPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
            onClick={() => setOpenSrc(null)}
          >
            <motion.div
              layoutId={`gallery-${openPhoto.src}`}
              className="relative max-h-[85vh] max-w-lg overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={openPhoto.src} alt={openPhoto.alt} className="max-h-[85vh] w-full object-contain" />
              <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 font-serif text-lg italic text-white">
                {openPhoto.caption}
              </p>
            </motion.div>
            <button
              type="button"
              onClick={() => setOpenSrc(null)}
              aria-label="Close"
              className="absolute right-6 top-6 text-white/80 transition-colors hover:text-white"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
