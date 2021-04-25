// 建造者模式:
// 将一个复杂对象的构建层与表层相互分离
var Human = function (params) {
  this.skill = params && params.skill || '保密';
  this.hobby = params && params.hobby || '保密';
}
Human.prototype = {
  getSkill: function () {
    return this.skill;
  },
  getHobby: function () {
    return this.hobby;
  }
}

var Name = function (name) {
  var that = this;
  (function (name, that) {
    that.wholeNme = name;
    if (name.indexOf(' ') > -1) {
      that.FistName = name.split(' ')[0];
      that.LastName = name.split(' ')[1];
    }
  })(name , that);
}
var Work = function (work) {
  var that = this;
  (function (work , that) {
    switch (work) {
      case 'code':
        that.work = '程序员'
        break;
      case 'teacher':
        that.work = '教师';
        break;
      case 'student':
        that.work = '学生';
        break;
      default:
        that.work = '工人';
        break;
    }
  })(work, that);
}
Work.prototype.ChangeWork = function (work) {
  this.work = work;
}
//+---------------
var Person = function (name, work) {
  var _person = new Human();
  _person.name = new Name(name);
  _person.work = new Work(work);
  return _person;
}
var p = new Person('lilei', 'code')
console.log(p);
console.log(p.name);
console.log(p.work);
