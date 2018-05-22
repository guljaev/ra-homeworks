'use strict';

function getYearData(props) {
  // const yearList = props.list.map(item => {
  //     const date = new Date(item.date);
  //     const options = {
  //       year: 'numeric'
  //     };
  //     const year = date.toLocaleString('en', options);
  //     return {
  //         year: year,
  //         amount: item.amount
  //     };
  // });
  const yearListObj = props.list.reduce( (newList, item) => {
		const date = new Date(item.date);
		const options = {
			year: 'numeric'
		};
		const year = date.toLocaleString('en', options);
		newList[year] = (newList[year]) ? newList[year] + item.amount : item.amount;
		return newList;
  }, {});
  const yearList = Object.keys(yearListObj)
    .sort( (year1, year2) => +year1 > +year2)
    .map(year => { 
      return { year: year, amount: yearListObj[year] };
    });
  return { list: yearList };
}
const YearTableFromRawData = fromRawData(getYearData)(YearTable);
