import { classes } from "@/data/content.json";

export default function LiveClasses() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] py-24">
      <div className="container-custom max-w-5xl mx-auto">
        <h1 className="heading-1 text-center mb-6">Live Classes</h1>
        <div className="w-16 h-[1px] bg-[#2c3e50] mx-auto mb-12"></div>
        <p className="text-center text-xl text-gray-600 mb-20 max-w-2xl mx-auto">
          Join Susi&apos;s live online classes or group sessions. Designed to elevate your practice from the comfort of your home.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {classes.map((c) => (
            <div key={c.id} className="bg-white p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="heading-3">{c.title}</h3>
              <p className="text-[#6e655b] font-medium mb-4 uppercase tracking-wider text-sm">
                {c.time}
              </p>
              <p className="text-gray-600 mb-6 line-clamp-3">
                {c.description}
              </p>
              <div className="flex justify-between items-center text-sm border-t border-gray-100 pt-4">
                <span className="text-gray-500">Instructor: {c.instructor}</span>
                <span className="text-[#2c3e50] bg-[#e8e4db] px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider">
                  {c.level}
                </span>
              </div>
              <button className="mt-6 w-full border border-[#2c3e50] text-[#2c3e50] px-6 py-3 uppercase tracking-widest text-sm hover:bg-[#2c3e50] hover:text-white transition-colors">
                Book Class
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
