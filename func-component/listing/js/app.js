'use strict';

fetch('https://neto-api.herokuapp.com/etsy')
    .then(res => {
        if (200 <= res.status && res.status < 300) {
            document.querySelector('.loading').style.display = 'none';
            return res;
        }
        throw new Error(res.statusText);
    })
    .then(res => res.json())
    .then(res => {
        ReactDOM.render(
            <Listing items={res} />,
            document.getElementById('root')
        );
    })
    .catch(err => console.log(err));

function Listing({ items }) {
    function getItemTitle(title) {
        if (typeof title !== 'string') return '';
        if (title.length > 50) {
            return title.slice(0, 50) + '...';
        }
        return title;
    }

    function getItemPrice(price, currencyCode) {
        if (currencyCode === 'USD') return '$' + price;
        if (currencyCode === 'EUR') return '€' + price;
        return price + ' ' + currencyCode;
    }

    function getItemQuantityLevel(quantity) {
        if (typeof quantity !== 'number') return '';
        if (quantity <= 10) return 'level-low';
        if (quantity <= 20) return 'level-medium';
        return 'level-high';
    }

    console.log(items);
    if (!items.length) return null;

    const itemList = items.map(item => {
        return (
            <div key={item.listing_id} className="item">
                <div className="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage.url_570xN} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{getItemTitle(item.title)}</p>
                    <p className="item-price">{getItemPrice(item.price, item.currency_code)}</p>
                    <p className={'item-quantity ' + getItemQuantityLevel(item.quantity)}>{item.quantity} left</p>
                </div>
            </div>
        );
    });
    return <div className="item-list">{itemList}</div>;
}
