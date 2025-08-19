import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import After10 from "@/assets/img/after3.jpg";

export default function Contact() {
  return (
    <div className="min-h-screen">
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
            Contact Us
          </h1>
        </div>
      </div>
      <div className="text-primary items-center justify-items-center min-h-screen p-8 pb-20 gap-1 sm:p-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <p className=" ">
            We would love to hear from you! Whether you have questions, need a
            quote, or want to schedule a service, feel free to reach out.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-1">
            <div
              className="bg-white rounded-xl w-full shadow-xl hover:shadow-2xl duration-300 border mb-10 flex items-start px-6 pb-6 pt-10 relative"
              style={{ borderWidth: "0.6px", borderColor: "#CFCFCF" }}
            >
              <div className="rounded-xl p-2 me-4 bg-secondary/30">
                <Phone className="h-6 w-6 text-primary" />
              </div>

              <div className="w-full text-start">
                <h2 className="capitalize text-xl font-semibold mb-1">
                  Call or Whatsapp
                </h2>
                <a
                  href="tel:07835756064"
                  className="text-primary cursor-pointer hover:underline duration-300"
                >
                  <span>07835756064</span>
                </a>
              </div>
            </div>
            <div
              className="bg-white rounded-xl w-full shadow-xl hover:shadow-2xl duration-300 border mb-10 flex items-start px-6 pb-6 pt-10 relative"
              style={{ borderWidth: "0.6px", borderColor: "#CFCFCF" }}
            >
              <div className="rounded-xl p-2 me-4 bg-secondary/30">
                <Mail className="h-6 w-6 text-primary" />
              </div>

              <div className="w-full text-start">
                <h2 className="capitalize text-xl font-semibold mb-1">
                  Mail Us
                </h2>
                <a
                  href="mailto:Brightfibercarpetcleaning@gmail.com"
                  className="text-primary cursor-pointer hover:underline duration-300"
                >
                  <span>Brightfibercarpetcleaning@gmail.com</span>
                </a>
              </div>
            </div>
            <div
              className="bg-white rounded-xl w-full shadow-xl hover:shadow-2xl duration-300 border mb-10 flex items-start px-6 pb-6 pt-10 relative"
              style={{ borderWidth: "0.6px", borderColor: "#CFCFCF" }}
            >
              <div className="rounded-xl p-2 me-4 bg-secondary/30">
                <MapPin className="h-6 w-6 text-primary" />
              </div>

              <div className="w-full text-start">
                <h2 className="capitalize text-xl font-semibold mb-1">
                  Location
                </h2>
                <span className="text-primary cursor-pointer hover:underline duration-300">
                  United Kingdom
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
