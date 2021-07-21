/*
  模块导出使用关键字 export 关键字:
  export interface SomeInterface { 
    // 代码部分
  }
  另外一个文件使用该模块需使用 import 关键字来导入: 
  import someInterfaceRef = require("./SomeInterface");
*/

/// <reference path = "./07_export.ts" /> 
import shape = require('./07_export')
import circle = require('./07_export')
import triangle = require('./07_export');  

function drawAllShapes(shapeToDraw: shape.IShape) {
  shapeToDraw.draw(); 
} 

drawAllShapes(new circle.Circle()); 
drawAllShapes(new triangle.Triangle());