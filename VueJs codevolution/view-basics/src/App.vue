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
      display: true,
      showElement: false,
      names: ['John', 'Jane', 'Bob', 'Alice'],
      fullName: [
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jane', lastName: 'Doe' },
        { firstName: 'Bob', lastName: 'Doe' },
        { firstName: 'Alice', lastName: 'Doe' },
      ],
      actors: [
        {
          name: 'John Doe',
          movies: [
            'The Shawshank Redemption',
            'The Godfather',
            'The Dark Knight'],
        },
        {
          name: 'Jane Doe',
          movies: [
            'The Lord of the Rings: The Fellowship of the Ring',
            'The Lord of the Rings: The Two Towers',
            'The Lord of the Rings: The Return of the King'],
        },
      ],
      formValues: {
        name: '',
        age: '',
        jobLocation: [],
      }
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
    <!-- v-show and v-if are used to conditionally render elements -->
    <!-- v-show works like style:none. Even if the property is false, it will show in the DOM -->
    <!-- On the other hand v-if works like display:none. If the property is false, it won't show in the DOM -->
    <h2 v-show="showElement">using v-show</h2>
    <h2 v-if="showElement">using v-if</h2>
    <h2 v-for="(name, index) in names" :key="name"> {{ index }} {{ name }}</h2>
    <h2 v-for="name in fullName" :key="name.siam"> {{ name.firstName }} {{ name.lastName }} </h2>
    <div v-for="actor in actors" :key="actor.name">
      <h2> {{ actor.name }} </h2>
      <h2 v-for="movie in actor.movies" :key="movies">{{ movie }}</h2>
    </div>
    <div>
      <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
    </div>
    <div>
      <form action="">
        <div>
          <label for="name">Name</label>
          <input type="text" name="name" v-model="formValues.name">
          <label for="age">Age</label>
          <input type="number" name="age" v-model="formValues.age">
          <label for="countries">Countries</label>
          <hr>
          <label for="job-location">Job Location</label>
          <select id="job-location" multiple v-model="formValues.jobLocation">
            <option value="bangladesh">Bangladesh</option>
            <option value="india">India</option>
            <option value="pakistan">Pakistan</option>
            <option value="america">America</option>
          </select>
        </div>
      </form>

    </div>

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
