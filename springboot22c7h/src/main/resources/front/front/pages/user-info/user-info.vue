<template>
<view class="content">
	<view class="box" :style='{"minHeight":"100vh","padding":"0px 0 0px","borderColor":"#21d5ae","background":"url() fixed,#fff","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<view :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","display":"block","height":"auto"}'>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx","color":"#8f8adb","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>用户账号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' disabled="true"  v-model="ruleForm.yonghuzhanghao" placeholder="用户账号"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx","color":"#8f8adb","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>密码</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'  type="password" v-model="ruleForm.mima" placeholder="密码"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx","color":"#8f8adb","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>用户姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.yonghuxingming" placeholder="用户姓名"></input>
			</view>
			<view v-if="tableName=='yonghu'" :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"padding":"0 20rpx","color":"#8f8adb","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="yonghuxingbieChange" :value="yonghuxingbieIndex" :range="yonghuxingbieOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" @tap="yonghutouxiangTap" class="">
				<view class="title" :style='{"padding":"0 20rpx","color":"#8f8adb","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>头像</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx","color":"#8f8adb","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>用户电话</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.yonghudianhua" placeholder="用户电话"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx","color":"#8f8adb","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>身份证号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.shenfenzhenghao" placeholder="身份证号"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='weixiuyuan'" class="">
				<view class="title" :style='{"padding":"0 20rpx","color":"#8f8adb","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>维修账号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' disabled="true"  v-model="ruleForm.weixiuzhanghao" placeholder="维修账号"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='weixiuyuan'" class="">
				<view class="title" :style='{"padding":"0 20rpx","color":"#8f8adb","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>密码</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'  type="password" v-model="ruleForm.mima" placeholder="密码"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='weixiuyuan'" class="">
				<view class="title" :style='{"padding":"0 20rpx","color":"#8f8adb","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>维修姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.weixiuxingming" placeholder="维修姓名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='weixiuyuan'" @tap="weixiuyuantouxiangTap" class="">
				<view class="title" :style='{"padding":"0 20rpx","color":"#8f8adb","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>头像</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view v-if="tableName=='weixiuyuan'" :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"padding":"0 20rpx","color":"#8f8adb","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="weixiuyuanxingbieChange" :value="weixiuyuanxingbieIndex" :range="weixiuyuanxingbieOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='weixiuyuan'" class="">
				<view class="title" :style='{"padding":"0 20rpx","color":"#8f8adb","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"600"}'>维修电话</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.weixiudianhua" placeholder="维修电话"></input>
			</view>
			<view :style='{"padding":"0px","margin":"48rpx 0 0","background":"none","display":"flex","width":"100%","justifyContent":"center","height":"auto"}' class="btn">
				<button @tap="update()" class="cu-btn lg" :style='{"padding":"0 40rpx","boxShadow":"0px 12rpx 12rpx -6rpx #ccc","margin":"0 20rpx","borderColor":"#6dd5cb","color":"#333","minWidth":"240rpx","borderRadius":"40rpx","background":"#f0d9da","borderWidth":"0px","width":"auto","lineHeight":"88rpx","fontSize":"32rpx","borderStyle":"solid","fontWeight":"500","height":"88rpx"}'>保存</button>
				<button @tap="logout()" class="cu-btn lg" :style='{"padding":"0 40rpx","boxShadow":"0px 12rpx 12rpx -6rpx #ddd","margin":"0 20rpx","borderColor":"#ccc","color":"#666","minWidth":"240rpx","borderRadius":"40rpx","background":"#ecf2f9","borderWidth":"0px","width":"auto","lineHeight":"88rpx","fontSize":"32rpx","borderStyle":"solid","fontWeight":"500","height":"88rpx"}'>退出登录</button>
			</view>
		</view>
	</view>
</view>
</template>

<script>
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				ruleForm: {
				},
				tableName:"",
				yonghuxingbieOptions: [],
				yonghuxingbieIndex: 0,
				weixiuyuanxingbieOptions: [],
				weixiuyuanxingbieIndex: 0,
			}
		},
        components: {
            multipleSelect
        },
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad() {
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.ruleForm = res.data;
			this.tableName = table;
			// 自定义下拉框值
			if(this.tableName=='yonghu'){
				this.yonghuxingbieOptions = "男,女".split(',');
				this.yonghuxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.yonghuxingbieIndex = index;
					}
				});
			}
			// 自定义下拉框值
			if(this.tableName=='weixiuyuan'){
				this.weixiuyuanxingbieOptions = "男,女".split(',');
				this.weixiuyuanxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.weixiuyuanxingbieIndex = index;
					}
				});
			}
			this.styleChange()
            this.$forceUpdate()
		},
		methods: {
            // 下拉变化
            yonghuxingbieChange(e) {
                    this.yonghuxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.yonghuxingbieOptions[this.yonghuxingbieIndex]
            },
			yonghutouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},
			weixiuyuantouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},
            // 下拉变化
            weixiuyuanxingbieChange(e) {
                    this.weixiuyuanxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.weixiuyuanxingbieOptions[this.weixiuyuanxingbieIndex]
            },

            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('. .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.userInfoForm.list.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			logout() {
				uni.setStorageSync('token', '');
				this.$utils.jump('../login/login');
			},
			// 注册
			async update() {
				if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$utils.msg(`用户账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `yonghu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.yonghudianhua&&(!this.$validate.isMobile(this.ruleForm.yonghudianhua))){
					this.$utils.msg(`用户电话应输入手机格式`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.shenfenzhenghao&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzhenghao))){
					this.$utils.msg(`身份证号应输入身份证格式`);
					return
				}
				if((!this.ruleForm.weixiuzhanghao) && `weixiuyuan` == this.tableName){
					this.$utils.msg(`维修账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `weixiuyuan` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if((!this.ruleForm.weixiuxingming) && `weixiuyuan` == this.tableName){
					this.$utils.msg(`维修姓名不能为空`);
					return
				}
				if(`weixiuyuan` == this.tableName && this.ruleForm.weixiudianhua&&(!this.$validate.isMobile(this.ruleForm.weixiudianhua))){
					this.$utils.msg(`维修电话应输入手机格式`);
					return
				}
				let table = uni.getStorageSync("nowTable");
				await this.$api.update(table, this.ruleForm);
				this.$utils.msgBack('修改成功');;
			},

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
