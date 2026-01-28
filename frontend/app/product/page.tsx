import ProductOverview from "@/components/product/ProductOverview";
import FeatureGrid from "@/components/product/FeatureGrid";
import AISection from "@/components/product/AISection";
import UserFlow from "@/components/product/UserFlow";

export default function ProductPage() {
  return (
    <>
      <ProductOverview />
      <FeatureGrid />
      <AISection />
      <UserFlow />
    </>
  );
}
