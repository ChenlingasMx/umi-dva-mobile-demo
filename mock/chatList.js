const list = [];
for (let i = 1; i < 101; i++) {
    list.push(
      {
        index: "X",
        id: i,
        children: [
          {
            name: "孟晓",
            img: '@/assets/headImage/WechatIMG37.jpeg',
            id: `${i}01`
          },
          {
            name: "我",
            img: '@/assets/headImage/WechatIMG38.jpeg',
            id: `${i}02`
          },
          {
            name: "爱",
            img: '@/assets/headImage/WechatIMG39.jpeg',
            id: `${i}03`
          },
          {
            name: "❤️",
            img: '@/assets/headImage/WechatIMG40.jpeg',
            id: `${i}04`
          },
          {
            name: "你",
            img: '@/assets/headImage/WechatIMG41.jpeg',
            id: `${i}05`
          },
        ],
      },
    );
}
module.exports = {
    'POST /api/get/list': (req, res) => {
        const { page, pageSize } = req.body;
        let ite = [];
        for (let i = 0; i < list.length; i++) {
            if (i < page * pageSize && i >= (page - 1) * pageSize) {
                ite.push(list[i]);
            }
        }
        return res.status(200).json({
            message: '获取数据成功',
            data: {
                rows: ite,
                total: ite.length,
            },
            code: 1,
        });
    },
};