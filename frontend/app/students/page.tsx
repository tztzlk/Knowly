import StudentsBenefits from "@/components/students/StudentsBenefits";
import StudentsOutcomes from "@/components/students/StudentsOutcomes";
import StudentsPricing from "@/components/students/StudentsPricing";
import StudentsUpgradeCTA from "@/components/students/StudentsUpgradeCTA";

export default function StudentsPage() {
  return (
    <>
      <StudentsBenefits />
      <StudentsOutcomes />
      <StudentsPricing />
      <StudentsUpgradeCTA />
    </>
  );
}
