# Button

## Variants

```vue
<template>
    <TayluxButton variant="primary">Primary Button</TayluxButton>
    <TayluxButton variant="secondary">Secondary Button</TayluxButton>
    <TayluxButton variant="outline">Outline Button</TayluxButton>
    <TayluxButton variant="ghost">Ghost Button</TayluxButton>
    <TayluxButton variant="link">Link Button</TayluxButton>
    <TayluxButton variant="destructive">Destructive Button</TayluxButton>
</template>
```

## Custom Text

```vue
<template>
    <TayluxButton>Default Text</TayluxButton>
    <TayluxButton>
        With Icon
        <IconPlus class="ml-2 h-4 w-4" />
    </TayluxButton>
    <TayluxButton>
        <IconTrash class="mr-2 h-4 w-4" />
        Delete Item
    </TayluxButton>
</template>
```

## Sizes

```vue
<template>
    <TayluxButton size="sm">Small</TayluxButton>
    <TayluxButton size="default">Default</TayluxButton>
    <TayluxButton size="lg">Large</TayluxButton>
    <TayluxButton size="xl">Extra Large</TayluxButton>
</template>
```

## Events

```vue
<template>
    <TayluxButton @click="handleClick">Click me</TayluxButton>
    <TayluxButton @mouseenter="handleHover">Hover me</TayluxButton>
    <TayluxButton @focus="handleFocus">Focus me</TayluxButton>
</template>

<script setup>
const handleClick = () => {
    console.log("Button clicked!");
};

const handleHover = () => {
    console.log("Button hovered!");
};

const handleFocus = () => {
    console.log("Button focused!");
};
</script>
```
