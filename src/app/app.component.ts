import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second-class-moment';

  constructor(){
    this.useMoment();
  }

  public useMoment(){
    const TODAY = moment()
    const YESTERDAY = TODAY.clone().subtract( 1, 'days')
    const TOMORROW = moment().add( 1, 'days' )
    const EXACTDATE = moment('2022-09-21')
    const EXACTDATE1 = moment([ 2022, 0])
    const MONTHDAYS = moment([2019, 1]).daysInMonth()

    const FORMAT = 'dddd Do MMMM YYYY'

    console.table({
      Hoy : TODAY.format( FORMAT ),
      Ayer : YESTERDAY.format( FORMAT ),
      Mañana : TOMORROW.format( FORMAT ),
      FechaExacta : EXACTDATE.format( FORMAT ),
      FechaExacta1 : EXACTDATE1.format( FORMAT ),
      DiasMes : MONTHDAYS,
      Mayor : ( TODAY > YESTERDAY ) ? true : false
    })
  }
}
