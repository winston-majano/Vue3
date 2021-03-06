app.component("header-principal", {
    template: `
    <header>
        <h2>{{titulo}}</h2>
    </header>
    `, 

    data(){
        return{
            titulo: "Componentes desde Data"
        }
    }
})

