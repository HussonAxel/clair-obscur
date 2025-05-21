"use client"

import { useState, useRef, useEffect } from "react"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

// Updated interface to include media type
interface MediaItem {
  id: number
  src: string
  alt: string
  type: "image" | "video"
  posterSrc?: string // For video thumbnails
}

// Updated media items with type field
const mediaItems: MediaItem[] = [
  {
    id: 1,
    src: "/assets/characters/monoco/monoco-1.jpg",
    alt: "Person reading by candlelight",
    type: "image",
  },
  {
    id: 2,
    src: "/assets/characters/monoco/monoco-2.jpg",
    alt: "Two people in silhouette",
    type: "image",
  },
  {
    id: 3,
    src: "/assets/characters/monoco/monoco-3.jpg",
    alt: "Sunset landscape",
    type: "image",
  },
  {
    id: 4,
    src: "/assets/characters/monoco/monoco-4.jpg",
    alt: "Person in warm lighting",
    type: "image",
  },
  {
    id: 5,
    src: "/assets/characters/monoco/monoco-5.jpg",
    alt: "Person with animal",
    type: "image",
  },
  {
    id: 6,
    src: "/assets/characters/monoco/monoco-6.jpg",
    alt: "Landscape with figures",
    type: "image",
  },
  {
    id: 7,
    src: "/assets/characters/monoco/monoco-video-2.mp4", // Assuming this is a video file
    alt: "Character video",
    type: "video",
    posterSrc: "/assets/characters/monoco/monoco-video-2.jpg", // Thumbnail for video
  },
  {
    id: 8,
    src: "/assets/characters/monoco/monoco-1.jpg",
    alt: "Person reading by candlelight",
    type: "image",
  },
  {
    id: 9,
    src: "/assets/characters/monoco/monoco-1.jpg",
    alt: "Person reading by candlelight",
    type: "image",
  },
  {
    id: 10,
    src: "/assets/characters/monoco/monoco-1.jpg",
    alt: "Person reading by candlelight",
    type: "image",
  },
  {
    id: 11,
    src: "/assets/characters/monoco/monoco-1.jpg",
    alt: "Person reading by candlelight",
    type: "image",
  },
]

export default function FilmCarousel() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem>(mediaItems[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        const height = width * (9 / 16)
        setContainerHeight(height)
      }
    }

    updateHeight()

    window.addEventListener("resize", updateHeight)
    return () => window.removeEventListener("resize", updateHeight)
  }, [])

  useEffect(() => {
    if (selectedMedia.type === "video" && videoRef.current) {
      if (selectedMedia.posterSrc) {
        videoRef.current.poster = selectedMedia.posterSrc
      }

      videoRef.current.currentTime = 0
      videoRef.current.pause()
      setIsPlaying(false)

      videoRef.current.load()
    }
  }, [selectedMedia])

  const handleThumbnailClick = (media: MediaItem) => {
    setSelectedMedia(media)
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-[85%] max-h-[80vh] overflow-hidden rounded-lg text-white shadow-2xl my-8"
      style={{ height: `${containerHeight}px` }}
    >
      <div className="pointer-events-none absolute inset-0 z-10"></div>

      <div className="flex h-full w-full">
        <div className="relative h-full flex-1 overflow-hidden">
          {selectedMedia.type === "image" ? (
            <img
              src={selectedMedia.src || "/placeholder.svg"}
              alt={selectedMedia.alt}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="relative h-full w-full">
              <video
                ref={videoRef}
                src={selectedMedia.src}
                poster={selectedMedia.posterSrc}
                className="h-full w-full object-cover"
                loop
                playsInline
                preload="auto"
                onClick={togglePlay}
                muted={true}
              />

              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={togglePlay}
                >
                  <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              )}
            </div>
          )}

          {selectedMedia.type === "image" && (
            <div className="absolute inset-0 opacity-60"></div>
          )}
        </div>

        <div className="h-full w-[120px] backdrop-blur-sm">
          <ScrollArea className="h-full">
            <div className="flex flex-col gap-3 p-4">
              {mediaItems.map((media) => (
                <button
                  key={media.id}
                  onClick={() => handleThumbnailClick(media)}
                  className={cn(
                    "group relative h-[80px] w-full overflow-hidden rounded-md transition-all duration-300",
                    selectedMedia.id === media.id
                      ? "ring-2 ring-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                      : "opacity-70 hover:opacity-100 hover:ring-1 hover:ring-white/50",
                  )}
                >
                  <img
                    src={media.type === "video" && media.posterSrc ? media.posterSrc : media.src}
                    alt={media.alt}
                    className="h-full w-full object-contain"
                  />

                  {media.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
