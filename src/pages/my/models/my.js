import logoImg from '../../../assets/src=http___b-ssl.duitang.com_uploads_item_201606_29_20160629115130_tsfrS.jpeg&refer=http___b-ssl.duitang.jpeg'
export default {
  namespace: 'my',
  state: {
    headImage:logoImg
  },
  effects: {
  },
  reducers: {
    updateData(state, { payload }) {
      return { ...state, ...payload };
    },
  }
};
