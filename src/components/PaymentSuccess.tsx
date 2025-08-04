import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Download, Mail, FileSpreadsheet, Gift } from "lucide-react";

const PaymentSuccess = () => {
  const handleDownload = () => {
    // This is where you'll implement the actual download logic
    console.log("Download initiated");
  };

  const handleSupport = () => {
    window.location.href = "mailto:support@excelprompts.com";
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-excel-badge-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-excel-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-excel-badge-orange/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="w-32 h-32 bg-excel-badge-green/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <CheckCircle className="w-16 h-16 text-excel-badge-green animate-bounce" />
              </div>
              <div className="absolute inset-0 w-32 h-32 bg-excel-badge-green/10 rounded-full animate-ping mx-auto"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-excel-badge-green">Payment</span>{" "}
              <span className="text-excel-text-light">Successful!</span>
            </h1>
            
            <p className="text-xl text-excel-text-secondary mb-8">
              🎉 Congratulations! Your Excel Prompts collection is ready for download.
            </p>
          </div>

          {/* Main Success Card */}
          <Card className="bg-background/50 border-excel-badge-green/30 p-12 mb-8 shadow-2xl">
            <div className="text-center mb-10">
              <FileSpreadsheet className="w-16 h-16 text-excel-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-excel-text-light mb-4">
                Your Excel Prompts Collection is Ready!
              </h2>
              <p className="text-excel-text-secondary text-lg mb-8">
                You now have access to <span className="text-excel-accent font-semibold">3000+ AI-powered Excel prompts</span> that will transform your productivity.
              </p>
              
              <Button 
                onClick={handleDownload}
                className="bg-gradient-to-r from-excel-accent to-excel-badge-green hover:from-excel-accent/90 hover:to-excel-badge-green/90 text-white text-xl font-bold px-12 py-6 rounded-full shadow-2xl hover:shadow-excel-accent/25 transition-all duration-300 transform hover:scale-105 mb-6"
              >
                <Download className="w-6 h-6 mr-3" />
                Download Your Excel Prompts
              </Button>
              
              <p className="text-excel-text-secondary text-sm">
                Download link will also be sent to your email
              </p>
            </div>

            {/* What's Next Section */}
            <div className="border-t border-excel-accent/20 pt-10">
              <h3 className="text-2xl font-bold text-excel-text-light mb-8 text-center">
                What's Next?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-excel-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-excel-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-excel-text-light mb-3">1. Download</h4>
                  <p className="text-excel-text-secondary">
                    Download your Excel file containing all 3000+ prompts organized by category.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-excel-badge-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileSpreadsheet className="w-8 h-8 text-excel-badge-green" />
                  </div>
                  <h4 className="text-xl font-semibold text-excel-text-light mb-3">2. Explore</h4>
                  <p className="text-excel-text-secondary">
                    Browse through different categories and find prompts that match your needs.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-excel-badge-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-excel-badge-orange" />
                  </div>
                  <h4 className="text-xl font-semibold text-excel-text-light mb-3">3. Create</h4>
                  <p className="text-excel-text-secondary">
                    Start using the prompts to automate tasks and boost your Excel productivity.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Support Section */}
          <Card className="bg-background/30 border-excel-accent/20 p-8 text-center">
            <h3 className="text-2xl font-bold text-excel-text-light mb-4">
              Need Help Getting Started?
            </h3>
            <p className="text-excel-text-secondary mb-6">
              Our support team is here to help you make the most of your Excel Prompts collection.
            </p>
            <Button 
              onClick={handleSupport}
              variant="outline"
              className="border-excel-accent text-excel-accent hover:bg-excel-accent hover:text-white"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </Card>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Button 
              onClick={() => window.location.href = "/"}
              variant="ghost"
              className="text-excel-text-secondary hover:text-excel-text-light"
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;