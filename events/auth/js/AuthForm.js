'use strict';

function AuthForm({ onAuth }) {
    function authUser(event) {
        event.preventDefault();
        if ( (!onAuth) || (typeof onAuth !== 'function') ) return null;

        const formElements = event.currentTarget.elements;
        const user = {
            name: formElements.name.value,
            email: formElements.email.value,
            password: formElements.password.value
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
                <input required name="name" type="text" placeholder="Имя" />
                <label></label>
            </div>
            <div className="Input">
                <input onChange={checkEmailField} name="email" type="email" placeholder="Электронная почта" />
                <label></label>
            </div>
            <div className="Input">
                <input onChange={checkPasswordField} required name="password" type="password" placeholder="Пароль" />
                <label></label>
            </div>
            <button type="submit">
                <span>Войти</span>
                <i className="fa fa-fw fa-chevron-right"></i>
            </button>
        </form>
    );
}
