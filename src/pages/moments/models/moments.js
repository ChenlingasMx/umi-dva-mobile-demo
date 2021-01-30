export default {
  namespace: 'moments',
  state: {
    dataSource: [
      { id: 1, name: 'Sweetheart❤恋人', nickName: 'micomxx', content: '❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️', hours: 1 },
      { id: 2, name: 'Sweetheart❤恋人', nickName: 'micomxx', content: 'wx❤️mx&&mx❤️wx', hours: 2 },
    ],
  },
  effects: {
  },
  reducers: {
    updateData(state, { payload }) {
      return { ...state, ...payload };
    },
  }
};
