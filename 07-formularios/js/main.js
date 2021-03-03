const app = Vue.createApp({
    data: () => ({
        title: "Formularios con Vue3",
        datos: {
            name: "", 
            age: 10, 
            langs: [], 
            gener: "m"
        }, 
    }), 

    methods: {
        handleSubmit() {
            console.log(this.datos);
        }

    },

})