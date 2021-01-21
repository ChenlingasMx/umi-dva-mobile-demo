
import head1 from '../../../assets/touxiang1.jpg'
import head2 from '../../../assets/touxiang2.jpg'
import head3 from '../../../assets/touxiang3.jpg'
import head4 from '../../../assets/touxiang4.jpg'
export default {
  namespace: 'classify',
  state: {
    logs: [],
    HOT_NAME: '❤️',
    HOT_SINGER_LEN: 10,
    currentIndex: 0,
    list: [
      {
        index: "X",
        id: 1,
        children: [
          {
            name: "薛之谦",
            img: head1,
            id: 101
          },
          {
            name: "薛宝钗",
            img: head3,
            id: 102
          },
          {
            name: "薛乐乐",
            img: head2,
            id: 103
          },
          {
            name: "薛甜甜",
            img: head4,
            id: 104
          },
        ],
      },
      {
        index: "Z",
        id:2,
        children:[
          {
            name: "周淑怡",
            img: head2,
            id:201
          }
        ]
      },
      {
        index: "C",
        id:3,
        children:[
          {
          name: "杨超越",
          img: head3,
          id:301
          }
        ]
      },
      {
        index: "B",
        id:4,
        children:[
          {
            name: "BIGBANG (빅뱅)",
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
