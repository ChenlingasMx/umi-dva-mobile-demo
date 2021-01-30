export default {
  namespace: 'pay',
  state: {
  },
  effects: {
  },
  reducers: {
    updateData(state, { payload }) {
      return { ...state, ...payload };
    },
  }
};
