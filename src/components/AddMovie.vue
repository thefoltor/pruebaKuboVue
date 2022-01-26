<template>
    <form @submit.prevent="send">
        <div><span>Nombre: </span><input v-model='title' type="text" name="title"></div>
        <div><span>Imagen: </span><input v-model='image' type="text" name="image"></div>
        <div><span>Descripcion: </span><input v-model='description' type="text" name="description"></div>
        <div><span>Caratula: </span><input type="text" v-model='cover' name="cover"></div>
        <div><span>Trailer: </span><input v-model='trailer' type="text" name="trailer"></div>
        <div><span>Categorias: </span><input v-model='categories' type="text" name="categories"></div>
        <div><span>Duracion: </span><input v-model='duration' type="text" name="duration"></div>
        <div><span>Fecha: </span><input v-model='date' type="text" name="date"></div>
        <div><span>Rate: </span><input v-model='rate' type="text" name="rate"></div>
        <button type="submit">Anadir pelicula</button>
    </form>
</template>

<script>
import Axios from 'axios';
export default {
    data(){
        return {
            title:'',
            image:'',
            description:'',
            trailer:'',
            cover:'',
            categories:'',
            duration:'',
            date:'',
            rate:''
        }
    },
    methods:{
        send(){
            Axios.post("https://pruebakubo.herokuapp.com/addMovie",{
                title:this.title,
                image:this.image,
                description:this.description,
                youtube:this.trailer,
                cover:this.cover,
                categories:this.categories,
                duration:this.duration,
                date:this.date,
                rate:this.rate
            }).then((result)=>{
                console.log("added"+result);
                if(result.data.code==100){
                    this.$router.push({path:'/'});
                }
                else{
                    this.$router.push({path:'/error'});
                }
            }).catch((error)=>{
                console.log(error);
            });
            
        }
    }
    }
</script>

<style scoped>
    div{
        margin: 1em 0;
        width: 20%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }
    form{
        justify-content: center;
        margin: 2em;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    button{
        margin-top: 2em;
        
    }
</style>
