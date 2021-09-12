import Mock from 'mockjs'
Mock.mock('/api/user/login',{
    "status": 0,
    "data": {
        "id|10001-11000": 0,
        "username": "@cname",
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
});
// import Mock from 'mockjs'
// Mock.mock('/api/user/login',{
//     "status":0,
//     "data":{
//         "id":12,
//         "username":"admin",
//         "email":"admin@123.com",
//         "phone":null,
//         "role":0,
//         "createTime":1479048325000,
//         "updateTime":1479048325000
//     }
// });