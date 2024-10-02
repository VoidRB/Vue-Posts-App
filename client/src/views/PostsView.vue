<script setup>
import AddPosts from "@/components/AddPosts.vue";
import DeletePosts from "@/components/DeletePosts.vue";
import ViewPosts from "@/components/viewPosts.vue";
import axios from "axios";
import { onMounted, reactive } from "vue";

const state = reactive({
  message: {
    username: String,
    id: Number,
  },
  threeButtons: {
    pressed: Number,
  },
  posts: {},
});

state.threeButtons.pressed = 1;
onMounted(async () => {
  try {
    const response = await axios.get("/api/posts/");
    state.message.id = response.data.id;
    state.message.username = response.data.username;
  } catch (error) {
    throw error;
  }
});

const LogOutFunc = () => {
  axios.post("/api/posts/logout");

  window.location.href = "/";
};
</script>

<template>
  <div class="ml-4 mr-4 flex h-screen flex-col items-center">
    <section class="mb-1 mt-4 flex flex-row gap-6 border-2 border-black p-1">
      <p>Logged in as {{ state.message.username }}</p>
    </section>
    <div class="flex flex-row">
      <button
        @click="state.threeButtons.pressed = 1"
        class="border-t-1 border-2 border-b-0 border-r-0 border-black p-1 focus:shadow-inner focus:shadow-black"
      >
        Add
      </button>
      <button
        @click="state.threeButtons.pressed = 2"
        class="border-t-1 border-2 border-b-0 border-r-0 border-black p-1 focus:shadow-inner focus:shadow-black"
      >
        View
      </button>
      <button
        @click="state.threeButtons.pressed = 3"
        class="border-t-1 border-2 border-b-0 border-black p-1 focus:shadow-inner focus:shadow-black"
      >
        delete
      </button>
    </div>
    <section class="h-4/5 w-4/5 border-2 border-black">
      <div v-if="state.threeButtons.pressed === 1">
        <AddPosts :id="state.message.id" />
      </div>
      <div v-else-if="state.threeButtons.pressed === 2">
        <ViewPosts :id="state.message.id" />
      </div>
      <div v-else="state.threeButtons.pressed === 3">
        <DeletePosts :id="state.message.id" />
      </div>
    </section>

    <button
      class="mb-11 border-2 border-t-0 border-black p-2 pl-4 pr-4 shadow-lg active:shadow-inner active:shadow-black"
      @click="LogOutFunc"
    >
      Logout
    </button>
  </div>
</template>
