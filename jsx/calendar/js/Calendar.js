'use strict';

//марта
function getMonthGenetive(date) {
    const options = {
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleString('ru', options).split(' ')[1];
}

//март
function getMonthLong(date) {
    return date.toLocaleString('ru', { month: 'long' });
}

//среда
function getWeekDay(date) {
    return date.toLocaleString('ru', { weekday: 'long' });
}

//8
// date.getDate();

//2017
// date.getFullYear();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getMonthArray(date) {
    const monthArray = [];
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDayWeek = (new Date(year, month, 1)).getDay();

    let firstDateNumberIndicated = 1;
    switch (firstDayWeek) {
        case 0:
            firstDateNumberIndicated = -5;
            break;
        case 1:
            firstDateNumberIndicated = 1;
            break;
        case 2:
            firstDateNumberIndicated = 0;
            break;
        case 3:
            firstDateNumberIndicated = -1;
            break;
        case 4:
            firstDateNumberIndicated = -2;
            break;
        case 5:
            firstDateNumberIndicated = -3;
            break;
        case 6:
            firstDateNumberIndicated = -4;
            break;
    }

    const lastDateNumber = (new Date(year, month + 1, 0)).getDate();
    const weeksAmount = Math.ceil( (lastDateNumber - firstDateNumberIndicated + 1) / 7 );
    
    let currentDateNumber = firstDateNumberIndicated;
    for (let i = 0; i < weeksAmount; i++) {
        const weekArray = [];
        for (let j = 0; j < 7; j++) {
            weekArray.push( ( new Date(year, month, currentDateNumber) ).getDate() );
            currentDateNumber++;
        }
        monthArray.push(weekArray);
    }

    return monthArray;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const CalendarTableBody = function ({ date }) {
    const today = date.getDate();

    // const month = [
    //     [27, 28, 1, 2, 3, 4, 5],
    //     [6, 7, 8, 9, 10, 11, 12],
    //     [13, 14, 15, 16, 17, 18, 19],
    //     [20, 21, 22, 23, 24, 25, 26],
    //     [27, 28, 29, 30, 1, 2, 3]
    // ];
    
    function getWeekTR(week, weekIndex) {
        function getDayTD(dayNumber) {
            if ((weekIndex === 0) && (dayNumber > 20)) {
                return <td className="ui-datepicker-other-month">{dayNumber}</td>;
            }

            if ((weekIndex > 3) && (dayNumber < 10)) {
                return <td className="ui-datepicker-other-month">{dayNumber}</td>;
            }

            if (dayNumber === today) {
                return <td className="ui-datepicker-today">{dayNumber}</td>;
            }

            return <td>{dayNumber}</td>;
        }

        return (
            <tr>
                {week.map(getDayTD)}
            </tr>
        );
    }
    
    return (
        <tbody>
            {getMonthArray(date).map(getWeekTR)}
        </tbody>
    );
};

//~~~~~~~~~~~~~~~~~~~~React Component~~~~~~~~~~~~~~~~~~~~~

const Calendar = function ({ date }) {
    // console.log(date);
    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{getWeekDay(date)}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                    <div className="ui-datepicker-material-month">{getMonthGenetive(date)}</div>
                    <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{getMonthLong(date)}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col className="ui-datepicker-week-end"></col>
                    <col className="ui-datepicker-week-end"></col>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" title="Понедельник">Пн</th>
                        <th scope="col" title="Вторник">Вт</th>
                        <th scope="col" title="Среда">Ср</th>
                        <th scope="col" title="Четверг">Чт</th>
                        <th scope="col" title="Пятница">Пт</th>
                        <th scope="col" title="Суббота">Сб</th>
                        <th scope="col" title="Воскресенье">Вс</th>
                    </tr>
                </thead>
                <CalendarTableBody date={date} />

            </table>
        </div>
    );
};
