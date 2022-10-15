<script setup lang="ts">
    import digiworldIcon from "../../atoms/icons/DigiWorldIcon.vue";
    import UserOption from "./UserOption.vue"
</script>

<template>
    <section class="h-16 flex bg-purple-light justify-evenly">
        <div class="flex items-center">
            <digiworldIcon></digiworldIcon>
            <span class="ml-3 text-xl text-red font-medium">ClassDIGI</span>
        </div>
        <div class="flex">
            <UserOption></UserOption>
        </div>
    </section>
</template>