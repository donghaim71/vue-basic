new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        message2: 'Hello React.js!',
        uid: '10',
        uid: '11',
        flag: true
    },
    methods: {
        clickBtn() {
            console.log("hi");
        },
        eventMethod(event) {
            console.log(event);
        }
    }
});