<template>
	<view class="content">
		<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"100rpx 0 500rpx","background":"url(http://codegen.caihongy.cn/20230307/094c3ad2a7b2458cb232f725b0df6c3c.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20230307/8849983a5e0d4d478e58af3273722fb2.png) no-repeat center bottom / 100% auto,#c8d9eb","height":"100%"}' v-if="type==1">
			<view :style='{"minHeight":"600rpx","padding":"220rpx 40rpx 200rpx","boxShadow":"0px 0px 0px #ddd","borderColor":"#eee","margin":"0 auto","borderRadius":"40rpx","background":"url(http://codegen.caihongy.cn/20230307/f3271c90048c489eac6e1dad3e5f7b8f.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20230307/b55ee0c1c78748be9a3ed379b82c35f7.png) no-repeat center bottom / 100% auto,url(http://codegen.caihongy.cn/20230307/0edf45915c52473a89294f6620bb5eb9.png) repeat-y center center / 100% auto","borderWidth":"0px","display":"block","width":"80%","borderStyle":"solid","height":"auto"}'>
				<view class="forget-input" :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}'>
					<input v-model="username" :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#ddd","color":"#333","borderRadius":"40rpx","background":"rgba(255,255,255,.8)","borderWidth":"2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' type="text" placeholder="请输入您的账号" />
				</view>
				<picker :style='{"boxShadow":"0px 0px 0px #2c77cb","margin":"0 0 40rpx 0","borderColor":"#ddd","borderRadius":"40rpx","borderWidth":"2rpx","background":"rgba(255,255,255,.8)","width":"100%","borderStyle":"solid","height":"auto"}' @change="optionsChange" :value="index" :range="options">
					<view class="uni-input" :style='{"width":"100%","padding":"0 24rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}'>{{options[index]}}</view>
				</picker>
				<button class="landing" :style='{"padding":"0 40rpx","boxShadow":"0px 0px 18rpx -12rpx #333","margin":"0 auto 24rpx","borderColor":"#6dd5cb","color":"#333","display":"block","borderRadius":"40rpx","background":"linear-gradient(270deg, rgba(249,236,236,1) 0%, rgba(240,217,218,1) 26%, rgba(200,217,235,1) 60%, rgba(236,242,249,1) 100%),#c8d9eb","borderWidth":"0px","width":"100%","lineHeight":"88rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' @tap="nextClick" type="primary">下一步</button>
			</view>
		</view>
        <view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"100rpx 0 500rpx","background":"url(http://codegen.caihongy.cn/20230307/094c3ad2a7b2458cb232f725b0df6c3c.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20230307/8849983a5e0d4d478e58af3273722fb2.png) no-repeat center bottom / 100% auto,#c8d9eb","height":"100%"}' v-if="type==2">
            <view :style='{"minHeight":"600rpx","padding":"220rpx 40rpx 200rpx","boxShadow":"0px 0px 0px #ddd","borderColor":"#eee","margin":"0 auto","borderRadius":"40rpx","background":"url(http://codegen.caihongy.cn/20230307/f3271c90048c489eac6e1dad3e5f7b8f.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20230307/b55ee0c1c78748be9a3ed379b82c35f7.png) no-repeat center bottom / 100% auto,url(http://codegen.caihongy.cn/20230307/0edf45915c52473a89294f6620bb5eb9.png) repeat-y center center / 100% auto","borderWidth":"0px","display":"block","width":"80%","borderStyle":"solid","height":"auto"}'>
                <view class="forget-input" :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}'>
                    <input v-model="userForm.pquestion"  :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#ddd","color":"#333","borderRadius":"40rpx","background":"rgba(255,255,255,.8)","borderWidth":"2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' type="text" placeholder="密保问题" disabled="disabled"/>
                </view>
                <view class="forget-input" :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}'>
                    <input v-model="panswer1" :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#ddd","color":"#333","borderRadius":"40rpx","background":"rgba(255,255,255,.8)","borderWidth":"2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' type="text" placeholder="密保答案" />
                </view>
                <button class="landing" :style='{"padding":"0 40rpx","boxShadow":"0px 0px 18rpx -12rpx #333","margin":"0 auto 24rpx","borderColor":"#6dd5cb","color":"#333","display":"block","borderRadius":"40rpx","background":"linear-gradient(270deg, rgba(249,236,236,1) 0%, rgba(240,217,218,1) 26%, rgba(200,217,235,1) 60%, rgba(236,242,249,1) 100%),#c8d9eb","borderWidth":"0px","width":"100%","lineHeight":"88rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' @tap="confirmClick" type="primary">确定</button>
            </view>
        </view>
        <view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"100rpx 0 500rpx","background":"url(http://codegen.caihongy.cn/20230307/094c3ad2a7b2458cb232f725b0df6c3c.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20230307/8849983a5e0d4d478e58af3273722fb2.png) no-repeat center bottom / 100% auto,#c8d9eb","height":"100%"}' v-if="type==3">
            <view :style='{"minHeight":"600rpx","padding":"220rpx 40rpx 200rpx","boxShadow":"0px 0px 0px #ddd","borderColor":"#eee","margin":"0 auto","borderRadius":"40rpx","background":"url(http://codegen.caihongy.cn/20230307/f3271c90048c489eac6e1dad3e5f7b8f.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20230307/b55ee0c1c78748be9a3ed379b82c35f7.png) no-repeat center bottom / 100% auto,url(http://codegen.caihongy.cn/20230307/0edf45915c52473a89294f6620bb5eb9.png) repeat-y center center / 100% auto","borderWidth":"0px","display":"block","width":"80%","borderStyle":"solid","height":"auto"}'>
                <view class="forget-input" :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}'>
                    <input v-model="password" :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#ddd","color":"#333","borderRadius":"40rpx","background":"rgba(255,255,255,.8)","borderWidth":"2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' type="password" placeholder="密码" />
                </view>
                <view class="forget-input" :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}'>
                    <input v-model="repassword" :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#ddd","color":"#333","borderRadius":"40rpx","background":"rgba(255,255,255,.8)","borderWidth":"2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' type="password" placeholder="确认密码" />
                </view>
                <button class="landing" :style='{"padding":"0 40rpx","boxShadow":"0px 0px 18rpx -12rpx #333","margin":"0 auto 24rpx","borderColor":"#6dd5cb","color":"#333","display":"block","borderRadius":"40rpx","background":"linear-gradient(270deg, rgba(249,236,236,1) 0%, rgba(240,217,218,1) 26%, rgba(200,217,235,1) 60%, rgba(236,242,249,1) 100%),#c8d9eb","borderWidth":"0px","width":"100%","lineHeight":"88rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' @tap="updateClick" type="primary">修改密码</button>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: [
                    '请选择登录用户类型',
                ],
                optionsValues: [
					'',
				],
				index: 0,
                tableName: '',
                type: 1,
                repassword: '',
                password: '',
                panswer1: '',
                userForm: {
                }
			}
		},
		onLoad() {
			this.styleChange()
		},
		methods: {
			async nextClick() {
				if(this.username==undefined) {
					this.$utils.msg('请输入账号')
					return;
                                }
				if(this.optionsValues[this.index]=="") {
					this.$utils.msg('请选择角色')
                    return;
				}
                this.tableName = this.optionsValues[this.index];
                let res = await this.$api.security(this.tableName,{
                    username: this.username
                })
                if(!res.data) {
                    this.$utils.msg('用户不存在')
                }
                if (res.code == 0) {
                    this.userForm = res.data
                    this.type = 2
                }
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.forget-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.restPwFrom.content.input.backgroundColor
					// })
				})
			},
            confirmClick() {
                if (this.userForm.panswer !== this.panswer1) {
                    this.$utils.msg('密保答案不正确')
                    return false
                }
                this.$utils.msg('验证成功')
                this.password = ''
                setTimeout(() => {
                    this.type = 3
                }, 1000)
            },
            async updateClick() {
                if(!this.password) {
                    this.$utils.msg('密码不能为空')
                    return false
                }
                if (this.password != this.repassword) {
                    this.$utils.msg('两次密码输入不一致')
                    return false
                }
                if(this.userForm.mima) {
                    this.userForm.mima=this.password;
                } else {
                    this.userForm.password=this.password;
                }
                await this.$api.update(this.tableName, this.userForm)
                this.$utils.msg('密码修改成功')
                setTimeout(() => {
                    uni.navigateBack({
            
                    })
                }, 1000)
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
