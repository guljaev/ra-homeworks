'use strict';

const ReactRouter = window.ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;
const { Route, Link, Switch } = ReactRouterDOM;

const style = {
    display: 'block'
};

function Page404() {
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

// const Recipe = ({ match }) => (
//     <div>
//         <h2>{`Рецепт №${match.params.id}`}</h2>
//         <p>
//             {recipes.find(recipe => recipe.id === match.params.id).name}
//         </p>
//     </div>
// );

const Recipe = ({ match }) => {
    function findRecipe() {
        if (match.params.id) {
            return recipes.find(recipe => parseInt(recipe.id, 10) === parseInt(match.params.id, 10)).name;
        }
        if (match.params.name) {
            return recipes.find(recipe => recipe.name.toLowerCase() === match.params.name.toLowerCase()).name;
        }
    }
    return (
        <p>
            {findRecipe()}
        </p>
    );
};

const NewRecipe = () => (
    <div>
        <div>Новый рецепт</div>
        <textarea name="recipe" id="recipe" cols="30" />
    </div>
);

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Hello, amigo!</h1>
                    <nav>
                        <Link style={style} to="/recipes/new">Новый рецепт</Link>
                        {recipes.map((recipe) =>
                            <div key={recipe.id}>
                                <Link to={`/recipes/${recipe.id}`}>{`Рецепт ${recipe.name}`}</Link>
                            </div>
                        )}
                    </nav>
                    <Switch>
                        <Route path='/recipes/new' component={NewRecipe} />
                        {/* <Route path='/recipes/:id' component={Recipe} /> */}
                        <Route path='/recipes/:id([0-9]+)?:name([a-zA-Z]+)?' component={Recipe} />
                        <Route path='*' component={Page404} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
