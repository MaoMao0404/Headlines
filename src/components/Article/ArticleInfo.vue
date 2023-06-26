<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{item.title}}</span>
          <!-- 单张图片 -->
          <img :src="item.cover.images[0]" alt="" class="thumb"  v-if="item.cover.type === 1">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="item.cover.type === 3">
          <img :src="item.cover.images[0]" alt="" class="thumb">
          <img :src="item.cover.images[1]" alt="" class="thumb">
          <img :src="item.cover.images[2]" alt="" class="thumb">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者 {{item.aut_name}}&nbsp;&nbsp; {{item.comm_count}}评论 &nbsp;&nbsp; 发布日期{{item.pubdate}}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
    name:'ArticleInfo',
    props:['item']

}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>