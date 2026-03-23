import { retreats } from "@/data/content.json";

export default function Retreats() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] pt-32 pb-24">
      <div className="container-custom max-w-5xl mx-auto">
        <h1 className="heading-1 text-center mb-6">Upcoming Retreats</h1>
        <div className="w-16 h-[1px] bg-[#2c3e50] mx-auto mb-12"></div>
        <p className="text-center text-xl text-gray-600 mb-20 max-w-2xl mx-auto font-light">
          Step out of your daily routine and immerse yourself in practice, community, and serenity. Our retreats are transformative experiences designed to heal the body and awaken the mind.
        </p>

        <div className="space-y-16">
          {retreats.map((r) => (
            <div key={r.id} className="bg-white shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden group">
              <div className="md:w-1/2 h-80 md:h-auto bg-[#e8e4db] relative flex items-center justify-center text-[#6e655b] text-xl font-serif">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                Retreat Image
              </div>
              <div className="md:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <p className="text-[#6e655b] font-medium mb-3 uppercase tracking-wider text-sm flex items-center">
                  <span className="mr-2">📍</span>{r.location}
                </p>
                <h3 className="heading-3 mb-4">{r.title}</h3>
                <p className="text-[#2c3e50] font-semibold text-sm uppercase tracking-widest mb-6 border-b border-gray-200 inline-block pb-1">
                  {r.date}
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {r.description}
                </p>
                <button className="self-start bg-[#2c3e50] text-[#e0d9cd] px-8 py-4 uppercase tracking-widest text-sm hover:bg-black transition-colors w-full sm:w-auto text-center font-semibold">
                  View Full Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
