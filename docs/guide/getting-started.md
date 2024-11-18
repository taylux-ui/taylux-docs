# Introduction

Taylux est une bibliothèque de composants moderne conçue pour Vue.js et React, offrant une collection riche de composants d'interface utilisateur hautement personnalisables et accessibles. Notre objectif est de fournir aux développeurs les outils nécessaires pour créer rapidement des interfaces utilisateur professionnelles sans compromis sur la qualité ou la flexibilité.

## Pourquoi Taylux ?

-   **Double Compatibilité Framework** : Utilisez les mêmes composants dans vos projets Vue.js et React
-   **Performance Optimisée** : Conçu pour être léger et rapide dès le départ
-   **Accessibilité Native** : Tous les composants sont conformes WCAG 2.1
-   **Personnalisation Avancée** : Système de thème flexible et API de style puissante

## Installation

```bash
# Pour Vue.js
npm install @taylux/vue

# Pour React
npm install @taylux/react
```

## Utilisation Rapide

### Vue.js

```vue
<script setup>
import { TxButton } from "@taylux/vue";
</script>

<template>
    <TxButton variant="primary"> Mon Premier Bouton </TxButton>
</template>
```

### React

```jsx
import { TxButton } from "@taylux/react";

function App() {
    return <TxButton variant="primary">Mon Premier Bouton</TxButton>;
}
```

## Structure des Composants

Les composants Taylux sont organisés en catégories pour une meilleure navigation :

### Actions

Les composants qui déclenchent des actions ou des événements dans votre interface.

-   **Button** : Boutons personnalisables pour diverses actions
-   **Input** : Champs de saisie avec validation et états

### Prochainement

-   Composants de mise en page
-   Composants de navigation
-   Composants de feedback
-   Composants de données

## Philosophie de Design

Taylux suit plusieurs principes clés :

1. **Simplicité** : API intuitive et documentation claire
2. **Flexibilité** : Hautement personnalisable sans sacrifier la facilité d'utilisation
3. **Performance** : Optimisé pour la production avec un impact minimal sur le bundle
4. **Accessibilité** : Conçu pour être utilisable par tous

## Prochaines Étapes

-   Consultez notre [Guide de Démarrage](/guide/getting-started) pour commencer
-   Explorez nos [Composants](/components/button/button) disponibles
-   Rejoignez notre [Communauté](https://github.com/votre-repo/taylux/discussions)

## Contribution

Nous accueillons favorablement les contributions de la communauté ! Consultez notre [Guide de Contribution](CONTRIBUTING.md) pour commencer.

## Support

-   📖 [Documentation Complète](/guide/getting-started)
-   💬 [Discussions GitHub](https://github.com/votre-repo/taylux/discussions)
-   🐛 [Signalement de Bugs](https://github.com/votre-repo/taylux/issues)
