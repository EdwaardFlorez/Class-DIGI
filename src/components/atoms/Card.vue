<script setup lang="ts">
import { Component } from "vue";
import ConfigIcon from "./icons/ConfigIcon.vue";

defineProps<{ name: String; nuevaTarea: Boolean }>();
</script>

<template>
  <div class="rounded-3xl shadow-lg flex flex-col space-y-7 justify-center items-center h-52 w-52">
    <div class="flex w-full flex-row-reverse pr-8"><ConfigIcon></ConfigIcon></div>
    <img v-if="nuevaTarea" src="../../assets/add_task.png" class="w-20 h-20" />
    <img v-else src="../../assets/task.png" class="w-20 h-20" />
    <span>{{ name }}</span>
  </div>
</template>
