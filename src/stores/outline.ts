import { defineStore } from 'pinia';

export const useOutlineStore = defineStore('outline', {
  state: () => {
    return {
      outline: [
        {
          type: 'how',
          description: '如何达到目的',
          items: [
            '金手指',
            '血脉',
            '天赋',
            '师父',
            '朋友',
            '奇遇',
            '功法',
            '宝物',
            '丹药',
            '阵法',
            '符法',
            '势力',
            '财富',
            '声望',
            '宠物',
          ],
        },
        {
          type: 'who',
          description: '谁是主角',
          items: [
            '主角姓名',
            '隶属势力',
            '主角地位',
            '主角父亲',
            '主角母亲',
            '主角侍女',
            '情况概述',
          ],
        },
        {
          type: 'when',
          descriptio: '什么年代',
          items: [
            '总体年代框架',
            '主角隶属年代',
            '主角出生时间',
            '寿命时间限定',
          ],
        },
        {
          type: 'where',
          descriptio: '什么地方',
          items: [
            '完整的世界架构',
            '主角所在的大陆',
            '主角所在的国家',
            '主角所在的门派',
            '主角所在的世家',
          ],
        },
        {
          type: 'how much',
          descriptio: '什么样的经历',
          items: [
            '穿越',
            '得金手指',
            '世家斗争',
            '门派斗争',
            '国家斗争',
            '种族斗争',
            '高级世界与低级世界的斗争',
            '人际关系',
            '炫耀',
            '受辱',
            '练功',
            '历练',
            '被追杀',
            '奇遇',
            '反追杀',
            '藏宝图',
            '解谜',
            '秘境',
            '洞府',
            '夺宝',
            '考核',
            '拜师',
            '做任务',
            '赚钱',
            '分宝',
            '得宠',
            '得功法',
            '侦查',
            '暗杀',
            '暗算',
            '冒险',
            '阴谋',
            '背叛',
            '踩人',
            '打脸',
            '赌约',
            '复仇',
            '决斗',
            '比赛',
            '斗宝',
            '斗宠',
            '衣锦还乡',
            '聚会',
            '拍卖会',
            '各类工会',
            '爱人之情',
            '朋友之谊',
            '建立势力',
            '打大BOSS',
            '位临绝巅',
          ],
        },
        {
          type: 'what',
          descriptio: '什么样的世界观',
          items: [
            '世界体系',
            '等级体系',
            '种族体系',
            '寿命体系',
            '国家体系',
            '门派体系',
            '世家体系',
            '工会体系',
            '普遍价值观',
            '职业体系',
            '功法体系',
            '宝物体系',
            '炼丹体系',
            '炼器体系',
            '阵法体系',
            '符法体系',
            '宠物体系',
          ],
        },
        {
          type: 'why',
          descriptio: '为什么想要变强',
          items: [
            '复仇',
            '守护',
            '寻找',
            '复活',
            '权力及地位',
            '金钱',
            '内疚',
            '追求武道巅峰',
          ],
          others: {
            复仇: [
              '天道之仇',
              '阶级之仇',
              '种族之仇',
              '国家之仇',
              '门派之仇',
              '世家之仇',
              '工会之仇',
              '团队之仇',
              '私人之仇',
            ],
            守护: ['亲情', '师徒之情', '友情', '爱情', '爱屋及乌', '手下'],
            寻找: [
              '身世之谜',
              '爱人',
              '功法',
              '宝物',
              '丹药',
              '阵法',
              '符法',
              '宠物',
            ],
            复活: ['亲人', '爱人', '兄弟'],
            权力及地位: ['赢得尊严', '赢得荣誉', '掌控势力'],
          },
        },
      ],
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {},
});