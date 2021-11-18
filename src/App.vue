<template>
  <div id="app">
    <van-nav-bar
      :title="pageTitle"
      :left-arrow="showBackArrow"
      @click-left='getBack()'
      v-show='isNavbar'
    />
    <router-view />
    <div class="tabbar">
      <van-tabbar v-model="active">
        <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/Shopcar" icon="shopping-cart-o"
          >购物</van-tabbar-item
        >
        <van-tabbar-item to="/User" icon="friends-o">个人</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      pageTitle: "标题",
      showBackArrow:true,
      isNavbar:true,
    };
  },
  methods:{
    getBack(){
      console.log('返回')
      this.$router.back();
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        if (route.meta) {
          let { pageTitle,mainPage,isNavbar} = route.meta;
          this.pageTitle = pageTitle;
          this.showBackArrow = mainPage ? false : true;
          this.isNavbar = isNavbar ? false : true;
        }
      },
      immediate: true, // immediate立即执行
    },
  },
};
</script>
<style lang="scss">
#app {
  min-width: 320px;
  max-width: 750px;
  margin: auto;

  .van-tabbar {
    min-width: 320px;
    max-width: 750px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
