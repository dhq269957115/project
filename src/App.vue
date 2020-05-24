<template>
  <div id="app">
    <div id="nav">
      <!-- //顶部栏 -->
      <mt-header fixed title="首页">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div></div>
    <!-- 底部栏 -->
    <router-view />
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="index">
        <img slot="icon" src="@/assets/logo.png" />
        外卖
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" src="@/assets/logo.png" />
        订单
      </mt-tab-item>
      <mt-tab-item id="find">
        <img slot="icon" src="@/assets/logo.png" />
        发现
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="@/assets/logo.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: "",
    };
  },
  watch: {
    selected: function(newV, oldV) {
      console.log(newV, oldV);
      this.$router.push({ name: newV });
    },
  },
};
</script>

<style></style>
