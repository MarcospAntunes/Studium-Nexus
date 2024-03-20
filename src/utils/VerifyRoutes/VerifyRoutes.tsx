function verifyRoutes(routes: {[key: string]: Object}, slug: string) {
    const nameRoutes = Object.keys(routes);

    return nameRoutes.includes(slug);
}

export default verifyRoutes;