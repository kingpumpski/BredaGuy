import { ShoppingBag, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-accent rounded-lg">
                <ShoppingBag className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold">MallOnLine</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Ghana's premier virtual shopping mall connecting businesses with customers nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#categories" className="hover:text-accent transition-colors">Browse Stores</a></li>
              <li><a href="#registration" className="hover:text-accent transition-colors">Register Store</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Merchant Login</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@mallonline.gh" className="hover:text-accent transition-colors">
                  info@mallonline.gh
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+233XXXXXXXXX" className="hover:text-accent transition-colors">
                  +233 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Accra, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} MallOnLine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
