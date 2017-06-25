<template>
  <div class="landing-page">
    <h1 class="msg">{{ msg }}</h1>
    <ul>
      <li><router-link to="email">E-mail app</router-link></li>
      <li><router-link to="map">My Map app</router-link></li>
      <li><router-link to="book">Books app</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      msg: 'Welcome!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landing-page {
  min-width: 200px;
}
.msg {
  color: #666;
  margin-bottom: 2em;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
li {
  list-style: none;
  display: inline-block;
  flex-grow: 1;
  margin: 1em;
  margin-top: 0;
  min-height: 50px;
  min-width: 50px;
}
li > a {
  margin: 0;
  padding: 1em;
  border-radius: 0.4em;
  min-width: 50px;
  background-color: #18cf36;
  color: white;
  text-decoration: none;
}
</style>