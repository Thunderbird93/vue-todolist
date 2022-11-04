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
    methods: {
        toggleIt(index){
            this.tasks[index].done= !this.tasks[index].done;
        },
        remove(index){
            this.noString = '';
            if(this.tasks[index].done){
                this.tasks.splice(index,1);
            }else{
             this.noString = 'Completare il task prima di cancellarlo'
            }
        }
    },
    mounted(){
        console.log('hi!')
    }
}).mount('#app')