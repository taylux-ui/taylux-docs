# Guide de démarrage

## Installation

::: code-group

```bash [npm]
npm install taylux
```

```bash [yarn]
yarn add taylux
```

```bash [pnpm]
pnpm add taylux
```

```bash [bun]
bun add taylux
```

:::

## Configuration

Importez Taylux dans votre application :

::: code-group

```js [Vue]
// main.ts
import { createApp } from "vue";
import Taylux from "taylux";
import "taylux/dist/style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(Taylux);
app.mount("#app");
```

```js [React]
// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { TayluxProvider } from "taylux";
import "taylux/dist/style.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render();
```

:::

## Usage basique

Une fois installé, vous pouvez commencer à utiliser les composants Taylux :

::: code-group

```vue [Vue]
<script setup></script>

<template>
    <TayluxButton> Valider </TayluxButton>
</template>
```

```tsx [React]
import { TayluxButton } from "@taylux/react";

export default function App() {
    return <TayluxButton>Valider</TayluxButton>;
}
```

:::

## Prochaines étapes

-   Explorez les [composants disponibles](/components/)
-   Apprenez à [personnaliser les thèmes](/guide/theming)
-   Consultez les [bonnes pratiques](/guide/best-practices)
-   Rejoignez notre [communauté](https://github.com/votre-repo/taylux/discussions)

## Besoin d'aide ?

-   Consultez notre [FAQ](/guide/faq)
-   Ouvrez une [issue sur GitHub](https://github.com/votre-repo/taylux/issues)
-   Rejoignez notre [Discord](https://discord.gg/votre-serveur)
