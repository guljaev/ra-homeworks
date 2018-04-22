'use strict';

function AuthForm({ onAuth }) {
    let textField,
    emailField,
    passwordField;

    function authUser(event) {
        event.preventDefault();
        if ( (!onAuth) || (typeof onAuth !== 'function') ) return null;
        const user = {
            name: textField.value,
            email: emailField.value,
            password: passwordField.value
        };
        onAuth(user);
    }

    function checkEmailField(event) {
        event.currentTarget.value = event.currentTarget.value
            .replace(/[^\w@\.-]+/gi, "");
    }
    
    function checkPasswordField(event) {
        event.currentTarget.value = event.currentTarget.value
            .replace(/[^\w]+/gi, "");
    }

    return (
        <form className="ModalForm" onSubmit={authUser} action="/404/auth/" method="POST">
            <div className="Input">
                <input ref={elem => textField = elem} required type="text" placeholder="Имя" />
                <label></label>
            </div>
            <div className="Input">
                <input ref={elem => emailField = elem} onChange={checkEmailField} type="email" placeholder="Электронная почта" />
                <label></label>
            </div>
            <div className="Input">
                <input ref={elem => passwordField = elem} onChange={checkPasswordField} required type="password" placeholder="Пароль" />
                <label></label>
            </div>
            <button type="submit">
                <span>Войти</span>
                <i className="fa fa-fw fa-chevron-right"></i>
            </button>
        </form>
    );
}
