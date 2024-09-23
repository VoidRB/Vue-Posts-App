<script setup>
import { useToast } from 'vue-toastification';

const toast = useToast();
import axios from 'axios';
import { onMounted, reactive } from 'vue';

const props = defineProps({
  id: { type: Number, default: 100 },
});

const state = reactive({
  postTitle: { type: String },
  postContent: { type: String },
  postSwitcher: {
    type: Number,
  },
  posts: {
    type: Array,
    default: [],
  },
});

state.postSwitcher = 1;
state.postTitle = '';
state.postContent = 'Pick a Post from the list on the left to view and delete';

onMounted(async () => {
  try {
    const preDeleteRes = await axios.get('/api/posts/predelete/' + props.id);
    state.posts = preDeleteRes.data;
    console.log(state.props);
  } catch (error) {
    throw error;
  }
});

async function deletePost(postid) {
  try {
    await axios.delete('/api/posts/deletepost/' + postid);
  } catch (error) {}
}
</script>

<template>
  <div class="m-2 max-w-full flex flex-row-reverse">
    <section
      class="w-4/5 h-96 p-1 border-2 flex-col flex border-black focus:p-2 transition-all focus:shadow-2xl"
    >
      <h1 class="underline">
        {{ state.postTitle }}
      </h1>
      <p>
        {{ state.postContent }}
      </p>
    </section>
    <section class="h-full border-r-0 w-2/5 border-2 border-black">
      <div class="h-full flex flex-row" v-for="post in state.posts">
        <button
          @click="
            (state.postSwitcher = post.id),
              (state.postTitle = post.title),
              (state.postContent = post.content)
          "
          class="border-b-2 border-r-2 p-1 w-3/4 border-black focus:shadow-inner focus:shadow-black"
        >
          {{ post.title }}
        </button>
        <button
          @click="deletePost(post.id), toast('Deleted Post'), vm.$forceUpdate()"
          class="pi pi-trash border-b-2 w-1/4 border-black active:shadow-inner active:shadow-black"
        ></button>
      </div>
    </section>
  </div>
</template>

<!-- <template>WIP BECAUSE OF SOME WEIRD  CONFLICT</template> -->
