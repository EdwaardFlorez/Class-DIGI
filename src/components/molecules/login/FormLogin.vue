<template>
  <form class="flex flex-col gap-y-10 w-1/2">
    <!-- Username -->
    <div class="flex flex-col">
      <label for="name" class="text-purple font-bold">Usuario</label>
      <input type="name" class="border-2 border-green px-1 py-2" />
    </div>
    <!-- Password -->
    <div class="flex flex-col">
      <label for="username" class="text-purple font-bold">Contraseña</label>
      <input type="password" class="border-2 border-green px-1 py-2" />
      <a href="#" class="text-red font-bold mt-3">Contraseña olvidada</a>
    </div>
    <div class="flex justify-center space-x-5">
      <button
        type="submit"
        class="font-bold rounded border-b-2 text-red bg-purple border-red hover:border-purple hover:bg-red shadow-md py-2 px-6"
      >
        <span class="mr-2">Registrarse</span>
      </button>
      <button
        type="submit"
        class="font-bold rounded border-b-2 text-red bg-purple border-red hover:border-purple hover:bg-red shadow-md py-2 px-6"
      >
        <span class="mr-2">Ingresar</span>
      </button>
    </div>
  </form>
</template>
