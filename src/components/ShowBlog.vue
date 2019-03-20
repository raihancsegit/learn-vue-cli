
<template>
  <div v-list:blue="'wide'">
      
<a v-bind:href="href" v-bind:title="title | makeUppercase">go to google</a>
      <h3>Listing Blog</h3>
      <div v-for="blog in blogs">
          <h3 v-format>{{blog.title | makeUppercase}}</h3>
          <p>{{blog.body | cutContent}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        blogs:[],
        href: "http://google.com",
        title:"go to google"
    }
  },
  methods:{

  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
          this.blogs = data.body.slice(0,3);
          console.log(data);
      });
  },
  

}
</script>
