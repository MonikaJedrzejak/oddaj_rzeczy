import React, {useState} from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import decorator from "../assets/Decoration.svg";
import validator from 'validator';

export default function Register() {
    const [formData, setFormData] = useState({
        mail: "",
        password: "",
        password2: "",
    });
    const [error, setError] = useState({
        mail: "",
        password: "",
        password2: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

        const handleSubmit = (e) => {
            e.preventDefault();
            const { mail, password, password2 } = formData;
            // console.log(formData);
            setError({
                mail:
                    !(validator.isEmail(mail)) ? "Podany email jest nieprawidłowy" : "",
                password:
                    password.length < 6 ? "Podane hasło jest za krótkie" : "",
                password2:
                    password2.length < 6 && password !== password2 ? "Podane hasła nie są identyczne" : "",
            });
            // console.log(error);
    
            if ( !error.mail && !error.password && !error.password2) {
                // FakeAPI.login(formData)
                //     .then((user) => {
                //         console.log(user);
                //         setUser(user);
                //     })
                //     .catch((err) => {
                //         console.log(err);
                //     });
                setFormData({ mail: "", password: "", password2: ""});
            }
        };

	return (
		<div className="login-view">
			<Nav />

			<form className="register-container" onSubmit={handleSubmit}>
				<h3 className="login-title">Załóż konto</h3>
				<img src={decorator} alt="decoration" className="decoration" />
				<div className="login-form">
					<label for="mail">Email</label>
					<input
                    type="text"
                    name="mail"
                    value={formData.mail}
                    onChange={handleChange}/>
                    <span className="form-err">{error?.mail}</span>
					<label for="password">Hasło</label>
					<input type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange} />
                        <span className="form-err">{error?.password}</span>
                        <label for="password">Powtórz hasło</label>
                        <input type="password"
                        name="password2"
                        value={formData.password2}
                        onChange={handleChange} />
                        <span className="form-err">{error?.password2}</span>
				</div>
				<div className="login-buttons">
                <Link to="/login" className="btn btn-login">
						Zaloguj się
					</Link>
					<button type="submit" className="btn btn-login">
						Załóż konto
					</button>
				</div>
			</form>
		</div>
	);
}
