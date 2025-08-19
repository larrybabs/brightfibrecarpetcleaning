// import { Separator } from "./ui/separator";
import { Phone, Mail, MapPin } from "lucide-react";
import Facebook from "@/assets/icon/facebook.svg";
import Instagram from "@/assets/icon/instagram.svg";

export function Footer() {
  return (
    <footer className="bg-primary text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">
              Bright Fibre carpet cleaning
            </h3>
            <p className="mb-4 leading-relaxed">
              Professional carpet and upholstery cleaning services across The
              United Kingdom. Trusted by over 2,500 satisfied customers .
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Brightfibercarpetclean/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-3xl cursor-pointer"
              >
                <img
                  src={Facebook.src}
                  alt="Bright Fibre Cleaning Logo"
                  width={20}
                  height={20}
                  className="mr-2"
                />
              </a>
              <a
                href="https://www.instagram.com/brightfibercarpetcleaning/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-3xl cursor-pointer"
              >
                <img
                  src={Instagram.src}
                  alt="Bright Fibre Cleaning Logo"
                  width={20}
                  height={20}
                  className="mr-2"
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/carpet-cleaning" className="hover:text-white transition-colors">
                  Carpet Cleaning
                </a>
              </li>
              <li>
                <a href="/upholstery-cleaning" className="hover:text-white transition-colors">
                  Upholstery Cleaning
                </a>
              </li>
              <li>
                <a href="/stain-removal" className="hover:text-white transition-colors">
                  Stain Removal
                </a>
              </li>
              <li>
                <a href="/chair-cleaning" className="hover:text-white transition-colors">
                  Chair Cleaning
                </a>
              </li>
              <li>
                <a href="/commercial-cleaning" className="hover:text-white transition-colors">
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a href="/vehicle-cleaning" className="hover:text-white transition-colors">
                  Vehicle Interior
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li>Northamptonshire</li>
              <li>Buckinghamshire</li>
              <li>Hertfordshire</li>
              <li>Cambridgeshire</li>
              <li>Bedford</li>
              <li>London</li>
              <li>Putney</li>
              <li>United Kingdom</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:07835756064"
                  className="cursor-pointer hover:underline duration-300"
                >
                  <span>07835756064</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:Brightfibercarpetcleaning@gmail.com"
                  className="cursor-pointer hover:underline duration-300"
                >
                  <span>Brightfibercarpetcleaning@gmail.com</span>
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>United Kingdom</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/20 rounded-lg">
              <h5 className="text-white font-semibold mb-2">Business Hours</h5>
              <div className="text-sm space-y-1">
                <div>Mon-Fri: 7:00 AM - 8:00 PM</div>
                <div>Sat-Sun: 8:00 AM - 6:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* <Separator className="my-8 bg-gray-700" /> */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            © 2025 Bright Fibre carpet cleaning. All rights reserved.
          </div>
          {/* <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Insurance Details</a>
          </div> */}
        </div>

        {/* <div className="mt-4 text-center text-sm text-gray-500">
          Fully insured and IICRC certified. Emergency service available 24/7.
        </div> */}
      </div>
    </footer>
  );
}
