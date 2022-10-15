<script setup lang="ts">
import Card from "../../atoms/Card.vue";
const nuevaTarea = true
</script>

<template>
  <div class="flex space-x-10">
    <Card name="Tarea Demo" nuevaTarea></Card>
    <Card name="Nueva Tarea" nuevaTarea="true"></Card>
  </div>
</template>
