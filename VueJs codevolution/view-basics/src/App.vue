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
      isSoldout: true,
      highlightColor: 'orange',
      headerSize: 50,
      //StyleObject example
      headerStyleObject: {
        backgroundColor: 'orange',
        fontSize: '50px',
        padding: '10px',
        color: 'white'
      },
      baseStyleObject:
      {
        backgroundColor: 'orange',
        fontSize: '50px',
        padding: '10px',
        color: 'white'
      },
      successStyleObject: {
        backgroundColor: 'green',
        fontSize: '50px',
        padding: '10px',
        color: 'white'
      },
      number: -5,
      display: true
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
    <h2 v-bind:style="{
      color: highlightColor,
      fontSize: headerSize + 'px',
      padding: '10px'
    }">Inline Style</h2>
    <h2 v-bind:style="headerStyleObject">Style Object</h2>
    <div v-bind:style="[baseStyleObject, successStyleObject]"> <!-- Array of styles. It overrides the baseStyleObject-->
      Success Style
    </div>
    <h2 v-if="number === 0" v-bind:class="['new']">The number is zero</h2>
    <h2 v-else-if="number < 0">The number is negative</h2>
    <h2 v-else-if="number > 0">The number is positive</h2>
    <h1 v-else>The number is not zero</h1>
    <template v-if="display">
      <h2>Mohammad Al Amin Siam</h2>
      <h2>Age:26</h2>
      <h2>Facebook: <a v-bind:href="facebook">Mohammad Al Amin Siam</a></h2>
    </template>

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
