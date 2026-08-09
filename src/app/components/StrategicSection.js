"use client";

export default function StrategicSection() {
  const leftStats = [
    {
      number: "18",
      label: "holes",
      description:
        "A championship course where every distance demands precision and tactical thinking.",
    },
    {
      number: "120",
      label: "residents",
      description:
        "A select membership modern structure designed for an elite community.",
    },
    {
      number: "2,500 m²",
      label: "clubhouse",
      description:
        "A refined space designed for meetings, strategic network, and private events.",
    },
  ];

  const rightStats = [
    {
      number: "365",
      label: "days of access",
      description:
        "The club operates year-round — our passion is not seasonal.",
    },
    {
      number: "6",
      label: "guests per month",
      description:
        "Invite partners and clients into an environment of status.",
    },
    {
      number: "1",
      label: "clear direction",
      description:
        "A community of entrepreneurs and investors focused on long-term growth.",
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-[#06150D] text-white">
      {/* Background Image - Reverted to golf-hero-2.png */}
      <div className="absolute inset-0 z-0">
        <img
          src="/media/golf-hero-2.png"
          alt="Strategic Environment Course"
          className="w-full h-full object-cover object-center scale-100"
        />
        {/* Subtle Dark Vignette at top & bottom for smooth transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06150D] via-transparent to-[#06150D] opacity-75" />

        {/* Minimal Grid Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Giant Serif Title Matching Reference Image */}
        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-white text-center md:text-left tracking-tight mb-16 md:mb-20 drop-shadow-2xl">
          Strategic Environment
        </h2>

        {/* Main Content Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 items-center gap-12 lg:gap-16">
          {/* Left Column Stats */}
          <div className="space-y-10 md:space-y-12 text-center md:text-left z-20">
            {leftStats.map((stat, i) => (
              <div key={i} className="group relative">
                <div className="font-serif text-4xl sm:text-5xl font-extrabold text-white group-hover:text-[#D4AF37] transition-colors leading-none drop-shadow">
                  {stat.number}
                </div>
                <div className="text-sm font-light text-gray-200 tracking-wider lowercase mt-1 mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-gray-300 font-light max-w-xs mx-auto md:mx-0 leading-relaxed drop-shadow">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column - Transparent Focus Ring framing the Ball in golf-hero-2.png */}
          <div className="relative flex items-center justify-center py-8 z-20 pointer-events-none">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-[#D4AF37]/60 flex items-center justify-center p-3 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              {/* Inner Transparent Focus Ring */}
              <div className="w-full h-full rounded-full border border-white/40 flex items-center justify-center bg-white/5 backdrop-blur-[1px]" />

              {/* Tactical Pointer Lines */}
              <div className="hidden lg:block absolute top-1/2 -left-16 w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <div className="hidden lg:block absolute top-1/2 -right-16 w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
              <div className="hidden lg:block absolute -top-10 left-1/2 w-px h-10 bg-gradient-to-b from-transparent to-[#D4AF37]" />
              <div className="hidden lg:block absolute -bottom-10 left-1/2 w-px h-10 bg-gradient-to-t from-transparent to-[#D4AF37]" />
            </div>
          </div>

          {/* Right Column Stats */}
          <div className="space-y-10 md:space-y-12 text-center md:text-right z-20">
            {rightStats.map((stat, i) => (
              <div key={i} className="group relative">
                <div className="font-serif text-4xl sm:text-5xl font-extrabold text-white group-hover:text-[#D4AF37] transition-colors leading-none drop-shadow">
                  {stat.number}
                </div>
                <div className="text-sm font-light text-gray-200 tracking-wider lowercase mt-1 mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-gray-300 font-light max-w-xs mx-auto md:ml-auto md:mr-0 leading-relaxed drop-shadow">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
