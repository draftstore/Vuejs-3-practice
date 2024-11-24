<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello World!",
      name: "John Doe",
      age: 30,
      channel: 'Mohammad Al Amin Siam',
      facebook: 'https://www.facebook.com/mohammad.alamin.siam',
      example_of_an_html: '<a href="https://www.facebook.com/mohammad.alamin.siam">Mohammad Al Amin Siam</a>',
      headingId: 'heading',
      isDisabled: false,
      status: 'danger',
      isPromoted: true,
      isSoldout: true
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

<!-- In Vue 3, the v-html directive is used to update the HTML content of an element -->
<template>
  <div>
    <div>{{ name }} {{ age }}</div>
    <p v-text="message"></p>
    <p v-html="example_of_an_html"></p>
    <button @click="changeMessage">change message</button>
    <div v-bind:id="headingId">Example of an id</div>
    <button v-bind:disabled="isDisabled">V-Bind Button example</button>
    <h2 v-bind="{ class: 'underline' }">Underlined Text</h2>
    <h2 class="underline" v-bind:class="status">Status</h2>
    <h2 v-bind:class="isPromoted && 'promoted'">Movie Name</h2>
    <h2 v-bind:class="isSoldout ? 'sold-out' : 'new'">Sold-out movie</h2> <!-- Conditional binding -->
    <h2 v-bind:class="['new', 'promoted']">Newly promoted movie</h2> <!-- Array of classes -->
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

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: green;
}

.sold-out {
  color: red;
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
