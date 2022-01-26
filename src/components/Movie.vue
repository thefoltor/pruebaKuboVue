<template>
    <div>
        <h3>{{titleConverted}}</h3>
        <img :src="image">
        <p>{{descriptionConverted}}</p>
        <a :href="youtube"><span>Ver trailer</span></a>
    </div>
</template>

<script>
export default {
    props:['title','image','description','youtube'],
    computed:{
        titleConverted(){
            if(this.title.length>20){
                return this.title.substring(0,20)+"..."
            }
            else{
                return this.title;
            }
        },
        descriptionConverted(){
            if(this.description.length>60){
                return this.description.substring(0,60)+"..."
            }
            else{
                return this.description;
            }
        }
    }
}
</script>

<style scoped>
    img{
        width: 14em;
        height: 14em;
        object-fit: cover;
    }
    
    p{
        min-height: 3em;
    }
    
    a{
        text-decoration: none;
        color: rgb(252, 77, 77);
    }

    h3{
        color: rgb(58, 58, 58);
    }

    div{
        padding: 0em 0em 1em 1em;
        border: rgb(206, 206, 206) solid 1px;
        border-radius: 1em;
        background-color: #f3f3f3;
        width: 15em;
        margin: 1em;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: left;
    }
</style>