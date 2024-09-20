<script setup>
import AddPosts from '@/components/AddPosts.vue';
import DeletePosts from '@/components/DeletePosts.vue';
import ViewPosts from '@/components/viewPosts.vue';
import axios from 'axios';
import { onMounted, reactive } from 'vue';

const state = reactive({
  message: {
    username: String,
    id: Number,
  },
  threeButtons: {
    pressed: Number,
  },
});

onMounted(async () => {
  state.threeButtons.pressed = 1;
  try {
    const response = await axios.get('/api/posts/');
    state.message.id = response.data.id;
    state.message.username = response.data.username;
  } catch (error) {
    throw error;
  }
});

function AddPostsFunc() {
  state.threeButtons.pressed = 1;
}
function ViewPostsFunc() {
  state.threeButtons.pressed = 2;
}
function DeletePostsFunc() {
  state.threeButtons.pressed = 3;
}

const LogOutFunc = () => {
  axios.post('/api/posts/logout');

  window.location.href = '/';
};
</script>

<template>
  <div class="h-screen items-start flex flex-col mr-4 ml-4">
    <section class="border-2 border-black flex flex-row gap-6 mt-4 p-1">
      <p>Logged in as {{ state.message.username }}</p>
    </section>
    <div class="flex flex-row">
      <button
        @click="AddPostsFunc"
        class="border-2 border-r-0 p-1 border-t-0 border-b-0 border-black focus:shadow-inner focus:shadow-black"
      >
        Add
      </button>
      <button
        @click="ViewPostsFunc"
        class="border-2 p-1 border-r-0 border-black border-t-0 border-b-0 focus:shadow-inner focus:shadow-black"
      >
        View
      </button>
      <button
        @click="DeletePostsFunc"
        class="border-2 p-1 border-black border-t-0 border-b-0 focus:shadow-inner focus:shadow-black"
      >
        delete
      </button>
    </div>
    <section class="border-2 border-black w-4/5 h-4/5">
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
      class="p-2 pr-4 pl-4 mb-11 border-2 border-t-0 shadow-lg border-black active:shadow-inner active:shadow-black"
      @click="LogOutFunc"
    >
      Logout
    </button>
  </div>
</template>
