<template>
  <div v-if="isReady">
    <slot> </slot>
  </div>
  <div v-else>
    <h1>Loading models...</h1>
  </div>
</template>

<script>

 export default {
  name: 'ModelLoader',
  props: {
    isReady: Boolean,
  },
}
</script>