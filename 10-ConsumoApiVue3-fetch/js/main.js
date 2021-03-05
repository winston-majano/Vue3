const app = Vue.createApp({
    data(){
        return{
            title: "Peticiones http con fetch y vue3"
        }
    },

    created() {
     this.getPosts()    
    },
    methods: {
     async  getPosts(){
           const res = await fetch('https://jsonplaceholder.typicode.com/photos/1')
            const data = await  res.json()

            console.log(data.id);
        }
    },
})