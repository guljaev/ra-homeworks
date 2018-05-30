'use strict';

const ReactRouter = window.ReactRouterDOM;
// const {Route, Switch, BrowserRouter} = ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const NavLink = ReactRouterDOM.NavLink;
const Switch = ReactRouterDOM.Switch;

const activeStyle = {
    color: 'red'
};

const style = {
    display: 'block'
};

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
                        {/* <NavLink to="/recipes" style={style} activeStyle={activeStyle}>Рецепты</NavLink>
                        <NavLink to="/recipes/" style={style} activeStyle={activeStyle}>Рецепты со slash</NavLink>
                        <NavLink to="/recipes/new?foo=bar" style={style} activeStyle={activeStyle}>Новый рецепт с параметрами</NavLink> */}

                        <NavLink to='/recipes' style={style} activeStyle={activeStyle}>
                            Рецепты
                        </NavLink>
                        <NavLink strict to='/recipes/' style={style} activeStyle={activeStyle}>
                            Рецепты с аттрибутом strict
                        </NavLink>
                        <NavLink exact to='/recipes' style={style} activeStyle={activeStyle}>
                            Рецепты с аттрибутом exact
                        </NavLink>
                        <NavLink to='/recipes/new' style={style} activeStyle={activeStyle}>
                            Новый рецепт
                        </NavLink>
                        <NavLink to={{hash: '/recipec/new', search: '?foo=bar'}} style={style} activeStyle={activeStyle}>
                            Новый рецепт с параметрами
                        </NavLink>
                        <NavLink exact to={{hash: '/recipec/new', search: '?foo=bar'}} style={style} activeStyle={activeStyle}>
                            Новый рецепт с параметрами и аттрибутом exact
                        </NavLink>
                    </nav>
                    <Switch>
                        <Route path="/recipes/new" component={NewRecipe} />
                        <Route path="/recipes" component={RecipesList} />
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
