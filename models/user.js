/**
├── models
    └── user.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const User = Sequelize.import('../schema/user');
// 自动创建表
User.sync({force: false});
class UserModel {
    /**
     * 创建文章模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createUser(data) {
        return await User.create({
            firstname: data.firstname, // 名
            lastname: data.lastname, // 姓
        })
    }
    /**
     * 查询取文章详情数据
     * @param id  文章ID
     * @returns {Promise<Model>}
     */
    static async getUserDetail(id) {
        return await User.findOne({
            where: {
                id,
            },
        })
    }

    /**
     * 查询所有用户
     * 
     * @returns {Promise<Model>}
     */
    static async getAllUser(){
        return await User.findAll()
    }
}
module.exports = UserModel