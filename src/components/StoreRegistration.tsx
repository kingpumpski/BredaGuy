import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle2 } from "lucide-react";

const StoreRegistration = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    registrationNumber: "",
    tinNumber: "",
    industry: "",
    email: "",
    phone: "",
    businessType: "",
    hasPhysicalStore: "",
    physicalAddress: "",
    ownerName: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Registration Submitted!",
        description: "We'll review your application and get back to you within 24-48 hours.",
      });
      setIsSubmitting(false);
      // Reset form
      setFormData({
        businessName: "",
        registrationNumber: "",
        tinNumber: "",
        industry: "",
        email: "",
        phone: "",
        businessType: "",
        hasPhysicalStore: "",
        physicalAddress: "",
        ownerName: "",
      });
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="registration" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-2 rounded-full mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Verified Stores Only</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
              Register Your Store
            </h2>
            <p className="text-lg text-muted-foreground">
              Join Ghana's fastest-growing virtual marketplace
            </p>
          </div>

          <Card className="shadow-elegant border-border/50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl">Business Information</CardTitle>
              <CardDescription>
                All fields are required to ensure authenticity and security
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => handleChange("businessName", e.target.value)}
                      placeholder="Your registered business name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber">Registration Number *</Label>
                    <Input
                      id="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={(e) => handleChange("registrationNumber", e.target.value)}
                      placeholder="Business registration number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tinNumber">TIN Number *</Label>
                    <Input
                      id="tinNumber"
                      value={formData.tinNumber}
                      onChange={(e) => handleChange("tinNumber", e.target.value)}
                      placeholder="Tax identification number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry *</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleChange("industry", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fashion">Fashion & Apparel</SelectItem>
                        <SelectItem value="food">Food & Restaurants</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="home">Home & Furniture</SelectItem>
                        <SelectItem value="beauty">Beauty & Cosmetics</SelectItem>
                        <SelectItem value="health">Health & Pharmacy</SelectItem>
                        <SelectItem value="arts">Arts & Crafts</SelectItem>
                        <SelectItem value="services">Services & Repairs</SelectItem>
                        <SelectItem value="education">Books & Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="contact@yourbusiness.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+233 XX XXX XXXX"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Select value={formData.businessType} onValueChange={(value) => handleChange("businessType", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sole">Sole Proprietorship</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="limited">Limited Company</SelectItem>
                        <SelectItem value="ngo">NGO</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hasPhysicalStore">Physical Store? *</Label>
                    <Select value={formData.hasPhysicalStore} onValueChange={(value) => handleChange("hasPhysicalStore", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes, I have a physical store</SelectItem>
                        <SelectItem value="no">No, online only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ownerName">Owner/Contact Person *</Label>
                  <Input
                    id="ownerName"
                    value={formData.ownerName}
                    onChange={(e) => handleChange("ownerName", e.target.value)}
                    placeholder="Full name of owner or authorized person"
                    required
                  />
                </div>

                {formData.hasPhysicalStore === "yes" && (
                  <div className="space-y-2">
                    <Label htmlFor="physicalAddress">Physical Store Address *</Label>
                    <Textarea
                      id="physicalAddress"
                      value={formData.physicalAddress}
                      onChange={(e) => handleChange("physicalAddress", e.target.value)}
                      placeholder="Complete address including city and region"
                      rows={3}
                      required
                    />
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-accent hover:opacity-90 text-secondary-foreground text-lg py-6 shadow-elegant"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By registering, you agree to our verification process and terms of service. 
                  We verify all businesses to maintain marketplace integrity.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoreRegistration;
