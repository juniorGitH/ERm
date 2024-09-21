import React from 'react';
import '../Login.css';


const Login = () => {
  return (
    <div className="body">
    <div className="Page">
      <div className="logcol">
        <div className="coloneH">
          <div className="carre un"></div>
        </div>
        <div className="coloneH">
          <div className="carre deux"></div>
        </div>
        <div className="coloneH">
          <div className="carre trois"></div>
          <div className="carre quatre"></div>
        </div>
        <div className="coloneH">
          <div className="carre cinq"></div>
        </div>
        <div className="coloneH">
          <div className="carre six"></div>
        </div>
        <div className="coloneH">
          <div className="carre sept"></div>
        </div>
      </div>
      <div className="log">
        <div className="logincent">
          <h1 id="Login">Login</h1>
          <p id="veil">Veuillez remplir ces champs pour vous connectez</p>
          <div className="form">
            <form action="/login" method="POST">
              <input type="text" id="username" placeholder="username" required />
              <input type="password" id="password" name="password" placeholder="password" required />
              <div id="mp">
                <a href="#">Mot de passe oublié?</a>
              </div>
              <input type="submit" id="submit" value="Se connecter" />
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
