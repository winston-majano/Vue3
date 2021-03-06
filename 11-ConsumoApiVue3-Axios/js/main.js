const app = Vue.createApp({
    data(){
        return{
            title: "Peticiones http con Axios y vue3", 
            datos:[]
        }
    },

    created() {
     this.getPosts()    
    },
    methods: {
     async  getPosts(){
           const {data} = await  axios.get('https://jsonplaceholder.typicode.com/users')
           this.datos = data

            console.log(data);
        }
    },
})