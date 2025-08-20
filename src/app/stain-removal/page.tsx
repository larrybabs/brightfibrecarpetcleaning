"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Before6 from "@/assets/img/before12.jpg";
import After10 from "@/assets/img/after9.jpg";
import After6 from "@/assets/img/after12.jpg";
import Call from "@/assets/icon/CallB.svg";

const accordionData = [
  {
    id: 1,
    title: "What types of stains can you remove?",
    description:
      "We handle a wide range of stains including food and drink spills, coffee, tea, red wine, ink, grease, makeup, pet accidents, and more.",
  },
  {
    id: 2,
    title: "Can you remove old or set-in stains?",
    description:
      "Yes, while fresh stains are easier to treat, we have advanced methods that can significantly reduce or completely remove many old, set-in stains.",
  },
  {
    id: 3,
    title: "Will stain removal damage the fabric?",
    description:
      "No, we carefully test and select the safest cleaning solution and technique for your specific fabric type to ensure effective results without damage.",
  },
  {
    id: 4,
    title: "Are your stain removal products safe?",
    description:
      "Yes, all our solutions are eco-friendly and non-toxic, safe for children, pets, and allergy-sensitive households.",
  },
  {
    id: 5,
    title: "Can you guarantee 100% stain removal?",
    description:
      "While we achieve excellent results with most stains, complete removal depends on factors like fabric type, stain age, and prior DIY treatments. We’ll always give you an honest assessment before starting.",
  },
  {
    id: 6,
    title: "Do I need to book a full cleaning service for stain removal?",
    description:
      "Not necessarily. We offer targeted stain removal as a standalone service, but many clients pair it with full upholstery or carpet cleaning for best results.",
  },
];

