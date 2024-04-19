import Page from "@studium-nexus/converter-app/src/app/page";

function wrapper({ params }: { params: { slug: string } }) {
  return <Page params={params} />;
}

export default wrapper;
