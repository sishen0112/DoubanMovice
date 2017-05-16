<template>
  <nav id='Navbar'>
    <ul class="flex">
      <li>
        <router-link :to="{name:'Hot'}">
          正在热映
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'Coming'}">
          即将上映
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'Top250'}">
          Top250
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'About'}">
          关于
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar'
  }

</script>

<style scoped>
  #Navbar {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  
  #Navbar ul {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #000;
    color: white;
  }
  
  #Navbar ul>li {
    width: 25%;
    padding: .8rem 0;
    font-size: .8rem;
    text-align: center;
  }
  
  #Navbar ul>li a {
    color:white;
  }
</style>