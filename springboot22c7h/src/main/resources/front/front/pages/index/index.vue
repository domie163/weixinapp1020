<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"20rpx 0 0","background":"#fff","height":"auto"}'>
		<swiper :style='{"padding":"0px ","boxShadow":"inset 0px 0px 0px 0px #f4ead8","borderColor":"#d7a37a","outline":"0px solid #bbb","margin":"0px","borderRadius":"0px","background":"#fff","borderWidth":"0px","width":"calc(100% - 0px)","borderStyle":"solid","height":"480rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"calc(100% - 40rpx)","margin":"0 auto","position":"relative","borderRadius":"20rpx","background":"none","height":"480rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"calc(100% - 40rpx)","margin":"0px auto","objectFit":"cover","borderRadius":"20rpx","display":"block","height":"480rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"padding":"0 20rpx 32rpx","color":"#333","left":"20rpx","textAlign":"center","background":"rgba(255,255,255,.6)","bottom":"0px","width":"calc(100% - 40rpx)","lineHeight":"60rpx","fontSize":"28rpx","position":"absolute"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>


		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"40rpx 0","boxShadow":"0px 18rpx 8rpx -6rpx #ccc","margin":"48rpx auto","borderColor":"#21d5ae","display":"flex","outline":"0px solid #ccc","borderRadius":"8rpx","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230306/99f6899628694fa99d05c1e3e0b04634.png) no-repeat right bottom / 100% 100%","borderWidth":"0px","width":"calc(100% - 40rpx)","borderStyle":"dashed dashed dashed dashed","height":"auto"}'>
            <block v-for="item in menuList" v-bind:key="item.roleName">
                <block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"width":"25%","padding":"20rpx 0","margin":"0","borderRadius":"100%","background":"none","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"0px","margin":"0px auto","color":"#333","borderRadius":"100%","background":"none","display":"block","width":"64rpx","lineHeight":"64rpx","fontSize":"64rpx","height":"64rpx"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#333","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		
		
		<!-- 系统简介 -->
		<view :style='{"padding":"0px","boxShadow":"0 0px 0px rgba(0,0,0,.2)","margin":"0px auto 0px","borderRadius":"0px","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 48rpx)","position":"relative","justifyContent":"center","height":"auto"}'>
		  <view :style='{"padding":"0px","margin":"0 20rpx","color":"#8f8adb","alignItems":"center","textAlign":"center","display":"flex","overflow":"hidden","borderRadius":"0px","background":"none","width":"48rpx","lineHeight":"1.3","fontSize":"36rpx","fontWeight":"500","height":"auto","order":"2"}'>{{systemIntroductionDetail.title}}</view>
		  <view :style='{"padding":"0px 80rpx 0 16rpx","margin":"0","overflow":"hidden","color":"#fff","borderRadius":"0","textAlign":"center","background":"url() no-repeat right top / auto 100%,#5489ed","display":"none","width":"auto","fontSize":"28rpx","lineHeight":"80rpx","height":"80rpx"}'>{{systemIntroductionDetail.subtitle}}</view>
		  <view :style='{"padding":"8rpx","margin":"0px 0 0 0","borderColor":"#d7a37a","display":"flex","justifyContent":"space-between","borderRadius":"40rpx","background":"#fff","borderWidth":"0px","flex":"1","width":"100%","position":"relative","borderStyle":"solid","height":"auto"}'>
		    <img :style='{"padding":"0px","margin":"0","borderColor":"#60dfc4","objectFit":"cover","borderRadius":"40rpx","borderWidth":"0px","display":"block","width":"100%","borderStyle":"solid","height":"360rpx"}' v-if="systemIntroductionDetail.picture1" :src="baseUrl+systemIntroductionDetail.picture1">
		    <img :style='{"padding":"20rpx","boxShadow":"inset 0px 0px 0px 0px #edf3fe","margin":"0","borderColor":"#aaa","objectFit":"cover","borderRadius":"0 0px 0px 0","borderWidth":"0px 0px 0px 0px","display":"none","width":"48%","borderStyle":"dashed","height":"240rpx"}' v-if="systemIntroductionDetail.picture2" :src="baseUrl+systemIntroductionDetail.picture2">
		    <img :style='{"padding":"24rpx","boxShadow":"inset 0px 0px 112rpx 0px #fff","margin":"0","borderColor":"#e9be70","objectFit":"cover","display":"none","right":"12rpx","borderRadius":"10%","borderWidth":"8rpx 4rpx 4rpx 4rpx","width":"30%","position":"absolute","borderStyle":"solid","height":"400rpx"}' v-if="systemIntroductionDetail.picture3" :src="baseUrl+systemIntroductionDetail.picture3">
		  </view>
		  <view :style='{"padding":"28rpx 40rpx 60rpx","boxShadow":"inset 0px 0px 0px 0px #87acf1","margin":"8rpx 0px 0 0","borderColor":"#d7a37a","color":"#333","textIndent":"2em","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230306/7a4b11295d094ff7920aabdb721e063e.png) no-repeat center bottom / 100% auto","borderWidth":"0px","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","borderStyle":"solid","height":"auto","order":"3"}' v-html="systemIntroductionDetail.content"></view>
		  <view :style='{"width":"82%","position":"absolute","top":"152rpx","background":"url() no-repeat","display":"none","height":"36rpx"}' />
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>

		<!-- 商品推荐 -->
		<!-- 商品推荐 -->
		
		
		<!-- 关于我们 -->
		<view :style='{"padding":"0px","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"60rpx auto 40rpx","borderRadius":"0px","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 48rpx)","position":"relative","justifyContent":"center","height":"auto"}'>
		  <view :style='{"padding":"0px","margin":"0 20rpx","color":"#8f8adb","alignItems":"center","textAlign":"center","display":"flex","overflow":"hidden","borderRadius":"0px","background":"none","width":"48rpx","lineHeight":"1.3","fontSize":"36rpx","fontWeight":"500","height":"auto"}'>{{aboutUsDetail.title}}</view>
		  <view :style='{"padding":"0px 80rpx 0 16rpx","margin":"0px 0 0","overflow":"hidden","color":"#fff","borderRadius":"0","textAlign":"center","background":"url() no-repeat right top / auto 100%,#5489ed","display":"none","width":"auto","fontSize":"28rpx","lineHeight":"80rpx","height":"80rpx"}'>{{aboutUsDetail.subtitle}}</view>
		  <view :style='{"border":"0px double #ffeeba","padding":"0px","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0px 0 0","display":"flex","float":"right","justifyContent":"space-between","borderRadius":"0","flexWrap":"wrap","background":"none","flex":"1","width":"100%","height":"auto","order":"1"}'>
		    <img :style='{"padding":"0px","boxShadow":"inset 0px 0px 112rpx 0px #fff","margin":"0px 0 0","borderColor":"#e1b698 #e1b698 #c87940","objectFit":"cover","borderRadius":"40rpx","borderWidth":"0px","background":"#fff","display":"inline-block","width":"100%","borderStyle":"solid","height":"360rpx"}' v-if="aboutUsDetail.picture1" :src="baseUrl+aboutUsDetail.picture1">
		    <img :style='{"padding":"0px","margin":"0px","borderColor":"#555","objectFit":"cover","borderRadius":"40rpx 40rpx 0 0","borderWidth":"0 0 2rpx","display":"none","width":"48%","borderStyle":"solid","height":"360rpx"}' v-if="aboutUsDetail.picture2" :src="baseUrl+aboutUsDetail.picture2">
		    <img :style='{"width":"48%","margin":"0px","objectFit":"cover","borderRadius":"16rpx","display":"none","height":"160rpx"}' v-if="aboutUsDetail.picture3" :src="baseUrl+aboutUsDetail.picture3">
		  </view>
		  <view :style='{"padding":"28rpx 40rpx 60rpx","boxShadow":"0px 0px 0px #ccc","margin":"8rpx 0px 0 0","borderColor":"#c87940","color":"#333","textIndent":"2em","float":"left","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230306/7a4b11295d094ff7920aabdb721e063e.png) no-repeat center bottom / 100% auto","borderWidth":"0px","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","borderStyle":"solid","height":"auto","order":"2"}' v-html="aboutUsDetail.content"></view>
		  <view :style='{"width":"80%","position":"absolute","top":"140rpx","background":"url() no-repeat","display":"none","height":"36rpx "}' />
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>

		<!-- 商品列表 -->
																																												<!-- 商品列表 -->
		
		
		<!-- 新闻资讯 -->
																																		<view class="listBox news">
			<view v-if="false && 1 == 1" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"padding":"0 92rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"0px auto 0px","overflow":"hidden","borderRadius":"0","background":"url(http://codegen.caihongy.cn/20230306/9525974a4919488db3193cbaa0e77d76.png) no-repeat left top / auto 100%,url(http://codegen.caihongy.cn/20230306/824b6c82b43b4aefb17550fdfbf82251.png) no-repeat right top / auto 100%,url(http://codegen.caihongy.cn/20230306/e447245591e645419e37f99a09a93bc0.png) repeat-x center top / auto 100%","display":"flex","width":"calc(90% - 40rpx)","position":"relative","justifyContent":"space-between","height":"84rpx"}'>
				<view :style='{"padding":"0","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0px auto 0","color":"#8f8adb","textAlign":"center","display":"flex","minWidth":"240rpx","justifyContent":"center","borderRadius":"0px","background":"none","width":"calc(100% - 0px)","fontSize":"32rpx","lineHeight":"104rpx","fontWeight":"600","height":"104rpx"}'>新闻资讯</view>
				<text :style='{"padding":"0 20rpx 0 0","margin":"0px 60rpx 0 0","color":"#555","alignItems":"center","background":"none","display":"flex","fontSize":"28rpx","position":"absolute","right":"20rpx","height":"84rpx","zIndex":"999"}' @tap="onPageTap('news')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
					  
						
						
		  <!-- 样式4 -->
		  		  <view class="news-box1" :style='{"padding":"0px 24rpx","margin":"60rpx 0 60rpx","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
			<view @tap="onNewsDetailTap(item.id)" v-for="(item,index) in news" :key="index" class="list-item" :style='{"padding":"0px 0","margin":"0 0 40rpx","borderColor":"#fbd341 #eee #fbd341","borderRadius":"0px","flexWrap":"wrap","background":"rgba(255,255,255,1)","borderWidth":"0px","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
			  <view class="list-item-body" :style='{"padding":"20rpx","boxShadow":"inset 0px 0px 112rpx 0px #ecf2f9,0px 12rpx 18rpx -12rpx #ccc","margin":"20rpx 0 0 0","borderColor":"#f0d9da #c8d9eb #f0d9da","borderRadius":"40rpx","background":"none","borderWidth":"2rpx","width":"100%","borderStyle":"solid","height":"auto","order":"2"}'>
				<view :style='{"padding":"0 20rpx","margin":"0","whiteSpace":"nowrap","overflow":"hidden","color":"#8f8adb","width":"100%","lineHeight":"48rpx","fontSize":"32rpx","textOverflow":"ellipsis","fontWeight":"600","order":"2"}' class="title ">{{item.title}}</view>
				<view :style='{"padding":"0 20rpx","margin":"0","overflow":"hidden","color":"#666","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textIndent":"2em","height":"96rpx"}' class="desc ">{{item.introduction}}</view>
				<view :style='{"padding":"0 20rpx","margin":"0","color":"#999","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx"}' class="time">{{item.addtime.split(" ")[0]}}</view>
			  </view>
			  <image :style='{"width":"100%","margin":"0 auto","objectFit":"cover","borderRadius":"20rpx","display":"block","height":"300rpx"}' mode="aspectFill" class="listmpic" :src="baseUrl+item.picture"></image>
			</view>
		  </view>
		  		  
		  <!-- 样式5 -->
		  		  
		  <!-- 样式6 -->
		  		  
		  <!-- 样式7 -->
		  		  
		  <!-- 样式8 -->
		  		  
		  <!-- 样式9 -->
		  			
			<view v-if="false && 1 == 3" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
														<!-- 新闻资讯 -->
				

	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
                role : '',
                aboutUsDetail: {},
                systemIntroductionDetail: {},
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				news: [],
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
        async onLoad(){
            this.role = uni.getStorageSync("role");
            let table = uni.getStorageSync("nowTable");
            let res = await this.$api.session(table);
            this.user = res.data;
            this.tableName = table;
            let menus = menu.list();
            this.menuList = menus;
            this.menuList.forEach((item,key) => {
                if(this.role==item.roleName) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
            let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.page('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
            this.getAboutUs();
            this.getSystemIntroduction();
			// 新闻资讯
			res = await this.$api.list('news', {
				page: 1,
				limit: 6
			});
			this.news = res.data.list


		},

		methods: {

			//轮播图跳转
			onSwiperTap(e) {

			},
            async getAboutUs() {
                let res = await this.$api.info('aboutus', 1)
                this.aboutUsDetail = res.data;
            },
            async getSystemIntroduction() {
                let res = await this.$api.info('systemintro', 1)
                this.systemIntroductionDetail = res.data;
            },
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
                uni.navigateTo({
                    url: url,
                    fail: function() {
                        uni.switchTab({
                            url: url
                        });
                    }
                });
            }
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
