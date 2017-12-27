import React from 'react';
import '../Adaptation';
import './style.scss';
export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // react中如何使用react和while循环 冉y说为什么要避免使用for循环
      // daysOfMonth: [31, 28, 31, 30, 31, 30, 31, 30, 31, 31, 30, 31]
      // daysOfLeapYearMonth: []
    };
  }

  daysOfMonth = null;

  componentWillMount() {
  }
  getDaysOfMonth = (year, month) => {
    let daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 30, 31, 31, 30, 31];
    if (year % 100 === 0 && year % 400 === 0) {
      daysOfMonths[1]++;
    }
    let daysOfMonth = daysOfMonths[month];
    return daysOfMonth;
  }

  minPageNum = 1;
  maxPageNum = 50;
  toggle = (pageNum, maxPageNum, minPageNum) => {
    this.setState({
      current: pageNum
    });
    if (pageNum >= minPageNum && pageNum <= minPageNum + 2) {
      this.setState({
        pageNums: [minPageNum, minPageNum + 1, minPageNum + 2, minPageNum + 3, minPageNum + 4, 0, maxPageNum]
      });
    } else if (pageNum >= maxPageNum - 2 && pageNum <= maxPageNum) {
      this.setState({
        pageNums: [minPageNum, 0, maxPageNum - 4, maxPageNum - 3, maxPageNum - 2, maxPageNum - 1, maxPageNum]
      });
    } else if (pageNum === 4 || pageNum === maxPageNum - 1) {
      // debugger
      this.setState({
        pageNums: [minPageNum, pageNum - 2, pageNum - 1, pageNum, pageNum + 1, pageNum + 2, 0, maxPageNum]
      });
    } else if (pageNum >= 5 && pageNum <= maxPageNum - 2) {
      this.setState({
        pageNums: [minPageNum, 0, pageNum - 2, pageNum - 1, pageNum, pageNum + 1, pageNum + 2, 0, maxPageNum]
      });
    }
    // console.log(minPageNum);
  }
  render() {
    let currentYear = 2017;
    let currentMonth = 11;
    let daysSizeOfPrevMonth = this.getDaysOfMonth(currentYear, currentMonth - 1);
    let daysSizeOfMonth = this.getDaysOfMonth(currentYear, currentMonth);
    let timestamp = Date.parse((currentMonth + 1) + '/1/' + currentYear);
    let date = new Date(timestamp);
    let week = date.getDay();
    let prevShowSize = week;
    let prevDays = [];
    // let currentDays = [];
    for (let i = daysSizeOfPrevMonth - prevShowSize + 1; i <= daysSizeOfPrevMonth; i++) {
      prevDays.push(
        i
      );
    }
    for (let j = 1; j <= daysSizeOfMonth; j++) {
      prevDays.push(
        j
      );
    }
    for (let k = 1; k <= 42 - daysSizeOfMonth - week; k++) {
      prevDays.push(
        k
      );
    }
    return (
      <div>
        <div>2017年12月</div>
        <div>
          日 一 二 三 四 五 六
        </div>
        {
          <div className="pagination">
            {
              prevDays.map((prevDay, index) =>
                (
                  <div key={index} style={{ display: 'inline-block' }}>
                    <div className="pageItem" style={(index % 6 === 0) ? { display: 'block', clear: 'right' } : null}>
                      {prevDay}
                    </div>
                  </div>
                )
              )
            }
          </div>
          /* <div>
          {
            // 表格还是div如何换行 记录数字并判断是否周六并换行

            let prevMonthDaysSize = 0;
            // 先循环prevMonth 得到11月的天数和12.1的week,从11.31起循环7-4次
            for (let prevNum = 31, prevNum < 7 - week, prevNum--){
              <div>prevNum<div>
              prevMonthDaysSize ++ ;

            }
            // 数字根据daysOfMonth获得 1号根据当天2017.12.1的week得到
            this.state.nums.map((pageNum, index) =>
              pageNum
            )
            // 从1开始循环42-3-12daysofmonth
            for (let nextMonthDay = 1, nextMonthDay < 42 - prevMonthDaysSize - 31, nextMonthDay++){
              <div>nextMonthDay<div>
            }
          }
        </div> */}
      </div>
    );
  }
}
