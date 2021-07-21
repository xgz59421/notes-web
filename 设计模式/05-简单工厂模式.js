// 简单工厂模式

// 篮球
var Basketball = function () {
  this.intro = '篮球盛行于美国'
}
Basketball.prototype = {
  getMember : function () {console.log('每个队伍5个人');},
  getSize :function () {console.log('篮球很大');}
}
// 足球
var Football = function () {
  this.intro = '足球在世界很流行'
}
Football.prototype = {
  getMember : function () {console.log('每个队伍11个人');},
  getSize :function () {console.log('足球很大');}
}
// 网球
var Tennis = function () {
  this.intro = '每年有很多网球比赛'
}
Tennis.prototype = {
  getMember : function () {console.log('每个队伍1个人');},
  getSize :function () {console.log('网球很小');}
}

// 工厂
var sportFactory = function (name) {
  switch (name) {
    case 'basketball':
      return new Basketball();
    case 'football':
      return new Football();
    case 'tennis':
      return new Tennis();
    default:
      break;
  }
}

var football = sportFactory('football');
console.log(football);
console.log(football.intro);
football.getMember();