"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Before6 from "@/assets/img/before5.jpg";
import After10 from "@/assets/img/after10.jpg";
import After6 from "@/assets/img/after5.jpg";
import Call from "@/assets/icon/CallB.svg";

const accordionData = [
  {
    id: 1,
    title: "What types of vehicles do you clean?",
    description:
      "We clean all vehicle types, including cars, SUVs, vans, trucks, and even company fleets. Whether it's a daily driver or a luxury model, we tailor our services to your vehicle's needs.",
  },
  {
    id: 2,
    title: "Do you offer interior and exterior cleaning?",
    description:
      "Yes, we provide both interior and exterior cleaning. Interior services include VehicleCleaning shampooing, carpet vacuuming, stain removal, and dashboard detailing, while exterior services cover washing, polishing, and waxing.",
  },
  {
    id: 3,
    title: "Can you remove tough stains and odors from car interiors?",
    description:
      "Yes, our deep cleaning process targets tough stains, spills, pet hair, and lingering odors. We use specialized products designed to refresh and sanitize your vehicle's interior.",
  },
  {
    id: 4,
    title: "How long does a full vehicle cleaning take?",
    description:
      "A standard clean usually takes 1–2 hours, while a deep cleaning or detailing session may take 3–4 hours depending on the size and condition of the vehicle.",
  },
  {
    id: 5,
    title: "Are your products safe for leather and delicate materials?",
    description:
      "Absolutely. We use fabric-specific and leather-safe cleaning solutions to protect delicate materials and preserve the look and feel of your vehicle's interior.",
  },
  {
    id: 6,
    title: "Do you provide mobile car cleaning services?",
    description:
      "Yes, we offer convenient mobile cleaning where our team comes to you—whether at home, office, or any suitable location—so you can enjoy a spotless car without disrupting your schedule.",
  },
  {
    id: 7,
    title: "How often should I have my vehicle professionally cleaned?",
    description:
      "For regular maintenance, we recommend at least once every 1–2 months. However, deep cleaning or detailing is best done every 4–6 months depending on usage.",
  },
];

export default function VehicleCleaning() {
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
      <div className="relative w-full h-[200px] -z-20 md:h-[300px] overflow-hidden group">
        <Image
          src={After10.src}
          alt="Background"
          width={300}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex bg-primary/50 items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center px-4">
            Vehicle Interior
          </h1>
        </div>
      </div>

      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Content Section */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                  More Than Clean, <br className="hidden sm:block" /> It&lsquo;s a
                  Drive to Impress.
                </h1>
                <div className="text-sm sm:text-base text-gray-700 space-y-4">
                  <p>
                    Your car is more than just a way to get from point A to
                    point B, it&lsquo;s an extension of your lifestyle. From daily
                    commutes to weekend road trips, it collects more than miles;
                    it picks up dust, dirt, spills, and sometimes even forgotten
                    coffee stains.
                  </p>
                  <p>
                    Bright Fibre Vehicle Cleaning is designed to give your car
                    that fresh, like-new feeling inside and out. We don&lsquo;t just
                    wash the surface we go deeper, targeting the hidden grime in
                    VehicleCleaning, carpets, air vents, and every hard-to-reach
                    corner.
                  </p>
                  <p>
                    Whether it&lsquo;s a quick refresh, a deep interior detail, or a
                    full showroom-standard clean, we bring professional
                    precision to every job. From compact cars and SUVs to luxury
                    vehicles and company fleets, we treat every vehicle with the
                    same care and attention it deserves.
                  </p>
                  <p>
                    At Bright Fibre, we believe a clean car isn&lsquo;t just about
                    appearance, it&lsquo;s about creating a healthier, more enjoyable
                    driving experience. Because when your car feels good, so do
                    you.
                  </p>
                </div>
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

      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-primary px-4 sm:px-6 lg:px-8">
          {/* Image & Contact Card */}
          <div className="relative w-full">
            <Image
              src={After6.src}
              alt="After cleaning"
              width={560}
              height={340}
              className="mb-4 rounded-xl lg:rounded-3xl w-full"
            />
            <div className="absolute flex items-center bg-secondary p-3 sm:p-4 bottom-4 sm:bottom-8 right-0 shadow-2xl rounded-l-lg">
              <div className="bg-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex items-center justify-center">
                <Image
                  src={Call.src}
                  alt="Call icon"
                  width={32}
                  height={32}
                  className="sm:w-10 sm:h-10"
                />
              </div>
              <div>
                <p className="text-gray-900 text-sm sm:text-lg mb-1 font-medium">
                  Got more questions?
                </p>
                <a
                  href="tel:07835756064"
                  className="text-primary text-sm sm:text-lg font-bold hover:underline"
                >
                  07835756064
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="w-full flex flex-col justify-center">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-6 lg:mb-8">
              Frequently Asked Questions
            </h2>
            <div className="w-full space-y-3">
              {accordionData.map((item) => (
                <div key={item.id} className="border-b border-gray-300">
                  <div
                    onClick={() => toggleAccordion(item.id)}
                    className="flex items-center justify-between py-3 sm:py-4 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                      <p className="capitalize text-sm sm:text-base font-semibold pr-2">
                        {item.title}
                      </p>
                    </div>
                    <span className="flex-shrink-0">
                      {activeId === item.id ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500"
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
                          width="20"
                          height="20"
                          className="sm:w-6 sm:h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_126_264)">
                            <path
                              d="M12 1.5V22.5M1.5 12H22.5"
                              stroke="#121212"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
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
                    <div className="pb-3 sm:pb-4 pl-0 opacity-80 text-xs sm:text-sm lg:w-3/4 leading-relaxed">
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
