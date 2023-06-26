<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar title="头条新闻" fixed/>

    <!-- 导入 注册并使用articleInfo组件 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="finished">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <ArticleInfo v-for="item in artList" :key="item.art_id" :item="item"></ArticleInfo>
        </van-list>
    </van-pull-refresh>  
    
  </div>
</template>

<script>
import { getArticleAPI } from "@/api/articleAPI";

// 导入需要的组件
import ArticleInfo from '@/components/Article/ArticleInfo.vue'

export default {
    name:'Home',
    data() {
        return {
            // 页码值
            page:1,
            // 页面显示数据
            limit:10,
            artList:[],
            // 是否正在加载下一页数据 如果loading为true则不会反复触发load事件
            // 每当下一页数据请求回来 一定把loading从true改为false
            // 防止第一次请求就触发load事件
            loading:true,
            // 所有数据是否加载完毕 没有更多数据了 一定要把false改成true
            // 是否禁止下拉刷新 当内容没有更多时 将false改成true
            finished:false,
            // 下拉刷新变成true 刷新后需要改成false
            isLoading:false,        
        }
    },
    created(){
        this.initArticleList()
    },
    methods:{
        // 封装获取文章列表数据的方法
        async initArticleList(isRefresh){
            // get请求 获取文章列表数据
            const {data: res} = await getArticleAPI(this.page,this.limit)
            console.log(res);

            // 新旧数据拼接
            if (isRefresh) {
                // [新数据在前，旧数据在后]
                this.artList = [...res, ...this.artList]
                this.isLoading = false
            }else{
                // [旧数据在前，新数据在后]
                this.artList = [...this.artList, ...res]
                // 下一页数据请求回来 一定把loading从true改为false
                this.loading = false
            }

            // 没有下一页数据 直接将finished改为true
            if (res.length === 0) {
                this.finished = true
            }
        },
        // 只要被调用 请求下一页数据
        onLoad(){
            this.page++
            this.initArticleList(false)
        },
        // 下拉刷新的处理函数
        onRefresh(){
            this.page++
            this.initArticleList(true)
        }
    },
    components:{ArticleInfo}

}
</script>

<style lang="less" scoped>
.home-container{
    padding: 46px 0 50px 0;

    // .van-nav-bar{
    //     background-color: #007bff;
    // }

    // /deep/.van-nav-bar__title{
    //     color: white;
    // }
}

</style>