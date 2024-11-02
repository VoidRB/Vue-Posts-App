<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
import axios from "axios";
import { onMounted, reactive } from "vue";

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
state.postTitle = "";
state.postContent = "Pick a Post from the list on the left to view and delete";

onMounted(async () => {
  try {
    const preDeleteRes = await axios.get("/api/posts/predelete/" + props.id);
    state.posts = preDeleteRes.data;
  } catch (error) {
    throw error;
  }
});

async function deletePost(postid) {
  try {
    state.posts.pop(postid);
    await axios.delete("/api/posts/deletepost/" + postid);
    console.log(posts);
  } catch (error) {
    throw error;
  }
}
</script>

<template>
  <div class="m-2 flex max-w-full flex-row-reverse">
    <section
      class="flex h-96 w-4/5 flex-col border-2 border-black p-1 transition-all focus:p-2 focus:shadow-2xl"
    >
      <h1 class="underline">
        {{ state.postTitle }}
      </h1>
      <p>
        {{ state.postContent }}
      </p>
    </section>
    <section class="h-full w-2/5 border-2 border-b-0 border-r-0 border-black">
      <div class="flex h-full flex-row" v-for="post in state.posts">
        <button
          @click="
            (state.postSwitcher = post.id),
              (state.postTitle = post.title),
              (state.postContent = post.content)
          "
          class="w-3/4 truncate border-b-2 border-r-2 border-black p-1 focus:shadow-inner focus:shadow-black"
        >
          {{ post.title }}
        </button>
        <button
          @click="deletePost(post.id), toast('Deleted Post')"
          class="pi pi-trash w-1/4 border-b-2 border-black active:shadow-inner active:shadow-black"
        ></button>
      </div>
    </section>
  </div>
</template>
