module.exports = {
    "GET /api/book": {
        errno: 0,
        errmsg: "",
        count: 2,
        data: [
            {
                name:  "CSS权威指南",
                author: "小王",
                id: 0,
            },
            {
                name:  "CSS世界",
                author: "小李",
                id: 1,
            }
        ]
    },
    "POST /api/addBook": {
        errno: 0,
        errmsg: '添加成功'
    },
    "GET /api/userList": {
        errno: 0,
        errmsg: "",
        count: 2,
        data: [
            {
                age:  "17",
                name: "小王",
                id: 0,
            },
            {
                age:  "18",
                name: "小李",
                id: 1,
            }
        ]
    },
}