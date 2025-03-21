<template>
	<view class="content">
		<view :style='{"minHeight":"100vh","padding":"0px 0 80rpx","borderColor":"#21d5ae","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230306/ce8b0f03fe0e46b480e12549ceaf5143.png) no-repeat 106% top / 300rpx,#fff","borderWidth":"0px 0 0","display":"block","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
			<view :style='{"padding":"40rpx 40rpx 60rpx","boxShadow":"inset 0px 0px 0px 0px #f7dcab","margin":"0px auto 60rpx","borderColor":"#c8d9eb","display":"flex","justifyContent":"space-between","borderRadius":"0","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230306/28b55989d92e437eabc2dd98c324a6df.png) no-repeat left bottom / 90% auto","borderWidth":"0px 0px 12rpx","width":"calc(100% - 0px)","position":"relative","borderStyle":"solid","height":"auto"}' @tap="onPageTap('../user-info/user-info')" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"padding":"0","margin":"0","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 160rpx)","position":"static","height":"auto","order":"2"}' v-if="tableName=='yonghu'" class="userinfo">
					<image :style='{"padding":"0px","margin":"0px 0 20rpx 60rpx","borderColor":"#1bd0a9","borderRadius":"100%","objectFit":"cover","textAlign":"center","background":"rgba(255,255,255,.6)","borderWidth":"0px","width":"160rpx","borderStyle":"solid","height":"160rpx"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"padding":"20rpx 20rpx 40rpx","boxShadow":"0px 52rpx 52rpx -60rpx #666","margin":"20rpx auto 0","borderColor":"#fbd341","flexDirection":"column","display":"flex","float":"left","justifyContent":"center","minHeight":"344rpx","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}' class="info">
						<view :style='{"padding":"4rpx 8rpx","borderColor":"#ccc","margin":"0 0 0px","color":"#8f8adb","borderWidth":"0 0 2rpx","width":"90%","lineHeight":"60rpx","fontSize":"32rpx","borderStyle":"dashed","fontWeight":"600"}'>{{user.yonghuzhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
				</view>
				<view :style='{"padding":"0","margin":"0","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 160rpx)","position":"static","height":"auto","order":"2"}' v-if="tableName=='weixiuyuan'" class="userinfo">
					<image :style='{"padding":"0px","margin":"0px 0 20rpx 60rpx","borderColor":"#1bd0a9","borderRadius":"100%","objectFit":"cover","textAlign":"center","background":"rgba(255,255,255,.6)","borderWidth":"0px","width":"160rpx","borderStyle":"solid","height":"160rpx"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"padding":"20rpx 20rpx 40rpx","boxShadow":"0px 52rpx 52rpx -60rpx #666","margin":"20rpx auto 0","borderColor":"#fbd341","flexDirection":"column","display":"flex","float":"left","justifyContent":"center","minHeight":"344rpx","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}' class="info">
						<view :style='{"padding":"4rpx 8rpx","borderColor":"#ccc","margin":"0 0 0px","color":"#8f8adb","borderWidth":"0 0 2rpx","width":"90%","lineHeight":"60rpx","fontSize":"32rpx","borderStyle":"dashed","fontWeight":"600"}'>{{user.weixiuzhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
				</view>
				<view :style='{"padding":"20rpx 0 0","margin":"20rpx 0 0","borderColor":"#1bd0a9","alignItems":"flex-start","display":"flex","justifyContent":"center","left":"280rpx","background":"none","borderWidth":"0px","width":"160rpx","position":"absolute","borderStyle":"solid","height":"160rpx"}' class="setting">
					<view :style='{"border":"0","width":"72rpx","lineHeight":"72rpx","fontSize":"84rpx","color":"#333","borderRadius":"0"}' class="cuIcon-settings"></view>
				</view>
			</view>
		
		
			<view :style='{"padding":"0px 2% 0 0","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0px","borderColor":"#1bd0a9","display":"block","justifyContent":"space-between","borderRadius":"0px","flexWrap":"wrap","background":"none","borderWidth":"0px 0px 0px 0px","width":"calc(100% - 0px)","borderStyle":"solid","height":"auto"}' class="list">

				<block v-for="item in menuList" v-bind:key="item.roleName">
					<block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.backMenu">
						<block v-bind:key="sort" v-for=" (child,sort) in menu.child">
							<view :style='{"padding":"0 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#e9be70","margin":"0 auto 40rpx","alignItems":"center","display":"flex","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","width":"90%","lineHeight":"100rpx","borderStyle":"solid","height":"100rpx"}' v-if="child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' && child.tableName!='exampaper' && child.tableName!='examquestion' " @tap="onPageTap('../'+child.tableName+'/list?userid='+user.id+'&menuJump='+child.menuJump)" class="li" hover-class="hover">
								<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"60rpx","color":"#8f8adb"}' :class="child.appFrontIcon"></view>
								<view :style='{"width":"100%","padding":"0 8rpx","lineHeight":"88rpx","fontSize":"32rpx","color":"#333","flex":"1"}' class="text">{{child.menu}}</view>
								<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"32rpx","color":"#333"}' class="cuIcon-right"></view>
							</view>
						</block>
					</block>
				</block>


			</view>
		</view>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
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
			};
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
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		methods: {
			onPageTap(url) {
                uni.setStorageSync("useridTag",1);
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
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
</style>
