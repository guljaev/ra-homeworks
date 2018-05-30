'use strict';

const ReactRouter = window.ReactRouterDOM;
// const {Route, Switch, BrowserRouter} = ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;

const RecipesList = (props) => {
    // console.log(props);
    const { match } = props;
    return (
        <div>
            <h1>Рецепты</h1>
            <ul>
                <li>Борщ</li>
                <li>Утка по-египетски</li>
                <li>рыба-шалунья</li>
            </ul>
            <Route path={`${match.url}/new`} component={NewRecipe} />
        </div>
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
                    <Route path="/recipes" component={RecipesList} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
