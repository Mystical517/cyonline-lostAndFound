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
	export default {
		data() {
		return {
				dataOfLost:[
						{
							'id':0,
							'pubId':0,
							'title':'校园卡招领',
							'imgSrc':'',
							'text':'丢失了一张校园卡',
							'keyWords':['天山堂','校园卡'],
							'type':0
						},
						{
							'id':1,
							'pubId':0,
							'title':'校园卡招领',
							'imgSrc':'',
							'text':'丢失了一张校园卡',
							'keyWords':['昆仑堂','校园卡'],
							'type':1
						},
						{
							'id':2,
							'pubId':0,
							'title':'校园卡招领',
							'imgSrc':'',
							'text':'丢失了一张校园卡',
							'keyWords':['贺兰堂','校园卡'],
							'type':1
						},
						{
							'id':3,
							'pubId':0,
							'title':'校园卡招领',
							'imgSrc':'',
							'text':'丢失了一张校园卡',
							'keyWords':['芝兰园','校园卡'],
							'type':0
						},
						{
							'id':4,
							'pubId':0,
							'title':'校园卡招领',
							'imgSrc':'',
							'text':'丢失了一张校园卡',
							'keyWords':['玉树','校园卡'],
							'type':1
						}
				],
				PageCur: 'index',
				TabCur: 0,
				modalName: null,
			}
		},
		methods: {
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
