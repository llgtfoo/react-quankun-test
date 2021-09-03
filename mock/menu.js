export default {
  'GET /api/getMenu': (req, res) => {
    res.send({
      success: true,
      data: [
        {
          path: '/Welcome',
          name: '欢迎页',
          icon: 'icon-shoucang1',
          // hideInMenu: true,
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
      ],
    });
  },
};
