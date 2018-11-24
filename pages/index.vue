<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxtLearn
      </h1>
      <h2 class="subtitle">
        My extraordinary Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <button @click="loadMore">加载更多</button>
      <button @click="add">+1</button>
      <div>{{ $store.state.countModule.counter }}</div>
      <div v-for="(item,index) in arr" :key="index">
         <div>{{item.title}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios';
let page = 1;
let tempArr = [];
export default {
  components: {
    Logo
  },
  async asyncData ({ params }) {
    let data  = await axios.get('https://cnodejs.org/api/v1/topics?page=1&limit=10')
    return {arr:data.data.data}
  },
  methods:{
    async loadMore(){
      page++;
      let data  = await axios.get('https://cnodejs.org/api/v1/topics?page='+page+"&limit=10")
      console.log(data.data.data.length)
      for(let i in data.data.data){
        this.arr.push({title:data.data.data[i].title})
      }
    
    },
    add(){
      this.$store.commit('countModule/increment')
    }
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
