<script setup lang="ts">
import Formlogin from "../components/molecules/login/FormLogin.vue";
import FormRegister from "../components/molecules/login/FormRegister.vue";
import bannerLogin from "../components/molecules/login/bannerLogin.vue";
import DigiWorldIcon from "../components/atoms/icons/DigiWorldIcon.vue";

import { registerStore } from "../stores/documentType";
const storeDocument = registerStore();

</script>

<template>
  <div class="w-screen h-screen flex">
    <section class="sm:w-2/5 w-full h-full">
      <section class="flex items-center pt-7 pl-7">
        <DigiWorldIcon></DigiWorldIcon>
        <span class="ml-3 text-2xl text-red font-medium">ClassDIGI</span>
      </section>
      <div class="flex flex-col justify-center items-center gap-y-10 h-5/6">
        <h1 v-if="storeDocument.registerVisible" class="text-4xl font-bold text-purple">Registrarse</h1>
        <h1 v-else class="text-4xl font-bold text-purple">Login</h1>
        <hr class="border-4 border-red w-2/5 max-w-1" />
        <FormRegister v-if="storeDocument.registerVisible"></FormRegister>
        <Formlogin v-else></Formlogin>
      </div>
    </section>
    <section
      class="sm:w-3/5 w-full h-full justify-center items-center bg-blue sm:flex hidden p-40 pt-24 pr-28"
    >
      <div>
        <bannerLogin></bannerLogin>
      </div>
    </section>
  </div>
</template>
