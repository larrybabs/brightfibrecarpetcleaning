"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Phone } from "lucide-react";
import Check from "@/assets/icon/bfcCheck.svg";
import Book from "@/assets/icon/Calendar.svg";
import Clean from "@/assets/icon/CleanHand.svg";
import Quote from "@/assets/icon/Quoteb.svg";
import Relax from "@/assets/icon/Calm.svg";
import Call from "@/assets/icon/CallB.svg";
import Before1 from "@/assets/img/before1.jpg";
import After1 from "@/assets/img/after1.jpg";
import After10 from "@/assets/img/after10.jpg";
import Carpet from "@/assets/img/Carpet.png";
import Commercial from "@/assets/img/Commercial.png";
import Vehicle from "@/assets/img/Vehicle.png";
import Chair from "@/assets/img/ChairC.png";
import Stain from "@/assets/img/Stain.png";
import Upholstery from "@/assets/img/Upholstery.png";
import HomeFaq from "@/components/HomeFaq";

export default function Home() {
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

  const benefits = [
    "Professional and Highly Experienced Cleaning Team",
    "All Equipment and Chemicals Provided",
    "Insured Service Against Damages",
    "Industry Leading Service Satisfaction Guarantee",
    "We're Guaranteed To Show Up",
  ];

  const services = [
    {
      title: "Carpet Cleaning",
      description:
        "We specialize in deep cleaning carpets, removing dirt, stains, and allergens to restore freshness and extend carpet life.",
      image: Carpet.src,
      link: "/carpet-cleaning",
    },
    {
      title: "Upholstery Cleaning",
      description:
        "Expert cleaning for sofas, chairs, and other upholstered furniture. We remove stains, odors, and allergens for a healthier home.",
      image: Upholstery.src,
      link: "/upholstery-cleaning",
    },
    {
      title: "Commercial Cleaning",
      description:
        "Comprehensive cleaning solutions for offices, shops, and commercial spaces. We ensure a spotless environment for your business.",
      image: Commercial.src,
      link: "/commercial-cleaning",
    },
    {
      title: "Chair Cleaning",
      description:
        "Professional chair cleaning to remove stains, dust, and allergens, keeping your seating fresh and inviting.",
      image: Chair.src,
      link: "/chair-cleaning",
    },
    {
      title: "Stain Removal",
      description:
        "Advanced stain removal for carpets, rugs, and upholstery. We tackle even the toughest spots with safe, effective methods.",
      image: Stain.src,
      link: "/stain-removal",
    },
    {
      title: "Vehicle Interior",
      description:
        "Interior cleaning for cars, vans, and other vehicles. We remove dirt, stains, and odors for a clean and comfortable ride.",
      image: Vehicle.src,
      link: "/vehicle-cleaning",
    },
  ];

  return (
    <div>
      <main className="">
        <div className="flex flex-col items-start justify-center bg-hero bg-cover bg-center text-white p-8 min-h-screen">
          <div className="container mx-auto">
            <p className="uppercase text-secondary text-xl mb-2">
              Best Cleaning Service
            </p>
            <h1 className="text-7xl font-bold mb-8 sm:w-1/2">
              Ultimate carpet cleaning
            </h1>
            <p className="text-xl mb-14 sm:w-2/3">
              Your one-stop solution for all cleaning needs. Expert carpet and
              upholstery cleaning services across the United Kingdom. We use
              eco-friendly products and advanced techniques to remove even the
              toughest stains.
            </p>
            <Link
              href="/#services"
              className="capitalize text-primary font-semibold bg-secondary hover:px-12 py-3 px-8 rounded-full hover:bg-secondary/90 duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Why Bright Fibre Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                      src={After1.src}
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
                      src={Before1.src}
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
                  <span className="hidden sm:inline">Drag</span> the slider to
                  see the transformation
                </p>
              </div>

              {/* Content Section */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Why Bright Fibre Carpet Cleaning?
                  </h1>
                  <p className="text-base text-gray-700 mb-8">
                    We are a professional cleaning service specializing in
                    carpet and upholstery cleaning.With years of experience, we
                    understand the unique needs of our clients and tailor our
                    services to meet those needs. Whether it&apos;s a
                    residential or commercial space, we ensure a thorough and
                    effective clean every time.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Image
                        src={Check.src}
                        alt="check"
                        width={16}
                        height={16}
                      />
                      <span className="text-gray-700 text-base">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="pt-6">
                  <div className="flex items-center space-x-4">
                    <span className="md:text-xl font-semibold text-primary">
                      Call us or WhatsApp now:
                    </span>

                    <Link
                      href="tel:07835756064"
                      className="capitalize text-primary font-semibold bg-secondary  py-3 px-8 hover:px-12 rounded-full flex gap-2 items-center hover:bg-secondary/90 duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      <span>07835756064</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container mx-auto py-16">
            <h1 className="text-5xl font-bold text-center mb-4">
              Our Cleaning services
            </h1>
            <p className="text-center text-base mb-12">
              We offer comprehensive cleaning solutions for residential and
              commercial properties.
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl w-[330px] shadow-xl border mb-10 flex flex-col items-center"
                    style={{ borderWidth: "0.6px", borderColor: "#CFCFCF" }}
                  >
                    <Link href={service.link} className="cursor-pointer w-full">
                      <div className="overflow-hidden rounded-3xl w-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={310}
                          height={170}
                          className="w-full object-cover rounded-3xl transition-transform duration-300 ease-in-out hover:scale-115"
                        />
                      </div>
                    </Link>
                    <div className="p-6 w-full">
                      <h2 className="text-xl font-semibold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-700 mb-4">
                        {service.description}
                      </p>
                      <Link
                        href={service.link}
                        className="uppercase text-primary underline underline-offset-4 hover:underline-offset-1 cursor-pointer duration-300"
                      >
                        View Service
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="mx-auto bg-secondary/30 rounded-lg w-[140px] py-1 mb-3 text-center">
              3 easy steps
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Our work process
            </h1>

            <div>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                  <div
                    className="bg-white rounded-3xl w-full shadow-xl border mb-10 flex items-start px-6 pb-6 pt-10 relative"
                    style={{ borderWidth: "0.6px", borderColor: "#CFCFCF" }}
                  >
                    <div className="rounded-xl p-2 me-4 bg-secondary/30">
                      <Image src={Book.src} alt="book" width={50} height={50} />
                    </div>

                    <div className="w-full text-start">
                      <h2 className="capitalize text-xl font-semibold mb-1">
                        you book
                      </h2>
                      <p className="text-gray-700 opacity-60 text-base">
                        Choose the date and time you’d like your professional to
                        arrive.
                      </p>
                    </div>
                    <div className="bg-primary p-2 rounded-lg absolute right-6  -top-4">
                      <p className="uppercase text-white">step 01</p>
                    </div>
                  </div>
                  <div
                    className="bg-white rounded-3xl w-full shadow-xl border mb-10 flex items-start px-6 pb-6 pt-10 relative"
                    style={{ borderWidth: "0.6px", borderColor: "#CFCFCF" }}
                  >
                    <div className="rounded-xl p-2 me-4 bg-secondary/30">
                      <Image
                        src={Clean.src}
                        alt="book"
                        width={50}
                        height={50}
                      />
                    </div>

                    <div className="w-full text-start">
                      <h2 className="capitalize text-xl font-semibold mb-1">
                        We Clean
                      </h2>
                      <p className="text-gray-700 opacity-60 text-base">
                        A trusted house cleaner comes over and cleans your place
                        your area.
                      </p>
                    </div>
                    <div className="bg-primary p-2 rounded-lg absolute right-6  -top-4">
                      <p className="uppercase text-white">step 02</p>
                    </div>
                  </div>
                  <div
                    className="bg-white rounded-3xl w-full shadow-xl border mb-10 flex items-start px-6 pb-6 pt-10 relative"
                    style={{ borderWidth: "0.6px", borderColor: "#CFCFCF" }}
                  >
                    <div className="rounded-xl p-2 me-4 bg-secondary/30">
                      <Image
                        src={Relax.src}
                        alt="book"
                        width={50}
                        height={50}
                      />
                    </div>

                    <div className="w-full text-start">
                      <h2 className="capitalize text-xl font-semibold mb-1">
                        you relax
                      </h2>
                      <p className="text-gray-700 opacity-60 text-base">
                        You can sit back and relax. Enjoy a squeaky clean &
                        sanitary home!
                      </p>
                    </div>
                    <div className="bg-primary p-2 rounded-lg absolute right-6  -top-4">
                      <p className="uppercase text-white">step 03</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="capitalize text-primary font-semibold bg-secondary  py-3 px-8 hover:px-12 rounded-full hover:bg-secondary/90 duration-300"
            >
              get free quote
            </Link>
          </div>
        </section>

        <section className="bg-primary py-24">
          <div className="container mx-auto flex flex-col md:flex-row items-center text-white px-4 sm:px-6 lg:px-8">
            <div>
              <p>Testimonials</p>
              <h1 className="text-5xl font-bold  mb-4">
                What Our <br /> customers Say
              </h1>
              <p className="text-lg text-white my-8">
                Hear from our satisfied customers who have experienced our
                professional cleaning services. We take pride in delivering
                outstanding results and exceptional customer care every time.
              </p>
              <Link
                href="/contact"
                className="capitalize text-primary font-semibold bg-secondary  py-3 px-8 hover:px-12 rounded-full hover:bg-secondary/90 duration-300"
              >
                get free quote
              </Link>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
              <div className="bg-[#D9D9D9] w-[340px] h-[360px] rounded-3xl p-8 mt-10">
                <Image
                  src={Quote.src}
                  alt="book"
                  width={50}
                  height={50}
                  className="mb-4"
                />
                <p className="text-gray-900 text-lg mb-4">
                  &quot;I had my carpets cleaned by Bright Fibre Cleaning and I
                  couldn&apos;t be happier! They were professional, thorough,
                  and my carpets look brand new. Highly recommend!&quot;
                </p>
                <p className="text-gray-700 font-semibold">John Carter</p>
              </div>
              <div className="bg-[#D9D9D9] w-[340px] h-[360px] rounded-3xl p-8 mt-10 md:ms-6">
                <Image
                  src={Quote.src}
                  alt="book"
                  width={50}
                  height={50}
                  className="mb-4"
                />
                <p className="text-gray-900 text-lg mb-4">
                  &quot;The team at Bright Fibre Cleaning did an amazing job on
                  my upholstery. They were friendly, efficient, and the results
                  were fantastic. Will definitely use their services
                  again!&quot;
                </p>
                <p className="text-gray-700 font-semibold">Elizabeth Smith</p>
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
              <div className="absolute flex items-center bg-secondary p-4 top-42 md:top-72 right-0 shadow-2xl ">
                <div className="bg-white rounded-full p-3 mr-4 flex items-center justify-center">
                  <Image
                    src={Call.src}
                    alt="Call icon"
                    width={40}
                    height={40}
                  />
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
              <HomeFaq />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
