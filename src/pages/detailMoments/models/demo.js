export default {
  namespace: 'detailMoments',
  state: {
    chartsData:[
      {
        id:1,
        year:2021,
        children:[
            { id: 101, content: '❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️', month:1 ,day:25},
            { id: 102, content: 'wx❤️mx&&mx❤️wx', hours: 1,day:20 },
        ]
      }
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
