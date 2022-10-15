<script setup lang="ts">
    import digiworldIcon from "../login/digiworldIcon.vue";
    import userOption from "./userOption.vue"
</script>

<template>
    <section class="h-16 flex bg-purple-light justify-evenly">
        <div class="flex items-center">
            <digiworldIcon></digiworldIcon>
            <span class="ml-3 text-xl text-red font-medium">ClassDIGI</span>
        </div>
        <div class="flex">
            <userOption></userOption>
        </div>
    </section>
</template>