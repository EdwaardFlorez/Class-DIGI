<script setup lang="ts">
import Header from "../components/molecules/header/Header.vue";
import TaskSection from "../components/molecules/home/TaskSection.vue";
</script>

<template>
  <Header></Header>
  <div class="flex flex-col px-52">
    <div>
      <h6 class="mt-10 mb-5">Tareas</h6>
      <hr class="border-2 border-red w-2/5 max-w-1 mb-6" />
      <TaskSection></TaskSection>
    </div>
    <div>
      <h6 class="my-10 mb-5">Tareas por calificar</h6>
      <hr class="border-2 border-red w-2/5 max-w-1 mb-6" />
      <TaskSection></TaskSection>
    </div>
    <div>
      <h6 class="my-10 mb-5">Tareas Calificadas</h6>
      <hr class="border-2 border-red w-2/5 max-w-1 mb-6" />
      <TaskSection></TaskSection>
    </div>
  </div>
</template>
