"use client";

import { Footer } from "@studium-nexus/components-commons";
import { Header } from "@studium-nexus/converter-app/src/components";
import { AppContainer } from "@studium-nexus/converter-app/src/containers";
import FeedbackStyled from "./Feedback.style";
import { useRouter } from "next/navigation";

function Feedback() {
  const router = useRouter();
  router.back();
  return (
    <AppContainer>
      <Header menu />
      <FeedbackStyled>
        <h1>Nos deixe saber sua opinião preenchendo o forms abaixo!</h1>
        <p>Em breve...</p>
      </FeedbackStyled>
      <Footer />
    </AppContainer>
  );
}

export default Feedback;
