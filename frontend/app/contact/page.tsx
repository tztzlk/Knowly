import ContactForm from "@/components/contact/ContactForm";
import ContactEmailCapture from "@/components/contact/ContactEmailCapture";
import ContactPartnershipsCTA from "@/components/contact/ContactPartnershipsCTA";

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <ContactEmailCapture />
      <ContactPartnershipsCTA />
    </>
  );
}
