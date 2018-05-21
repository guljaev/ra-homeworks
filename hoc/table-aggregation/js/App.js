'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <MonthTableFromRawData list={this.state.list} />
                <YearTableFromRawData list={this.state.list} />
                <SortTableFromRawData list={this.state.list} />
            </div>
        );
    }
}
