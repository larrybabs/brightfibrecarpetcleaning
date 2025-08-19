// components/WhatsAppButton.js
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <Link
        href="https://wa.me/447835756064?text=Hello%20Bright%20Fibre%20Cleaning!%20I%27d%20like%20to%20make%20an%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold p-4 rounded-full shadow-lg flex items-center justify-center gap-2 transition duration-300"
      >
        WhatsApp <MessageCircle size={28} />
      </Link>
    </div>
  );
}
