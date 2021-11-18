<template>
    <div>
        <div class="box">
            <!-- <img src="" alt=""> -->
            <van-search v-model="value" placeholder="请输入搜索关键词" />
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="../../public/img1.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../public/img1.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../public/img1.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../public/img1.jpg" alt="">
            </van-swipe-item>
        </van-swipe>
        <van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
/><van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
/><van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
/><van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
/>
    </div>
</template>

<script>
    export default {
        name:'Home',
        data(){
            return {
                value: '',
            }
        }
    }
</script>

<style lang="scss" scoped>
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
    }

    .box {
        img{
            width: 50px;
            height: 50px;
            background-color: red;
        }
    }

    .van-swipe {
        img {
            width: 100%;
        }
    }
</style>