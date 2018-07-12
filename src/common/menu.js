const menuData = [
  {
    name: '公告管理',
    path: 'notice',
    authority: 'admin',
  },
  {
    name: '关卡管理',
    path: 'level',
    authority: 'admin',
  },
  {
    name: '用户管理',
    path: 'user',
    authority: 'admin',
  },
];


function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    // if (!isUrl(path)) {
      path = parentPath + item.path;
    // }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority
    }
    // 处理子路由的path和权限
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  })
}

// 导出formatter函数执行后的结果
export const getMenuData = () => formatter(menuData);