"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Before1 from "@/assets/img/before1.jpg";
import After1 from "@/assets/img/after1.jpg";
import After3 from "@/assets/img/after3.jpg";
import Call from "@/assets/icon/CallB.svg";

const accordionData = [
  {
    id: 1,
    title: "What types of upholstery can you clean?",
    description:
      "We clean a wide range of upholstery fabrics including cotton, linen, wool, velvet, leather, microfiber, and synthetic blends. Our team uses the appropriate method for each material to avoid damage.",
  },
  {
    id: 2,
    title: "How often should I have my upholstery cleaned?",
    description:
      "We recommend professional upholstery cleaning every 12–18 months. However, households with pets, children, or high usage may benefit from more frequent cleaning.",
  },
  {
    id: 3,
    title: "Can upholstery cleaning remove stains and odors?",
    description:
      "Yes, our deep cleaning process effectively removes most stains, dirt, allergens, and odors caused by pets, spills, and everyday use. Tough stains may require specialized treatment.",
  },
  {
    id: 4,
    title: "Is the cleaning process safe for my furniture fabric?",
    description:
      "Absolutely. We inspect your upholstery first to determine the right cleaning method, whether it’s hot water extraction, dry cleaning, or leather treatment, ensuring fabric safety.",
  },
  {
    id: 5,
    title: "How long does it take for upholstery to dry?",
    description:
      "Drying time depends on the fabric and cleaning method, but it typically takes between 4 to 8 hours. Good ventilation or air circulation can speed up the process.",
  },
  {
    id: 6,
    title: "Do I need to move my furniture before cleaning?",
    description:
      "No, our team will carefully move and protect surrounding items if needed. We only ask that small personal items or fragile belongings be removed beforehand.",
  },
];

export default function Upholstery() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  };

  // Handle mouse events for dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
      }
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleGlobalMouseMove);
        document.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }
  }, [isDragging]);

  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (id: number): void => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="">
      <div className="relative w-full h-[200px] -z-20 md:h-[300px] overflow-hidden group ">
        <Image
          src={After1.src}
          alt="Background"
          width={300}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex bg-primary/50 items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Upholstry Cleaning
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
                  Comfort Restored. Beauty Preserved.
                </h1>
                <p className="text-base text-gray-700 mb-8">
                  Bright Fibre Upholstery Cleaning provides professional results
                  that go far beyond what basic home cleaning tools or rental
                  machines can achieve. Our advanced equipment is significantly
                  more powerful, using specialized techniques to thoroughly
                  clean and refresh upholstery, removing deep-seated dirt and
                  stains with ease.
                  <br />
                  <br />
                  When it comes to upholstery cleaning, quality makes all the
                  difference. Choosing a budget service often means working with
                  untrained, uninsured cleaners who rely on outdated,
                  low-quality equipment.
                  <br />
                  <br />
                  At Bright Fibre, we’re dedicated to delivering exceptional
                  service at a fair price. We use only top-of-the-line cleaning
                  tools and eco-friendly products, consistently upgrading to the
                  latest advancements to ensure superior results every time. We
                  clean all types of upholstery, from sofas and chairs to
                  mattresses and more, in a wide range of settings. Our clients
                  include homes, offices, hotels, restaurants, care homes, and
                  many other establishments.
                </p>
              </div>
            </div>
            {/* Before/After Slider */}
            <div className="relative">
              <div
                ref={containerRef}
                className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl cursor-col-resize select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                {/* Before Image */}
                <div className="absolute inset-0">
                  <div className="w-full h-full  flex items-center justify-center">
                    <Image
                      src={After1.src}
                      alt="After cleaning"
                      width={600}
                      height={400}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    After
                  </div>
                </div>

                {/* After Image */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={Before1.src}
                      alt="Before cleaning"
                      width={600}
                      height={400}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before
                  </div>
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-col-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-blue-500 flex items-center justify-center">
                    <div className="w-1 h-4 bg-blue-500 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Instruction text */}
              <p className="text-center text-gray-600 mt-4 text-sm">
                Drag the slider to see the transformation
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
              src={After3.src}
              alt="After cleaning"
              width={560}
              height={540}
              className="mb-4 rounded-3xl"
            />
            <div className="absolute flex items-center bg-secondary p-4 top-42 md:top-72 right-0 shadow-2xl ">
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
