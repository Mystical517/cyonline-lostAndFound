# api列表
## 一、用户信息类
#### 1. /api/getUserInfo
·请求方式：POST
·请求内容:{
	'UserId':UserId,
	'token':token
}
·返回内容:
	{
	'code':状态码,后端定义,
	'data':{
				'NickName':用户名,
				'avatarUrl':头像地址,
				'Lv':用户等级,
				'achievement':[
					'成就卡片地址1',
					'成就卡片地址2',
				]
			}
	}

## 二、失物招领具体信息类
### 1）查询
#### 1./api/selectLostAndFoundInfo
·请求方式：POST
·请求内容:{
	'UserId':UserId,
	'token':token,
	'itemNum':返回数据的个数，若此参数为-1,则全部返回
}
·返回内容:
	{
	'code':状态码,后端定义,
	'data':[
				{
					'id':0,//主键,唯一
					'pubId':0,//发布者userId
					'title':'校园卡招领',//标题
					'imgSrc':'',//第一张配图地址
					'text':'丢失了一张校园卡',//文章缩略内容,提取前几个字（比如说20个）
					'keyWords':['天山堂','校园卡'],//关键词
					'type':0//类型，0为失物（丢了东西）；1为捡到了东西
				},
				{...},
				....
			]
	}
#### 2./api/selectDetailLostAndFoundInfo
·请求方式：POST
·请求内容:{
	'UserId':UserId,
	'token':token,
	'id':id,//文章的id
}
·返回内容:
	{
	'code':状态码,后端定义,
	'data':{
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
		}
	}

### 2）提交
#### 1./api/pubLostAndFoundInfo
·请求方式：POST
·请求内容:
{
	'UserId':UserId,
	'token':token,
	'data':{
		'title':'',
		'imgSrc':[..,...,..],//用户上传的图片列表,
		'text':'',//用户的详细描述
		'keyWords':['...','...'],//关键词列表
		'type':0/1,
		'date':''//丢失日期
	}
}
**与此同时 服务器储存被用户请求的时间（时间戳格式）**
·返回内容:
	{
		'code':状态码,后端定义,
	}