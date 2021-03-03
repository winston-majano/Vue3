const app = Vue.createApp({
    data() {
        return {
            title: "Calculador con Vue3 - Propiedades computadas",
            n1: 0,
            n2: 0
        }
    }, 
    
    computed: {
        //siempre deben de retornar un valor 
        suma(){
            return this.n1 + this.n2
        }, 
        resta(){
            return this.n1 - this.n2
        }, 
        multiplicacion(){
            return this.n1 * this.n2
        }, 
        division(){

            if(this.n2 <= 0){
                return "no de puede dividir por cero"
            }
            return this.n1 / this.n2
        }
    }
        
    });
   
    