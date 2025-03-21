<template>
	<view class="content">
		<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"100rpx 0 500rpx","background":"url(http://codegen.caihongy.cn/20230307/094c3ad2a7b2458cb232f725b0df6c3c.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20230307/8849983a5e0d4d478e58af3273722fb2.png) no-repeat center bottom / 100% auto,#c8d9eb","height":"100%"}'>
			<view :style='{"padding":"220rpx 40rpx 160rpx","boxShadow":"0px 0px 0px #eee","borderColor":"#eee","margin":"0px auto","borderRadius":"40rpx","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230307/f3271c90048c489eac6e1dad3e5f7b8f.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20230307/b55ee0c1c78748be9a3ed379b82c35f7.png) no-repeat center bottom / 100% auto,url(http://codegen.caihongy.cn/20230307/0edf45915c52473a89294f6620bb5eb9.png) repeat-y center center / 100% auto","borderWidth":"0px","display":"flex","width":"80%","borderStyle":"solid","height":"auto"}'>
				<image :style='{"margin":"0 auto","borderRadius":"8rpx","objectFit":"cover","top":"40rpx","display":"none","width":"60%","position":"absolute","opacity":"1","height":"auto"}' src="http://codegen.caihongy.cn/20230307/5dacc9a8e393410aae738af597538521.png" mode="aspectFill"></image>
				<view v-if="loginType==1" :style='{"width":"100%","margin":"0 0 40rpx","borderRadius":"12rpx","background":"none","height":"auto"}' class="uni-form-item uni-column">
					<input v-model="username" :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#ddd","color":"#333","borderRadius":"40rpx","background":"rgba(255,255,255,.8)","borderWidth":"2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' type="text" class="uni-input" name="" placeholder="请输入账号" />
				</view>
				<view v-if="loginType==1" :style='{"width":"100%","margin":"0 0 40rpx","borderRadius":"12rpx","background":"none","height":"auto"}' class="uni-form-item uni-column">
					<input v-model="password" :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#ddd","color":"#333","borderRadius":"40rpx","background":"rgba(255,255,255,.8)","borderWidth":"2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' type="password" class="uni-input" name="" placeholder="请输入密码" />
				</view>
				<picker v-if="roleNum>1" :style='{"boxShadow":"0px 0px 0px #2c77cb","margin":"0","borderColor":"#ddd","borderRadius":"40rpx","background":"rgba(255,255,255,.8)","borderWidth":"2rpx","width":"100%","borderStyle":"solid","height":"auto"}' @change="optionsChange" :value="index" :range="options">
					<view class="uni-picker-type" :style='{"width":"100%","padding":"0 24rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#767676"}'>{{options[index]}}</view>
				</picker>
				<button v-if="loginType==1" class="btn-submit" @tap="onLoginTap" type="primary" :style='{"padding":"0 40rpx","boxShadow":"0px 6rpx 12rpx -10rpx #333","margin":"40rpx auto 24rpx","borderColor":"#6dd5cb","color":"#333","display":"block","borderRadius":"40rpx","background":"linear-gradient(270deg, rgba(249,236,236,1) 0%, rgba(240,217,218,1) 26%, rgba(200,217,235,1) 60%, rgba(236,242,249,1) 100%),#c8d9eb","borderWidth":"0px","width":"100%","lineHeight":"88rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}'>登录</button>
				<button v-if="loginType==2" class="btn-submit" @tap="onFaceLoginTap" type="primary" :style='{"padding":"0 40rpx","boxShadow":"0px 6rpx 12rpx -10rpx #333","margin":"40rpx auto 24rpx","borderColor":"#6dd5cb","color":"#333","display":"block","borderRadius":"40rpx","background":"linear-gradient(270deg, rgba(249,236,236,1) 0%, rgba(240,217,218,1) 26%, rgba(200,217,235,1) 60%, rgba(236,242,249,1) 100%),#c8d9eb","borderWidth":"0px","width":"100%","lineHeight":"88rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}'>人脸识别登录</button>
				<view class="links" :style='{"boxShadow":"0px 0px 0px #eee","padding":"0","margin":"40rpx 0 60rpx","borderRadius":"0px","alignItems":"flex-start","flexWrap":"wrap","textAlign":"center","background":"none","display":"flex","width":"100%","height":"auto"}'>
					<view class="link-highlight" @tap="onRegisterTap('yonghu')" :style='{"border":"0px solid #fbd341","padding":"16rpx 12rpx 16rpx","margin":"0 20rpx 20rpx 0","color":"#333","borderRadius":"20rpx","textAlign":"center","background":"linear-gradient(180deg, rgba(255,255,255,.5) 0%, rgba(236,242,249,.8) 50%)","display":"inline-block","width":"auto","fontSize":"32rpx"}'>注册用户</view>
					<view class="link-highlight" @tap="onRegisterTap('weixiuyuan')" :style='{"border":"0px solid #fbd341","padding":"16rpx 12rpx 16rpx","margin":"0 20rpx 20rpx 0","color":"#333","borderRadius":"20rpx","textAlign":"center","background":"linear-gradient(180deg, rgba(255,255,255,.5) 0%, rgba(236,242,249,.8) 50%)","display":"inline-block","width":"auto","fontSize":"32rpx"}'>注册维修员</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				username: '',
				password: '',
                loginType:1,
				codes: [{
				  num: 1,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 2,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 3,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 4,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}],
				options: [
					'请选择登录用户类型',
				],
                optionsValues: [
					'',
                    'yonghu',
                    'weixiuyuan',
				],
				index: 0,
				roleNum:0,
			}
		},
		onLoad() {
			let options = ['请选择登录用户类型'];
			let menus = menu.list();
			this.menuList = menus;
			for(let i=0;i<this.menuList.length;i++){
				if(this.menuList[i].hasFrontLogin=='是'){
					options.push(this.menuList[i].roleName);
					this.roleNum++;
				}
			}
			if(this.roleNum==1) {
				this.index = 1;
			}	
			this.options = options;
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.loginFrom.content.input.backgroundColor
					// })
				})
			},
			onRegisterTap(tableName) {
                uni.setStorageSync("loginTable", tableName);
				this.$utils.jump('../register/register')
			},
			async onLoginTap() {
                if (!this.username) {
					this.$utils.msg('请输入用户名')
					return
				}
                if (!this.password) {
					this.$utils.msg('请输入用户密码')
					return
				}
                if (!this.optionsValues[this.index]) {
					this.$utils.msg('请选择登录用户类型')
					return
				}
				let res = await this.$api.login(`${this.optionsValues[this.index]}`, {
					username: this.username,
					password: this.password
				});
                uni.removeStorageSync("useridTag");
				uni.setStorageSync("token", res.token);
				uni.setStorageSync("nickname",this.username);
				uni.setStorageSync("nowTable", `${this.optionsValues[this.index]}`);
				res = await this.$api.session(`${this.optionsValues[this.index]}`);
                if(res.data.touxiang) {
                    uni.setStorageSync('headportrait', res.data.touxiang);
                } else if(res.data.headportrait) {
                    uni.setStorageSync('headportrait', res.data.headportrait);
                }
				// 保存用户id
				uni.setStorageSync("userid", res.data.id);
				if(res.data.vip) {
					uni.setStorageSync("vip", res.data.vip);
				}
				uni.setStorageSync("role", `${this.options[this.index]}`);
				this.$utils.tab('../index/index');
			},
			optionsChange(e) {
				this.index = e.target.value
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
