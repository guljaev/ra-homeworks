'use strict';

import Autocomplete from 'react-toolbox/lib/autocomplete';
console.log(Autocomplete);

// const source = {
//   'ES-es': 'Spain',
//   'TH-th': 'Thailand',
//   'EN-gb': 'England',
//   'EN-en': 'USA'
// };

// class AutocompleteTest extends React.Component {
//   state = {
//     countries: ['ES-es', 'TH-th']
//   }

//   handleChange = (value) => {
//     this.setState({countries: value});
//   };

//   render () {
//     return (
//       <Autocomplete
//         direction="down"
//         selectedPosition="above"
//         label="Choose countries"
//         onChange={this.handleChange}
//         source={source}
//         value={this.state.countries}
//       />
//     );
//   }
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const Autocomplete = () => (
//     <div>
//         Тип кваритры: <br />
//         <select>
//             <option>Квартира в новостройке</option>
//             <option>Готовая квартира</option>
//             <option>Загородный дом</option>
//         </select>
//     </div>
// );

const Inputs = () => (
    <div>
        <label>
            Стоимость:
            <input type="number" name="price" value="2000000" />
            руб.
        </label>
        <label>
            На руках:
            <input type="number" name="money" value="200000" />
            руб.
        </label>
        <label>
            Срок кредита:
            <input type="number" name="duration" value="5" />
            лет
        </label>
    </div>
);

const Button = () => (
    <button>
        Отправить
    </button>
);

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <form action="">
                    {/* <Autocomplete /> */}
                    <Inputs />
                    <Button />
                </form>
            </div>
        );
    }
}
