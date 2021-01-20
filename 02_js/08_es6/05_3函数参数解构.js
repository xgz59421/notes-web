// 参数增强, 可以给参数设置默认值
function add(a,b,c=0) {
  // c = c || 0;
  return a+b+c;
}
console.log(add(2,4))
console.log(add(2,4,1))

//将来只要有多个形参不确定有没有值,又要求实参值与形参变量之间必须对应着传值
function order({
  zhushi: zhushi,
  xiaochi, //名字一样可以简写
  yinliao = "可乐" //简写后的默认值
}) {
  zhushi == undefined && (zhushi = "香辣鸡腿堡");
  xiaochi == undefined && (xiaochi = "薯条");
  console.log(`
  您点的是:
     主食:${zhushi},
     小吃:${xiaochi},
     饮料:${yinliao}
  `);
}
order({
  zhushi: "巨无霸",
  xiaochi: "土豆泥",
  yinliao: ",雪碧"
});
order({});
order({
  xiaochi: "蛋挞"
});