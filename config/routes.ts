export default [
  { path: '/', name: '主页', icon: 'smile', component: './Index' },
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },

  {
    path: '/user',
    routes: [
      { name: '用户接口信息', path: '/user/interface-info/:id', component: './User/InterfaceInfo' },
    ],
  },

  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/interface-info' },
      {
        name: '接口信息',
        icon: 'table',
        path: '/admin/interface-info',
        component: './Admin/InterfaceInfo',
      },
      // { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },

  { path: '/', redirect: '/admin' },
  { path: '*', layout: false, component: './404' },
];
