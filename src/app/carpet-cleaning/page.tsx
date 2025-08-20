"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Before6 from "@/assets/img/before6.jpg";
import After10 from "@/assets/img/after10.jpg";
import After6 from "@/assets/img/after6.jpg";
import Call from "@/assets/icon/CallB.svg";

const accordionData = [
  {
    id: 1,
    title: "What types of carpets can you clean?",
    description:
      "We clean all carpet types, including wool, nylon, polyester, polypropylene, and blends. Our team tailors the cleaning method to suit your carpet’s material and condition.",
  },
  {
    id: 2,
    title: "How often should I have my carpets professionally cleaned?",
    description:
      "For most households, we recommend professional carpet cleaning every 12 months. Homes with children, pets, or heavy traffic may benefit from cleaning every 6–8 months.",
  },
  {
    id: 3,
    title: "Can you remove tough stains and odors?",
    description:
      "Yes, we use advanced stain removal techniques and eco-friendly solutions to tackle pet stains, food spills, and odors. While most stains can be removed, results may vary depending on the stain and carpet type.",
  },
  {
    id: 4,
    title: "How long will it take for my carpet to dry?",
    description:
      "Drying time depends on carpet thickness, ventilation, and cleaning method. Typically, carpets dry within 4–6 hours. Using fans or opening windows can speed up the process.",
  },
  {
    id: 5,
    title: "Is your carpet cleaning safe for kids and pets?",
    description:
      "Absolutely. We use eco-friendly, non-toxic products that are completely safe for children, pets, and allergy-sensitive households.",
  },
  {
    id: 6,
    title: "Do I need to move my furniture before carpet cleaning?",
    description:
      "Our team can help move light furniture if necessary, but we recommend removing small personal items and fragile belongings before your appointment.",
  },
];

export default function CarpetCleaning() {
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
            Carpet Cleaning
          </h1>
        </div>
      </div>

      <section className=" py-24">
        <div className="container mx-auto px-4 sm:px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6 w-10/12">
                  Deep Clean. Fresh Feel. Like New Again.
                </h1>
                <p className="text-base text-gray-700 mb-8">
                  Bright Fibre Carpet Cleaning delivers professional results
                  that go far beyond what standard vacuuming or rental machines
                  can achieve. Our industrial-grade equipment penetrates deep
                  into carpet fibers, extracting dirt, dust, allergens, and
                  stubborn stains that household tools simply can&lsquo;t reach.
                  <br />
                  <br />
                  When it comes to carpet cleaning, quality matters. Cheaper
                  services often rely on outdated, low-powered equipment and
                  untrained cleaners, leaving carpets damp, damaged, or only
                  partially cleaned.
                  <br />
                  <br />
                  At Bright Fibre, we are committed to providing exceptional
                  carpet care at a fair price. We use state-of-the-art
                  technology and eco-friendly solutions, consistently upgrading
                  to the latest cleaning advancements to guarantee the best
                  results every time.
                  <br />
                  We clean all types of carpets, wool, nylon, polyester,
                  polypropylene, and blends in both residential and commercial
                  spaces. Our clients include homes, offices, hotels,
                  restaurants, schools, and healthcare facilities, all trusting
                  us to restore freshness and extend the life of their carpets.
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
            <div className="absolute flex items-center bg-secondary p-4 top-46 md:top-72 right-0 shadow-2xl ">
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
