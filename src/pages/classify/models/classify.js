
import head1 from '../../../assets/headImage/WechatIMG37.jpeg'
import head2 from '../../../assets/headImage/WechatIMG38.jpeg'
import head3 from '../../../assets/headImage/WechatIMG39.jpeg'
import head4 from '../../../assets/headImage/WechatIMG40.jpeg'
import head5 from '../../../assets/headImage/WechatIMG41.jpeg'
export default {
  namespace: 'classify',
  state: {
    logs: [],
    HOT_NAME: '❤️',
    HOT_SINGER_LEN: 10,
    currentIndex: 0,
    list: [
      {
        index: "W",
        id: 1,
        children: [
          {
            name: "我",
            img: head1,
            id: 101
          },
          {
            name: "爱",
            img: head3,
            id: 102
          },
          {
            name: "你",
            img: head2,
            id: 103
          },
          {
            name: "❤️",
            img: head4,
            id: 104
          },
          {
            name: "孟晓",
            img: head5,
            id: 105
          },
        ],
      },
      {
        index: "A",
        id:2,
        children:[
          {
            name: "孟晓",
            img: head2,
            id:201
          }
        ]
      },
      {
        index: "M",
        id:3,
        children:[
          {
          name: "❤️",
          img: head3,
          id:301
          }
        ]
      },
      {
        index: "X",
        id:4,
        children:[
          {
            name: "我",
            img: head4,
            id:401
          }
        ]
      },
    ]
  },
  effects: {
  },
  reducers: {
    updateData(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
