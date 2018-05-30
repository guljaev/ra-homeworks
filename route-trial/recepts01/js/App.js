'use strict';

const ReactRouter = window.ReactRouterDOM;
// const {Route, Switch, BrowserRouter} = ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;

const RecipesList = () => (
    <div>
        <h1>Рецепты</h1>
        <ul>
            <li>Борщ</li>
            <li>Утка по-египетски</li>
            <li>рыба-шалунья</li>
        </ul>
    </div>
);

const NewRecipe = () => (
    <div>
        <div>Новый рецепт</div>
        <textarea name="recipe" id="recipe" cols="30"_ />
    </div>
);

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="recipes" component={RecipesList} />
                    <Route path="new" component={NewRecipe} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
