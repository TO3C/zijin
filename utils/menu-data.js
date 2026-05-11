const categories = [
  { id: 'recommend', name: '推荐', icon: '♧' },
  { id: 'signature', name: '招牌必点', icon: '🔥' },
  { id: 'meat', name: '肉类串烧', icon: '♘' },
  { id: 'seafood', name: '海鲜烧烤', icon: '♨' },
  { id: 'vegetable', name: '蔬菜烤物', icon: '♧' },
  { id: 'snack', name: '主食小吃', icon: '♙' },
  { id: 'drink', name: '酒水饮料', icon: '⚘' }
]

const dishes = [
  {
    id: 'lamb',
    category: 'signature',
    name: '招牌羊肉串',
    desc: '精选羊肉，肥瘦相间',
    price: 6,
    unit: '串',
    tag: '招牌',
    imageClass: 'skewer-one'
  },
  {
    id: 'beef',
    category: 'signature',
    name: '秘制牛肉串',
    desc: '秘制腌料，鲜嫩多汁',
    price: 8,
    unit: '串',
    tag: '招牌',
    imageClass: 'skewer-two'
  },
  {
    id: 'oyster',
    category: 'signature',
    name: '蒜香生蚝',
    desc: '蒜香浓郁，鲜美无比',
    price: 15,
    unit: '个',
    tag: '必点',
    imageClass: 'oyster'
  },
  {
    id: 'eggplant',
    category: 'vegetable',
    name: '烤茄子',
    desc: '香辣入味，软糯可口',
    price: 9,
    unit: '份',
    tag: '',
    imageClass: 'eggplant'
  },
  {
    id: 'chive',
    category: 'vegetable',
    name: '烤韭菜',
    desc: '炭火烤制，香气扑鼻',
    price: 6,
    unit: '份',
    tag: '',
    imageClass: 'chive'
  },
  {
    id: 'corn',
    category: 'snack',
    name: '烤玉米',
    desc: '香甜软糯，焦香入味',
    price: 6,
    unit: '串',
    tag: '',
    imageClass: 'corn'
  }
]

module.exports = {
  categories,
  dishes
}
