<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true"><block slot="backText">返回</block><block slot="content">失物招领</block></cu-custom>
		<view class="cu-bar bg-white solids-bottom">
			<view class="action">
				<text class="cuIcon-titles text-orange"></text> 发布失物招领
			</view>
		</view>
		<form>
			<view class="cu-form-group">
				<view class="title">类型</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'请选择信息类型...'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group solid-bottom">
				<view class="title">标题</view>
				<input placeholder="" name="input"></input>
			</view>
			<view class="cu-form-group solid-bottom">
				<view class="title">日期</view>
				<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
			<view class="title">关键词</view>（点击选择）
			</view>

			<view class="grid col-4 padding-sm bg-white solids-bottom">
				<view class="margin-tb-sm text-center" v-for="(i,index) in tagList" :key="index">
					<button class="cu-btn round" @tap="tagTapped(i)" :class="(choosedTag.includes(i))?'text-green':'text-grey'"
					>{{i}}</button>
				</view>
			</view>
			
			<view class="cu-form-group solids-bottom">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="详细信息" style="height:150px"></textarea>
			</view>
			
			<view class="cu-bar bg-white">
				<view class="action">
					图片上传
				</view>
				<view class="action">
					{{imgList.length}}/9
				</view>
			</view>
			
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<9">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>

		</form>
		
	</view>
</template>

<script>
	export default {
		data() {
		return {
				tagList:['#校园卡#','#雨伞#','#水杯#','#耳机#','#其他#'],
				choosedTag:[],
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
					'keyWords':['天山堂','校园卡'],
					'type':0
				},
				date: '2018-12-25',
				picker: ['丢失物品', '捡到失物'],
				index: 0,
				imgList: [],
				modalName: null,
				textareaAValue: '',
			}
		},
		onLoad(e){
			var myDate=new Date();
			this.date=myDate.toLocaleDateString().replace("/","-0").replace("/","-");
		},
		methods: {	
			tagTapped(i){
				console.log(i);
				if(this.choosedTag.includes(i)){
					this.choosedTag.splice(this.choosedTag.indexOf(i),1);
				}else{
					this.choosedTag.push(i);
				}
				console.log(this.choosedTag);
			},
			PickerChange(e) {
					this.index = e.detail.value
			},
			getItemDetail(){
				this.Fixtime=this.unixTimeToDateTime(this.itemDetail.pubTime)
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			ChooseImage() {
				uni.chooseImage({
					count: 9, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '删除',
					content: '确定要删除这张照片吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
		}
	}
</script>

<style>
</style>
