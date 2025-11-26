import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Trophy, Medal } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      type: "Membership",
      title: "Proud Member of the International Federation of Inventors' Associations (IFIA)",
      icon: Award,
      flagEmoji: "🌐",
      countryCode: "global",
      color: "text-primary"
    },
    {
      type: "Gold Medal",
      title: "European Inventors Federation",
      country: "European Union",
      icon: Medal,
      flagEmoji: "🇪🇺",
      countryCode: "eu",
      medalEmoji: "🥇",
      color: "text-yellow-500"
    },
    {
      type: "Gold & Silver Medals",
      title: "Teknofest World Invention Championships",
      description: "The world's largest invention fair",
      icon: Trophy,
      flagEmoji: "🌍",
      countryCode: "world",
      medalEmoji: "🏆",
      color: "text-yellow-500"
    },
    {
      type: "Gold Medal",
      title: "Global Invention Competition",
      country: "Switzerland",
      icon: Medal,
      flagEmoji: "🇨🇭",
      countryCode: "ch",
      medalEmoji: "🥇",
      color: "text-yellow-500"
    },
    {
      type: "Gold & Silver Medals",
      title: "World Championships",
      country: "Turkey",
      icon: Trophy,
      flagEmoji: "🇹🇷",
      countryCode: "tr",
      medalEmoji: "🏆",
      color: "text-yellow-500"
    },
    {
      type: "Silver Medal",
      title: "World Championships",
      country: "United Arab Emirates",
      icon: Medal,
      flagEmoji: "🇦🇪",
      countryCode: "ae",
      medalEmoji: "🥈",
      color: "text-gray-400"
    },
    {
      type: "Special Award",
      title: "England Invention Competition",
      country: "England",
      icon: Award,
      flagEmoji: "🇬🇧",
      countryCode: "gb",
      medalEmoji: "🎖️",
      color: "text-primary"
    },
    {
      type: "Special Award",
      title: "World Invention Intellectual Property Associations (WIIPA)",
      icon: Award,
      flagEmoji: "🌐",
      countryCode: "global",
      medalEmoji: "🎖️",
      color: "text-primary"
    },
    {
      type: "Special Award",
      title: "European Union of Inventors Association",
      country: "European Union",
      icon: Award,
      flagEmoji: "🇪🇺",
      countryCode: "eu",
      medalEmoji: "🎖️",
      color: "text-primary"
    },
    {
      type: "Special Award",
      title: "France",
      country: "France",
      icon: Award,
      flagEmoji: "🇫🇷",
      countryCode: "fr",
      medalEmoji: "🎖️",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Awards & <span className="text-gradient">Achievements</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Global recognition for scientific excellence and innovation
            </p>
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
              <p className="text-sm text-muted-foreground">
                🏆 International Hall of Fame
              </p>
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            {awards.map((award, index) => (
              <div
                key={index}
                className="relative bg-card backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift group overflow-hidden"
              >
                {/* Flag Background */}
                <div className="absolute top-0 right-0 text-[140px] opacity-[0.08] group-hover:opacity-[0.15] transition-opacity pointer-events-none">
                  {award.flagEmoji}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {award.medalEmoji && (
                        <span className="text-5xl drop-shadow-lg">{award.medalEmoji}</span>
                      )}
                      {!award.medalEmoji && (
                        <award.icon className={`${award.color} group-hover:scale-110 transition-transform`} size={40} />
                      )}
                    </div>
                    <span className="text-4xl drop-shadow-md">{award.flagEmoji}</span>
                  </div>
                  <div className="inline-block bg-gradient-primary/20 rounded-full px-4 py-1.5 mb-3">
                    <span className="text-xs font-bold text-primary uppercase tracking-wide">{award.type}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 leading-tight">{award.title}</h3>
                  {award.description && (
                    <p className="text-sm text-muted-foreground mb-3 italic">{award.description}</p>
                  )}
                  {award.country && (
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                      <span className="text-2xl">{award.flagEmoji}</span>
                      <p className="text-sm font-medium text-muted-foreground">
                        {award.country}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Caption */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card border border-primary/20 rounded-2xl p-8 hover-lift">
              <p className="text-lg text-muted-foreground">
                The medals and awards we have earned are for our <span className="text-primary font-semibold">inventions and innovative products</span> — 
                representing our commitment to scientific excellence and global collaboration.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Awards;
