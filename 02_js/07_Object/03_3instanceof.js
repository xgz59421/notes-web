// instanceof 是否是对象的实例

function Book(name, price) {
  // console.log(this);
  // 如果Book不是new创建的 ,this指向的是 window
  // 如果是new创建的, 则是Book的实例
  if (this instanceof Book) {
    console.log(1);
    this.name = name;
    this.price = price;
  }else{
    console.log(2);
    
    return new Book(name, price);
  }
}
var js = Book('js', 190)
console.log(js);
console.log('----------------');
var css = new Book('css', 20);
console.log(css);

