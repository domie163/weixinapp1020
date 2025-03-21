<template>
<view class="content">
	<view :style='{"minHeight":"100vh","padding":"0px 0 80rpx","borderColor":"#21d5ae","background":"#fff","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<form :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"32rpx","color":"#8f8adb","textAlign":"right","fontWeight":"600"}' class="title">标题</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.biaoti" v-model="ruleForm.biaoti" placeholder="标题"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="" @tap="tupianTap">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"32rpx","color":"#8f8adb","textAlign":"right","fontWeight":"600"}' class="title">图片</view>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-if="ruleForm.tupian" :src="baseUrl+ruleForm.tupian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"32rpx","color":"#8f8adb","textAlign":"right","fontWeight":"600"}' class="title">维修时间</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' v-model="ruleForm.weixiushijian" placeholder="维修时间" @tap="toggleTab('weixiushijian')"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"32rpx","color":"#8f8adb","textAlign":"right","fontWeight":"600"}' class="title">用户账号</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.yonghuzhanghao" v-model="ruleForm.yonghuzhanghao" placeholder="用户账号"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"32rpx","color":"#8f8adb","textAlign":"right","fontWeight":"600"}' class="title">用户姓名</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.yonghuxingming" v-model="ruleForm.yonghuxingming" placeholder="用户姓名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"32rpx","color":"#8f8adb","textAlign":"right","fontWeight":"600"}' class="title">维修地址</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.weixiudizhi" v-model="ruleForm.weixiudizhi" placeholder="维修地址"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"32rpx","color":"#8f8adb","textAlign":"right","fontWeight":"600"}' class="title">维修账号</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="weixiuzhanghaoChange" :value="weixiuzhanghaoIndex"  :range="weixiuzhanghaoOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input">{{weixiuzhanghaoOptions[weixiuzhanghaoIndex]}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"32rpx","color":"#8f8adb","textAlign":"right","fontWeight":"600"}' class="title">维修姓名</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.weixiuxingming" v-model="ruleForm.weixiuxingming" placeholder="维修姓名"></input>
			</view>
			
			<!-- 否 -->
 

			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"0px","borderWidth":"0px","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"32rpx","color":"#8f8adb","textAlign":"right","fontWeight":"600"}' class="title">简介</view>
				<textarea :style='{"border":"0","minHeight":"240rpx","padding":"40rpx 40rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"none","fontSize":"28rpx"}' v-model="ruleForm.jianjie" placeholder="简介"></textarea>
			</view>
			
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 0px 0","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"32rpx","color":"#8f8adb","fontWeight":"600"}' class="title">维修内容</view>
                <xia-editor ref="editor" :style='{"minHeight":"300rpx","padding":"24rpx 32rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#e9be70","borderRadius":"0px","color":"#666","background":"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)","borderWidth":"0px","width":"100%","fontSize":"32rpx","borderStyle":"solid","height":"auto"}' v-model="ruleForm.weixiuneirong" placeholder="维修内容" @editorChange="weixiuneirongChange"></xia-editor>
			</view>
			
			<view :style='{"padding":"0px","margin":"40rpx 0 0 0","background":"none","display":"flex","width":"100%","justifyContent":"center","height":"auto"}' class="btn" >
				<button :style='{"padding":"0 40rpx","boxShadow":"0px 12rpx 12rpx -6rpx #ccc","margin":"0 40rpx 0 0","borderColor":"#6dd5cb","color":"#333","display":"inline","minWidth":"240rpx","borderRadius":"40rpx","background":"#f0d9da","borderWidth":"0px","width":"auto","lineHeight":"88rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="weixiushijianConfirm" ref="weixiushijian" themeColor="#333333"></w-picker>
	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				biaoti: '',
				jianjie: '',
				tupian: '',
				weixiuneirong: '',
				weixiushijian: '',
				yonghuzhanghao: '',
				yonghuxingming: '',
				weixiudizhi: '',
				weixiuzhanghao: '',
				weixiuxingming: '',
				shhf: '',
				},
				weixiuzhanghaoOptions: [],
				weixiuzhanghaoIndex: 0,
				// 登录用户信息
				user: {},
                ro:{
                   biaoti : false,
                   jianjie : false,
                   tupian : false,
                   weixiuneirong : false,
                   weixiushijian : false,
                   yonghuzhanghao : false,
                   yonghuxingming : false,
                   weixiudizhi : false,
                   weixiuzhanghao : false,
                   weixiuxingming : false,
                   sfsh : false,
                   shhf : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
            this.ruleForm.weixiushijian = this.$utils.getCurDateTime();

			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.yonghuzhanghao = this.user.yonghuzhanghao
			this.ro.yonghuzhanghao = true;
			this.ruleForm.yonghuxingming = this.user.yonghuxingming
			this.ro.yonghuxingming = true;
			this.ruleForm.weixiuzhanghao = this.user.weixiuzhanghao
			this.ro.weixiuzhanghao = true;
			this.ruleForm.weixiuxingming = this.user.weixiuxingming
			this.ro.weixiuxingming = true;


			// 下2
			res = await this.$api.option(`weixiuyuan`,`weixiuzhanghao`,{});
			this.weixiuzhanghaoOptions = res.data;

			// 如果有登录，获取登录后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`weixiuxinxi`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='biaoti'){
					this.ruleForm.biaoti = obj[o];
					this.ro.biaoti = true;
					continue;
					}
					if(o=='jianjie'){
					this.ruleForm.jianjie = obj[o];
					this.ro.jianjie = true;
					continue;
					}
					if(o=='tupian'){
					this.ruleForm.tupian = obj[o].split(",")[0];
					this.ro.tupian = true;
					continue;
					}
					if(o=='weixiuneirong'){
					this.ruleForm.weixiuneirong = obj[o];
					this.ro.weixiuneirong = true;
					continue;
					}
					if(o=='weixiushijian'){
					this.ruleForm.weixiushijian = obj[o];
					this.ro.weixiushijian = true;
					continue;
					}
					if(o=='yonghuzhanghao'){
					this.ruleForm.yonghuzhanghao = obj[o];
					this.ro.yonghuzhanghao = true;
					continue;
					}
					if(o=='yonghuxingming'){
					this.ruleForm.yonghuxingming = obj[o];
					this.ro.yonghuxingming = true;
					continue;
					}
					if(o=='weixiudizhi'){
					this.ruleForm.weixiudizhi = obj[o];
					this.ro.weixiudizhi = true;
					continue;
					}
					if(o=='weixiuzhanghao'){
					this.ruleForm.weixiuzhanghao = obj[o];
					this.ro.weixiuzhanghao = true;
					continue;
					}
					if(o=='weixiuxingming'){
					this.ruleForm.weixiuxingming = obj[o];
					this.ro.weixiuxingming = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
            weixiuneirongChange(e) {
                this.ruleForm.weixiuneirong = e
            },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},
			// 下二随
			async weixiuzhanghaoChange (e) {
				this.weixiuzhanghaoIndex = e.target.value
				this.ruleForm.weixiuzhanghao = this.weixiuzhanghaoOptions[this.weixiuzhanghaoIndex]
				let res = await this.$api.follow(`weixiuyuan`, `weixiuzhanghao`,{
					columnValue: this.ruleForm.weixiuzhanghao
				});
				if(res.data.weixiuxingming){
					this.ruleForm.weixiuxingming = res.data.weixiuxingming
				}
			},

			// 多级联动参数


			// 日长控件选择日期时间
			weixiushijianConfirm(val) {
				console.log(val)
				this.ruleForm.weixiushijian = val.result;
				this.$forceUpdate();
			},


			tupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.tupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {

























//跨表计算判断
				var obj;
				if((!this.ruleForm.weixiuneirong)){
					this.$utils.msg(`维修内容不能为空`);
					return
				}
				if((!this.ruleForm.weixiudizhi)){
					this.$utils.msg(`维修地址不能为空`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`weixiuxinxi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`weixiuxinxi`, this.ruleForm);
						}else{
							await this.$api.add(`weixiuxinxi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`weixiuxinxi`, this.ruleForm);
					}else{
						await this.$api.add(`weixiuxinxi`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
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
