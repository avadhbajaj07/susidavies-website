import { programs } from "@/data/content.json";

export default function CoachingMentoring() {
  return (
    <div className="min-h-screen bg-[#fdfaf5]">
      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-[#e0d9cd] pt-32 pb-24 text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-serif font-light mb-6 tracking-wide leading-tight">
            Mentorship & Coaching
          </h1>
          <div className="w-16 h-[1px] bg-[#e0d9cd] mx-auto mb-8 opacity-50"></div>
          <p className="text-xl md:text-2xl font-light mb-10 text-[#aeb6bf] max-w-3xl mx-auto">
            Go from being a good teacher to an exceptional one. 
            Immerse in decades of distilled yoga philosophy, modern practice, and conscious living.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container-custom section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-2">You cannot be a teacher if you don't walk the talk.</h2>
            <div className="w-12 h-[1px] bg-[#2c3e50] mb-8"></div>
            <p className="body-text mb-6">
              Mentorship is not an academic exercise—it is an energetic transmission. Real growth requires a guide who has already navigated the deepest parts of the practice and life itself. 
            </p>
            <p className="body-text">
              My programs are designed for serious practitioners and teachers ready to refine their voices, elevate their careers, and step fully into their power as meaningful educators.
            </p>
          </div>
          <div className="bg-[#e8e4db] h-96 flex items-center justify-center text-[#6e655b] text-xl font-serif">
            Mentorship Image
          </div>
        </div>
      </section>

      {/* Available Programs Grid */}
      <section className="bg-[#f4efe6] py-24 border-t border-gray-200">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="heading-2 text-center mb-16">Available Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((p) => (
              <div key={p.id} className="bg-white p-10 hover:shadow-lg transition-shadow border-t-4 border-[#2c3e50]">
                <h3 className="heading-3 mb-2">{p.title}</h3>
                <p className="text-[#6e655b] uppercase text-xs tracking-widest font-bold mb-6">Duration: {p.duration}</p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {p.description}
                </p>
                <a href={p.link} className="inline-block border border-[#2c3e50] text-[#2c3e50] px-6 py-3 uppercase tracking-widest text-sm hover:bg-[#2c3e50] hover:text-white transition-colors">
                  Learn Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
