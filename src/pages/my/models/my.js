import logoImg from '../../../assets/WechatIMG34.jpeg'
import wxpay from '../../../assets/svg/wxpay.png'
import biaoqing from '../../../assets/svg/表情.png'
import card from '../../../assets/svg/card.png'
import shoucang from '../../../assets/svg/shoucang.png'
import friends from '../../../assets/svg/friends.png'
export default {
  namespace: 'my',
  state: {
    headImage: logoImg,
    homeList: [
      {
        id:1,
        title:'支付',
        img:wxpay
      },
      {
        id:2,
        title:'卡包',
        img:card
      },
      {
        id:3,
        title:'收藏',
        img:shoucang
      },
      {
        id:4,
        title:'朋友圈',
        img:friends
      },
      {
        id:5,
        title:'表情',
        img:biaoqing
      },
    ]
  },
  effects: {
  },
  reducers: {
    updateData(state, { payload }) {
      return { ...state, ...payload };
    },
  }
};
