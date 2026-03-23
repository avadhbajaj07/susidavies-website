import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-[#e0d9cd] border-t border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Intro */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif mb-4 tracking-widest uppercase font-light">Susi Davies</h2>
            <p className="text-[#aeb6bf] max-w-sm mb-6 leading-relaxed">
              30+ years of experience. One name. One method. Worldwide impact. Embrace Health, Strength, and Serenity.
            </p>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold text-white mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[#aeb6bf] hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/retreats" className="text-[#aeb6bf] hover:text-white transition-colors">Retreats</Link></li>
              <li><Link href="/coaching-mentoring" className="text-[#aeb6bf] hover:text-white transition-colors">Coaching & Mentoring</Link></li>
              <li><Link href="/private-sessions" className="text-[#aeb6bf] hover:text-white transition-colors">Private Sessions</Link></li>
              <li><Link href="/live-classes" className="text-[#aeb6bf] hover:text-white transition-colors">Live Classes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold text-white mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-[#aeb6bf]">
              <li>
                <a href="tel:+41798549752" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">📞</span>+41 79 854 97 52
                </a>
              </li>
              <li>
                <a href="mailto:hello@susidavies.com" className="hover:text-white transition-colors flex items-center uppercase text-sm tracking-wider">
                  <span className="mr-2">✉️</span>hello@susidavies.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#34495e] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#aeb6bf] text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Susi Davies. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-[#aeb6bf]">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
