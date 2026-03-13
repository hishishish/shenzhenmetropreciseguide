export interface TransferInfo {
  lineId: string;
  direction: string; // Terminal station name
  station: string;
  targetLineId: string;
  targetDirection: string;
  method: string;
  time: string;
  cars: string[];
  doors: string[];
  notes: string;
  doorSide?: '左侧' | '右侧';
}

export const TRANSFER_DATA: TransferInfo[] = [
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
  { lineId: "5", direction: "赤湾", station: "赤湾", targetLineId: "2_8", targetDirection: "溪涌", method: "站厅", time: "2分钟", cars: ["4", "3"], doors: ["14", "18"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "宝安中心", targetLineId: "1", targetDirection: "罗湖", method: "节点", time: "1分钟", cars: ["4", "3"], doors: ["14", "17"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "西丽", targetLineId: "7", targetDirection: "太安", method: "节点", time: "1分钟", cars: ["2"], doors: ["25"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "赤湾", station: "西丽", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ["1"], doors: ["28"], notes: "6号车为车头", doorSide: "左侧" },
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
  { lineId: "5", direction: "大剧院", station: "宝安中心", targetLineId: "1", targetDirection: "罗湖", method: "节点", time: "1分钟", cars: ["3", "4"], doors: ["14", "17"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "深圳北站", targetLineId: "4", targetDirection: "牛湖", method: "站厅", time: "5分钟", cars: ["6"], doors: ["30"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "深圳北站", targetLineId: "6", targetDirection: "松岗", method: "站厅", time: "5分钟", cars: ["6"], doors: ["30"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "西丽", targetLineId: "7", targetDirection: "太安", method: "节点", time: "1分钟", cars: ["2"], doors: ["7"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "5", direction: "大剧院", station: "西丽", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ["1"], doors: ["2"], notes: "1号车为车头", doorSide: "左侧" },
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
  { lineId: "1", direction: "罗湖", station: "深大", targetLineId: "13", targetDirection: "上屋", method: "通道", time: "4分钟", cars: ["3"], doors: ["12"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "宝安中心", targetLineId: "5", targetDirection: "大剧院", method: "节点", time: "1分钟", cars: ["3"], doors: ["20"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "宝安中心", targetLineId: "5", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ["6"], doors: ["4"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "前海湾", targetLineId: "5", targetDirection: "赤湾", method: "站厅", time: "2分钟", cars: ["2","5"], doors: ["6","25"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "前海湾", targetLineId: "11", targetDirection: "碧头", method: "站厅", time: "3分钟", cars: ["2","5"], doors: ["6","25"], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "罗湖", station: "桃园", targetLineId: "12", targetDirection: "松岗", method: "站厅", time: "2分钟", cars: ["2","5"], doors: ["8","25"], notes: "1号车为车头", doorSide: "左侧" },

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
  { lineId: "1", direction: "机场东", station: "深大", targetLineId: "13", targetDirection: "上屋", method: "通道", time: "4分钟", cars: ["3"], doors: ["19"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "宝安中心", targetLineId: "5", targetDirection: "大剧院", method: "节点", time: "1分钟", cars: ["3"], doors: ["20"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "宝安中心", targetLineId: "5", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ["6"], doors: ["4"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "前海湾", targetLineId: "5", targetDirection: "赤湾", method: "站厅", time: "2分钟", cars: ["2","5"], doors: ["6","25"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "前海湾", targetLineId: "11", targetDirection: "碧头", method: "站厅", time: "3分钟", cars: ["2","5"], doors: ["6","25"], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "1", direction: "机场东", station: "桃园", targetLineId: "12", targetDirection: "松岗", method: "站厅", time: "2分钟", cars: ["2","5"], doors: ["6","23"], notes: "6号车为车头", doorSide: "左侧" },

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

  // Line 20 towards Airport North (机场北) 
  { lineId: "20", direction: "机场北", station: "国展北", targetLineId: "12", targetDirection: "松岗", method: "站厅", time: "1分钟", cars: ['4', '7'], doors: ['6', '25'], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "20", direction: "机场北", station: "国展", targetLineId: "12", targetDirection: "松岗", method: "站厅", time: "1分钟", cars: ['3', '7'], doors: ['8', '27'], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "20", direction: "机场北", station: "机场北", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "3分钟", cars: ['1', '3', '6', '8'], doors: ['4', '12', '29', '37'], notes: "8号车为车头", doorSide: "右侧" },

 // Line 20 towards Exhibition City (会展城)
  { lineId: "20", direction: "会展城", station: "国展北", targetLineId: "12", targetDirection: "松岗", method: "站厅", time: "1分钟", cars: ['4'], doors: ['16'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "20", direction: "会展城", station: "国展", targetLineId: "12", targetDirection: "松岗", method: "站厅", time: "1分钟", cars: ['7'], doors: ['35'], notes: "1号车为车头", doorSide: "左侧" },

 // Line 6_branch towards SUAT (深理工)
  { lineId: "6_branch", direction: "深理工", station: "光明", targetLineId: "6", targetDirection: "科学馆", method: "站厅", time: "2分钟", cars: ['6', '1'], doors: ['3', '22'], notes: "6号车为车头", doorSide: "左侧" },

 // Line 6_branch towards Guangming City (光明城)
  { lineId: "6_branch", direction: "光明城", station: "光明", targetLineId: "6", targetDirection: "科学馆", method: "站厅", time: "2分钟", cars: ['6', '1'], doors: ['3', '22'], notes: "1号车为车头", doorSide: "左侧" },

 // Line 12 towards Zuopaotai East (左炮台东)
  { lineId: "12", direction: "左炮台东", station: "国展北", targetLineId: "20", targetDirection: "会展城", method: "站厅", time: "1分钟", cars: ['2'], doors: ['6'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "12", direction: "左炮台东", station: "国展", targetLineId: "20", targetDirection: "会展城", method: "站厅", time: "1分钟", cars: ['2'], doors: ['8'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "12", direction: "左炮台东", station: "福永", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "6分钟", cars: ['6'], doors: ['26'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "12", direction: "左炮台东", station: "机场东", targetLineId: "1", targetDirection: "罗湖", method: "天地", time: "6分钟", cars: ['2'], doors: ['6'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "12", direction: "左炮台东", station: "桃园", targetLineId: "1", targetDirection: "罗湖", method: "站厅", time: "2分钟", cars: ['5'], doors: ['22'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "12", direction: "左炮台东", station: "海上世界", targetLineId: "2", targetDirection: "溪涌", method: "通道", time: "3分钟", cars: ['2', '5'], doors: ['8', '23'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "12", direction: "左炮台东", station: "灵芝", targetLineId: "5", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ['3', '4'], doors: ['14', '17'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "12", direction: "左炮台东", station: "南山", targetLineId: "11", targetDirection: "碧头", method: "节点", time: "1分钟", cars: ['3', '4'], doors: ['14', '19'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "12", direction: "左炮台东", station: "南油", targetLineId: "9", targetDirection: "前湾", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "12", direction: "左炮台东", station: "南油", targetLineId: "9", targetDirection: "文锦", method: "站厅", time: "2分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "右侧" },

 // Line 12 towards Songgang (松岗)
  { lineId: "12", direction: "松岗", station: "松岗", targetLineId: "6", targetDirection: "科学馆", method: "通道", time: "3分钟", cars: ['6'], doors: ['1'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "12", direction: "松岗", station: "松岗", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "4分钟", cars: ['5'], doors: ['8'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "12", direction: "松岗", station: "国展北", targetLineId: "20", targetDirection: "会展城", method: "站厅", time: "1分钟", cars: ['2'], doors: ['25'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "12", direction: "松岗", station: "国展", targetLineId: "20", targetDirection: "会展城", method: "站厅", time: "1分钟", cars: ['2'], doors: ['23'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "12", direction: "松岗", station: "福永", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "6分钟", cars: ['6'], doors: ['4'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "12", direction: "松岗", station: "机场东", targetLineId: "1", targetDirection: "罗湖", method: "天地", time: "6分钟", cars: ['2'], doors: ['25'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "12", direction: "松岗", station: "桃园", targetLineId: "1", targetDirection: "罗湖", method: "站厅", time: "2分钟", cars: ['5'], doors: ['9'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "12", direction: "松岗", station: "海上世界", targetLineId: "2", targetDirection: "溪涌", method: "通道", time: "3分钟", cars: ['2', '5'], doors: ['8', '23'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "12", direction: "松岗", station: "灵芝", targetLineId: "5", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ['3', '4'], doors: ['14', '17'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "12", direction: "松岗", station: "南山", targetLineId: "11", targetDirection: "碧头", method: "节点", time: "1分钟", cars: ['3', '4'], doors: ['11', '17'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "12", direction: "松岗", station: "南油", targetLineId: "9", targetDirection: "前湾", method: "站厅", time: "2分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "12", direction: "松岗", station: "南油", targetLineId: "9", targetDirection: "文锦", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "右侧" },

 // Line 6 towards Science Museum (科学馆)
  { lineId: "6", direction: "科学馆", station: "光明", targetLineId: "6_branch", targetDirection: "光明城", method: "站厅", time: "2分钟", cars: ['1', '6'], doors: ['5', '26'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "科学馆", station: "上屋", targetLineId: "13", targetDirection: "上屋", method: "天地", time: "5分钟", cars: ['1'], doors: ['5'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "科学馆", station: "红山", targetLineId: "4", targetDirection: "牛湖", method: "站厅", time: "2分钟", cars: ['4'], doors: ['20'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "科学馆", station: "深圳北站", targetLineId: "4", targetDirection: "牛湖", method: "站厅", time: "2分钟", cars: ['1', '3', '6'], doors: ['5', '11', '26'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "科学馆", station: "深圳北站", targetLineId: "5", targetDirection: "赤湾", method: "天地", time: "5分钟", cars: ['6'], doors: ['26'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "科学馆", station: "深圳北站", targetLineId: "5", targetDirection: "大剧院", method: "天地", time: "5分钟", cars: ['1'], doors: ['5'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "科学馆", station: "银湖", targetLineId: "9", targetDirection: "文锦", method: "节点", time: "1分钟", cars: ['1'], doors: ['5'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "科学馆", station: "八卦岭", targetLineId: "7", targetDirection: "深大丽湖", method: "通道", time: "3分钟", cars: ['4'], doors: ['20'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "科学馆", station: "通新岭", targetLineId: "3", targetDirection: "福保", method: "通道", time: "3分钟", cars: ['5'], doors: ['22'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "科学馆", station: "科学馆", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "5分钟", cars: ['6'], doors: ['26'], notes: "1号车为车头", doorSide: "左侧" },

 // Line 6 towards Songgang (松岗)
  { lineId: "6", direction: "松岗", station: "光明", targetLineId: "6_branch", targetDirection: "光明城", method: "站厅", time: "2分钟", cars: ['1', '6'], doors: ['5', '26'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "松岗", station: "上屋", targetLineId: "13", targetDirection: "上屋", method: "天地", time: "5分钟", cars: ['1'], doors: ['26'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "松岗", station: "红山", targetLineId: "4", targetDirection: "牛湖", method: "站厅", time: "2分钟", cars: ['4'], doors: ['11'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "松岗", station: "深圳北站", targetLineId: "4", targetDirection: "牛湖", method: "站厅", time: "2分钟", cars: ['1', '3', '6'], doors: ['5', '20', '26'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "松岗", station: "深圳北站", targetLineId: "5", targetDirection: "赤湾", method: "天地", time: "5分钟", cars: ['6'], doors: ['5'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "松岗", station: "深圳北站", targetLineId: "5", targetDirection: "大剧院", method: "天地", time: "5分钟", cars: ['1'], doors: ['26'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "松岗", station: "银湖", targetLineId: "9", targetDirection: "文锦", method: "节点", time: "1分钟", cars: ['1'], doors: ['26'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "松岗", station: "八卦岭", targetLineId: "7", targetDirection: "深大丽湖", method: "通道", time: "3分钟", cars: ['4'], doors: ['11'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "松岗", station: "通新岭", targetLineId: "3", targetDirection: "福保", method: "通道", time: "3分钟", cars: ['5'], doors: ['9'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "6", direction: "松岗", station: "松岗", targetLineId: "11", targetDirection: "碧头", method: "节点", time: "1分钟", cars: ['3', '4'], doors: ['15', '16'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "6", direction: "松岗", station: "松岗", targetLineId: "12", targetDirection: "松岗", method: "通道", time: "4分钟", cars: ['2', '5'], doors: ['6', '25'], notes: "6号车为车头", doorSide: "右侧" },

 // Line 16 towards Yuanshanxikeng (园山西坑)
  { lineId: "16", direction: "园山西坑", station: "坪山围", targetLineId: "14", targetDirection: "沙田", method: "节点", time: "1分钟", cars: ['1'], doors: ['29'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "16", direction: "园山西坑", station: "双龙", targetLineId: "3", targetDirection: "福保", method: "天地", time: "4分钟", cars: ['2', '5'], doors: ['7', '21'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "16", direction: "园山西坑", station: "大运", targetLineId: "3", targetDirection: "福保", method: "天地", time: "7分钟", cars: ['1', '3'], doors: ['17', '29'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "16", direction: "园山西坑", station: "大运", targetLineId: "14", targetDirection: "沙田", method: "站厅", time: "1分钟", cars: ['1', '3', '5', '6'], doors: ['29', '17', '8', '2'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "16", direction: "园山西坑", station: "大运", targetLineId: "14", targetDirection: "岗厦北", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "右侧" },

 // Line 16 towards Tianxin (田心)
  { lineId: "16", direction: "田心", station: "坪山围", targetLineId: "14", targetDirection: "沙田", method: "节点", time: "1分钟", cars: ['1'], doors: ['2'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "16", direction: "田心", station: "双龙", targetLineId: "3", targetDirection: "福保", method: "天地", time: "4分钟", cars: ['2'], doors: ['10'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "16", direction: "田心", station: "大运", targetLineId: "3", targetDirection: "福保", method: "天地", time: "7分钟", cars: ['1', '3'], doors: ['2', '14'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "16", direction: "田心", station: "大运", targetLineId: "14", targetDirection: "岗厦北", method: "站厅", time: "1分钟", cars: ['1', '3', '5', '6'], doors: ['2', '14', '23', '19'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "16", direction: "田心", station: "大运", targetLineId: "14", targetDirection: "沙田", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "右侧" },

 // Line 10 towards Futian Checkpoint (福田口岸)
  { lineId: "10", direction: "福田口岸", station: "五和", targetLineId: "5", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ['4', '5'], doors: ['17', '24'], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "10", direction: "福田口岸", station: "孖岭", targetLineId: "9", targetDirection: "文锦", method: "通道", time: "5分钟", cars: ['3'], doors: ['27'], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "10", direction: "福田口岸", station: "岗厦", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "3分钟", cars: ['3'], doors: ['29'], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "10", direction: "福田口岸", station: "福民", targetLineId: "4", targetDirection: "牛湖", method: "通道", time: "7分钟", cars: ['7'], doors: ['8'], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "10", direction: "福田口岸", station: "福民", targetLineId: "7", targetDirection: "深大丽湖", method: "通道", time: "4分钟", cars: ['7'], doors: ['8'], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "10", direction: "福田口岸", station: "莲花村", targetLineId: "3", targetDirection: "福保", method: "节点", time: "1分钟", cars: ['6'], doors: ['14'], notes: "8号车为车头", doorSide: "右侧" },
  { lineId: "10", direction: "福田口岸", station: "岗厦北", targetLineId: "2", targetDirection: "溪涌", method: "通道", time: "5分钟", cars: ['2'], doors: ['35'], notes: "8号车为车头", doorSide: "右侧" },
  { lineId: "10", direction: "福田口岸", station: "岗厦北", targetLineId: "14", targetDirection: "沙田", method: "节点", time: "1分钟", cars: ['3'], doors: ['28'], notes: "8号车为车头", doorSide: "右侧" },
  { lineId: "10", direction: "福田口岸", station: "岗厦北", targetLineId: "11", targetDirection: "红岭南", method: "节点", time: "1分钟", cars: ['3'], doors: ['28'], notes: "8号车为车头", doorSide: "右侧" },
  { lineId: "10", direction: "福田口岸", station: "岗厦北", targetLineId: "11", targetDirection: "碧头", method: "节点", time: "1分钟", cars: ['2'], doors: ['34'], notes: "8号车为车头", doorSide: "右侧" },

 // Line 10 towards Shuangyong Street (双拥街)
  { lineId: "10", direction: "双拥街", station: "五和", targetLineId: "5", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ['4', '5'], doors: ['17', '24'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "10", direction: "双拥街", station: "孖岭", targetLineId: "9", targetDirection: "文锦", method: "通道", time: "5分钟", cars: ['3'], doors: ['14'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "10", direction: "双拥街", station: "岗厦", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "3分钟", cars: ['3'], doors: ['12'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "10", direction: "双拥街", station: "福民", targetLineId: "4", targetDirection: "牛湖", method: "通道", time: "7分钟", cars: ['7'], doors: ['33'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "10", direction: "双拥街", station: "福民", targetLineId: "7", targetDirection: "深大丽湖", method: "通道", time: "4分钟", cars: ['7'], doors: ['33'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "10", direction: "双拥街", station: "莲花村", targetLineId: "3", targetDirection: "福保", method: "节点", time: "1分钟", cars: ['6'], doors: ['27'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "10", direction: "双拥街", station: "岗厦北", targetLineId: "2", targetDirection: "溪涌", method: "通道", time: "5分钟", cars: ['2'], doors: ['6'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "10", direction: "双拥街", station: "岗厦北", targetLineId: "14", targetDirection: "沙田", method: "节点", time: "1分钟", cars: ['3'], doors: ['13'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "10", direction: "双拥街", station: "岗厦北", targetLineId: "11", targetDirection: "红岭南", method: "节点", time: "1分钟", cars: ['3'], doors: ['13'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "10", direction: "双拥街", station: "岗厦北", targetLineId: "11", targetDirection: "碧头", method: "节点", time: "1分钟", cars: ['2'], doors: ['7'], notes: "1号车为车头", doorSide: "右侧" },

 // Line 14 towards Gangxiabei (岗厦北)
  { lineId: "14", direction: "岗厦北", station: "坪山围", targetLineId: "16", targetDirection: "田心", method: "节点", time: "1分钟", cars: ['3', '5'], doors: ['15', '21'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "14", direction: "岗厦北", station: "大运", targetLineId: "3", targetDirection: "福保", method: "天地", time: "7分钟", cars: ['5', '7'], doors: ['22', '34'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "14", direction: "岗厦北", station: "大运", targetLineId: "16", targetDirection: "田心", method: "站厅", time: "1分钟", cars: ['2', '3', '5', '7'], doors: ['7', '13', '22', '34'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "14", direction: "岗厦北", station: "大运", targetLineId: "16", targetDirection: "园山西坑", method: "同台", time: "1分钟", cars: ['2-7'], doors: ['ANY'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "14", direction: "岗厦北", station: "布吉", targetLineId: "3", targetDirection: "福保", method: "天地", time: "5分钟", cars: ['2'], doors: ['9'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "14", direction: "岗厦北", station: "布吉", targetLineId: "5", targetDirection: "赤湾", method: "通道", time: "4分钟", cars: ['5'], doors: ['24'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "14", direction: "岗厦北", station: "黄木岗", targetLineId: "7", targetDirection: "深大丽湖", method: "同台", time: "2分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "14", direction: "岗厦北", station: "黄木岗", targetLineId: "7", targetDirection: "太安", method: "节点", time: "2分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "14", direction: "岗厦北", station: "岗厦北", targetLineId: "2", targetDirection: "溪涌", method: "通道", time: "4分钟", cars: ['8'], doors: ['36'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "14", direction: "岗厦北", station: "岗厦北", targetLineId: "7", targetDirection: "福田口岸", method: "节点", time: "1分钟", cars: ['2'], doors: ['9'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "14", direction: "岗厦北", station: "岗厦北", targetLineId: "7", targetDirection: "双拥街", method: "节点", time: "2分钟", cars: ['7'], doors: ['32'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "14", direction: "岗厦北", station: "岗厦北", targetLineId: "11", targetDirection: "碧头", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "14", direction: "岗厦北", station: "岗厦北", targetLineId: "11", targetDirection: "红岭南", method: "站厅", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "右侧" },

 // Line 14 towards Shatian (沙田)
  { lineId: "14", direction: "沙田", station: "坪山围", targetLineId: "16", targetDirection: "田心", method: "节点", time: "1分钟", cars: ['3', '5'], doors: ['20', '26'], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "14", direction: "沙田", station: "大运", targetLineId: "3", targetDirection: "福保", method: "天地", time: "7分钟", cars: ['5', '7'], doors: ['7', '19'], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "14", direction: "沙田", station: "大运", targetLineId: "16", targetDirection: "田心", method: "同台", time: "1分钟", cars: ['2-7'], doors: ['ANY'], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "14", direction: "沙田", station: "大运", targetLineId: "16", targetDirection: "园山西坑", method: "站厅", time: "1分钟", cars: ['2', '3', '5', '7'], doors: ['7', '19', '28', '34'], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "14", direction: "沙田", station: "布吉", targetLineId: "3", targetDirection: "福保", method: "天地", time: "5分钟", cars: ['2'], doors: ['32'], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "14", direction: "沙田", station: "布吉", targetLineId: "5", targetDirection: "赤湾", method: "通道", time: "4分钟", cars: ['5'], doors: ['17'], notes: "8号车为车头", doorSide: "左侧" },
  { lineId: "14", direction: "沙田", station: "黄木岗", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "2分钟", cars: ['ANY'], doors: ['ANY'], notes: "8号车为车头", doorSide: "右侧" },
  { lineId: "14", direction: "沙田", station: "黄木岗", targetLineId: "7", targetDirection: "太安", method: "同台", time: "2分钟", cars: ['ANY'], doors: ['ANY'], notes: "8号车为车头", doorSide: "右侧" },

 // Line 9 towards Qianwan (前湾)
  { lineId: "9", direction: "前湾", station: "前湾", targetLineId: "5", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ['6'], doors: ['27'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "前湾", station: "南油", targetLineId: "12", targetDirection: "松岗", method: "站厅", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "前湾", station: "南油", targetLineId: "12", targetDirection: "左炮台东", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "前湾", station: "粤海门", targetLineId: "13", targetDirection: "上屋", method: "节点", time: "1分钟", cars: ['3', '4'], doors: ['12', '19'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "前湾", station: "景田", targetLineId: "2", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ['5'], doors: ['24'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "前湾", station: "景田", targetLineId: "2", targetDirection: "溪涌", method: "节点", time: "1分钟", cars: ['2'], doors: ['7'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "前湾", station: "上梅林", targetLineId: "4", targetDirection: "牛湖", method: "通道", time: "4分钟", cars: ['3', '4'], doors: ['11', '17'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "前湾", station: "孖岭", targetLineId: "7", targetDirection: "深大丽湖", method: "通道", time: "5分钟", cars: ['2'], doors: ['7'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "前湾", station: "银湖", targetLineId: "6", targetDirection: "科学馆", method: "节点", time: "1分钟", cars: ['4'], doors: ['17'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "前湾", station: "红岭", targetLineId: "3", targetDirection: "福保", method: "通道", time: "4分钟", cars: ['2', '3'], doors: ['8', '15'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "前湾", station: "红树湾南", targetLineId: "11", targetDirection: "碧头", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "9", direction: "前湾", station: "红树湾南", targetLineId: "11", targetDirection: "红岭南", method: "站厅", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "9", direction: "前湾", station: "车公庙", targetLineId: "7", targetDirection: "深大丽湖", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "9", direction: "前湾", station: "车公庙", targetLineId: "7", targetDirection: "太安", method: "站厅", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "9", direction: "前湾", station: "车公庙", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "5分钟", cars: ['6'], doors: ['28'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "9", direction: "前湾", station: "车公庙", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "4分钟", cars: ['6'], doors: ['28'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "9", direction: "前湾", station: "红岭北", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ['4'], doors: ['17'], notes: "1号车为车头", doorSide: "右侧" },

 // Line 9 towards Wenjin (文锦)
  { lineId: "9", direction: "文锦", station: "南油", targetLineId: "12", targetDirection: "松岗", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "文锦", station: "南油", targetLineId: "12", targetDirection: "左炮台东", method: "站厅", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "文锦", station: "粤海门", targetLineId: "13", targetDirection: "上屋", method: "节点", time: "1分钟", cars: ['3', '4'], doors: ['12', '19'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "文锦", station: "景田", targetLineId: "2", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ['5'], doors: ['7'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "文锦", station: "景田", targetLineId: "2", targetDirection: "溪涌", method: "节点", time: "1分钟", cars: ['2'], doors: ['24'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "文锦", station: "上梅林", targetLineId: "4", targetDirection: "牛湖", method: "通道", time: "4分钟", cars: ['3', '4'], doors: ['14', '20'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "文锦", station: "孖岭", targetLineId: "7", targetDirection: "深大丽湖", method: "通道", time: "5分钟", cars: ['2'], doors: ['24'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "文锦", station: "银湖", targetLineId: "6", targetDirection: "科学馆", method: "节点", time: "1分钟", cars: ['4'], doors: ['14'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "文锦", station: "红岭", targetLineId: "3", targetDirection: "福保", method: "通道", time: "4分钟", cars: ['2', '3'], doors: ['16', '23'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "文锦", station: "红树湾南", targetLineId: "11", targetDirection: "碧头", method: "站厅", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "9", direction: "文锦", station: "红树湾南", targetLineId: "11", targetDirection: "红岭南", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "9", direction: "文锦", station: "车公庙", targetLineId: "7", targetDirection: "深大丽湖", method: "站厅", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "文锦", station: "车公庙", targetLineId: "7", targetDirection: "太安", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "文锦", station: "车公庙", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "5分钟", cars: ['6'], doors: ['3'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "文锦", station: "车公庙", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "4分钟", cars: ['6'], doors: ['3'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "9", direction: "文锦", station: "红岭北", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ['4'], doors: ['14'], notes: "6号车为车头", doorSide: "右侧" },

 // Line 7 towards Shenda Lihu (深大丽湖)
  { lineId: "7", direction: "深大丽湖", station: "西丽", targetLineId: "5", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ['2'], doors: ['10'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "深大丽湖", station: "西丽", targetLineId: "5", targetDirection: "大剧院", method: "节点", time: "1分钟", cars: ['6'], doors: ['28'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "深大丽湖", station: "石厦", targetLineId: "3", targetDirection: "福保", method: "节点", time: "1分钟", cars: ['3', '4'], doors: ['13', '18'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "深大丽湖", station: "福民", targetLineId: "4", targetDirection: "牛湖", method: "通道", time: "3分钟", cars: ['2'], doors: ['10'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "深大丽湖", station: "福民", targetLineId: "10", targetDirection: "福田口岸", method: "通道", time: "4分钟", cars: ['5'], doors: ['23'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "深大丽湖", station: "华强南", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "3分钟", cars: ['5'], doors: ['23'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "深大丽湖", station: "华强北", targetLineId: "2", targetDirection: "溪涌", method: "通道", time: "5分钟", cars: ['5'], doors: ['25'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "深大丽湖", station: "华新", targetLineId: "3", targetDirection: "福保", method: "节点", time: "1分钟", cars: ['5'], doors: ['21'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "深大丽湖", station: "华新", targetLineId: "3", targetDirection: "坪地六联", method: "节点", time: "1分钟", cars: ['2'], doors: ['10'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "深大丽湖", station: "八卦岭", targetLineId: "6", targetDirection: "科学馆", method: "通道", time: "3分钟", cars: ['1'], doors: ['3'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "深大丽湖", station: "红岭北", targetLineId: "9", targetDirection: "前湾", method: "节点", time: "1分钟", cars: ['5'], doors: ['21'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "深大丽湖", station: "红岭北", targetLineId: "9", targetDirection: "文锦", method: "节点", time: "1分钟", cars: ['2'], doors: ['8'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "深大丽湖", station: "田贝", targetLineId: "3", targetDirection: "福保", method: "节点", time: "1分钟", cars: ['6'], doors: ['30'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "深大丽湖", station: "安托山", targetLineId: "2", targetDirection: "溪涌", method: "节点", time: "1分钟", cars: ['3'], doors: ['13'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "7", direction: "深大丽湖", station: "车公庙", targetLineId: "9", targetDirection: "前湾", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "7", direction: "深大丽湖", station: "车公庙", targetLineId: "9", targetDirection: "文锦", method: "站厅", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "7", direction: "深大丽湖", station: "车公庙", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "4分钟", cars: ['1'], doors: ['4'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "7", direction: "深大丽湖", station: "车公庙", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "5分钟", cars: ['1'], doors: ['4'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "7", direction: "深大丽湖", station: "黄木岗", targetLineId: "14", targetDirection: "岗厦北", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "7", direction: "深大丽湖", station: "黄木岗", targetLineId: "14", targetDirection: "沙田", method: "站厅", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "右侧" },

 // Line 7 towards Tai'an (太安)
  { lineId: "7", direction: "太安", station: "西丽", targetLineId: "5", targetDirection: "赤湾", method: "节点", time: "1分钟", cars: ['2'], doors: ['21'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "西丽", targetLineId: "5", targetDirection: "大剧院", method: "节点", time: "1分钟", cars: ['6'], doors: ['3'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "石厦", targetLineId: "3", targetDirection: "福保", method: "节点", time: "1分钟", cars: ['3', '4'], doors: ['13', '18'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "福民", targetLineId: "4", targetDirection: "牛湖", method: "通道", time: "3分钟", cars: ['2'], doors: ['21'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "福民", targetLineId: "10", targetDirection: "福田口岸", method: "通道", time: "4分钟", cars: ['5'], doors: ['8'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "华强南", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "3分钟", cars: ['5'], doors: ['8'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "华强北", targetLineId: "2", targetDirection: "溪涌", method: "通道", time: "5分钟", cars: ['5'], doors: ['6'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "华新", targetLineId: "3", targetDirection: "福保", method: "节点", time: "1分钟", cars: ['5'], doors: ['10'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "华新", targetLineId: "3", targetDirection: "坪地六联", method: "节点", time: "1分钟", cars: ['2'], doors: ['21'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "八卦岭", targetLineId: "6", targetDirection: "科学馆", method: "通道", time: "3分钟", cars: ['1'], doors: ['28'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "红岭北", targetLineId: "9", targetDirection: "前湾", method: "节点", time: "1分钟", cars: ['5'], doors: ['10'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "红岭北", targetLineId: "9", targetDirection: "文锦", method: "节点", time: "1分钟", cars: ['2'], doors: ['23'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "田贝", targetLineId: "3", targetDirection: "福保", method: "节点", time: "1分钟", cars: ['6'], doors: ['1'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "安托山", targetLineId: "2", targetDirection: "溪涌", method: "节点", time: "1分钟", cars: ['3'], doors: ['18'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "7", direction: "太安", station: "车公庙", targetLineId: "9", targetDirection: "前湾", method: "站厅", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "车公庙", targetLineId: "9", targetDirection: "文锦", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "车公庙", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "4分钟", cars: ['1'], doors: ['27'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "车公庙", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "5分钟", cars: ['1'], doors: ['27'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "黄木岗", targetLineId: "14", targetDirection: "岗厦北", method: "站厅", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "7", direction: "太安", station: "黄木岗", targetLineId: "14", targetDirection: "沙田", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "左侧" },

 // Line 4 towards Futian Checkpoint (福田口岸)
  { lineId: "4", direction: "福田口岸", station: "福民", targetLineId: "7", targetDirection: "深大丽湖", method: "通道", time: "3分钟", cars: ['2'], doors: ['24'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "4", direction: "福田口岸", station: "福民", targetLineId: "10", targetDirection: "福田口岸", method: "通道", time: "7分钟", cars: ['5'], doors: ['7'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "4", direction: "福田口岸", station: "上梅林", targetLineId: "9", targetDirection: "文锦", method: "通道", time: "4分钟", cars: ['6'], doors: ['1'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "4", direction: "福田口岸", station: "深圳北站", targetLineId: "6", targetDirection: "科学馆", method: "站厅", time: "2分钟", cars: ['6', '3', '1'], doors: ['5', '19', '26'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "4", direction: "福田口岸", station: "深圳北站", targetLineId: "5", targetDirection: "赤湾", method: "天地", time: "5分钟", cars: ['1', '2'], doors: ['25', '26'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "4", direction: "福田口岸", station: "深圳北站", targetLineId: "5", targetDirection: "大剧院", method: "天地", time: "5分钟", cars: ['5', '6'], doors: ['5', '6'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "4", direction: "福田口岸", station: "红山", targetLineId: "6", targetDirection: "科学馆", method: "站厅", time: "2分钟", cars: ['1', '4'], doors: ['11', '27'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "4", direction: "福田口岸", station: "会展中心", targetLineId: "1", targetDirection: "罗湖", method: "节点", time: "1分钟", cars: ['2'], doors: ['23'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "4", direction: "福田口岸", station: "市民中心", targetLineId: "2", targetDirection: "溪涌", method: "通道", time: "4分钟", cars: ['5'], doors: ['7'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "4", direction: "福田口岸", station: "少年宫", targetLineId: "3", targetDirection: "福保", method: "通道", time: "4分钟", cars: ['2'], doors: ['24'], notes: "6号车为车头", doorSide: "右侧" },

 // Line 4 towards Niuhu (牛湖)
  { lineId: "4", direction: "牛湖", station: "福民", targetLineId: "7", targetDirection: "深大丽湖", method: "通道", time: "3分钟", cars: ['2'], doors: ['7'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "4", direction: "牛湖", station: "福民", targetLineId: "10", targetDirection: "福田口岸", method: "通道", time: "7分钟", cars: ['5'], doors: ['24'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "4", direction: "牛湖", station: "上梅林", targetLineId: "9", targetDirection: "文锦", method: "通道", time: "4分钟", cars: ['6'], doors: ['30'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "4", direction: "牛湖", station: "深圳北站", targetLineId: "6", targetDirection: "科学馆", method: "站厅", time: "2分钟", cars: ['1', '3', '6'], doors: ['4', '12', '27'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "4", direction: "牛湖", station: "深圳北站", targetLineId: "5", targetDirection: "赤湾", method: "天地", time: "5分钟", cars: ['1', '2'], doors: ['4', '6'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "4", direction: "牛湖", station: "深圳北站", targetLineId: "5", targetDirection: "大剧院", method: "天地", time: "5分钟", cars: ['5', '6'], doors: ['25', '27'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "4", direction: "牛湖", station: "红山", targetLineId: "6", targetDirection: "科学馆", method: "站厅", time: "2分钟", cars: ['1', '4'], doors: ['4', '20'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "4", direction: "牛湖", station: "会展中心", targetLineId: "1", targetDirection: "罗湖", method: "节点", time: "1分钟", cars: ['3'], doors: ['11'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "4", direction: "牛湖", station: "市民中心", targetLineId: "2", targetDirection: "溪涌", method: "通道", time: "4分钟", cars: ['5'], doors: ['24'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "4", direction: "牛湖", station: "少年宫", targetLineId: "3", targetDirection: "福保", method: "通道", time: "4分钟", cars: ['2'], doors: ['7'], notes: "1号车为车头", doorSide: "右侧" },

 // Line 2 towards Chiwan (赤湾)
  { lineId: "2_8", direction: "赤湾", station: "赤湾", targetLineId: "5", targetDirection: "赤湾", method: "站厅", time: "2分钟", cars: ['4'], doors: ['12'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "海上世界", targetLineId: "12", targetDirection: "松岗", method: "通道", time: "3分钟", cars: ['3'], doors: ['17'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "后海", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "5分钟", cars: ['2'], doors: ['25'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "后海", targetLineId: "13", targetDirection: "上屋", method: "通道", time: "8分钟", cars: ['2'], doors: ['25'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "科苑", targetLineId: "13", targetDirection: "上屋", method: "节点", time: "1分钟", cars: ['5'], doors: ['8'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "安托山", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ['3'], doors: ['20'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "安托山", targetLineId: "7", targetDirection: "太安", method: "节点", time: "1分钟", cars: ['6'], doors: ['5'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "福田", targetLineId: "11", targetDirection: "碧头", method: "站厅", time: "2分钟", cars: ['6', '1'], doors: ['1', '26'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "福田", targetLineId: "3", targetDirection: "福保", method: "节点", time: "1分钟", cars: ['6'], doors: ['1'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "福田", targetLineId: "3", targetDirection: "坪地六联", method: "节点", time: "1分钟", cars: ['5'], doors: ['10'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "市民中心", targetLineId: "4", targetDirection: "牛湖", method: "通道", time: "5分钟", cars: ['6', '4'], doors: ['5', '14'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "岗厦北", targetLineId: "10", targetDirection: "福田口岸", method: "通道", time: "5分钟", cars: ['5', '3'], doors: ['6', '17'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "岗厦北", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "4分钟", cars: ['5', '3'], doors: ['6', '17'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "岗厦北", targetLineId: "14", targetDirection: "沙田", method: "通道", time: "4分钟", cars: ['5', '3'], doors: ['6', '17'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "华强北", targetLineId: "7", targetDirection: "深大丽湖", method: "通道", time: "5分钟", cars: ['2'], doors: ['24'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "大剧院", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "3分钟", cars: ['1'], doors: ['26'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "大剧院", targetLineId: "5", targetDirection: "赤湾", method: "通道", time: "3分钟", cars: ['1'], doors: ['26'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "黄贝岭", targetLineId: "5", targetDirection: "赤湾", method: "站厅", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "黄贝岭", targetLineId: "5", targetDirection: "大剧院", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "赤湾", station: "世界之窗", targetLineId: "1", targetDirection: "罗湖", method: "节点", time: "1分钟", cars: ['3'], doors: ['16'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "2_8", direction: "赤湾", station: "景田", targetLineId: "9", targetDirection: "文锦", method: "节点", time: "1分钟", cars: ['6'], doors: ['4'], notes: "6号车为车头", doorSide: "右侧" },

 // Line 2 towards Xichong (溪涌)
  { lineId: "2_8", direction: "溪涌", station: "海上世界", targetLineId: "12", targetDirection: "松岗", method: "通道", time: "3分钟", cars: ['3'], doors: ['14'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "后海", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "5分钟", cars: ['2'], doors: ['6'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "后海", targetLineId: "13", targetDirection: "上屋", method: "通道", time: "8分钟", cars: ['2'], doors: ['6'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "科苑", targetLineId: "13", targetDirection: "上屋", method: "节点", time: "1分钟", cars: ['5'], doors: ['22'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "安托山", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ['3'], doors: ['11'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "安托山", targetLineId: "7", targetDirection: "太安", method: "节点", time: "1分钟", cars: ['6'], doors: ['26'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "福田", targetLineId: "11", targetDirection: "碧头", method: "站厅", time: "2分钟", cars: ['1', '6'], doors: ['5', '28'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "福田", targetLineId: "3", targetDirection: "福保", method: "节点", time: "1分钟", cars: ['6'], doors: ['30'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "福田", targetLineId: "3", targetDirection: "坪地六联", method: "节点", time: "1分钟", cars: ['5'], doors: ['21'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "市民中心", targetLineId: "4", targetDirection: "牛湖", method: "通道", time: "5分钟", cars: ['4', '6'], doors: ['17', '26'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "岗厦北", targetLineId: "10", targetDirection: "福田口岸", method: "通道", time: "5分钟", cars: ['3', '5'], doors: ['14', '25'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "岗厦北", targetLineId: "11", targetDirection: "碧头", method: "通道", time: "4分钟", cars: ['3', '5'], doors: ['14', '25'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "岗厦北", targetLineId: "14", targetDirection: "沙田", method: "通道", time: "4分钟", cars: ['3', '5'], doors: ['14', '25'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "华强北", targetLineId: "7", targetDirection: "深大丽湖", method: "通道", time: "5分钟", cars: ['2'], doors: ['7'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "大剧院", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "3分钟", cars: ['1'], doors: ['5'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "大剧院", targetLineId: "5", targetDirection: "赤湾", method: "通道", time: "3分钟", cars: ['1'], doors: ['5'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "黄贝岭", targetLineId: "5", targetDirection: "赤湾", method: "同台", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "黄贝岭", targetLineId: "5", targetDirection: "大剧院", method: "站厅", time: "1分钟", cars: ['ANY'], doors: ['ANY'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "2_8", direction: "溪涌", station: "世界之窗", targetLineId: "1", targetDirection: "罗湖", method: "节点", time: "1分钟", cars: ['3'], doors: ['15'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "2_8", direction: "溪涌", station: "景田", targetLineId: "9", targetDirection: "文锦", method: "节点", time: "1分钟", cars: ['6'], doors: ['26'], notes: "1号车为车头", doorSide: "右侧" },

  // Line 3 towards Fubao (福保)
  { lineId: "3", direction: "福保", station: "石厦", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ['6'], doors: ['1'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "福保", station: "购物公园", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "5分钟", cars: ['1'], doors: ['21'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "福保", station: "少年宫", targetLineId: "4", targetDirection: "牛湖", method: "通道", time: "4分钟", cars: ['1'], doors: ['22'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "福保", station: "莲花村", targetLineId: "7", targetDirection: "福田口岸", method: "节点", time: "1分钟", cars: ['6'], doors: ['4'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "福保", station: "莲花村", targetLineId: "7", targetDirection: "双拥街", method: "节点", time: "1分钟", cars: ['1'], doors: ['21'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "福保", station: "华新", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ['5', '2'], doors: ['8', '17'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "福保", station: "通新岭", targetLineId: "6", targetDirection: "科学馆", method: "通道", time: "3分钟", cars: ['5', '2'], doors: ['7', '20'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "福保", station: "红岭", targetLineId: "9", targetDirection: "文锦", method: "通道", time: "4分钟", cars: ['3'], doors: ['13'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "福保", station: "老街", targetLineId: "1", targetDirection: "罗湖", method: "节点", time: "2分钟", cars: ['2', '4'], doors: ['10', '19'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "福保", station: "老街", targetLineId: "1", targetDirection: "机场东", method: "同台", time: "1分钟", cars: ['2-5'], doors: ['ANY'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "福保", station: "田贝", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ['3'], doors: ['13'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "福保", station: "布吉", targetLineId: "14", targetDirection: "沙田", method: "天地", time: "5分钟", cars: ['5'], doors: ['6'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "福保", station: "布吉", targetLineId: "5", targetDirection: "赤湾", method: "天地", time: "5分钟", cars: ['2'], doors: ['19'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "福保", station: "双龙", targetLineId: "16", targetDirection: "田心", method: "天地", time: "5分钟", cars: ['5', '2'], doors: ['6', '19'], notes: "6号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "福保", station: "福田", targetLineId: "2", targetDirection: "溪涌", method: "节点", time: "1分钟", cars: ['2'], doors: ['17'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "3", direction: "福保", station: "福田", targetLineId: "11", targetDirection: "碧头", method: "节点", time: "1分钟", cars: ['3'], doors: ['14'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "3", direction: "福保", station: "大运", targetLineId: "14", targetDirection: "沙田", method: "天地", time: "7分钟", cars: ['3', '4'], doors: ['11', '15'], notes: "6号车为车头", doorSide: "右侧" },
  { lineId: "3", direction: "福保", station: "大运", targetLineId: "16", targetDirection: "田心", method: "天地", time: "7分钟", cars: ['3', '4'], doors: ['11', '15'], notes: "6号车为车头", doorSide: "右侧" },

 // Line 3 towards Pingdi Liulian (坪地六联)
  { lineId: "3", direction: "坪地六联", station: "石厦", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ['6'], doors: ['24'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "坪地六联", station: "购物公园", targetLineId: "1", targetDirection: "罗湖", method: "通道", time: "5分钟", cars: ['1'], doors: ['4'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "坪地六联", station: "少年宫", targetLineId: "4", targetDirection: "牛湖", method: "通道", time: "4分钟", cars: ['1'], doors: ['3'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "坪地六联", station: "莲花村", targetLineId: "7", targetDirection: "福田口岸", method: "节点", time: "1分钟", cars: ['6'], doors: ['21'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "坪地六联", station: "莲花村", targetLineId: "7", targetDirection: "双拥街", method: "节点", time: "1分钟", cars: ['1'], doors: ['4'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "坪地六联", station: "华新", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ['2', '5'], doors: ['8', '17'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "坪地六联", station: "通新岭", targetLineId: "6", targetDirection: "科学馆", method: "通道", time: "3分钟", cars: ['2', '5'], doors: ['5', '18'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "坪地六联", station: "红岭", targetLineId: "9", targetDirection: "文锦", method: "通道", time: "4分钟", cars: ['3'], doors: ['12'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "坪地六联", station: "老街", targetLineId: "1", targetDirection: "罗湖", method: "同台", time: "1分钟", cars: ['2-5'], doors: ['ANY'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "3", direction: "坪地六联", station: "老街", targetLineId: "1", targetDirection: "机场东", method: "节点", time: "2分钟", cars: ['2', '4', '5'], doors: ['6', '7', '15', '18'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "3", direction: "坪地六联", station: "田贝", targetLineId: "7", targetDirection: "深大丽湖", method: "节点", time: "1分钟", cars: ['3'], doors: ['12'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "坪地六联", station: "布吉", targetLineId: "14", targetDirection: "沙田", method: "天地", time: "5分钟", cars: ['5'], doors: ['19'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "坪地六联", station: "布吉", targetLineId: "5", targetDirection: "赤湾", method: "天地", time: "5分钟", cars: ['2'], doors: ['6'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "坪地六联", station: "双龙", targetLineId: "16", targetDirection: "田心", method: "天地", time: "5分钟", cars: ['2', '5'], doors: ['7', '18'], notes: "1号车为车头", doorSide: "左侧" },
  { lineId: "3", direction: "坪地六联", station: "福田", targetLineId: "2", targetDirection: "溪涌", method: "节点", time: "1分钟", cars: ['2'], doors: ['8'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "3", direction: "坪地六联", station: "福田", targetLineId: "11", targetDirection: "碧头", method: "节点", time: "1分钟", cars: ['3'], doors: ['11'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "3", direction: "坪地六联", station: "大运", targetLineId: "14", targetDirection: "沙田", method: "天地", time: "7分钟", cars: ['2', '5'], doors: ['8', '17'], notes: "1号车为车头", doorSide: "右侧" },
  { lineId: "3", direction: "坪地六联", station: "大运", targetLineId: "16", targetDirection: "田心", method: "天地", time: "7分钟", cars: ['2', '5'], doors: ['8', '17'], notes: "1号车为车头", doorSide: "右侧" },
];

/**
 * Transfer Information Matching Algorithm:
 * 1. Match current line, station, and target line.
 * 2. Prioritize matching both current direction and target direction.
 * 3. Fallback to matching current direction.
 * 4. Final fallback to first available match for the station/line combo.
 */
/**
 * Transfer Information Matching Algorithm:
 * 1. Identify start/end and transfer lines/stations (Done in App.tsx).
 * 2. Determine first leg line (Done in App.tsx).
 * 3. Determine first leg direction based on start and transfer stations (Done in App.tsx).
 * 4. Match transfer station.
 * 5. Match transfer line (and target direction if specified).
 * 6. Output door side, transfer method, time, car/door numbers, and head car direction.
 */
export function findTransferDetail(
  lineId: string,
  direction: string,
  station: string,
  targetLineId: string,
  targetDirection?: string
): TransferInfo | undefined {
  // Step 4 & 5: Match transfer station and target line
  // We look for an exact match for lineId, direction, station, and targetLineId.
  // If targetDirection is provided, we prioritize matching it.
  const matches = TRANSFER_DATA.filter(t => 
    t.lineId === lineId && 
    t.direction === direction &&
    t.station === station && 
    t.targetLineId === targetLineId
  );

  if (matches.length === 0) return undefined;

  // If there's a target direction, try to find an exact match or one that covers all directions (ANY)
  if (targetDirection) {
    const specificMatch = matches.find(t => t.targetDirection === targetDirection);
    if (specificMatch) return specificMatch;
    
    const anyMatch = matches.find(t => t.targetDirection === "ANY" || t.targetDirection === "");
    if (anyMatch) return anyMatch;
  }

  // Default to the first match if no specific target direction match is found
  return matches[0];
}
