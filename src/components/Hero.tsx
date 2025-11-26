import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-background.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI Innovation" 
          className="w-full h-full object-cover opacity-90 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/50 to-background/60" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card border border-primary/20 rounded-full mb-8 animate-fade-in">
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm text-muted-foreground">
            Operating under the supervision of the Government of Canada
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          We are shaping the future of
          <br />
          <span className="text-gradient">Artificial Intelligence</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in">
          Through global collaboration and scientific innovation
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12 animate-fade-in">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift">
            <div className="text-4xl font-bold text-gradient mb-2">2</div>
            <p className="text-muted-foreground">Subsidiary Companies</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift">
            <div className="text-4xl font-bold text-gradient mb-2">3</div>
            <p className="text-muted-foreground">AI-Based Startups</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift">
            <div className="text-4xl font-bold text-gradient mb-2">50+</div>
            <p className="text-muted-foreground">Talented Researchers</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Link to="/about">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8">
              Discover Our Mission
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          <Link to="/collaborate">
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:border-primary">
              Join Our Network
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
