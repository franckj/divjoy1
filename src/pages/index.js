import React from "react";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import ClientsSection from "./../components/ClientsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import NewsletterSection from "./../components/NewsletterSection";
import CtaSection from "./../components/CtaSection";
import { useRouter } from "./../util/router.js";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        bg="primary"
        textColor="light"
        size="lg"
        bgImage="https://www.assur-travel.fr/wp-content/uploads/2020/05/Blog_Expatriation_formulaire-Cerfa-1568x1047.jpg.webp"
        bgImageOpacity={0.5}
        title="✈️ Allez viens, je t’emmène..."
        subtitle="Abonnez-vous et recevez les prochains épisodes en avant-première 🎫"
        buttonText="Abonnez-vous gratuitement"
        buttonColor="light"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <ClientsSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="You're in good company"
        subtitle=""
      />
      <TestimonialsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
      <NewsletterSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
      <CtaSection
        bg="primary"
        textColor="light"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonColor="light"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default IndexPage;
