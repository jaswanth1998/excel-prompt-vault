import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, Download, Star, Zap, FileSpreadsheet, Brain } from "lucide-react";

interface ExcelPromptsHeroProps {
  onPurchase: () => void;
}

const ExcelPromptsHero = ({ onPurchase }: ExcelPromptsHeroProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-excel-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-excel-badge-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-excel-badge-orange/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileSpreadsheet className="w-8 h-8 text-excel-accent" />
              <span className="text-2xl font-bold text-excel-text-light">ExcelPrompts</span>
            </div>
            <Badge className="bg-excel-badge-green/20 text-excel-badge-green border-excel-badge-green/30">
              🔥 Hot Seller
            </Badge>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-excel-accent/20 text-excel-accent border-excel-accent/30 text-lg px-6 py-2">
                ⚡ 3000+ AI Prompts Collection
              </Badge>
              
              <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
                <span className="text-excel-text-light">Master</span>{" "}
                <span className="text-excel-accent">Excel</span>{" "}
                <span className="text-excel-text-light">with</span><br />
                <span className="bg-gradient-to-r from-excel-accent to-excel-badge-green bg-clip-text text-transparent">
                  AI-Powered Prompts
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-excel-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
                Unlock the full potential of Excel with our comprehensive collection of 
                <span className="text-excel-accent font-semibold"> 3000+ carefully crafted AI prompts</span> 
                designed to automate tasks, create formulas, and boost your productivity by 10x.
              </p>

              {/* CTA Button */}
              <div className="mb-16">
                <Button 
                  onClick={onPurchase}
                  className="bg-gradient-to-r from-excel-accent to-excel-badge-green hover:from-excel-accent/90 hover:to-excel-badge-green/90 text-white text-xl font-bold px-12 py-6 rounded-full shadow-2xl hover:shadow-excel-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-6 h-6 mr-3" />
                  Get Excel Prompts Now - $29
                </Button>
                <p className="text-excel-text-secondary mt-4">
                  Instant download • Lifetime access • Money-back guarantee
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-background/50 border-excel-accent/20 p-8 hover:border-excel-accent/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-excel-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-8 h-8 text-excel-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-excel-text-light mb-4">Smart Automation</h3>
                  <p className="text-excel-text-secondary">
                    Automate complex Excel tasks with AI-powered prompts that understand your needs.
                  </p>
                </div>
              </Card>

              <Card className="bg-background/50 border-excel-badge-green/20 p-8 hover:border-excel-badge-green/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-excel-badge-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-excel-badge-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-excel-text-light mb-4">10x Productivity</h3>
                  <p className="text-excel-text-secondary">
                    Complete hours of work in minutes with our proven prompt strategies.
                  </p>
                </div>
              </Card>

              <Card className="bg-background/50 border-excel-badge-orange/20 p-8 hover:border-excel-badge-orange/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-excel-badge-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-excel-badge-orange" />
                  </div>
                  <h3 className="text-2xl font-bold text-excel-text-light mb-4">Expert Crafted</h3>
                  <p className="text-excel-text-secondary">
                    Created by Excel experts and refined through real-world usage.
                  </p>
                </div>
              </Card>
            </div>

            {/* What's Included */}
            <Card className="bg-background/30 border-excel-accent/20 p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-excel-text-light mb-12">
                What's Inside Your <span className="text-excel-accent">Excel Prompts</span> Collection
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-excel-badge-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-semibold text-excel-text-light mb-2">Formula Generation</h4>
                      <p className="text-excel-text-secondary">500+ prompts for creating complex formulas automatically</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-excel-badge-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-semibold text-excel-text-light mb-2">Data Analysis</h4>
                      <p className="text-excel-text-secondary">800+ prompts for advanced data analysis and insights</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-excel-badge-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-semibold text-excel-text-light mb-2">Chart & Visualization</h4>
                      <p className="text-excel-text-secondary">400+ prompts for creating stunning charts and visuals</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-excel-badge-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-semibold text-excel-text-light mb-2">Automation Scripts</h4>
                      <p className="text-excel-text-secondary">600+ prompts for VBA and macro automation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-excel-badge-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-semibold text-excel-text-light mb-2">Dashboard Creation</h4>
                      <p className="text-excel-text-secondary">400+ prompts for building professional dashboards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-excel-badge-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-semibold text-excel-text-light mb-2">Business Templates</h4>
                      <p className="text-excel-text-secondary">300+ prompts for business-ready templates</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Final CTA */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-excel-text-light mb-6">
                Ready to Transform Your Excel Experience?
              </h3>
              <Button 
                onClick={onPurchase}
                className="bg-gradient-to-r from-excel-accent to-excel-badge-green hover:from-excel-accent/90 hover:to-excel-badge-green/90 text-white text-xl font-bold px-12 py-6 rounded-full shadow-2xl hover:shadow-excel-accent/25 transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-6 h-6 mr-3" />
                Download Now - $29
              </Button>
              <p className="text-excel-text-secondary mt-4 text-sm">
                30-day money-back guarantee • Secure payment via Stripe
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExcelPromptsHero;