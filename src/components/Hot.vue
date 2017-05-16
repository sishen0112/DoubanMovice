<template>
  <div id='Hot' class="paddingBottom">
    <Loading v-if="loading"></Loading>
    <div v-else>
      <ul class="movices flex flexWrap">
        <li class="movice" v-for="item of movices.subjects">
          <router-link :to="{name:'Movice',params:{id:item.id}}">
            <div class="paddingItem">
              <div class="moviceImg"><img :src="item.images.large" alt="" class="moviceImgItem"></div>
              <div class="title">{{item.title}}</div>
              <div class="rating">
                豆瓣评分 {{item.rating.average}}
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>


    <Navbar></Navbar>
  </div>
</template>

<script>
  import Loading from './Loading'
  import Navbar from './Navbar'
  export default {
    name: 'Hot',
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
      self = this
      self.getData()

    },
    methods: {
      getData(params) {
        this.$api.default.get('in_theaters', (err, res) => {
          this.movices = JSON.parse(res.text)
          this.loading = false
        })
      }
    }
  }

</script>

<style scoped>
  .movices {
    padding: 0;
    margin: 0;
  }
  
  .moviceImg {
    overflow: hidden;
  }
  
  .moviceImg>img {
    width: 100%;
  }
  
  @media screen and (max-width: 320px) {
    .moviceImg {
      height: 135px;
    }
  }
  
  @media screen and (min-width:360px) and (max-width: 375px) {
    .moviceImg {
      height: 165px;
    }
  }
  
  @media screen and (min-width:376px) and (max-width: 420px) {
    .moviceImg {
      height: 180px;
    }
  }
  
  @media screen and (min-width:700px) {
    .moviceImg {
      height: 200px;
    }
    .movices>li {
      width: 20% !important;
    }
  }
  
  .movices>li {
    width: 33.3333%;
    text-align: center;
    display: block;
  }
  
  .paddingItem {
    padding: .5rem .2rem;
  }
  
  .title {
    width: 100%;
    font-size: .9rem;
    height: 1.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }
  
  .rating {
    color: blue;
    text-align: left;
    font-size: .6rem;
  }
</style>