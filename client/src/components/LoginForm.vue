<template>
  <form
    class="flex flex-col items-center mt-40"
    action="/api/login"
    method="post"
    autocomplete="off"
  >
    <h1 class="text-3xl mb-5">Login form</h1>
    <hr class="border-1 mb-5 border-black w-1/2" />

    <label for="username">Username</label>
    <input
      class="p-1 border-2 border-black focus:p-2 transition-all focus:shadow-2xl"
      type="username"
      name="username"
      id="username"
      autofocus
      required
    />
    <label for="password">Password</label>
    <input
      class="p-1 border-2 border-black focus:p-2 transition-all focus:shadow-2xl"
      type="password"
      name="password"
      id="password"
      required
    />
    <button
      class="m-4 p-2 pr-4 pl-4 border-2 shadow-lg border-black active:shadow-inner active:shadow-black"
      type="submit"
    >
      Login
    </button>
  </form>
</template>
