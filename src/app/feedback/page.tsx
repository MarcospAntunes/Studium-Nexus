"use client";

import dynamic from "next/dynamic";

const FeedbackPage = dynamic(
  () => import("@studium-nexus/feedback-app/src/app/page"),
  {
    ssr: false,
  },
);

export default function Page() {
  return <FeedbackPage />;
}
