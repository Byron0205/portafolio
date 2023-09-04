---
tags:
  - vue
  - javascript

title: ref vs reactive

id: 2

autor: Byron Sosa Hidalgo
fecha: 30/8/2023
---

::blog-data{:autor='autor' :fecha='fecha'}

:::titulo-data
# Ref vs Reactive
:::

Ambos terminos fueron incluidos con la llegada de vue 3 y lo que se conoce como Composition API. a la hora de nosotros aplicar la reactividad existen dos formas de hacerlo y cada una se usa en un caso específico.

:::enlace-modify
## Ref
:::

Se usa cuando queremos trabajar con una variable reactiva en vue 3

```html title:usoRef.vue
<script setup>
import {ref} from 'vue'; 
const msg = ref("hola desde vue"); 
</script>
```

:::enlace-modify
## Reactive
:::

Se utiliza cuando necesitamos crear un objeto reactivo en vue 3, es decir, manejar varios valores en una misma referencia.

```html title:usoReactive.vue
<script setup>
import { reactive } from 'vue';

const formulario = reactive({
  nombre: 'Node',
  nivel: '',
  numero: 1
})
</script>
```

Ambas formas son validas y utiles dependiendo del caso, de igual forma al usarlas en el `{html}<template></template>` se invocan como usar una variable cualquiera la diferencia es que ahora es un objeto con propiedades especiales para trabajar mejor reactividad.
