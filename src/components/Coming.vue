<template>
  <div id='Coming'>
    <Loading v-if="loading"></Loading>
    <ul v-else class="comming">
      <li v-for="(item,index) of movices.subjects">
        <router-link class="flex" :to="{ name: 'Movice', params: { id: item.id }}">
          <img :src="item.images.medium" alt="" class="moviceImg">
          <div class="flex flexDirectionColumn content">
            <div class="title">{{item.title}}</div>
            <div class="genres">
              <span v-for="genre of item.genres">{{genre}}</span>
            </div>
            <div class="director" v-for="director in item.directors">
              <span class="directorTag">导演</span>
              <span class="directorName">{{director.name}}</span>
            </div>
            <div class="flex cast flexWrap">
              <span class="directorTag">主演</span>
              <div v-for="cast in item.casts">
                <span class="castName">{{cast.name}}</span>
              </div>
            </div>

          </div>

        </router-link>
      </li>
    </ul>
    <Navbar></Navbar>

  </div>
</template>

<script>
  import Loading from './Loading'
  import Navbar from './Navbar'
  export default {
    name: 'Coming',
    components: {
      Navbar, Loading
    },
    data() {
      return {
        loading: true,
        movices: {}
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.$api.default.get('coming_soon', (err, res) => {
          this.movices = JSON.parse(res.text)
          // alert(res.subjects)
          console.log(this.movices.subjects[0].casts[0].avatars.small)
          this.loading = false
        })
      }
    }

  }

</script>

<style scoped>
  .comming {
    list-style: none;
    text-align: left;
    padding: 0;
    margin: 0;
  }
  
  .comming>li {
    padding: 1rem .5rem;
    border-bottom: 1px solid #ddd;
  }
  
  .moviceImg {}
  
  .content {
    padding: 0 .8rem;
    color: 444;
  }
  
  .content>div {
    margin-bottom: .3rem;
  }
  
  .title {
    font-size: 1.2rem;
  }
  
  .genres>span {
    margin-right: .5rem;
    font-size: .8rem;
    display: inline-block;
    border: 1px solid #eee;
    padding: .25rem;
    border-radius: .2rem;
    margin-right: .3rem;
  }
  
  .director,
  .cast .castName {
    margin-right: .5rem;
  }
</style>