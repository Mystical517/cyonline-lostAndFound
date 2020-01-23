<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true"><block slot="backText">返回</block><block slot="content">详情</block></cu-custom>
		
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-titles text-orange"></text> {{itemDetail.name}}
			</view>
		</view>
		
		<view class="cu-card dynamic" :class="'no-card'">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" :style="'background-image:url('+itemDetail.avatar+');'"></view>
						<view class="content flex-sub">
							<view>{{itemDetail.author}}</view>
							<view class="text-gray text-sm flex justify-between">
								{{Fixtime}}
							</view>
						</view>
					</view>
				</view>
				<view class="text-content">
					{{itemDetail.text}}
				</view>
				
				<!-- 点击查看大图 -->
				<view class="grid flex-sub padding-lr" :class="'col-3 grid-square'">
					<view class="bg-img" :class="''"  :style="'background-image:url('+item+');'"
					@tap="ViewImage(item)"
					 v-for="(item,index) in itemDetail.imgUrlList" :key="index">
					</view>
				</view>
				
				
				<view class="text-gray text-sm text-right padding">
				</view>
				<view class="padding flex flex-direction">
					<button class="cu-btn bg-blue margin-tb-sm lg">{{itemDetail.type?'提供帮助':'认领失物'}}</button>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
		return {
				itemDetail:{
					'name':'校园卡招领',
					'author':'网技小萃',
					'avatar':'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					'imgUrlList':[
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					],
					'pubTime':1579766216,
					'text':'丢失了一张校园卡',
					'keyWords':['天山堂','校园卡'],//tags
					'type':0
				},
				Fixtime:'',
				itemId:-1,
			}
		},
		onLoad(e){
			this.itemId=e.ItemId;
			console.log(this.itemId);
			this.getItemDetail();
			
		},
		methods: {	
			ViewImage(url) {
				uni.previewImage({
					urls: this.itemDetail.imgUrlList,
					current: url
				});
			},
			getItemDetail(){
				this.Fixtime=this.unixTimeToDateTime(this.itemDetail.pubTime)
			},
			unixTimeToDateTime(unixtime) {
				var now = new Date(unixtime * 1000); // 依情况进行更改 * 1
				var y = now.getFullYear();
				var m = now.getMonth() + 1;
				var d = now.getDate();
				return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
			},
		}
	}
</script>

<style>
</style>
