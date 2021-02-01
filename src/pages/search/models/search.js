export default {
  namespace: 'search',
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
