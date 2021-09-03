export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './Login/index',
          },
        ],
      },
    ],
  },
  {
    path: '/Welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome/index',
  },
  {
    path: '/app1',
    microApp: 'app1',
    name: '子应用1',
  },
  {
    path: '/app2',
    microApp: 'app2',
    name: '子应用2',
  },
  {
    path: '/',
    redirect: '/Welcome',
  },
  {
    component: './404',
  },
];
