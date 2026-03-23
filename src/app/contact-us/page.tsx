export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] pt-32 pb-24">
      <div className="container-custom max-w-5xl mx-auto">
        <h1 className="heading-1 text-center mb-6">Have Questions? Get in touch!</h1>
        <div className="w-16 h-[1px] bg-[#2c3e50] mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="heading-3 mb-4 flex items-center">
                <span className="mr-3 text-2xl">✉️</span> Email
              </h3>
              <p className="body-text">
                <a href="mailto:hello@susidavies.com" className="hover:text-[#2c3e50] border-b border-[#2c3e50]/30 transition-colors uppercase text-sm tracking-wider font-semibold">
                  hello@susidavies.com
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-4 flex items-center">
                <span className="mr-3 text-2xl">📞</span> Phone
              </h3>
              <p className="body-text">
                <a href="tel:+41798549752" className="hover:text-[#2c3e50] border-b border-[#2c3e50]/30 transition-colors uppercase text-sm tracking-wider font-semibold">
                  +41 79 854 97 52
                </a>
              </p>
            </div>

            <div>
              <h3 className="heading-3 mb-6 flex items-center">
                <span className="mr-3 text-2xl">🌐</span> Follow Us
              </h3>
              <div className="flex space-x-6 text-sm uppercase tracking-widest font-semibold text-gray-500">
                <a href="https://www.facebook.com/SusiDaviesYoga/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2c3e50] transition-colors">Facebook</a>
                <a href="https://twitter.com/susi_davies" target="_blank" rel="noopener noreferrer" className="hover:text-[#2c3e50] transition-colors">Twitter</a>
                <a href="https://www.instagram.com/susidavies/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2c3e50] transition-colors">Instagram</a>
                <a href="https://www.youtube.com/susidavies" target="_blank" rel="noopener noreferrer" className="hover:text-[#2c3e50] transition-colors">YouTube</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 shadow-sm border border-gray-100 animate-slide-up">
            <h3 className="heading-3 mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#6e655b] font-semibold mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#2c3e50] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#6e655b] font-semibold mb-2">Your Email</label>
                <input 
                  type="email" 
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#2c3e50] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#6e655b] font-semibold mb-2">Your Message</label>
                <textarea 
                  rows={4}
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#2c3e50] transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#2c3e50] text-[#e0d9cd] px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-black transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
