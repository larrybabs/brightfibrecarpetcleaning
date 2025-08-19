"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Play,
  Pause,
} from "lucide-react";

// Import your images directly
import before1 from "../assets/img/before1.jpg";
import before2 from "../assets/img/before2.jpg";
import before3 from "../assets/img/before3.jpg";
import before4 from "../assets/img/before4.jpg";
import before5 from "../assets/img/before5.jpg";
import before6 from "../assets/img/before6.jpg";
import before7 from "../assets/img/before7.jpg";
import before8 from "../assets/img/before8.jpg";
import before9 from "../assets/img/before9.jpg";
import before10 from "../assets/img/before10.jpg";
import before11 from "../assets/img/before11.jpg";
import before12 from "../assets/img/before12.jpg";
import after1 from "../assets/img/after1.jpg";
import after2 from "../assets/img/after2.jpg";
import after3 from "../assets/img/after3.jpg";
import after4 from "../assets/img/after4.jpg";
import after5 from "../assets/img/after5.jpg";
import after6 from "../assets/img/after6.jpg";
import after7 from "../assets/img/after7.jpg";
import after8 from "../assets/img/after8.jpg";
import after9 from "../assets/img/after9.jpg";
import after10 from "../assets/img/after10.jpg";
import after11 from "../assets/img/after11.jpg";
import after12 from "../assets/img/after12.jpg";
import after13 from "../assets/img/after13.jpg";
import after14 from "../assets/img/after14.jpg";
import after15 from "../assets/img/after15.jpg";

type GalleryImage = {
  src: StaticImageData;
  name: string;
};

const IMAGES: GalleryImage[] = [
  { src: before1, name: "Before 1" },
  { src: after1, name: "After 1" },
  { src: before2, name: "Before 2" },
  { src: after2, name: "After 2" },
  { src: before3, name: "Before 3" },
  { src: after3, name: "After 3" },
  { src: before4, name: "Before 4" },
  { src: after4, name: "After 4" },
  { src: before5, name: "Before 5" },
  { src: after5, name: "After 5" },
  { src: before6, name: "Before 6" },
  { src: after6, name: "After 6" },
  { src: before7, name: "Before 7" },
  { src: after7, name: "After 7" },
  { src: before8, name: "Before 8" },
  { src: after8, name: "After 8" },
  { src: before9, name: "Before 9" },
  { src: after9, name: "After 9" },
  { src: before10, name: "Before 10" },
  { src: after10, name: "After 10" },
  { src: before11, name: "Before 11" },
  { src: after11, name: "After 11" },
  { src: before12, name: "Before 12" },
  { src: after12, name: "After 12" },
  { src: after13, name: "After 13" },
  { src: after14, name: "After 14" },
  { src: after15, name: "After 15" },
];

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  // Slideshow autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isPlaying && selectedImage) {
      interval = setInterval(() => {
        handleNextImage();
      }, 3000);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, selectedImage]);

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = IMAGES.findIndex(
      (img) => img.src === selectedImage.src
    );
    const prevIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
    setSelectedImage(IMAGES[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = IMAGES.findIndex(
      (img) => img.src === selectedImage.src
    );
    const nextIndex = (currentIndex + 1) % IMAGES.length;
    setSelectedImage(IMAGES[nextIndex]);
  };

  return (
    <div className="container mx-auto p-4 -z-20">
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {IMAGES.map((image, index) => (
          <div
            key={`${image.name}-${index}`}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          {/* Controls Top Right */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              className="text-white p-2 hover:bg-white/10 rounded-full"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button
              className="text-white p-2 hover:bg-white/10 rounded-full"
              onClick={() => setZoomLevel((prev) => Math.min(prev + 0.25, 3))}
            >
              <ZoomIn size={24} />
            </button>
            <button
              className="text-white p-2 hover:bg-white/10 rounded-full"
              onClick={() => setZoomLevel((prev) => Math.max(prev - 0.25, 0.5))}
            >
              <ZoomOut size={24} />
            </button>
            <button
              className="text-white p-2 hover:bg-white/10 rounded-full"
              onClick={() => {
                setSelectedImage(null);
                setZoomLevel(1);
                setIsPlaying(false);
              }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Prev Button */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={handlePrevImage}
          >
            <ChevronLeft size={32} />
          </button>

          {/* Main Image */}
          <div className="relative overflow-auto max-h-screen max-w-screen-xl">
            <Image
              src={selectedImage.src}
              alt={selectedImage.name}
              className="object-contain h-screen transition-transform duration-200"
              style={{
                transform: `scale(${zoomLevel})`,
                cursor: zoomLevel > 1 ? "move" : "auto",
              }}
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={handleNextImage}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