export default function StainRemoval() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse events
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(true);
      updateSliderPosition(e.clientX);
    };
  
    // Touch events
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsTouching(true);
      const touch = e.touches[0];
      updateSliderPosition(touch.clientX);
    };
  
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (isTouching) {
        const touch = e.touches[0];
        updateSliderPosition(touch.clientX);
      }
    };
  
    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsTouching(false);
    };
  
    const updateSliderPosition = (clientX: number) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
      }
    };
  
    // Global mouse/touch events
    useEffect(() => {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        if (isDragging) {
          updateSliderPosition(e.clientX);
        }
      };
  
      const handleGlobalTouchMove = (e: TouchEvent) => {
        if (isTouching) {
          e.preventDefault();
          const touch = e.touches[0];
          updateSliderPosition(touch.clientX);
        }
      };
  
      const handleGlobalMouseUp = () => {
        setIsDragging(false);
      };
  
      const handleGlobalTouchEnd = () => {
        setIsTouching(false);
      };
  
      if (isDragging) {
        document.addEventListener("mousemove", handleGlobalMouseMove);
        document.addEventListener("mouseup", handleGlobalMouseUp);
      }
  
      if (isTouching) {
        document.addEventListener("touchmove", handleGlobalTouchMove, {
          passive: false,
        });
        document.addEventListener("touchend", handleGlobalTouchEnd);
      }
  
      return () => {
        document.removeEventListener("mousemove", handleGlobalMouseMove);
        document.removeEventListener("mouseup", handleGlobalMouseUp);
        document.removeEventListener("touchmove", handleGlobalTouchMove);
        document.removeEventListener("touchend", handleGlobalTouchEnd);
      };
    }, [isDragging, isTouching]);
  
    const [activeId, setActiveId] = useState<number | null>(null);
  
    const toggleAccordion = (id: number): void => {
      setActiveId(activeId === id ? null : id);
    };

  return (
    <div className="">
      <div className="relative w-full h-[200px] -z-20 md:h-[300px] overflow-hidden group ">
        <Image
          src={After10.src}
          alt="Background"
          width={300}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex bg-primary/50 items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Stain Removal
          </h1>
        </div>
      </div>

      <section className=" py-24">
        <div className="container mx-auto px-4 sm:px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  Spills Happen. <br />
                  Stains Don’t Have To.
                </h1>
                <p className="text-base text-gray-700 mb-8">
                  Some stains don’t just sit on the surface, they tell stories.
                  That red wine spill from last weekend’s party, the ink mark
                  from an important meeting, or the pet accident that showed up
                  when you least expected it. The problem? Stains don’t fade
                  away with time they set, spread, and become harder to ignore.
                  <br />
                  <br />
                  Bright Fibre Stain Removal is your fabric’s second chance. We
                  specialize in tackling even the toughest marks coffee, wine,
                  grease, ink, makeup, pet stains, and more using advanced
                  treatments tailored to each fabric type. Unlike DIY
                  spot-cleaning, which can often make things worse, our
                  professional approach breaks down stains safely and
                  effectively, preserving the beauty and strength of your
                  upholstery, carpet, or fabric.
                  <br />
                  <br />
                  We don’t just mask stains; we eliminate them. Our eco-friendly
                  solutions lift the problem at its root, leaving your fabrics
                  fresh, spotless, and renewed. Whether at home, in your car, or
                  across your business space, we make “oops” moments disappear.
                  <br />
                  <br />
                  With Bright Fibre, stains don’t have the final word, you do.
                </p>
              </div>
            </div>
            {/* Before/After Slider */}
            <div className="relative order-1 lg:order-2">
              <div
                ref={containerRef}
                className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl cursor-col-resize select-none touch-pan-x"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ touchAction: "pan-x" }}
              >
                {/* After Image (Background) */}
                <div className="absolute inset-0">
                  <Image
                    src={After6.src}
                    alt="After cleaning"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-green-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                    After
                  </div>
                </div>

                {/* Before Image (Clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  }}
                >
                  <Image
                    src={Before6.src}
                    alt="Before cleaning"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Before
                  </div>
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-white shadow-lg z-10 cursor-col-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-lg border-2 border-blue-500 flex items-center justify-center">
                    <div className="w-0.5 sm:w-1 h-3 sm:h-4 bg-blue-500 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Instruction text */}
              <p className="text-center text-gray-600 mt-3 lg:mt-4 text-xs sm:text-sm">
                <span className="sm:hidden">Swipe</span>
                <span className="hidden sm:inline">Drag</span> the slider to see
                the transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-primary px-4 sm:px-6 lg:px-8">
          {/* Image & Contact Card */}
          <div className="relative w-full">
            <Image
              src={After10.src}
              alt="After cleaning"
              width={560}
              height={540}
              className="mb-4 rounded-3xl"
            />
            <div className="absolute flex items-center bg-secondary p-4 top-72 right-0 shadow-2xl ">
              <div className="bg-white rounded-full p-3 mr-4 flex items-center justify-center">
                <Image src={Call.src} alt="Call icon" width={40} height={40} />
              </div>
              <div>
                <p className="text-gray-900 text-lg mb-1 font-medium">
                  Got more questions?
                </p>
                <a
                  href="tel:07835756064"
                  className="text-primary text-lg font-bold hover:underline"
                >
                  07835756064
                </a>
              </div>
            </div>
          </div>
          {/* FAQ Section */}
          <div className="w-full flex flex-col justify-center">
            <h2 className="font-bold text-4xl md:text-5xl mb-8">
              Frequently Asked Questions
            </h2>
            <div className="w-full container mx-auto space-y-3">
              {accordionData.map((item) => (
                <div key={item.id} className="border-b border-gray-300">
                  <div
                    onClick={() => toggleAccordion(item.id)}
                    className="flex items-center justify-between  py-4 cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      {/* <span className="text-gray-500 font-semibold">{`0${item.id}`}</span> */}
                      <p className="capitalize text-base font-semibold">
                        {item.title}
                      </p>
                    </div>
                    <span>
                      {activeId === item.id ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_126_264)">
                            <path
                              d="M12 1.5V22.5M1.5 12H22.5"
                              stroke="#121212"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_126_264">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </span>
                  </div>
                  {activeId === item.id && item.description && (
                    <div className="p-4 pt-0 opacity-80 text-sm md:w-3/4 leading-relaxed">
                      {item.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
