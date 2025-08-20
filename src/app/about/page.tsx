"use client";
import React from "react";
import bfcLogo from "@/assets/img/after1.jpg";
import Book from "@/assets/icon/Calendar.svg";
import Clean from "@/assets/icon/CleanHand.svg";
import Relax from "@/assets/icon/Calm.svg";
import Image from "next/image";
import Link from "next/link";


const About = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Bright Fibre Cleaning
          </h1>
          <p className="leading-relaxed">
            At Bright Fibre Cleaning, we believe that a cleaner space means a
            healthier, happier life. With years of professional cleaning
            experience across the UK, we bring a fresh shine to homes, offices,
            and vehicles; one <span className="bg-secondary text-primary px-1">Fibre</span> at a time.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="">
            <Image
              src={bfcLogo.src}
              alt="Bright Fibre Cleaning Logo"
              className="w-full max-h-96 mx-auto md:mx-0 rounded-3xl"
              width={300}
              height={300}
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-4 text-primary">
              Who We Are
            </h1>
            <p className="mb-4 leading-relaxed">
              We are a passionate team of cleaning professionals dedicated to
              delivering spotless results that go beyond surface-level shine.
              Whether it’s carpet cleaning, upholstery, commercial spaces, or
              vehicles.  We combine modern techniques with eco-friendly
              solutions to achieve perfection.
            </p>
            <p className="leading-relaxed">
              What makes us different? It’s our attention to detail, customer
              focus, and commitment to bringing every space back to life,
              restoring freshness, hygiene, and beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-32 px-6">
        <div className="container mx-auto text-center max-w-5xl">
          <h1 className="text-3xl font-semibold mb-12 text-primary">
            Our Core Values
          </h1>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-4 bg-white shadow-md w-full rounded-2xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Professionalism</h3>
              <p className="text-gray-600 text-base">
                Every job is carried out with the highest level of care and
                precision. We treat your home or office as if it were our own.
              </p>
            </div>
            <div className="p-4 bg-white shadow-md w-full rounded-2xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600 text-base">
                We use safe, non-toxic cleaning products to protect your family,
                pets, and the environment without compromising results.
              </p>
            </div>
            <div className="p-4 bg-white shadow-md w-full rounded-2xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600 text-base">
                Your satisfaction is our top priority. From the first call to
                the final clean, we ensure a seamless, stress-free experience.
              </p>
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
           
          </div>
        </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 px-6 md:px-12 lg:px-20 text-primary text-center">
        <h1 className="text-3xl font-semibold mb-6">
          Ready for a Cleaner Space?
        </h1>
        <p className="mb-8 text-lg md:w-1/2 mx-auto">
          Let Bright Fibre Cleaning transform your home, office, or vehicle with
          our trusted cleaning services. Book your free quote today!
        </p>
        <Link
          href="/contact"
          className="bg-white text-primary font-semibold py-3 px-8 rounded-full hover:px-12 duration-300 transition"
        >
          Get Free Quote
        </Link>
      </section>
    </div>
  );
};

export default About;
