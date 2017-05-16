<template>
  <div id='About'>
    <div class="myPhoto">
      <img src="../assets/myPhoto.jpg" alt="">
    </div>
    <div class="webappInfo">
      <div class="description">
        <span>该 Web app 主要作为学习使用, 相当于是一个精简版的豆瓣电影, 为用户提供一些简单的电影资讯。</span>
        <span>服务器端采用的是 Node 写的反向代理, 前端请求该代理服务器相关 API, 代理服务器再对有跨域限制的豆瓣服务器进行请求, 返回相应结果后再返回到前端。</span>
        <span>前端采用 Vue 作为开发框架, 采用 web component 开发思想，为大量页面元素编写了组件，便于页面元素的重复利用, 手机端样式未采用任何 CSS 样式库, 纯手写的 Flex 布局。 </span>
      </div>
    </div>
    <div class="copyright">
      <span>热气腾腾 版权所有</span>
      <span>Copyright &copy; Plover</span>
    </div>
    <Navbar></Navbar>
  </div>
</template>

<script>
  import Navbar from './Navbar'

  export default {
    name: 'About',
    components: {
      Navbar
    }
  }

</script>

<style scoped>
  #About {
    height: 100%;
    background-color: #dfdfdf;
  }
  
  .myPhoto {
    border-bottom: 1px solid #dfdfdf;
    padding: 1rem;
    text-align: center;
  }
  .myPhoto > img{
    width:5rem;
    border: 2px solid #dfdfdf;
    border-radius: 50%;
  }
  
  .myPhoto,
  .webappInfo {
    background-color: white;
  }
  
  .webappInfo {
    box-shadow: 0 3px 2px rgba(0, 0, 0, .25);
    padding: .5rem 1rem;
  }
  
  .description>span {
    display: block;
    font-size: .9rem;
    padding: .3rem 0;
    line-height: 1.7;
    letter-spacing: .07rem;
  }
  
  .copyright {
    width: 100%;
    bottom: 0;
    position: fixed;
    text-align: center;
    padding-bottom: 3rem;
  }
  
  .copyright>span {
    display: block;
    font-size: .8rem;
    padding: .2rem;
    color: grey;
  }
</style>