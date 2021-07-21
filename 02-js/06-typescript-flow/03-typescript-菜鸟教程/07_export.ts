
export interface IShape { 
  draw(); 
}

export class Circle implements IShape { 
  public draw() { 
     console.log("Cirlce is drawn (external module)"); 
  } 
}

export class Triangle implements IShape { 
  public draw() { 
     console.log("Triangle is drawn (external module)"); 
  } 
}