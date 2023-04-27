<template>
  <q-page class="q-pa-sm">
    <q-table :data="rows" :columns="columns" row-key="name" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PlantelPage'
})
</script>
