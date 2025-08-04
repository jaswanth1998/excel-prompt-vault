import ExcelPromptsHero from "@/components/ExcelPromptsHero";

const Index = () => {
  const handlePurchase = () => {
    // This is where you'll integrate your Stripe checkout
    // For now, we'll just log it
    console.log("Purchase button clicked - integrate with Stripe here");
    
    // Example: Redirect to Stripe or open Stripe checkout
    // window.open('YOUR_STRIPE_CHECKOUT_URL', '_blank');
  };

  return <ExcelPromptsHero onPurchase={handlePurchase} />;
};

export default Index;
