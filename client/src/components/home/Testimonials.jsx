import React from "react";
import { BookUserIcon } from "lucide-react"

const Testimonials = () => {
  const cardsData = [
    {
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
      name: 'Sarah Mitchell',
      handle: '@sarahmitchell',
      date: 'April 20, 2025',
      testimonial: 'The AI Resume Builder helped me land 3 job interviews within a week! The suggestions were incredibly helpful and tailored to tech roles.'
    },
    {
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
      name: 'Alex Johnson',
      handle: '@alexjwrites',
      date: 'May 10, 2025',
      testimonial: 'Finally, a resume tool that understands what recruiters actually want. My ATS score improved dramatically and I got callbacks immediately.'
    },
    {
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
      name: 'Jordan Lee',
      handle: '@jordantalks',
      date: 'June 5, 2025',
      testimonial: 'The templates are beautiful and professional. Took me only 10 minutes to build a stunning resume. This is a game changer for job seekers!'
    },
    {
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
      name: 'Emma Rodriguez',
      handle: '@emmatech',
      date: 'May 10, 2025',
      testimonial: 'The real-time AI suggestions caught mistakes I would have missed. I felt so confident submitting my resume after using this tool.'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60',
      name: 'Marcus Thompson',
      handle: '@marcustech',
      date: 'July 15, 2025',
      testimonial: 'Switched careers and this tool made it so easy to highlight transferable skills. Absolutely transformed my job search!'
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60',
      name: 'Lisa Chen',
      handle: '@lisacodes',
      date: 'August 3, 2025',
      testimonial: 'Best investment for my career. The AI recommendations helped me optimize every section. Got my dream job offer!'
    },
  ];

  const CreateCard = ({ card }) => (
    <div className="p-5 rounded-2xl mx-4 bg-slate-700/50 border border-slate-600 hover:border-slate-500 hover:bg-slate-600/50 transition-all duration-300 w-80 shrink-0 flex flex-col">
      <div className="flex gap-3 mb-4">
        <img className="size-12 rounded-full object-cover" src={card.image} alt="User Image" />
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <p className="font-semibold text-white">{card.name}</p>
            <svg className="mt-0.5" width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#6366f1" />
            </svg>
          </div>
          <span className="text-xs text-slate-400">{card.handle}</span>
        </div>
      </div>
      
      <div className="flex gap-1 mb-3">
        {Array(5).fill(0).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        ))}
      </div>

      <p className="text-sm text-slate-300 flex-grow leading-relaxed">{card.testimonial}</p>
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 30s linear infinite;
        }

        .marquee-inner:hover {
          animation-play-state: paused;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <div id="testimonials" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Top Section - Badge, Title & Description */}
        <div className="w-full max-w-5xl mx-auto mb-16 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-blue-300 bg-indigo-500/10 border border-indigo-400/30 rounded-full px-4 py-2 w-fit mx-auto mb-6">
            <BookUserIcon className="size-4.5 text-indigo-400" />
            <span className="font-medium">Success Stories</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Loved by Job Seekers
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Worldwide</span>
          </h2>
          <p className="text-sm md:text-md text-slate-300 max-w-3xl mx-auto">
            Thousands of professionals have landed their dream jobs using our AI-powered resume builder. See what they have to say about their experience.
          </p>
        </div>

        {/* First Marquee Row */}
        <div className="marquee-row w-full overflow-hidden relative mb-8">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-slate-900 to-transparent"></div>
          <div className="marquee-inner flex transform-gpu min-w-[200%] py-4">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-slate-900 to-transparent"></div>
        </div>

        {/* Second Marquee Row */}
        <div className="marquee-row w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-slate-900 to-transparent"></div>
          <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] py-4">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-slate-900 to-transparent"></div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;