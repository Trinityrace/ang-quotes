// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'dateCount'
// })
// export class DateCountPipe implements PipeTransform {

//   transform(value: any): number {
//     let today:Date = new Date(); //get current date and time
//     let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
//     var dateDifference = Math.abs(value - todayWithNoTime) //returns value in miliseconds
//     const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
//     var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
//     var dateCounter = dateDifferenceSeconds/secondsInDay;

//     if (dateCounter >= 1 && value > todayWithNoTime){
//       return dateCounter;
//     }else{
//       return 0;
//     }
//   }
// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: string): string {
    let d = new Date(value);
    let now = new Date();
    let seconds = Math.round(Math.abs((now.getTime() - d.getTime())/1000));
    let minutes = Math.round(Math.abs(seconds / 60));
		let hours = Math.round(Math.abs(minutes / 60));
		let days = Math.round(Math.abs(hours / 24));
		let months = Math.round(Math.abs(days/30.416));
    let years = Math.round(Math.abs(days/365));
    
    if (Number.isNaN(seconds)){
			return '';
		} else if (seconds <= 45) {
			return 'a few seconds ago';
		} else if (seconds <= 90) {
			return 'a minute ago';
		} else if (minutes <= 45) {
			return minutes + ' minutes ago';
		} else if (minutes <= 90) {
			return 'an hour ago';
		} else if (hours <= 22) {
			return hours + ' hours ago';
		} else if (hours <= 36) {
			return 'a day ago';
		} else if (days <= 25) {
			return days + ' days ago';
		} else if (days <= 45) {
			return 'a month ago';
		} else if (days <= 345) {
			return months + ' months ago';
		} else if (days <= 545) {
			return 'a year ago';
		} else { // (days > 545)
			return years + ' years ago';
		}
    
  }

}