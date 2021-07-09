import React from 'react';
import '../styles/appleBasket.css';
import '../styles/appleItem.css';
import { useRootStore } from "../store/RootStore"
import { observer } from "mobx-react-lite"

function AppleItem( {apple} ) {
  const { AppleStore } = useRootStore()
  let { eatApple } = AppleStore
  return (
    <div className="appleItem">
      <div className="apple">
        <img src={require('../images/apple.png')} alt="" />
      </div>
      <div className="info">
        <div className="name">红苹果 - {apple.id}号</div>
        <div className="weight">{apple.weight}克</div>
      </div>
      <div className="btn-div">
        <button onClick={() => {eatApple(apple.id)} }> 吃掉 </button>
      </div>
    </div>
  );
}

function Apple() {
  const { AppleStore } = useRootStore()
  let { status, apples, isPicking, buttonText, pickApple } = AppleStore
  let {
    appleEaten: { quantity: notEatenQuantity, weight: notEatenWeight },
    appleNow: { quantity: EatenQuantity, weight: EatenWeight }
  } = status;
  return (
    <div className="appleBusket">
      <div className="title">苹果篮子</div>

      <div className="stats">
        <div className="section">
          <div className="head">当前</div>
          <div className="content">
            {notEatenQuantity}个苹果，{notEatenWeight}克
          </div>
        </div>
        <div className="section">
          <div className="head">已吃掉</div>
          <div className="content">
            {EatenQuantity}个苹果，{EatenWeight}克
          </div>
        </div>
      </div>
      <div className="appleList">
        {
          
            apples
            .filter((apple)=>{
              return !apple.isEaten})
            .map((apple)=>{
              return <AppleItem
                apple={apple}
                key={apple.id}
              />})
        }
      </div>

      <div className="btn-div">
          <button  className={isPicking ? 'disabled' : ''}  onClick={() => {pickApple()} } >{buttonText}</button>
      </div>
    </div>
  );
}

export default observer(Apple)
