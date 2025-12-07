import { Clock, Shield, TrendingUp, Headphones } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Your store never closes. Customers shop anytime, orders reach you instantly.",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Every transaction tracked with unique IDs. Bank-grade security for all payments.",
  },
  {
    icon: TrendingUp,
    title: "Business Analytics",
    description: "Track trends, analyze sales, and grow your business with powerful insights.",
  },
  {
    icon: Headphones,
    title: "AI Store Assistants",
    description: "Each store gets a dedicated virtual assistant to help customers 24/7.",
  },
];

const About = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
              Why Choose MallOnLine?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for Ghanaian businesses to thrive in the digital economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.title}
                  className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up border border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-accent rounded-xl w-14 h-14 flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-hero rounded-3xl p-12 text-center shadow-elegant">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Link Your Physical Store to Digital Success
            </h3>
            <p className="text-lg text-primary-foreground/80 mb-6 max-w-3xl mx-auto">
              Keep your physical location while reaching customers online. All orders come straight to you 
              for payment and delivery. We provide the platform, you provide the excellence.
            </p>
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent px-6 py-3 rounded-full border border-accent/30">
              <span className="text-sm font-semibold">10% transaction fee on sales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
