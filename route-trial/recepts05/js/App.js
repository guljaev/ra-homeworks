'use strict';

const ReactRouter = window.ReactRouterDOM;
// const {Route, Switch, BrowserRouter} = ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;

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
                        <Link to="/recipes">Рецепты</Link>
                        <div />
                        <Link to="/recipes/new">Новый рецепт</Link>
                    </nav>
                    <Route exact path="/recipes" component={RecipesList} />
                    <Route exact path="/recipes/new" component={NewRecipe} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
