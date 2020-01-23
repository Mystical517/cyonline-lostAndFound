<template name="Hall">
	<view @touchstart="start" @touchend="end" class="bg-white">
		
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
				<view v-for="(i,index) in TabList" class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" @tap="tabSelect" :data-id="index">
					<text :class="i.icon"></text> {{i.name}}
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
				TabList:[
					{'name':'全部','icon':'cuIcon-all'},
					{'name':'校园卡','icon':'cuIcon-vipcard'},
					{'name':'水杯','icon':'cuIcon-baby'},
					{'name':'雨伞','icon':'cuIcon-magic'}
				],
				TabNameList:['全部','校园卡','水杯','雨伞'],//第一个元素必须是全部，不然得修改上述判断js
				startData:{
					clientX:0,
					clientY:0
				}
			}
		},
		methods: {
			start(e){
			    this.startData.clientX=e.changedTouches[0].clientX;
			    this.startData.clientY=e.changedTouches[0].clientY;
			},
			end(e){
			    // console.log(e)
			    const subX=e.changedTouches[0].clientX-this.startData.clientX;
			    const subY=e.changedTouches[0].clientY - this.startData.clientY;
			    if(subY>50 || subY<-50){
			        // console.log('上下滑')
			    }else{
			        if(subX>100){
			            // console.log('右滑')
						this.TabCur=(this.TabCur+3) % this.TabNameList.length;
			        }else if(subX<-100){
			            // console.log('左滑')
						this.TabCur=(this.TabCur+1) % this.TabNameList.length;
			        }else{
			            console.log('无效')
			        }
			    }
			},
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
