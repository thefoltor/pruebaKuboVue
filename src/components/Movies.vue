<template>
    <div class="container" >
            <Movie v-for="item in movies" :key="item.id" :title="item.title" :description="item.description" :youtube="item.youtube" :image="item.image"/>
    </div>
</template>


<script>
import Axios from 'axios';
import Movie from './Movie.vue'
export default {
    components:{
        Movie
    },
    data(){
        return {
            movies:[]
        }
    },
    mounted(){
        Axios.get("http://pruebakubo.herokuapp.com/getMovies").then((response)=>{
            this.movies = response.data.data;
        }).catch((error)=>{
            console.log(error);
        });
    }
}
</script>

<style scoped>
    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
    }
</style>