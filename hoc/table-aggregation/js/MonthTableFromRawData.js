'use strict';

function getMonthData(props) {
  const monthList = props.list.map(item => {
      const date = new Date(item.date);
      const options = {
          month: 'short'
      };
      const month = date.toLocaleString('en', options);
      return {
          month: month,
          amount: item.amount
      };
  });
  return { list: monthList };
}
const MonthTableFromRawData = fromRawData(getMonthData)(MonthTable);
