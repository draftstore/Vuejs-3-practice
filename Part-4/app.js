var app =  Vue.createApp({
    data() {
        return {
            message: 'Hello World!',
            tutorialInfo: {
                title: 'Vue Js 3 Bangla Tutorial',
                author: 'Mehedi Hasan',
                github: 'https://github.com/mehedihasan'
            }
        }
    }
})
app.mount('#app');