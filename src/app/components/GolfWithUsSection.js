"use client";

import { useState } from "react";
import { Calendar, MapPin, Users, CheckCircle, Ticket, Play } from "lucide-react";
import SplitText from "./SplitText";

export default function GolfWithUsSection() {
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email) {
      setRegistered(true);
    }
  };

  return (
    <section id="events" className="py-16 sm:py-24 bg-[#081B12] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SplitText text="COMMUNITY & EVENTS" tag="span" className="text-[#E8A246] text-xs font-bold uppercase tracking-[0.3em]" delay={30} duration={0.8} />
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-white mt-3 mb-6 uppercase leading-tight">
            <SplitText text="GOLF WITH US" tag="span" delay={30} duration={0.8} />
            <br />
            <SplitText text="COMMUNITY OUTINGS" tag="span" className="text-[#E8A246] font-serif italic" delay={30} duration={0.8} />
          </h2>
          <SplitText text="Connecting golfers who otherwise may never have met. Come hit shots, laugh at bad ones, support charity causes, and enjoy a cold beer." tag="p" className="text-gray-300 text-sm md:text-base leading-relaxed font-light" splitType="words" delay={15} duration={0.6} />
        </div>

        {/* Video Feature Community Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-[#E8A246]/40 shadow-2xl mb-16 min-h-[460px] sm:min-h-[420px] flex items-center">
          <div className="absolute inset-0 z-0">
            <video
              src="/media/desert-character-walk.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-[center_30%] filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#081B12] via-[#081B12]/85 to-[#081B12]/40" />
          </div>

          <div className="relative z-10 p-6 sm:p-12 md:p-14 max-w-2xl w-full">
            <div className="inline-flex items-center gap-2 bg-[#E8A246] text-[#081B12] text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full mb-4 sm:mb-6 shadow">
              <Users className="w-3.5 h-3.5" />
              JOIN THE THREE OFF THE TEE FAMILY
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
              EVERYDAY GOLFERS. <br className="hidden sm:inline" />
              REAL STORIES. GOOD TIMES.
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              Whether you shoot 72 or 105, drink a beer on the back nine, or play with your son on Sunday — you belong here.
            </p>

            <a
              href="#register"
              className="inline-block bg-[#E8A246] hover:bg-[#F2B35D] text-[#081B12] font-black text-[11px] sm:text-xs tracking-wider uppercase px-5 py-2.5 sm:px-7 sm:py-3 rounded-full transition-all shadow-md shadow-[#E8A246]/30"
            >
              GET INVITED TO COMMUNITY ROUNDS
            </a>
          </div>
        </div>

        {/* Featured Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Event 1 */}
          <div className="bg-[#0B2519]/80 border border-white/10 p-8 rounded-3xl backdrop-blur-md relative flex flex-col justify-between hover:border-[#E8A246]/60 transition-all">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E8A246]/20 text-[#E8A246] border border-[#E8A246]/40 text-xs font-bold px-3 py-1 rounded-full uppercase mb-4">
                <Ticket className="w-3.5 h-3.5" />
                CHARITY TOURNAMENT
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                SoCal Firefighters & First Responders Cup
              </h3>
              <p className="text-xs text-gray-300 font-light mb-6">
                4-Person scramble benefiting local firefighter support funds and community second-chance causes.
              </p>

              <div className="space-y-2 text-xs text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#E8A246]" />
                  <span>Saturday, October 14 • 8:00 AM Shotgun</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E8A246]" />
                  <span>Pacific Palms Golf Resort, Southern California</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#E8A246]" />
                  <span>Open to all handicaps • Includes lunch, shirt & hats</span>
                </div>
              </div>
            </div>

            <a
              href="#register"
              className="w-full bg-[#E8A246] hover:bg-[#F2B35D] text-[#081B12] font-black text-xs uppercase tracking-wider py-3 rounded-full text-center transition-all shadow"
            >
              REGISTER YOUR FOURSOME
            </a>
          </div>

          {/* Event 2 */}
          <div className="bg-[#0B2519]/80 border border-white/10 p-8 rounded-3xl backdrop-blur-md relative flex flex-col justify-between hover:border-[#E8A246]/60 transition-all">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E8A246]/20 text-[#E8A246] border border-[#E8A246]/40 text-xs font-bold px-3 py-1 rounded-full uppercase mb-4">
                <Ticket className="w-3.5 h-3.5" />
                COMMUNITY OUTING
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Three Off the Tee Weekend Reload Scramble
              </h3>
              <p className="text-xs text-gray-300 font-light mb-6">
                A casual 18-hole social round for golfers who just want to hit shots, have fun, and meet good people.
              </p>

              <div className="space-y-2 text-xs text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#E8A246]" />
                  <span>Sunday, November 5 • 11:30 AM Tee Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E8A246]" />
                  <span>Oak Quarry Golf Club, Riverside CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#E8A246]" />
                  <span>Single players & groups welcome</span>
                </div>
              </div>
            </div>

            <a
              href="#register"
              className="w-full bg-[#14422D] hover:bg-[#E8A246] text-white hover:text-black font-extrabold text-xs uppercase tracking-wider py-3 rounded-full text-center transition-all border border-[#E8A246]/30"
            >
              JOIN INDIVIDUAL PLAYER LIST
            </a>
          </div>
        </div>

        {/* Registration Form */}
        <div id="register" className="bg-[#0B2519] border border-[#E8A246]/30 rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto shadow-2xl">
          <h3 className="font-serif text-2xl font-bold text-[#E8A246] text-center mb-2">
            STAY NOTIFIED FOR UPCOMING OUTINGS
          </h3>
          <p className="text-xs text-gray-300 text-center mb-6">
            Sign up to get notified first when registration opens for community golf events & charity tournaments.
          </p>

          {registered ? (
            <div className="text-center py-6 space-y-2 text-[#E8A246]">
              <CheckCircle className="w-10 h-10 mx-auto animate-bounce" />
              <h4 className="font-serif text-lg font-bold text-white">YOU'RE ON THE LIST!</h4>
              <p className="text-xs text-gray-300">
                We'll email you with upcoming dates, course locations, and early player spots.
              </p>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4 text-xs">
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#081B12] border border-white/20 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#E8A246]"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#081B12] border border-white/20 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#E8A246]"
              />
              <button
                type="submit"
                className="w-full bg-[#E8A246] hover:bg-[#F2B35D] text-[#081B12] font-black py-4 rounded-xl uppercase tracking-widest text-xs transition-all shadow-lg"
              >
                JOIN THE COMMUNITY LIST
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
