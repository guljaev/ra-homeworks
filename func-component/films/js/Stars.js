'use strict';

// import keyIndex from 'react-key-index';

function Stars({ count }) {
  if ((typeof count !== 'number') || (count < 1) || (count > 5)) {
    return null;
  }

  let starList = new Array(Math.round(count)).fill(undefined);
  starList = starList.map(() => <li><Star /></li>);
  // можно ли так делать - в переменную starList присваивать ссылку на массив, полученный из этого же starList?

  // const starListIndexed = keyIndex(starList, 1);
  // console.log(starListIndexed);
  // const starListIndexed = starList.map((star) => {
  //   return { id: shortid.generate(), value: star };
  // });
  // console.log(starListIndexed);
  // не смог использовать keyIndex или shortid.generate()   =(

  return (
    <ul className="card-body-stars u-clearfix">
      {starList}
    </ul>
  );
}
