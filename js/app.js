const { createApp } = Vue;

createApp({
    data(){
        return{
            logoImg: "img/logo.png",
            tasks: 
            [
                {
                    text: 'Preparare A',
                    done: false
                },
                {
                    text: 'Preparare B',
                    done: true
                },
                {
                    text: 'Preparare C',
                    done: false
                }
            ]
        }
    },
    mounted(){
        console.log('hi!')
    }
}).mount('#app')