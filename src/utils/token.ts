//本地存储添加数据的方法，可以用pinia的插件实现
//本地存储删除数据的方法
export const REMOVE_TOKEN = () => {
  localStorage.removeItem('TOKEN')
}
