'use strict';

function modifyDate(date) {
	const dateDiff = new Date() - new Date(date);

	if (dateDiff > 1000 * 60 * 60 * 24) { // разница больше суток
		return `${Math.round(dateDiff / (1000 * 60 * 60 * 24) )} дней назад`;
	}
	if (dateDiff > 1000 * 60 * 60) { // разница больше часа
		return '5 часов назад';
	}
	return '12 часов назад'; // разница меньше часа
}

function changeDateView(Component, modifyDate) {
	return class DateTimeChanged extends React.Component {
		constructor(props) {
			super(props);
			this.state = {};
		}

		componentWillMount() {
			this.setState({ date: modifyDate(this.props.date) });
		}

		render() {
			console.log(this.props);
			return <Component {...this.state} />;
		}
	};
}

const DateTimeInitial = props => {
	return (
		<p className="date">{props.date}</p>
	);
};

const DateTime = changeDateView(DateTimeInitial, modifyDate);
