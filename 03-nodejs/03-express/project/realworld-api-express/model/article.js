const mongoose = require('mongoose')
const baseModel = require('./base-model')
const Schema = mongoose.Schema

const articleSchema = new mongoose.Schema({
  ...baseModel,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tagList: {
    type: [String],
    default: null
  },
  favoritesCount: {
    type: Number,
    default: 0
  },
  author: {
    // 实际存储用户的id, 运行时, 关联到获取user信息
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = articleSchema
