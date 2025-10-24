import { useState } from 'react';

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Brian Steven G. Pajarillo",
      nickname: "Jhinwoo",
      position: "Thesis Adviser",
      mantra: "Innovation distinguishes between a leader and a follower.",
      image: "/jhinwoo.png",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Jeremiah P. Pantaras",
      nickname: "poypoy",
      position: "Lead Web Developer/Project Manager",
      mantra: "Code is poetry written in logic.",
      image: "/poypoy.png",
      gradient: "from-sky-300 to-cyan-500"
    
    },
    {
      id: 3,
      name: "John Eric G. Bayer",
      nickname: "bonbon",
      position: "UI/UX Designer/System Analyst",
      mantra: "Design is not just what it looks like, but how it works.",
      image: "/bayer.png",
      gradient: "from-green-400 to-lime-500"
    },
    {
      id: 4,
      name: "Joseph Charles A. Roque",
      nickname: "Charles",
      position: "Lead Game Developer",
      mantra: "Strategy without tactics is the slowest route to victory.",
      image: "/roque.png",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 5,
      name: "Wenard Roy F. Barrera",
      nickname: "Roy",
      position: "Front End Developer/Assistant Programmer",
      mantra: "Excellence is not a destination; it is a continuous journey.",
      image: "/wenard.png",
      gradient: "from-fuchsia-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 text-white">
            Meet the Team
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Driven by passion, united by vision. We are the architects of innovation.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative"
              style={{
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`
              }}
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 transition-all duration-500 hover:scale-105 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl transition-opacity duration-500 ${hoveredCard === member.id ? 'opacity-100' : 'opacity-0'}`}></div>
                
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="relative mb-6 mx-auto w-32 h-32 -mt-10 ">
                    {/* Spinning rounded background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full animate-spin-slow border-4 border-white`}></div>
                    {/* Floating particles */}
                    <div className="absolute inset-0 pointer-events-none">
                      <span className="absolute w-3 h-3 bg-white/40 rounded-full left-6 top-8 animate-particle1"></span>
                      <span className="absolute w-2 h-2 bg-white/30 rounded-full left-16 top-4 animate-particle2"></span>
                      <span className="absolute w-1.5 h-1.5 bg-white/20 rounded-full left-20 top-16 animate-particle3"></span>
                      <span className="absolute w-2.5 h-2.5 bg-white/30 rounded-full left-10 top-20 animate-particle4"></span>
                    </div>
                    {/* PNG image overlapping the background */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute left-1/2 top-1/2 w-50 h-50 -translate-x-1/2 -translate-y-1/2 object-cover  transition-transform duration-500 group-hover:scale-110"
                      style={{ zIndex: 20 }}
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {member.name}
                  </h3>

                  {/* Nickname */}
                  <p className="text-sm text-purple-400 text-center mb-3 font-semibold italic">
                    "{member.nickname}"
                  </p>

                  {/* Position */}
                  <p className="text-sm text-gray-400 text-center mb-4 font-medium">
                    {member.position}
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4"></div>

                  {/* Mantra */}
                  <p className="text-xs text-gray-400 text-center italic leading-relaxed">
                    {member.mantra}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .delay-1000 {
          animation-delay: 1s;
        }


        @keyframes particle1 {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
        }
        @keyframes particle2 {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(8px) scale(1.1); opacity: 0.8; }
        }
        @keyframes particle3 {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(-6px) scale(1.3); opacity: 0.7; }
        }
        @keyframes particle4 {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(12px) scale(1.2); opacity: 0.9; }
        }
        .animate-particle1 { animation: particle1 2.5s ease-in-out infinite; }
        .animate-particle2 { animation: particle2 3s ease-in-out infinite; }
        .animate-particle3 { animation: particle3 2s ease-in-out infinite; }
        .animate-particle4 { animation: particle4 2.8s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export default App;