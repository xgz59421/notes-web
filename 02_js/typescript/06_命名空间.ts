// 命名空间一个最明确的目的就是解决重名问题。

/*
  定义:
  namespace SomeNameSpaceName { 
    export interface ISomeInterfaceName {      }  
    export class SomeClassName {      }  
  }
  调用:
  SomeNameSpaceName.SomeClassName;

  如果一个命名空间在一个单独的 TypeScript 文件中，
  则应使用三斜杠 /// 引用它，语法格式如下：
  /// <reference path = "SomeFileName.ts" />
*/

/// <reference path = "./06_Drawing.ts" /> 
// 接口定义在了  06_Drawing.ts 
namespace Drawing { 
  export class Circle implements IShape { 
      public draw() { 
          console.log("Circle is drawn"); 
      }  
  }
}
namespace Drawing { 
  export class Triangle implements IShape { 
      public draw() { 
          console.log("Triangle is drawn"); 
      } 
  } 
}

function drawAllShapes(shape:Drawing.IShape) { 
  shape.draw(); 
} 
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());