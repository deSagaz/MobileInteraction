import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MusicProvider } from "../../providers/music/music";

/**
 * Generated class for the LinearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-linear',
  templateUrl: 'linear.html',
})
export class LinearPage {

  currentDuration:number = 0;
  maxDuration:number = 100;

  keyPressed:boolean = false;
  timeId:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public musicCtrl: MusicProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinearPage');
  }

  updateDurationProgressBar(){
    this.keyPressed = true;
    this.timeId = setInterval(() => {
       this.updateBar();
    }, 300);
  }

  updateBar(){
    this.currentDuration=this.musicCtrl.getCurrentPlayingNotePercentage()
    /** console.log('current duration: '+ this.currentDuration); */
  }

  stopProgressBar(){
    this.keyPressed = false;
    clearInterval(this.timeId);
    this.currentDuration= 0;
  }

  startNotePlay(event: Event, note: string) {
    console.log(note + " started");
    event.stopPropagation(); // avoid double-playing for touch/mouse events
    event.preventDefault();
    this.musicCtrl.startNotePlay(note);
  }

  stopNotePlay(event: Event) {
    console.log("stopped note");
    event.stopPropagation(); // avoid double-playing for touch/mouse events
    event.preventDefault();
    this.musicCtrl.stopNotePlay()
  }

}
