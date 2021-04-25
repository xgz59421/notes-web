var Sport = function (x, y) {
  this.x = x;
  this.y = y;
}
Sport.prototype.run = function () {
  console.log('运动起来');
}

var Talk = function (wd) {
  this.word = wd;
}
Talk.prototype.say = function () {
  console.log('说',this.word);
}

var People = function (x, y, wd) {
  this.sport = new Sport(x, y);
  this.talk = new Talk(wd);
}
var p = new People(1,2, 'hellow')
console.log(p);