# 千叶商城后台管理系统接口文档 v0.0.1

- **接口地址统一前缀：** /management
## 1 用户相关

- **用户相关接口地址统一前缀：** /user

### 1.1 注册

- **用户地址：** /register

#### 1.1.1 请求参数

| 参数名称       | 类型   | 必要 | 描述   |
| :------------- | :----- | :--- | :----- |
| body           | &nbsp; | 必要 | &nbsp; |
| &emsp;username | string | 必要 | 用户名 |
| &emsp;Password | string | 必要 | 密码   |

请求实例：

```
{
	username: "qianye",
	password: "MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6k"
}
```

#### 1.1.2 返回结果

| 参数名称 | 类型   | 必要 | 描述   |
| :------- | :----- | :--- | :----- |
| code     | number | 必要 | 状态码 |
| message  | string | 必要 |

请求实例：

```
{
	code: 200,
	message: "成功"
}
```

### 1.2 登录

- **用户地址：** /login

#### 1.2.1 请求参数

| 参数名称       | 类型   | 必要 | 描述   |
| :------------- | :----- | :--- | :----- |
| body           | &nbsp; | 必要 | &nbsp; |
| &emsp;username | string | 必要 | 用户名 |
| &emsp;Password | string | 必要 | 密码   |

请求实例：

```
{
	username: "qianye",
	password: "MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6k"
}
```

#### 1.2.2 返回结果

| 参数名称        | 类型   | 必要 | 描述     |
| :-------------- | :----- | :--- | :------- |
| code            | number | 必要 | 状态码   |
| message         | string | 必要 |
| data            | object | 必要 | &nbsp;   |
| &emsp;userId    | string | 必要 | 用户id   |
| &emsp;username  | string | 必要 | 用户名   |
| &emsp;userImage | string | 必要 | 用户头像 |
| &emsp;token     | string | 必要 | 验证登录 |


请求实例：

```
{
	code: 200,
	message: "成功",
	data: {
		userId: 1231312,
		username: "qianye",
		userImage: "http://sdsds.jpg",
		token: "MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6k"
	}
}
```

### 1.3 退出登录

- **用户地址：** /logout

#### 1.3.1 请求参数

| 参数名称            | 类型   | 必要 | 描述                                    |
| :------------------ | :----- | :--- | :-------------------------------------- |
| Header              | &nbsp; | 必要 | 请求报文头                              |
| &emsp;Authorization | string | 必要 | 验证用户登录后token，没有登录则无该字段 |
| body                | &nbsp; | 必要 | &nbsp;                                  |
| &emsp;userId        | string | 必要 | 用户id                                  |

请求实例：

```
{
	userId: "123231"
}
```

#### 1.3.2 返回结果

| 参数名称 | 类型   | 必要 | 描述   |
| :------- | :----- | :--- | :----- |
| code     | number | 必要 | 状态码 |
| message  | string | 必要 |


请求实例：

```
{
	code: 200,
	message: "成功"
}
```

## 2 商品相关

- **商品相关接口地址统一前缀：** /commodity

### 2.1 商品列表

- **用户地址：** /queryList

#### 2.1.1 请求参数

| 参数名称                 | 类型   | 必要   | 描述                                    |
| :----------------------- | :----- | :----- | :-------------------------------------- |
| Header                   | &nbsp; | 必要   | 请求报文头                              |
| &emsp;Authorization      | string | 必要   | 验证用户登录后token，没有登录则无该字段 |
| body                     | &nbsp; | 必要   | &nbsp;                                  |
| &emsp;userId             | string | 必要   | 用户id                                  |
| &emsp;commodityName      | string | 不必要 | 商品名称(模糊查询)                      |
| &emsp;commodityCatalogId | array  | 不必要 | 商品类目(查询) 从左到右父子排列         |
| &emsp;commodityStatus    | string | 不必要 | 商品状态(上架1/待上架0)                 |

请求实例：

```
{
	userId: "123123123",
	commodityName: "手机",
	commodityCatalogId: ["2323123","23213132"]
	commodityStatus: "1"
}
```

#### 2.1.2 返回结果

| 参数名称                         | 类型   | 必要 | 描述                           |
| :------------------------------- | :----- | :--- | :----------------------------- |
| code                             | number | 必要 | 状态码                         |
| message                          | string | 必要 |
| data                             | object | 必要 | &nbsp;                         |
| &emsp;total                      | number | 必要 | 商品总数                       |
| &emsp;commodityList              | array  | 必要 | 商品数组                       |
| &emsp;&emsp;commodityId          | string | 必要 | 商品id                         |
| &emsp;&emsp;commodityName        | string | 必要 | 商品名称                       |
| &emsp;&emsp;commodityStatus      | string | 必要 | 商品状态（1，上架；0，待上架） |
| &emsp;&emsp;commodityCatalogName | string | 必要 | 商品类目名称                   |
| &emsp;&emsp;commodityPrice       | number | 必要 | 商品价格                       |
| &emsp;&emsp;commodityImage       | string | 必要 | 商品图片                       |
| &emsp;&emsp;commodityDescribe    | string | 必要 | 商品描述                       |

请求实例：

```
{
	code: 200,
	message: "成功"
	data: {
		total: 1,
		commodityList: [
			{
				commodityId: "12312312",
				commodityName: "手机",
				commodityStatus: "1",
				commodityCatalogName: "电子产品",
				commodityPrice: 2000,
				commodityImage: "http://1.img",
				commodityDescribe: "小米天下第一"
			}
		]
	}
}
```