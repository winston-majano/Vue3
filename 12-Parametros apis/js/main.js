const app = Vue.createApp({
    data(){
        return {
            title: "Peticiones con parametros",
            posts: 5,
            datos: {}
        }
    }, 
    created() {
        this.getPosts()
    },

    methods: {
        async getPosts(){
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.posts}`)
            const {userId} = data;

            //como se usa destructurin se puede usar un alis en este caso dataUser
            const {data:dataUser} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
           
           this.datos = dataUser;

           
            console.log(dataUser);

        }
    },
})