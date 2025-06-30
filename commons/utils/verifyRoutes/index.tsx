function verifyRoutes(routes: { [key: string]: Object }, slug: string) {
  const nameRoutes = Object.keys(routes);

  console.log(nameRoutes)
  return nameRoutes.includes(slug);
}

export default verifyRoutes;
