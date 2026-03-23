import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
        {/* We use a dark overlay and an image/video background later */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="/hero-bg.jpg"
            alt="Susi Davies Yoga"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 tracking-wide">
            Mentoring Teachers.<br/>Shaping the Future of Yoga.
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 text-gray-200">
            Some people only exist. Susi Davies thrives — and teaches others to do the same.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/coaching-mentoring" className="bg-[#e0d9cd] text-[#2c3e50] px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white transition-colors w-full sm:w-auto text-center">
              Explore Mentoring
            </Link>
            <Link href="/retreats" className="border border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black transition-colors w-full sm:w-auto text-center">
              Our Retreats
            </Link>
          </div>
        </div>
      </section>

      {/* The Teacher Behind the Practice */}
      <section className="container-custom section-padding grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="heading-2">The Teacher Behind the Practice</h2>
          <div className="w-12 h-[1px] bg-[#2c3e50] mb-8"></div>
          <p className="body-text mb-6">
            Susi Davies has been living and breathing yoga for over 30 years. She owned yoga studios in Australia and Switzerland and is recognised by the US Yoga Alliance. She has guided hundreds of students across the world — not just through poses, but through real transformation.
          </p>
          <p className="body-text mb-8">
            Her philosophy in life: "You cannot be a teacher if you don't walk the talk". When you learn from Susi, you learn from someone who walks the talk — every single day. She lives her life like a "peaceful warrior".
          </p>
          <Link href="/about" className="text-[#6e655b] font-medium tracking-wide uppercase text-sm border-b border-[#6e655b] pb-1 hover:text-black transition-colors">
            Read My Story
          </Link>
        </div>
        <div className="relative h-[600px] w-full">
          {/* Placeholder for portrait image */}
          <div className="absolute inset-0 bg-[#e0d9cd] rounded-sm shadow-xl flex items-center justify-center text-[#6e655b]">
            <span className="text-xl font-serif">Portrait Image</span>
          </div>
        </div>
      </section>

      {/* Learn from Susi Davies */}
      <section className="bg-[#2c3e50] text-[#e0d9cd] py-24">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">Learn from Susi Davies</h2>
          <p className="text-lg md:text-xl font-light leading-relaxed mb-10 text-[#aeb6bf]">
            Susi now dedicates her time to coach and mentor yoga teachers — online and offline — sharing the principles and deep knowledge that have defined her practice and teaching for decades. This is for young teachers who already have a teaching certificate but want to learn SECRETS how to transform from being a good and okay teacher to being a GREAT and successful one.
          </p>
          <Link href="/coaching-mentoring" className="inline-block border border-[#e0d9cd] text-[#e0d9cd] px-10 py-4 uppercase tracking-widest text-sm hover:bg-[#e0d9cd] hover:text-[#2c3e50] transition-colors">
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Retreats */}
          <div className="group cursor-pointer">
            <div className="h-80 bg-gray-200 mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-[#e8e4db] z-0">Retreat Image</div>
            </div>
            <h3 className="heading-3">Relaxing your body, mind and spirit</h3>
            <p className="body-text mb-4 text-sm">
              Escape the hustle and bustle of everyday life and embark on a transformative yoga retreat with us. Immerse yourself in rejuvenating practices, serene environments, and nourishing meals.
            </p>
            <span href="/retreats" className="text-sm font-semibold uppercase tracking-widest text-[#6e655b] group-hover:text-black transition-colors">Explore Retreats &rarr;</span>
          </div>

          {/* Coaching */}
          <div className="group cursor-pointer">
            <div className="h-80 bg-gray-200 mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-[#e8e4db]">Coaching Image</div>
            </div>
            <h3 className="heading-3">Enrich Your Life with Our Life Coaching Program</h3>
            <p className="body-text mb-4 text-sm">
              Our life coaching program is designed to help you identify your goals, overcome obstacles, and create positive changes in your life with personalized guidance.
            </p>
            <span href="/life-coaching" className="text-sm font-semibold uppercase tracking-widest text-[#6e655b] group-hover:text-black transition-colors">Read More &rarr;</span>
          </div>

          {/* App */}
          <div className="group cursor-pointer">
            <div className="h-80 bg-gray-200 mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-[#e8e4db]">App Image</div>
            </div>
            <h3 className="heading-3">Susi Davies. In Your Pocket.</h3>
            <p className="body-text mb-4 text-sm">
              The Dynamic Yoga app is for anyone that want to either start yoga or keep going with their practice. The app brings Susi's teaching directly to you.
            </p>
            <span href="https://apps.apple.com/ch/app/yoga-lifestyle/id1659410021" className="text-sm font-semibold uppercase tracking-widest text-[#6e655b] group-hover:text-black transition-colors">Get the App &rarr;</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f4efe6] py-24">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-16">Stories of Transformation</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-sm">
              <p className="italic text-gray-600 mb-6 line-clamp-4">
                "I’ve been a student of Susi’s for close to 20 yrs. I’m travelling from Toronto for the retreat…hope that says something about the experience, quality of teaching, benefit/value I get out of attending her retreats..."
              </p>
              <p className="font-semibold uppercase tracking-widest text-sm">— Renata Tasselli</p>
            </div>
            <div className="bg-white p-8 shadow-sm">
              <p className="italic text-gray-600 mb-6 line-clamp-4">
                "Susi is one of the rare people who Walks the Talk. I have been practising yoga and studying yoga philosophy for 6 years with her. She’s helped me TRANSFORM – mind & body ! And she is so much fun to be around !!"
              </p>
              <p className="font-semibold uppercase tracking-widest text-sm">— Dominique Vellutini</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-gray-200">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="heading-2">Stay Close to Susi's World.</h2>
          <p className="body-text mx-auto mb-10">
            Be the first to know about new courses and programs, app updates, new Retreat locations and Susi's latest insights on yoga, teaching and healthy life styles.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="text" 
              placeholder="Your name" 
              className="px-6 py-4 bg-white border border-gray-300 focus:outline-none focus:border-[#2c3e50] w-full sm:w-64"
            />
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-6 py-4 bg-white border border-gray-300 focus:outline-none focus:border-[#2c3e50] w-full sm:w-64"
            />
            <button className="bg-[#2c3e50] text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-black transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
