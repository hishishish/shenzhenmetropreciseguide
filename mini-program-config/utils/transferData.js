const TRANSFER_DATA = [
  // Line 5 towards Chiwan (赤湾)
  { lineId: "5", direction: "赤湾", station: "前湾", targetLineId: "9", targetDirection: "文锦", method: "节点", time: "1分钟", cars: ["1", "6"], doors: ["3", "28"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "前海湾", targetLineId: "1", targetDirection: "罗湖", method: "站厅", time: "2分钟", cars: ["5", "4", "3", "2"], doors: ["6", "14", "18", "25"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "前海湾", targetLineId: "11", targetDirection: "碧头", method: "站厅", time: "2分钟", cars: ["5", "4", "3", "2"], doors: ["6", "14", "18", "25"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "灵芝", targetLineId: "12", targetDirection: "左炮台东", method: "节点", time: "1分钟", cars: ["6"], doors: ["5"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "灵芝", targetLineId: "12", targetDirection: "松岗", method: "节点", time: "1分钟", cars: ["1"], doors: ["28"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "留仙洞", targetLineId: "13", targetDirection: "深圳湾口岸", method: "通道", time: "3分钟", cars: ["2"], doors: ["22"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "五和", targetLineId: "10", targetDirection: "福田口岸", method: "节点", time: "1分钟", cars: ["4", "3"], doors: ["11", "20"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "布吉", targetLineId: "3", targetDirection: "福保", method: "站厅", time: "5分钟", cars: ["3"], doors: ["20"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "布吉", targetLineId: "14", targetDirection: "岗厦北", method: "通道", time: "4分钟", cars: ["3"], doors: ["20"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "太安", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ["4", "3"], doors: ["14", "17"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "怡景", targetLineId: "2_8", targetDirection: "赤湾", method: "站厅", time: "2分钟", cars: ["4", "3"], doors: ["14", "18"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "黄贝岭", targetLineId: "2_8", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ["4", "3"], doors: ["14", "17"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "塘朗", targetLineId: "7", targetDirection: "太安", method: "节点", time: "1分钟", cars: ["2"], doors: ["25"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "塘朗", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ["1"], doors: ["28"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "深圳北站", targetLineId: "4", targetDirection: "牛湖", method: "站厅", time: "5分钟", cars: ["6"], doors: ["5"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "深圳北站", targetLineId: "6", targetDirection: "松岗", method: "站厅", time: "5分钟", cars: ["6"], doors: ["5"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "黄贝岭", targetLineId: "2_8", targetDirection: "溪涌", method: "同台", time: "1分钟", cars: ["ANY"], doors: ["ANY"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "黄贝岭", targetLineId: "2_8", targetDirection: "赤湾", method: "站厅", time: "2分钟", cars: ["ANY"], doors: ["ANY"], notes: "6号车为车头", doorSide: "左侧" },

  // Line 5 towards Dajuyuan (大剧院)
  { lineId: "5", direction: "大剧院", station: "前湾", targetLineId: "9", targetDirection: "文锦", method: "节点", time: "1分钟", cars: ["1", "6"], doors: ["3", "28"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "前海湾", targetLineId: "1", targetDirection: "罗湖", method: "站厅", time: "2分钟", cars: ["5", "4", "3", "2"], doors: ["25", "17", "13", "6"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "灵芝", targetLineId: "12", targetDirection: "左炮台东", method: "节点", time: "1分钟", cars: ["6"], doors: ["26"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "灵芝", targetLineId: "12", targetDirection: "松岗", method: "节点", time: "1分钟", cars: ["1"], doors: ["3"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "留仙洞", targetLineId: "13", targetDirection: "深圳湾口岸", method: "通道", time: "3分钟", cars: ["2"], doors: ["10"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "五和", targetLineId: "10", targetDirection: "福田口岸", method: "节点", time: "1分钟", cars: ["3", "4"], doors: ["11", "20"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "布吉", targetLineId: "3", targetDirection: "福保", method: "站厅", time: "5分钟", cars: ["3"], doors: ["11"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "布吉", targetLineId: "14", targetDirection: "岗厦北", method: "通道", time: "4分钟", cars: ["3"], doors: ["11"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "太安", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ["3", "4"], doors: ["14", "17"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "黄贝岭", targetLineId: "2_8", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ["3", "4"], doors: ["14", "17"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "深圳北站", targetLineId: "4", targetDirection: "牛湖", method: "站厅", time: "5分钟", cars: ["6"], doors: ["30"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "深圳北站", targetLineId: "6", targetDirection: "松岗", method: "站厅", time: "5分钟", cars: ["6"], doors: ["30"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "塘朗", targetLineId: "7", targetDirection: "太安", method: "节点", time: "1分钟", cars: ["2"], doors: ["7"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "塘朗", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ["1"], doors: ["2"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "黄贝岭", targetLineId: "2_8", targetDirection: "赤湾", method: "站厅", time: "2分钟", cars: ["ANY"], doors: ["ANY"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "黄贝岭", targetLineId: "2_8", targetDirection: "溪涌", method: "同台", time: "1分钟", cars: ["ANY"], doors: ["ANY"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "大剧院", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "3分钟", cars: ["2"], doors: ["7"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "大剧院", targetLineId: "2_8", targetDirection: "溪涌", method: "通道", time: "3分钟", cars: ["2"], doors: ["7"], notes: "1号车为车头", doorSide: "左侧" },

  // Line 1 towards Luohu (罗湖)
  { lineId: "1", direction: "罗湖", station: "世界之窗", targetLineId: "2_8", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ["3"], doors: ["11"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "世界之窗", targetLineId: "2_8", targetDirection: "溪涌", method: "节点", time: "1分钟", cars: ["6"], doors: ["27"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "车公庙", targetLineId: "7", targetDirection: "太安", method: "通道", time: "5分钟", cars: ["1"], doors: ["4"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "车公庙", targetLineId: "9", targetDirection: "文锦", method: "通道", time: "5分钟", cars: ["1"], doors: ["4"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "车公庙", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "2分钟", cars: ["5"], doors: ["21"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "购物公园", targetLineId: "3", targetDirection: "双龙", method: "通道", time: "5分钟", cars: ["5"], doors: ["24"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "会展中心", targetLineId: "4", targetDirection: "牛湖", method: "节点", time: "1分钟", cars: ["3"], doors: ["11"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "会展中心", targetLineId: "4", targetDirection: "福田口岸", method: "节点", time: "1分钟", cars: ["5"], doors: ["24"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "岗厦", targetLineId: "10", targetDirection: "双拥街", method: "通道", time: "3分钟", cars: ["2", "5"], doors: ["9", "22"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "科学馆", targetLineId: "6", targetDirection: "松岗", method: "通道", time: "5分钟", cars: ["2"], doors: ["7"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "大剧院", targetLineId: "2_8", targetDirection: "溪涌", method: "通道", time: "3分钟", cars: ["5"], doors: ["25"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "大剧院", targetLineId: "5", targetDirection: "赤湾", method: "通道", time: "3分钟", cars: ["5"], doors: ["25"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "老街", targetLineId: "3", targetDirection: "福保", method: "节点", time: "2分钟", cars: ["4"], doors: ["16-17"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "老街", targetLineId: "3", targetDirection: "坪地六联", method: "同台", time: "1分钟", cars: ["3-6"], doors: ["13-30"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "深大", targetLineId: "13", targetDirection: "上屋", method: "通道", time: "4分钟", cars: ["2"], doors: ["10"], notes: "1号车为车头", doorSide: "左侧" },

  // Line 1 towards Airport East (机场东)
  { lineId: "1", direction: "机场东", station: "世界之窗", targetLineId: "2_8", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ["3"], doors: ["20"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "世界之窗", targetLineId: "2_8", targetDirection: "溪涌", method: "节点", time: "1分钟", cars: ["6"], doors: ["4"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "车公庙", targetLineId: "7", targetDirection: "太安", method: "通道", time: "5分钟", cars: ["1"], doors: ["27"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "车公庙", targetLineId: "9", targetDirection: "文锦", method: "通道", time: "5分钟", cars: ["1"], doors: ["27"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "车公庙", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "2分钟", cars: ["5"], doors: ["10"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "购物公园", targetLineId: "3", targetDirection: "双龙", method: "通道", time: "5分钟", cars: ["5"], doors: ["7"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "会展中心", targetLineId: "4", targetDirection: "牛湖", method: "节点", time: "1分钟", cars: ["3"], doors: ["20"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "会展中心", targetLineId: "4", targetDirection: "福田口岸", method: "节点", time: "1分钟", cars: ["5"], doors: ["7"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "岗厦", targetLineId: "10", targetDirection: "双拥街", method: "通道", time: "3分钟", cars: ["2", "5"], doors: ["9", "22"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "科学馆", targetLineId: "6", targetDirection: "松岗", method: "通道", time: "5分钟", cars: ["2"], doors: ["24"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "大剧院", targetLineId: "2_8", targetDirection: "溪涌", method: "通道", time: "3分钟", cars: ["5"], doors: ["6"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "大剧院", targetLineId: "5", targetDirection: "赤湾", method: "通道", time: "3分钟", cars: ["5"], doors: ["6"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "老街", targetLineId: "3", targetDirection: "福保", method: "同台", time: "1分钟", cars: ["3-6"], doors: ["1-3", "6-9", "15-17"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "老街", targetLineId: "3", targetDirection: "坪地六联", method: "节点", time: "2分钟", cars: ["6"], doors: ["3-4"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "深大", targetLineId: "13", targetDirection: "上屋", method: "通道", time: "4分钟", cars: ["5"], doors: ["21"], notes: "6号车为车头", doorSide: "左侧" },

  // Line 11 towards Bitou (碧头)
  { lineId: "11", direction: "碧头", station: "岗厦北", targetLineId: "2_8", targetDirection: "溪涌", method: "站厅", time: "2分钟", cars: ["4"], doors: ["21"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "碧头", station: "岗厦北", targetLineId: "10", targetDirection: "双拥街", method: "节点", time: "1分钟", cars: ["2"], doors: ["32"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "碧头", station: "岗厦北", targetLineId: "14", targetDirection: "沙田", method: "站厅", time: "1分钟", cars: ["ANY"], doors: ["ANY"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "碧头", station: "福田", targetLineId: "2_8", targetDirection: "赤湾", method: "站厅", time: "2分钟", cars: ["2", "5"], doors: ["31", "16"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "碧头", station: "福田", targetLineId: "3", targetDirection: "福保", method: "节点", time: "1分钟", cars: ["8"], doors: ["5"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "碧头", station: "福田", targetLineId: "3", targetDirection: "坪地六联", method: "节点", time: "1分钟", cars: ["6"], doors: ["15"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "碧头", station: "车公庙", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "5分钟", cars: ["3"], doors: ["28"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "碧头", station: "车公庙", targetLineId: "7", targetDirection: "太安", method: "通道", time: "3分钟", cars: ["5"], doors: ["18"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "碧头", station: "车公庙", targetLineId: "9", targetDirection: "文锦", method: "通道", time: "3分钟", cars: ["7"], doors: ["7"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "碧头", station: "后海", targetLineId: "2_8", targetDirection: "赤湾", method: "通道", time: "5分钟", cars: ["7"], doors: ["7"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "碧头", station: "后海", targetLineId: "13", targetDirection: "上屋", method: "通道", time: "3分钟", cars: ["2"], doors: ["32"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "碧头", station: "前海湾", targetLineId: "1", targetDirection: "罗湖", method: "站厅", time: "3分钟", cars: ["2", "3", "4", "6", "7"], doors: ["32", "26", "21", "15", "10"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "碧头", station: "前海湾", targetLineId: "5", targetDirection: "赤湾", method: "站厅", time: "2分钟", cars: ["2", "3", "4", "6", "7"], doors: ["32", "26", "21", "15", "10"], notes: "8号车为车头", doorSide: "左侧" },

  // Line 11 towards Hongling South (红岭南)
  { lineId: "11", direction: "红岭南", station: "岗厦北", targetLineId: "2_8", targetDirection: "溪涌", method: "站厅", time: "2分钟", cars: ["4"], doors: ["20"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "红岭南", station: "前海湾", targetLineId: "1", targetDirection: "罗湖", method: "站厅", time: "3分钟", cars: ["2", "3", "4", "6", "7"], doors: ["31", "26", "20", "15", "9"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "红岭南", station: "前海湾", targetLineId: "5", targetDirection: "赤湾", method: "站厅", time: "2分钟", cars: ["2", "3", "4", "6", "7"], doors: ["31", "26", "20", "15", "9"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "红岭南", station: "后海", targetLineId: "2_8", targetDirection: "赤湾", method: "通道", time: "5分钟", cars: ["7"], doors: ["34"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "红岭南", station: "后海", targetLineId: "13", targetDirection: "上屋", method: "通道", time: "3分钟", cars: ["2"], doors: ["9"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "红岭南", station: "车公庙", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "5分钟", cars: ["5"], doors: ["22"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "红岭南", station: "福田", targetLineId: "2_8", targetDirection: "赤湾", method: "站厅", time: "2分钟", cars: ["2", "5"], doors: ["10", "25"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "红岭南", station: "福田", targetLineId: "3", targetDirection: "福保", method: "节点", time: "1分钟", cars: ["8"], doors: ["36"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "红岭南", station: "福田", targetLineId: "3", targetDirection: "坪地六联", method: "节点", time: "1分钟", cars: ["6"], doors: ["26"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "11", direction: "红岭南", station: "岗厦北", targetLineId: "10", targetDirection: "双拥街", method: "节点", time: "1分钟", cars: ["2"], doors: ["9"], notes: "1号车为车头", doorSide: "左侧" },

  // Line 13 towards Shangwu (上屋)
  { lineId: "13", direction: "上屋", station: "留仙洞", targetLineId: "5", targetDirection: "赤湾", method: "通道", time: "3分钟", cars: ["7"], doors: ["32"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "13", direction: "上屋", station: "深大", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "4分钟", cars: ["4"], doors: ["19", "20"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "13", direction: "上屋", station: "科苑", targetLineId: "2_8", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ["1"], doors: ["3"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "13", direction: "上屋", station: "粤海门", targetLineId: "9", targetDirection: "文锦", method: "节点", time: "1分钟", cars: ["1"], doors: ["1"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "13", direction: "上屋", station: "后海", targetLineId: "2_8", targetDirection: "赤湾", method: "通道", time: "8分钟", cars: ["2", "4"], doors: ["7", "19", "20"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "13", direction: "上屋", station: "后海", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "3分钟", cars: ["2"], doors: ["7"], notes: "1号车为车头", doorSide: "左侧" },

  // Line 13 towards Shenzhen Bay Checkpoint (深圳湾口岸)
  { lineId: "13", direction: "深圳湾口岸", station: "留仙洞", targetLineId: "5", targetDirection: "赤湾", method: "通道", time: "3分钟", cars: ["7"], doors: ["9"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "13", direction: "深圳湾口岸", station: "深大", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "4分钟", cars: ["4"], doors: ["21", "22"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "13", direction: "深圳湾口岸", station: "科苑", targetLineId: "2_8", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ["1"], doors: ["38"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "13", direction: "深圳湾口岸", station: "粤海门", targetLineId: "9", targetDirection: "文锦", method: "节点", time: "1分钟", cars: ["1"], doors: ["40"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "13", direction: "深圳湾口岸", station: "后海", targetLineId: "2_8", targetDirection: "赤湾", method: "通道", time: "8分钟", cars: ["2", "4"], doors: ["21", "22", "34"], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "13", direction: "深圳湾口岸", station: "后海", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "3分钟", cars: ["2"], doors: ["34"], notes: "8号车为车头", doorSide: "左侧" },
];

function findTransferDetail(lineId, direction, station, targetLineId, targetDirection) {
  const matches = TRANSFER_DATA.filter(t => 
    t.lineId === lineId && 
    t.direction === direction &&
    t.station === station && 
    t.targetLineId === targetLineId
  );

  if (matches.length === 0) return undefined;

  if (targetDirection) {
    const specificMatch = matches.find(t => t.targetDirection === targetDirection);
    if (specificMatch) return specificMatch;
    
    const anyMatch = matches.find(t => t.targetDirection === "ANY" || t.targetDirection === "");
    if (anyMatch) return anyMatch;
  }

  return matches[0];
}

module.exports = {
  TRANSFER_DATA,
  findTransferDetail
};
