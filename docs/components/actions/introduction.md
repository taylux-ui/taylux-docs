# Composants d'Actions

Les composants d'actions sont essentiels pour créer des interfaces interactives et réactives. Cette catégorie regroupe tous les éléments UI qui permettent aux utilisateurs d'interagir directement avec votre application.

## Vue d'ensemble

### Buttons (`TailuxButton`)

Les boutons sont les éléments d'interface les plus fondamentaux pour déclencher des actions. Notre composant Button propose :

-   Multiple variantes (primary, secondary, ghost, etc.)
-   États (disabled, loading, etc.)
-   Support des icônes
-   Personnalisation complète des styles

### Inputs (`TailuxInput`)

Les champs de saisie permettent aux utilisateurs d'entrer des données. Caractéristiques principales :

-   Validation intégrée
-   Messages d'erreur personnalisables
-   Support des masques de saisie
-   États de formulaire (dirty, touched, etc.)

## Bonnes Pratiques

1. **Accessibilité**

    - Utilisez des labels explicites
    - Respectez les contrastes de couleur
    - Assurez une navigation au clavier fluide

2. **Feedback Utilisateur**

    - Indiquez clairement les états loading
    - Fournissez un retour visuel aux interactions
    - Utilisez des messages d'erreur explicites

3. **Performance**
    - Évitez les actions coûteuses sur les événements fréquents
    - Utilisez le debouncing quand nécessaire

## Exemples d'Utilisation

```vue
<!-- Exemple de formulaire simple -->
<template>
    <form @submit.prevent="onSubmit">
        <TailuxInput v-model="email" label="Email" type="email" required />
        <TailuxButton type="submit" variant="primary" :loading="isSubmitting"> S'inscrire </TailuxButton>
    </form>
</template>
```

## Personnalisation

Tous nos composants d'actions supportent :

-   Thèmes personnalisés
-   Surcharge des styles CSS
-   Props de configuration extensibles

Consultez chaque composant pour plus de détails sur ses options spécifiques de personnalisation.
