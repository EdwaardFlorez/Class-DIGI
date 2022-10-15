<script setup lang="ts">
import { registerStore } from "../../../stores/documentType";
import { ref } from "vue";
import Dropdown from "primevue/dropdown";
const storeRegister = registerStore();

var errors: string[]= [];
var rol = ref(null);
var name = ref(null);
var documentType = ref(null);
var document = ref(null);
var email = ref(null);
var celNumber = ref(null);
var username = ref(null);
var password = ref(null);

function handleSubmit(event: Event) {
    errors = [];
    console.log("leng",errors.length);
  if (!rol.value) {
    console.log("nmetr");
    
    errors.push("El nombre es obligatorio.");
  }
  if (!name.value) {
    errors.push("La edad es obligatoria.");
  }

  var  jsonQuery = {
        "username": username.value,
        "passWord": password.value,
        "name": name.value,
        "tipe_document": documentType.value,
        "document": document.value,
        "email": email.value,
        "phone": celNumber.value,
        "rol": rol.value,
    }

  storeRegister.queryRegister(jsonQuery)
}
</script>

<template>
  <form
    @submit.prevent="handleSubmit($event)"
    class="flex flex-col gap-y-10 w-1/2"
  >
    <div class="flex flex-col md:flex-row sm:flex-row space-x-6">
      <!-- name -->
      <div class="flex flex-col field">
        <label for="name" class="text-purple font-bold">Nombre</label>
        <input
          v-model="name"
          type="name"
          class="border border-gray-light px-1 py-2"
        />
      </div>
      <!-- rol -->
      <div class="flex flex-col field">
        <label for="name" class="text-purple font-bold">rol</label>
        <Dropdown
          id="country"
          class="w-56"
          v-model="rol"
          :options="storeRegister.roles"
          optionLabel="name"
          optionValue="_id"
          placeholder="Selecciona un rol"
        />
      </div>
    </div>
    <div class="flex space-x-6">
      <!-- tipo documento -->
      <div class="flex flex-col">
        <label for="name" class="text-purple font-bold"
          >Tipo de documento</label
        >
        <Dropdown
          id="country"
          class="w-56"
          v-model="documentType"
          :options="storeRegister.documentType"
          optionLabel="name"
          optionValue="_id"
          placeholder="Selecciona un rol"
        />
      </div>
      <!-- documento -->
      <div class="flex flex-col">
        <label for="name" class="text-purple font-bold">Documento</label>
        <input
          v-model="document"
          type="number"
          class="border border-gray-light px-1 py-2"
        />
      </div>
    </div>

    <div class="flex space-x-6">
      <!-- correo electronico -->
      <div class="flex flex-col">
        <label for="name" class="text-purple font-bold"
          >Correo electronico</label
        >
        <input v-model="email" type="name" class="border border-gray-light px-1 py-2" />
      </div>
      <!-- celular -->
      <div class="flex flex-col">
        <label for="name" class="text-purple font-bold"
          >Número de contacto</label
        >
        <input v-model="celNumber" type="number" class="border border-gray-light px-1 py-2" />
      </div>
    </div>

    <div class="flex space-x-6">
      <!-- Username -->
      <div class="flex flex-col">
        <label for="name" class="text-purple font-bold">Usuario</label>
        <input v-model="username" type="name" class="border border-gray-light px-1 py-2" />
      </div>
      <!-- Password -->
      <div class="flex flex-col">
        <label for="username" class="text-purple font-bold">Contraseña</label>
        <input v-model="password" type="password" class="border border-gray-light px-1 py-2" />
      </div>
    </div>

    <p v-if="errors">
    <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    </p>

    <div class="flex justify-center space-x-5">
      <button
      @click="storeRegister.queryDocumentAndRol"
        type="submit"
        class="font-bold rounded border-b-2 text-red bg-purple border-red hover:border-purple hover:bg-blue shadow-md py-2 px-6"
      >
        <span class="mr-2">Registrarse</span>
      </button>
    </div>
  </form>
</template>
