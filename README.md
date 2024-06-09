## React

## Padronização de portas

- PORT::83 - Apps
- PORT::81 - Commum Apps
- PORT::85 - Utillities

## Técnicas utilizadas

- Para navegação entre rotas utiliza-se `navigateToUrl` do próprio single-spa.
- Para que todas os micro fronts utilizem a mesma versão do react, foi adicionado o React via CDN no root (import map)
