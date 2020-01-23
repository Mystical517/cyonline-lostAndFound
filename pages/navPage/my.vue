<template name="my">
	<view>		<!--  -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-titles text-orange"></text> 个人中心
			</view>
		</view>
		<view class="cu-card case" >
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view class="text-grey">正义天使 凯尔</view>
							<view class="text-gray text-sm flex justify-between">
								Lv0
							</view>
						</view>
					</view>
				</view>	
			</view>
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text> 我的勋章
				</view>
			</view>
			<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
			 indicator-active-color="#0081ff">
				<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
					<view class="swiper-item">
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</view>
				</swiper-item>
			</swiper>
			
		</view>
		<!--  -->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-titles text-orange"></text> 功能菜单
			</view>
		</view>
		<view class="cu-list menu" :class="'card-menu margin-top'">
			
			<view class="cu-item" :class="'arrow'">
				<view class="content">
					<text class="cuIcon-circlefill text-grey"></text>
					<text class="text-grey">我发布的</text>
				</view>
			</view>
			
			<view class="cu-item" :class="'arrow'">
				<view class="content">
					<text class="cuIcon-circlefill text-grey"></text>
					<text class="text-grey">完善信息</text>
				</view>
			</view>
						
			<view class="cu-item" :class="'arrow'">
				<view class="content">
					<text class="cuIcon-circlefill text-grey"></text>
					<text class="text-grey">意见反馈</text>
				</view>
			</view>
			
			<view class="cu-item" :class="'arrow'">
				<view class="content">
					<image src="/static/logo.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">关于我们</text>
				</view>
			</view>


		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				scrollLeft: 0,
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			}
		},
		methods: {
			DotStyle(e) {
					this.dotStyle = e.detail.value
				},
				// cardSwiper
				cardSwiper(e) {
					this.cardCur = e.detail.current
				},
				// towerSwiper
				// 初始化towerSwiper
				TowerSwiper(name) {
					let list = this[name];
					for (let i = 0; i < list.length; i++) {
						list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
						list[i].mLeft = i - parseInt(list.length / 2)
					}
					this.swiperList = list
				},
			
				// towerSwiper触摸开始
				TowerStart(e) {
					this.towerStart = e.touches[0].pageX
				},
			
				// towerSwiper计算方向
				TowerMove(e) {
					this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
				},
			
				// towerSwiper计算滚动
				TowerEnd(e) {
					let direction = this.direction;
					let list = this.swiperList;
					if (direction == 'right') {
						let mLeft = list[0].mLeft;
						let zIndex = list[0].zIndex;
						for (let i = 1; i < this.swiperList.length; i++) {
							this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
							this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
						}
						this.swiperList[list.length - 1].mLeft = mLeft;
						this.swiperList[list.length - 1].zIndex = zIndex;
					} else {
						let mLeft = list[list.length - 1].mLeft;
						let zIndex = list[list.length - 1].zIndex;
						for (let i = this.swiperList.length - 1; i > 0; i--) {
							this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
							this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
						}
						this.swiperList[0].mLeft = mLeft;
						this.swiperList[0].zIndex = zIndex;
					}
					this.direction = ""
					this.swiperList = this.swiperList
				},
			
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