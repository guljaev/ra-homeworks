'use strict';

function getSortData(props) {
  // const list = JSON.parse(JSON.stringify(props.list));
  const sortList = props.list.sort( (item1, item2) => {
    const date1 = new Date(item1.date);
    const date2 = new Date(item2.date);
    return date2 - date1;
  });
  return { list: sortList };
}
const SortTableFromRawData = fromRawData(getSortData)(SortTable);
