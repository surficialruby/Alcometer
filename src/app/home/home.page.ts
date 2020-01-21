import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight : number
  gender : number
  time : number
  bottles: number
  prom : number

  public time_arr: Array<any> = []
  public bottles_arr: Array<any> = []

  ionViewDidEnter() {
    let i = 0
    for(;i<24;i++) {
      this.time_arr[i] = {
        "value" : 1+i,
        "description" : 1+i
      }
    }
    i = 0
    for(;i<24;i++) {
      this.bottles_arr[i] = {
        "value" : 1+i,
        "description" : 1+i
      }
    }
  }

  constructor() {
    this.prom = 0
  }

  calc() {
    let litres: number, 
        grams: number, 
        burning: number
    litres = this.bottles * 0.33
    grams = litres * 8 * 4.5 
    burning = this.weight / 10 
    grams = grams - (burning * this.time) 
    if(this.gender == 1) {
      this.prom = grams / (this.weight * 0.6)
    }else{
      this.prom = grams / (this.weight * 0.7)    
    }
  }
}
