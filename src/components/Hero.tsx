import { Button } from "@/components/ui/button";
import { ShoppingBag, Store, TrendingUp } from "lucide-react";

const Hero = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCategories = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo/Brand */}
          <div className="mb-8 flex justify-center items-center gap-3">
            <div className="p-3 bg-accent rounded-2xl shadow-glow">
              <ShoppingBag className="w-8 h-8 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground">
              MallOnLine
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-6 font-light">
            Ghana's Premier Virtual Shopping Mall
          </p>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Where businesses thrive 24/7. Connect your physical store to a digital marketplace 
            that never sleeps. Join hundreds of merchants reaching customers nationwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={scrollToRegistration}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant text-lg px-8 py-6 rounded-xl transition-all hover:scale-105"
            >
              <Store className="mr-2 w-5 h-5" />
              Register Your Store
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToCategories}
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all hover:scale-105"
            >
              Browse Categories
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all">
              <div className="flex items-center justify-center mb-2">
                <Store className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-1">500+</div>
              <div className="text-primary-foreground/70">Active Stores</div>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all">
              <div className="flex items-center justify-center mb-2">
                <ShoppingBag className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-1">50K+</div>
              <div className="text-primary-foreground/70">Products Listed</div>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-1">24/7</div>
              <div className="text-primary-foreground/70">Always Open</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
