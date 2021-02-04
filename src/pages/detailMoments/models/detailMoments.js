export default {
  namespace: 'detailMoments',
  state: {
    chartsData:[
      {
        id:1,
        year:2021,
        children:[
            { id: 101, content: '❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️', month:1 ,day:25},
            { id: 102, content: 'wx❤️mx&&mx❤️wx', month: 1,day:20 },
        ]
      },
      {
        id:2,
        year:2020,
        children:[
            { id: 201, content: 'xxxxxxxxxx', month:12 ,day:15},
            { id: 202, content: 'wx❤️mx&&mx❤️wx', month: 12,day:10 },
        ]
      },
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
