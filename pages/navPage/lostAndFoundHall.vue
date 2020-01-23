<template name="Hall">
	<view>
		<!-- 顶部搜索框 -->
		<scroll-view scroll-x class="bg-white nav" style="position:fixed;top:0;z-index: 5;" >
			<view class="cu-bar search bg-white">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="丢失的东西..." confirm-type="search"></input>
				</view>
				<view class="action">
					<button class="cu-btn bg-blue shadow-blur round">搜索</button>
				</view>
			</view>
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="0==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="0">
					<text class="cuIcon-all"></text> 全部
				</view>
				<view class="cu-item flex-sub" :class="1==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="1">
					<text class="cuIcon-vipcard"></text> 校园卡
				</view>
				<view class="cu-item flex-sub" :class="2==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="2">
					<text class="cuIcon-baby"></text> 水杯
				</view>
				<view class="cu-item flex-sub" :class="3==TabCur?'text-orange cur':''" @tap="tabSelect" data-id="3">
					<text class="cuIcon-magic"></text> 雨伞
				</view>
			</view>
		</scroll-view>
		<!-- 占位菜单 -->
		<view class="title"><view class="text-white">兰州大学萃英在线出品</view></view>
		<view class="title"><view class="text-white">CopyRight@兰州大学萃英在线网络技术部</view></view>
		<view class="title"><view class="text-white">前端@陈家麟;后端@卢灏</view></view>
		<view class="title"><view class="text-white">失物招领微信小程序</view></view>
		<view class="title"><view class="text-white">人人为我，我为人人</view></view>
		
		<!-- 页面主体 -->
		<view class="cu-item" v-for="lostItem in dataOfLost" :key="lostItem.id" :data-id="lostItem.id" @tap="ItemSelected(lostItem.id)" 
		v-if="TabCur==0||lostItem.keyWords.includes(TabNameList[TabCur])">
			<view class="cu-card article" :class="'no-card'" >
				<view class="cu-item shadow">
					<view class="title">
					<view class="text-cut">{{lostItem.type?'失物·':'招领·'}}{{lostItem.title}}</view>
					</view>
					<view class="content">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content"> {{lostItem.text}}</view>
							<view>
								<view class="cu-tag bg-olive light sm round" v-for="keyword in lostItem.keyWords" :key="keyword">
								{{keyword}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 悬浮发布按钮 -->
<!-- 		<view v-if="modalName==null">
			<button class="cu-btn cuIcon bg-orange " @tap="showModal" data-target="bottomModal" style="font-size: larger; width: 3rem;height: 3rem;position: fixed;bottom: 3.5rem;right: 0.8rem;z-index: 9999;">
				<text class="cuIcon-add"></text>
			</button>
		</view>
		 -->

		
	
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
							'title':'水杯招领',
							'imgSrc':'',
							'text':'捡到一个水杯',
							'keyWords':['贺兰堂','水杯'],
							'type':1
						},
						{
							'id':3,
							'pubId':0,
							'title':'雨伞',
							'imgSrc':'',
							'text':'捡到一把雨伞',
							'keyWords':['芝兰园','雨伞'],
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
				TabCur: 0,
				TabNameList:['全部','校园卡','水杯','雨伞']
				
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
				
			},
			ItemSelected(id){
				uni.navigateTo({
					url:'../detailPages/detailItem?ItemId='+id
				})
			},
			// 导航栏被点击
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
		}
	}
</script>

<style>
</style>
