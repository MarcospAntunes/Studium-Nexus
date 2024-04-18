type routes = {
  [key: string]: Object
}

const converterRoutes: routes = {
  tempo: 'tempo',
  peso: 'peso',
  temperatura: 'temperatura',
  velocidade: 'velocidade',
  comprimento: 'comprimento',
  energia: 'energia',
  documento: 'documento',
  moeda: 'moeda',
  midia: 'midia',
}

const formulaRoutes = {
  bhaskara: 'bhaskara',
  'media-aritmetica': 'media-aritmetica',
  'juros-simples': 'juros-simples',
  'juros-compostos': 'juros-compostos'
}


export { converterRoutes, formulaRoutes }
