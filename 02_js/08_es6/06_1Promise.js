// 为了避免"回调地狱",添加了Promise机制
function f1(next) {
  console.log(`f1起跑`);
  setTimeout(() => {
    console.log(`f1到达终点!`);
    next();
  }, 6000);
}

function f2(next) {
  console.log(`f2起跑`);
  setTimeout(() => {
    console.log(`f2到达终点!`);
    next();
  }, 4000);
}

function f3(next) {
  console.log(`f3起跑`);
  setTimeout(() => {
    console.log(`f3到达终点!`);
    next();
  }, 2000);
}

// f1(function () {
//    f2(function () {
//       f3(function () {
//          console.log("比赛结束");
//       });
//    })
// });
console.log("*************promise*******************");

//resolve   同意
//reject 不同意
function p1() {
  return new Promise(function (resolve, reject) {
    console.log(`p1起跑`);
    setTimeout(() => {
      if (Math.random() < 0.6) {
        console.log(`p1到达终点!`);
        resolve();
      } else {
        reject(`p1摔倒了!`);
      }
    }, 3000);
  });
}

function p2() {
  return new Promise(function (resolve, reject) {
    console.log(`p2起跑`);
    setTimeout(() => {
      if (Math.random() < 0.6) {
        console.log(`p2到达终点!`);
        resolve();
      } else {
        reject(`p2摔倒了!`);
      }
    }, 2000);
  });
}

function p3() {
  return new Promise(function (resolve, reject) {
    console.log(`p3起跑`);
    setTimeout(() => {
      if (Math.random() < 0.6) {
        console.log(`p3到达终点!`);
        resolve();
      } else {
        reject(`p3摔倒了!`);
      }
    }, 1000);
  });
}
p1()
  .then(p2)
  .then(p3)
  .then(() => console.log("比赛结束"))
  .catch(err => console.log(`${err},比赛中断!`));