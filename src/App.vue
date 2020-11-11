<template>
  <div id="nav">
    <router-link to="/color-palette">Color Palette (Neural net regression) </router-link> |
    <router-link to="/image-classifier">Image classifier (classification)</router-link> |
    <router-link to="/chihuahuaOrMuffin">Chihuahua Or Muffin (Feature extraction, Classification)</router-link>
  </div>
  <router-view/>
</template>

<style>
*{
  font-family: 'Nunito', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
