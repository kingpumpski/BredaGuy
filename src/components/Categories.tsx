import { Store, Shirt, Utensils, Laptop, Home, Sparkles, Stethoscope, Palette, Wrench, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "Fashion & Apparel", icon: Shirt, color: "from-pink-500 to-rose-500", count: 120 },
  { name: "Food & Restaurants", icon: Utensils, color: "from-orange-500 to-red-500", count: 85 },
  { name: "Electronics", icon: Laptop, color: "from-blue-500 to-cyan-500", count: 95 },
  { name: "Home & Furniture", icon: Home, color: "from-green-500 to-emerald-500", count: 70 },
  { name: "Beauty & Cosmetics", icon: Sparkles, color: "from-purple-500 to-pink-500", count: 60 },
  { name: "Health & Pharmacy", icon: Stethoscope, color: "from-teal-500 to-green-500", count: 45 },
  { name: "Arts & Crafts", icon: Palette, color: "from-amber-500 to-orange-500", count: 40 },
  { name: "Services & Repairs", icon: Wrench, color: "from-slate-500 to-zinc-500", count: 55 },
  { name: "Books & Education", icon: BookOpen, color: "from-indigo-500 to-blue-500", count: 30 },
];

const Categories = () => {
  return (
    <section id="categories" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-2 rounded-full mb-4">
            <Store className="w-4 h-4" />
            <span className="text-sm font-semibold">Explore Categories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            Shop By Industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover stores across diverse industries, all under one virtual roof
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                className="group hover:shadow-elegant transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/50 bg-card overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.count} stores available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
