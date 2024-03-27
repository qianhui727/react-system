import React, { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import Login from '../views/login/login'
import Layout from '../views/layout/layout'
import News from '../views/news/news'
import Draft from '../views/newssandbox/draftbox/draftbox'
import Home from '../views/newssandbox/home/home'
import Permissionslist from '../views/newssandbox/permissionslist/permissionslist'
import Rolist from '../views/newssandbox/rolelist/rolist'
import Userlist from '../views/newssandbox/userlist/userlist'
import NotFound from '../views/404/404'
import Catagory from '../views/newssandbox/catagory/catagory'
import NewsSandbox from '../views/newssandbox/newssandbox'

// 定义懒加载组件 先获取组件
// const Layout = lazy(() => import('../views/Layout/Layout.jsx'))

export default [
	//嵌套路由 开始 -------
	{
		path: '/', //初始跳转到登录页面
		element: <Navigate to="/login" />,
	},
	{
		path: '/login', //login
		element: <Login />,
	},
	{
		path: '/news', //全球大新闻(游客访问)
		element: <News />,
	},
	{
		path: '/layout', //全球大新闻(游客访问)
		element: <Layout />,
	},

	{
		path: '/newssandbox', //新闻沙箱
		element: <NewsSandbox />,
		children: [
			{
				path: 'draft', //草稿箱
				element: <Draft />,
			},

			{
				path: 'home', //home
				element: <Home />,
			},
			{
				path: 'permissionslist', //权限列表
				element: <Permissionslist />,
			},
			{
				path: 'rolelist', //角色列表
				element: <Rolist />,
			},
			{
				path: 'userlist', //用户列表
				element: <Userlist />,
			},
			{
				path: 'catagory', //分类组件
				element: <Catagory />,
			},
			//嵌套路由 结束 -------
		],
	},
	{
		path: '/404', // 404
		element: <NotFound />,
	},
	{
		path: '/*', //路径不存在时跳转至//404
		element: <Navigate to="/404" />,
	},
]
