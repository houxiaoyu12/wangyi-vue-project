//与后台交互
import ajax from './ajax'
//获取data数组
export const reqData = () => ajax('/data')
//获取banner数组
export const reqBanner = () => ajax('/banner')
//获取home数组
export const reqHome = () => ajax('/home')
//获取detail数据
export const reqDetail = () => ajax('/detail')
//获取列表数据
export const reqNav = () => ajax('/nav')
