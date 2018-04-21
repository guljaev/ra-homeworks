'use strict';

// import keyIndex from 'react-key-index';

function Stars({ count }) {
  if ((typeof count !== 'number') || (count < 1) || (count > 5)) {
    return null;
  }

  let starList = new Array(Math.round(count)).fill(undefined);
  starList = starList.map(() => <li key={shortid.generate()}><Star /></li>);
  // можно ли так делать - в переменную starList присваивать ссылку на массив, полученный из этого же starList?

  
  return (
    <ul className="card-body-stars u-clearfix">
      {starList}
    </ul>
  );
}
