<template>
  <div>
    <Loading v-if="loading"></Loading>
    <div v-else id='Movice'>
      <div class="moviceImgAndInfo flex">
        <div class="moviceImg flex flexAlignItems">
          <img :src="movice.images.medium" alt="">
        </div>
        <div class="moviceInfo">
          <div class="title">
            {{movice.title}}
          </div>
          <div class="genres">
            <span v-for="item of movice.genres">{{item}}</span>
          </div>
          <div class="date">
            {{movice.year}} 年上映
          </div>
          <div class="rating">
            {{movice.rating.average}} 豆瓣评分
          </div>
        </div>
      </div>
      <div class="moviceDescription">
        {{movice.summary}}
      </div>
      <div class="staff">
        <h2 class="modelTitle">演职人员</h2>
        <div class="staffList flex">
          <div class="staffItem" v-for="(director,index) in movice.directors">
            <img :src="director.avatars.medium" alt="">
            <span class="directorName">{{director.name}}</span>
            <span class="directorTag">导演</span>
          </div>
          <div class="staffItem" v-for="(cast,index) in movice.casts">
            <img :src="cast.avatars.medium" alt="">
            <span class="castName">{{cast.name}}</span>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import Loading from './Loading'
  export default {
    name: 'Movice',
    components: {
      Loading
    },
    data() {
      return {
        loading: true,
        movice: {}
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.$api.default.get(`subject/${this.$route.params.id}`, (err, res) => {
          this.movice = JSON.parse(res.text)
          this.loading = false
        })
      }
    }

  }

</script>

<style scoped>
  #Movice {
    height: 100%;
    background-color: #dfdfdf;
  }
  
  .moviceImgAndInfo {
    padding: 4rem 1rem;
    padding-bottom: 0;
    background: #bbb url('../assets/bg.jpg');
    box-shadow: 0 3px 2px rgba(0, 0, 0, .25);
  }
  
  .moviceImg {
    margin-right: 1rem;
  }
  
  .moviceInfo>div {
    color: white;
    text-align: left;
    margin-bottom: .25rem;
  }
  
  .title {
    font-size: 1.5rem;
  }
  
  .genres>span {
    display: inline-block;
    border: 1px solid #eee;
    padding: .25rem;
    border-radius: .2rem;
    margin-right: .3rem;
  }
  
  .date,
  .rating,
  .genres>span {
    font-size: .9rem;
  }
  
  .moviceDescription,
  .staff {
    background-color: white;
    font-size: .9rem;
    line-height: 1.9;
    letter-spacing: .07rem;
  }
  
  .moviceDescription {
    margin: .5rem 0;
    padding: .5rem 1rem;
    text-align: left;
    text-indent: 2rem;
  }
  
  .modelTitle {
    padding: 0 1rem;
    margin: 0;
  }
  
  .staff {}
  
  .staffList {
    overflow: auto;
  }
  
  .staffList>.staffItem {
    padding: .3rem;
  }
  
  .staffItem>img {
    width: 100px;
  }
  
  .directorTag {
    font-size: .7rem;
    color: blue;
  }
</style>