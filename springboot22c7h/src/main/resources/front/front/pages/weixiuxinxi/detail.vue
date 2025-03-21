
<template>
<view>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"minHeight":"100vh","width":"100%","padding":"20rpx 0 132rpx","position":"relative","background":"#fff","height":"auto"}'>
						<swiper :style='{"border":"0px dotted #f7de91","boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"0px ","margin":"0px auto","borderColor":"#fb9a40","borderRadius":"20rpx","background":"#fff","borderWidth":"0 0 0px","width":"calc(100% - 0px)","borderStyle":"solid","height":"560rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
				<swiper-item :style='{"width":"100%","borderRadius":"20rpx","background":"none","height":"560rpx"}' v-for="(swiper,index) in swiperList" :key="index">
					<image :style='{"width":"calc(100% - 40rpx)","margin":"0px auto","objectFit":"cover","borderRadius":"20rpx","display":"block","height":"560rpx"}' mode="aspectFill" v-if="swiper.substring(0,4)=='http'" :src="swiper"></image>
					<image :style='{"width":"calc(100% - 40rpx)","margin":"0px auto","objectFit":"cover","borderRadius":"20rpx","display":"block","height":"560rpx"}' mode="aspectFill" v-else :src="baseUrl+swiper"></image>
				</swiper-item>
			</swiper>
									            <view :style='{"padding":"0px 24rpx 24rpx","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}' class="detail-content">

				<view :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx","borderColor":"#c8d9eb","color":"#8f8adb","textAlign":"left","borderWidth":"0 0 8rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"double","fontWeight":"600"}' class="lable">标题：</view>
					<view :style='{"padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"32rpx","textIndent":"2em"}' class="text">{{detail.biaoti}}</view>
				</view>

				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","borderColor":"#c8d9eb","color":"#8f8adb","textAlign":"left","borderWidth":"0 0 8rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"double","fontWeight":"600"}'>维修时间：</view>
					<view  class="text" :style='{"padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"32rpx","textIndent":"2em"}'>{{detail.weixiushijian}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","borderColor":"#c8d9eb","color":"#8f8adb","textAlign":"left","borderWidth":"0 0 8rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"double","fontWeight":"600"}'>用户账号：</view>
					<view  class="text" :style='{"padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"32rpx","textIndent":"2em"}'>{{detail.yonghuzhanghao}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","borderColor":"#c8d9eb","color":"#8f8adb","textAlign":"left","borderWidth":"0 0 8rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"double","fontWeight":"600"}'>用户姓名：</view>
					<view  class="text" :style='{"padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"32rpx","textIndent":"2em"}'>{{detail.yonghuxingming}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","borderColor":"#c8d9eb","color":"#8f8adb","textAlign":"left","borderWidth":"0 0 8rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"double","fontWeight":"600"}'>维修地址：</view>
					<view  class="text" :style='{"padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"32rpx","textIndent":"2em"}'>{{detail.weixiudizhi}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","borderColor":"#c8d9eb","color":"#8f8adb","textAlign":"left","borderWidth":"0 0 8rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"double","fontWeight":"600"}'>维修账号：</view>
					<view  class="text" :style='{"padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"32rpx","textIndent":"2em"}'>{{detail.weixiuzhanghao}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","borderColor":"#c8d9eb","color":"#8f8adb","textAlign":"left","borderWidth":"0 0 8rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"double","fontWeight":"600"}'>维修姓名：</view>
					<view  class="text" :style='{"padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"32rpx","textIndent":"2em"}'>{{detail.weixiuxingming}}</view>
				</view>



				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","borderColor":"#c8d9eb","color":"#8f8adb","textAlign":"left","borderWidth":"0 0 8rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"double","fontWeight":"600"}'>简介</view>
					<view class="text" :style='{"padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"32rpx","textIndent":"2em"}'>{{detail.jianjie}}</view>
				</view>

				<view v-if="userid" class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","borderColor":"#c8d9eb","color":"#8f8adb","textAlign":"left","borderWidth":"0 0 8rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"double","fontWeight":"600"}'>审核状态：</view>
					<view v-if="detail.sfsh=='是'" class="text" :style='{"padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"32rpx","textIndent":"2em"}'>通过</view>
					<view v-if="detail.sfsh=='否'" class="text" :style='{"padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"32rpx","textIndent":"2em"}'>不通过</view>
					<view v-if="detail.sfsh=='待审核'" class="text" :style='{"padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"32rpx","textIndent":"2em"}'>待审核</view>
				</view>
				<view v-if="userid" class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 20rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","borderColor":"#c8d9eb","color":"#8f8adb","textAlign":"left","borderWidth":"0 0 8rpx","width":"100%","lineHeight":"68rpx","fontSize":"32rpx","borderStyle":"double","fontWeight":"600"}'>审核回复</view>
					<view class="text" :style='{"padding":"12rpx 20rpx 20rpx 0","margin":"0px 0 0","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"32rpx","textIndent":"2em"}'>{{detail.shhf}}</view>
				</view>

				<view class="detail-list-item rich" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"24rpx 24rpx","margin":"0 0 24rpx 0","borderColor":"#e9be70","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","color":"#8f8adb","textAlign":"left","width":"100%","lineHeight":"1.5","fontSize":"32rpx","fontWeight":"600"}'>维修内容</view>
					<view class="rich-text" :style='{"minHeight":"240rpx","border":"0px solid #f7de91","padding":"8rpx 20rpx 0 0","boxShadow":"0 0px 0px rgba(182,158,18,.4),inset 0px 0px 0px 0px #fcf6d6","margin":"0","borderRadius":"0px","color":"#666","background":"none","width":"calc(100% - 8rpx)","lineHeight":"1.5","fontSize":"32rpx","textIndent":"2em"}'>
						<rich-text :nodes="detail.weixiuneirong"></rich-text>
					</view>
				</view>



				<view class="bottom-content bg-white tabbar border shop" :style='{"width":"100%","padding":"20rpx 0px","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>

					<button :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}' v-if="userid&&isAuth('weixiuxinxi','维修')" @tap="onAcrossTap('weixiujilu','是','','')" class="cu-btn bg-brown round shadow-blur" >维修</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}' v-if="!userid&&isAuthFront('weixiuxinxi','维修')" @tap="onAcrossTap('weixiujilu','是','','')" class="cu-btn bg-brown round shadow-blur" >维修</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}' v-if="userid&&isAuth('weixiuxinxi','审核')" @tap="onSHTap">审核</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}' v-if="!userid&&isAuthFront('weixiuxinxi','审核')" @tap="onSHTap">审核</button>
				</view>
			</view>

			<!-- 确认完成弹窗 -->
			<uni-popup class="popup-content" ref="popup" type="center">
				<form class="popup-form" style="background: #fff;width: 300px;display: block;border-radius: 10px;padding: 20px;text-align: center;">
					<view class=" margin-top">
						<picker @change="sfshChange" :value="sfshIndex" :range="sfshOptions">
							<view class="uni-input">{{detail.sfsh?detail.sfsh:'选择审核结果'}}</view>
						</picker>
					</view>
					<view class="">
						<!-- <view class="title">审核回复</view> -->
						<textarea style="width: 200px;" v-model="detail.shhf" placeholder="审核回复"></textarea>
						<!-- <input v-model="douyinId" placeholder="审核回复" name="input"></input> -->
					</view>
					<view class="btn-content">
						<button style="margin: 0 10px" @tap="onCloseWinTap" class="cu-btn bg-cyan">取消</button>
						<button style="margin: 0 10px" @tap="onFinishTap" class="cu-btn bg-red">确认</button>
					</view>
				</form>
			</uni-popup>
		</view>
	</view>
</mescroll-uni>
</view>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
                userid: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: {},
				sfshIndex: -1,
				sfshOptions: ['通过','不通过', '待审核'],
				count: 0,
				timer: null
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {
			this.id = options.id;
            if(options.userid) {
                this.userid = options.userid;
            }
			// 渲染数据
			this.init();
		},
        onUnload() {
            if(this.timer) {
                clearInterval(this.timer);
            }
        },
		async onShow(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
		},
		destroyed: function() {
			//window.clearInterval(this.inter);
		},
		methods: {
			// 支付
			onPayTap(){
				uni.setStorageSync('paytable','weixiuxinxi');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
            },
			// 跨表
			onAcrossTap(tableName,crossOptAudit,statusColumnName,tips,statusColumnValue){
				if(crossOptAudit=='是'&&this.detail.sfsh!='是') {
					this.$utils.msg("请审核通过后再操作");
					return
				}
				uni.setStorageSync('crossTable','weixiuxinxi');
				uni.setStorageSync(`crossObj`, this.detail);
				uni.setStorageSync(`statusColumnName`, statusColumnName);
				uni.setStorageSync(`statusColumnValue`, statusColumnValue);
				uni.setStorageSync(`tips`, tips);
				if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
					var obj = uni.getStorageSync('crossObj');
					for (var o in obj){
						if(o==statusColumnName && obj[o]==statusColumnValue){
							this.$utils.msg(tips);
							return
						}
					}
				}
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(){
                if(this.timer) {
                    clearInterval(this.timer);
                }
				let res = await this.$api.info('weixiuxinxi', this.id);
				this.detail = res.data;
				// 轮播图片
				this.swiperList = this.detail.tupian ? this.detail.tupian.split(",") : [];
				//修改富文本的图片样式
				this.detail.weixiuneirong = this.detail.weixiuneirong.replace(/img src/gi,"img style=\"width:100%;\" src");
			},

			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },



			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				url=_this.$base.url +  url;
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			//
			onCartTabTap() {
				this.$utils.tab('../shop-cart/shop-cart')
			},
			// 添加评论
			async onCommentTap() {
				this.$utils.jump(`../discussweixiuxinxi/add-or-update?refid=${this.id}`)
			},
			onSHTap() {
				this.$refs.popup.open()
			},
			// 完成审核
			async onFinishTap() {
				if(!this.detail.sfsh){
					this.$utils.msg('请选择审核状态');
					return
				}
				if(!this.detail.shhf){
					this.$utils.msg('请填写审核回复');
					return
				}
				if(this.detail.sfsh=="通过"){
					this.detail.sfsh = '是'
				}
				if(this.detail.sfsh=="不通过"){
					this.detail.sfsh = '否'
				}
				if(this.detail.sfsh=="待审核"){
					this.detail.sfsh = '待审核'
				}
				await this.$api.update('weixiuxinxi', this.detail);
				this.$utils.msg('审核成功');
				this.$refs.popup.close();
			},
			// 关闭窗口
			onCloseWinTap() {
				this.$refs.popup.close()
			},
			sfshChange(e){
				console.log(this.detail)
				this.sfshIndex = e.target.value
				this.detail.sfsh = this.sfshOptions[this.sfshIndex]
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;
	
			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	audio {
		display: flex;
		flex-direction: column;
	}
	
	.audio /deep/ .uni-audio-default {
		width: inherit;
	}
</style>
