<template>
    <div class="menu">
      <div>
        <router-link to="/movies"><span>Peliculas</span></router-link>
      <router-link to="/novelties"><span>Novedades</span></router-link>   
        </div>   
      <router-link to="/addMovie" class="addMovie"><span>Anadir pelicula</span></router-link>
  </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
    .menu{
      display:flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 1em 0em;
      border: #ff4332 solid 1px;
      border-radius: 1em;
    }
    span{
      list-style-type: none; 
      padding: 0.3em 0.5em;
      font-size: 1.7em;
      font-family: 'PT Sans';
      color: #ff4332;
    }
    a{
        text-decoration: none;
    }
    

</style>