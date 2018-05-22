'use strict';

function getMonthData(props) {
  // const monthList = props.list.map(item => {
  //     const date = new Date(item.date);
  //     const options = {
  //         month: 'short'
  //     };
  //     const month = date.toLocaleString('en', options);
  //     return {
  //         month: month,
  //         amount: item.amount
  //     };
	// });
	const monthList = [];
	props.list.forEach( item => {
		const date = new Date(item.date);
		const options = {
			month: 'short'
		};
		const monthStr = date.toLocaleString('en', options);
		const monthIndex = date.getMonth();
		if (monthList[monthIndex]) {
			monthList[monthIndex].amount += item.amount;
		} else {
			monthList[monthIndex] = {
				month: monthStr,
				amount: item.amount
			};
		}
	});
  return { list: monthList };
}
const MonthTableFromRawData = fromRawData(getMonthData)(MonthTable);
