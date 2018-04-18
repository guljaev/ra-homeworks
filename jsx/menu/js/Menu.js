'use strict';

function getMenuItem(item) {
    return (
        <li><a href={item.href}>{item.title}</a></li>
    );
}
  
const Menu = function ({ items, opened = false }) {
    if (!opened) {
        return (
            <div className="menu">
            <div className="menu-toggle"><span></span></div>
            </div>
        );
    }
    
    return (
        <div className="menu menu-open">
            <div className="menu-toggle"><span></span></div>
            <nav>
            <ul>
                {items.map(getMenuItem)}
            </ul>
            </nav>
        </div>
    );
};
