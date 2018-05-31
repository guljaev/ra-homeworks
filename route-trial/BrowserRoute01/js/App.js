'use strict';

const ReactRouter = window.ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;
const { Route, Link, Switch, BrowserRouter, withRouter } = ReactRouterDOM;

const style = {
    display: 'block'
};

function Page404(props) {
    // console.log(props);
    return (
        <div>Страница не найдена</div>
    );
}

const recipes = [{
    id: '1',
    name: 'Borsch'
}, {
    id: '2',
    name: 'VengerDuck'
}, {
    id: '3',
    name: 'SuperFish'
}];

const Recipe = ({ match }) => (
    <div>
        <h2>{`Рецепт №${match.params.id}`}</h2>
        <p>
            {recipes.find(recipe => recipe.id === match.params.id).name}
        </p>
    </div>
);

// const Recipe = ({ match }) => {
//     function findRecipe() {
//         if (match.params.id) {
//             return recipes.find(recipe => parseInt(recipe.id, 10) === parseInt(match.params.id, 10)).name;
//         }
//         if (match.params.name) {
//             return recipes.find(recipe => recipe.name.toLowerCase() === match.params.name.toLowerCase()).name;
//         }
//     }
//     return (
//         <p>
//             {findRecipe()}
//         </p>
//     );
// };

const NewRecipe = (props) => {
    // console.log(props);
    return (
        <div>
            <div>Новый рецепт</div>
            <textarea name="recipe" id="recipe" cols="30" />
        </div>
    );
};

function HeaderComponent(props) {
    console.log(props);
    const { location } = props;
    const recipeId = location.pathname.match(/^\/route-trial\/BrowserRoute01\/recipes\/(\d+)\/?$/i);
    let id;
    if (recipeId) id = recipeId[1];
    let title = 'Добро пожаловать в журнал "Мурзилка"!';

    if (location && location.pathname && id) {
        title = title + `\n params.location.pathname = ` + location.pathname + ` Сегодня на ужин ${recipes.find(recipe => recipe.id === id).name}`;
    }
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}

const Header = withRouter(HeaderComponent);

class App extends React.Component {
    render() {
        return (
            // <Router>
            <BrowserRouter>
                <div>
                    <h1>Hello, amigo!</h1>
                    <nav>
                        <Link style={style} to="/route-trial/BrowserRoute01/recipes/new">Новый рецепт</Link>
                        {recipes.map((recipe) =>
                            <div key={recipe.id}>
                                <Link to={`/route-trial/BrowserRoute01/recipes/${recipe.id}`}>{`Рецепт ${recipe.name}`}</Link>
                            </div>
                        )}
                    </nav>
                    <Header />
                    <Switch>
                        <Route path='/route-trial/BrowserRoute01/recipes/new' component={NewRecipe} />
                        <Route path='/route-trial/BrowserRoute01/recipes/:id' component={Recipe} />
                        {/* <Route path='/recipes/:id([0-9]+)?:name([a-zA-Z]+)?' component={Recipe} /> */}
                        <Route path='*' component={Page404} />
                    </Switch>
                </div>
            </BrowserRouter>
            // </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
