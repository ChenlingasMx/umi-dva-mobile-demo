/**
 * 底部菜单属性配置
 */
export const TabBarData=[
    {
        id: 'home',
        name: '聊天',
        icon: require('../assets/聊天 (2).png'),
        selectedicon: require('../assets/聊天 (3).png'),
        url: '/home',
      },
      {
        id: 'addressList',
        name: '通讯录',
        icon: require('../assets/chat.png'),
        selectedicon: require('../assets/selectedChat.png'),
        url: '/addressList',
      },
      {
        id: 'moments',
        name: '发现',
        icon: require('../assets/search.png'),
        selectedicon: require('../assets/selectedSearch.png'),
        url: '/search',
      },
      {
        id: 'my',
        name: '我的',
        icon: require('../assets/my.png'),
        selectedicon: require('../assets/selectedMy.png'),
        url: '/my',
      }
];