import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActionSheetController,
  AlertController
} from '@ionic/angular';

@Component({
  selector: 'app-myc12-popup',
  templateUrl: './myc12-popup.component.html',
  styleUrls: ['./myc12-popup.component.scss'],
})
export class Myc12PopupComponent implements OnInit {

  constructor(
    private alertController: AlertController,
    private sheetController: ActionSheetController
  ) {}

  ngOnInit() {}
  doquit() {
    this.alertController.create({
      header: '确认退出',
      subHeader: 'Subtitle',
      message: '你确认要退出吗?',
      buttons: [
        {
          text: '确认',
          handler: () => {
            console.log('Confirm 确认');
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('Confirm 取消');
          }
        }
      ]
    }).then((myalert) => {
      // 让异步创建出来的对话框"呈现"出来
      myalert.present();
    })
  }

  doSheet(){
    this.sheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    }).then(dialog=>{
      dialog.present();
    })
  }
}