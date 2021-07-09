import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction
} from "mobx"

class AppleStore {
  apples = [
    {
      id: 0,
      weight: 233,
      isEaten: false
    },
    {
      id: 1,
      weight: 235,
      isEaten: true
    },
    {
      id: 2,
      weight: 256,
      isEaten: false
    }
  ];
  isPicking = false
  newAppleId = 3
  buttonText = '摘苹果'
  constructor() {
    makeObservable(this, {
      apples: observable,
      isPicking: observable,
      newAppleId: observable,
      buttonText: observable,
      eatApple: action.bound,
      pickApple: action.bound,
      status: computed
    })
  }
  get status() {
    let status = {
      appleNow: {
        quantity: 0,
        weight: 0
      },
      appleEaten: {
        quantity: 0,
        weight: 0
      }
    };
    this.apples.forEach(apple => {
      let selected = apple.isEaten ? 'appleNow' : 'appleEaten';
      status[selected].quantity++;
      status[selected].weight += apple.weight;
    });
    return status;
  }
  eatApple = appleId => {
    this.apples.forEach((apple, index) => {
      if (apple.id === appleId) {
        this.apples[index].isEaten = true;
      }
    });
  };
  pickApple(){
    console.log('pickApple', this.isPicking);
    if (this.isPicking) {
        return;
    }
    this.isPicking = true;
    this.buttonText = '正在采摘...';

    runInAction(()=>{

      setTimeout(() => {
        console.log('pickApple', this.isPicking);
        
        this.isPicking = false;
        this.buttonText = '摘苹果';
        let weight = Math.floor(200 + Math.random() * 50);
  
        this.apples.push({
            id: this.newAppleId++,
            weight: weight,
            isEaten: false
        });
      }, 500);

    })
  }
}
export default AppleStore