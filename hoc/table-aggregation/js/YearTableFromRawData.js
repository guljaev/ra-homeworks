'use strict';

function getYearData(props) {
  const yearList = props.list.map(item => {
      const date = new Date(item.date);
      const options = {
        year: 'numeric'
      };
      const year = date.toLocaleString('en', options);
      return {
          year: year,
          amount: item.amount
      };
  });
  return { list: yearList };
}
const YearTableFromRawData = fromRawData(getYearData)(YearTable);
