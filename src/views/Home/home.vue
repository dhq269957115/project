<template>
  <div id="home">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item
        ><img
          src="http://localhost:3000/\upload\upload_c083ba46dadb128535e92ccb9b5aa446.jpg"
          alt=""
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="http://localhost:3000/\upload\upload_160929dda39a92ef24c0da320091b598.jpg"
          alt=""
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="http://localhost:3000/\upload\upload_ff80d33fea9fa5657c731663ef36efad.jpg"
          alt=""
      /></mt-swipe-item>
    </mt-swipe>
    <div>
      <ul class="list">
        <li v-for="(item, index) in grids" :key="index" class="i">
          <img :src="item.src" alt="" />
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import src from "../../assets/logo.png";
export default {
  name: "index",
  data() {
    return {
      grids: [
        { id: 1, src: src, title: "新闻资讯" },
        { id: 2, src: src, title: "新闻资讯" },
        { id: 3, src: src, title: "新闻资讯" },
        { id: 4, src: src, title: "新闻资讯" },
        { id: 5, src: src, title: "新闻资讯" },
        { id: 6, src: src, title: "新闻资讯" },
      ],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#home {
  height: 150px;
}
#hoem img {
  width: 100%;
  height: 150px;
}
.list {
  width: 100%;
  height: 200px;
}
.i {
  width: 70px;
  height: 97px;
  list-style: none;
  float: left;
  margin-left: 27px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.i img {
  width: 100%;
}
</style>
