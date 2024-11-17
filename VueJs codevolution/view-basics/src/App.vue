<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello World!",
      name: "John Doe",
      age: 30,
      channel: 'Mohammad Al Amin Siam',
      facebook: 'https://www.facebook.com/mohammad.alamin.siam'
    }
  },
  methods: {
    changeMessage() {
      this.message = "The text has been changed!"
    }
  }
}
</script>

<!--Two ways to bind texts. The better one is: {{ }}-->
<!--In Vue 3, the v-text directive is used to update the text content of an element. 
It is a shorthand for binding the inner text of an element to a Vue data property or expression. 
Essentially, it works like {{ ... }} interpolation but in a more explicit way -->
<template>
  <div>
    <div>{{ name }} {{ age }}</div>
    <p v-text="message"></p>
    <button @click="changeMessage">change message</button>
  </div>
</template>
<!--Two ways to bind texts-->

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
