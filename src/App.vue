<template>
  <FmRadio />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FmRadio from './components/FmRadio.vue';

export default defineComponent({
  name: 'App',
  components: {
    FmRadio,
  },
});
</script>
