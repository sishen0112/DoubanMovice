<template>
  <div id='Top250' class="paddingBottom">
    <Loading v-if="loading"></Loading>
    <ul v-else class="topList">
      <li v-for="(item,index) of movices.subjects">
        <router-link class="flex" :to="{ name: 'Movice', params: { id: item.id }}">
          <img :src="item.images.small" alt="" class="moviceImg">
          <div class="flex flexDirectionColumn content">
            <span class="title">{{item.title}}</span>
            <div class="genres">
              <span v-for="genre of item.genres">{{genre}}</span>
            </div>
            <div class="rating">{{item.rating.average}} 豆瓣评分</div>
            <span class="order">{{index+1}}</span>
          </div>
        </router-link>
      </li>
      <li class="nothing">没有了</li>

    </ul>
    <Navbar></Navbar>
  </div>
</template>

<script>
  import Navbar from './Navbar'
  import Loading from './Loading'
  export default {
    name: 'Top250',
    components: {
      Navbar,Loading
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
        this.$api.default.get('top250', (err, res) => {
          this.movices = JSON.parse(res.text)
          this.loading = false
        })
      }
    }
  }

</script>

<style scoped>
  .topList {
    list-style: none;
    text-align: left;
    padding: 0;
    margin: 0;
  }
  
  .topList>li {
    padding: 1rem .5rem;
    border-bottom: 1px solid #ddd;
  }
  
  .moviceImg {}
  
  .content {
    padding: 0 .8rem;
    color: 444;
  }
  
  .title {
    font-size: 1.2rem;
  }
  
  .genres>span {
    margin-right: .5rem;
    font-size: .8rem;
  }
</style>