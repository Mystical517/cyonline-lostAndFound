<template>
	<view class="bg-white">
		
		<index v-if="PageCur=='index'"></index>
		<my v-if="PageCur=='my'"></my>
		
		<!-- 底部导航栏 -->
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="index">
				<view class='cuIcon-cu-image'>
					<text class="lg text-gray" :class="'cuIcon-newshot'"></text>
				</view>
				<view :class="PageCur=='index'?'text-green':'text-gray'">招领大厅</view>
			</view>
			
			<view class="action text-gray add-action" v-if="PageCur=='index'">
				<button class="cu-btn cuIcon-add bg-green shadow" @tap="showModal" data-target="bottomModal"></button>
				发布
			</view>
			
			<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''"  @tap="hideModal">
				<view class="cu-dialog" @tap.stop="" >
					<view class="padding-xl">
					<view class="padding flex flex-direction">
						<button class="cu-btn bg-green margin-tb-sm lg" @click="pubNormalLostAndFound()">发布失物招领</button>
						<button class="cu-btn bg-green margin-tb-sm lg">校园卡专栏（beta）</button>
					</view>
					</view>
				</view>
			</view>
			
			<view class="action" @click="NavChange" data-cur="my">
				<view class='cuIcon-cu-image'>
					<text class="lg text-gray" :class="'cuIcon-my'"></text>
				</view>
				<view :class="PageCur=='my'?'text-green':'text-gray'">个人中心</view>
			</view>
		</view>
	

	
	</view>
</template>

<script>
	import axios from "axios";
	import qs from 'qs';
	export default {
		// name:'index',
		data() {
		return {
				dataOfLost:[],
				PageCur: 'index',
				modalName: null,
			}
		},
		created() {
			this.getUserInfo();//获取用户信息
		},
		methods: {
			getUserInfo(){
				axios.post('https://cyonline.makeabetterworld.cn/api/getUserInfo',
				qs.stringify(
				{
					UserId:'luhao',
					token:'123456'
				}
				)
				)
				.then(function(res){
					console.log(res);
					if(res.data.code==='success'){
						sessionStorage.setItem("Lv",res.data.data.Lv);
						sessionStorage.setItem("avatarUrl",res.data.data.avatarUrl);
						sessionStorage.setItem("NickName",res.data.data.NickName);
						var urls=res.data.data.achievement.join('|');
						sessionStorage.setItem("achievement",urls);
					}
				})
				.catch(function(err){
					console.log(err)
				})
				//获取用户信息
				//储存在localstorage中，方便后面调用
			}
			,
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
			// 内容被单击
			pubNormalLostAndFound(){
				uni.navigateTo({
					url:'../detailPages/pubLostAndFound'
				})
			},
			itemSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			// 导航栏被点击
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			ChooseCheckbox(e) {
				let items = this.checkbox;
				let values = e.currentTarget.dataset.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					if (items[i].value == values) {
						items[i].checked = !items[i].checked;
						break
					}
				}
			}
		}
	}
</script>

<style>
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}
</style>
