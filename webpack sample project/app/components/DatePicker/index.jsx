import React from 'react';
import '../Adaptation';
import './style.scss';
export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  getSizeOfMonth = (year, month) => {
    let sizeOfMonths = [31, 28, 31, 30, 31, 30, 31, 30, 31, 31, 30, 31];
    if (year % 100 === 0 && year % 400 === 0) {
      sizeOfMonths[1]++;
    }
    let sizeOfMonth = sizeOfMonths[month];
    return sizeOfMonth;
  }
  getTable = () => {
    let currentYear = 2017;let currentMonth = 5;
    let sizeOfPrevMonth = this.getSizeOfMonth(currentYear, currentMonth - 1);
    let sizeOfCurrentMonth = this.getSizeOfMonth(currentYear, currentMonth);
    let timestamp = Date.parse((currentMonth + 1) + '/1/' + currentYear);
    let date = new Date(timestamp);let week = date.getDay();
    let prevShowDays = week;let showDays = [];
    let table = [];
    for (let i = sizeOfPrevMonth - prevShowDays + 1; i <= sizeOfPrevMonth; i++) {
      showDays.push(i);
    }
    for (let j = 1; j <= sizeOfCurrentMonth; j++) {
      showDays.push(j);
    }
    for (let k = 1; k <= 42 - sizeOfCurrentMonth - week; k++) {
      showDays.push(k);
    }
    for (let m = 0; m < 6; m++) {
      let rows = [];
      for (let n = m * 7; n <= m * 7 + 6; n++) {
        rows.push(showDays[n]);
      }
      table.push(rows);
    }
    return table;
  }
  render() {
    return (
      <div className="datePicker">
        <div className="fullcalender-header">
          <div>Year</div>
          <div>Month</div>
        </div>
        <table>
          <thead>
            <tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>
          </thead>
          <tbody>
            {this.getTable().map((day, index) =>
              (<tr key={index}>
                {
                  day.map((t, index) =>
                    <td key={index}>{ (t >= 1 && t <= 9) ? '0' + t : t}</td>
                  )
                }
              </tr>)
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
