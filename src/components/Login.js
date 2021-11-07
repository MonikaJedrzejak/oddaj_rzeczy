import React, {useState} from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import decorator from "../assets/Decoration.svg";
import validator from 'validator';

export default function Login() {
    const [formData, setFormData] = useState({
        mail: "",
        password: "",
    });
    const [error, setError] = useState({
        mail: "",
        password: "",
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
            const { mail, password } = formData;
            // console.log(formData);
            setError({
                mail:
                    !(validator.isEmail(mail)) ? "Podany email jest nieprawidłowy" : "",
                password:
                    password.length < 6 ? "Podane hasło jest za krótkie" : "",
            });
            // console.log(error);
    
            if ( !error.mail && !error.password) {
                // FakeAPI.login(formData)
                //     .then((user) => {
                //         console.log(user);
                //         setUser(user);
                //     })
                //     .catch((err) => {
                //         console.log(err);
                //     });
                setFormData({ mail: "", password: ""});
            }
        };

	return (
		<div className="login-view">
			<Nav />

			<form className="login-container" onSubmit={handleSubmit}>
				<h3 className="login-title">Zaloguj się</h3>
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
				</div>
				<div className="login-buttons">
					<Link to="/register" className="btn btn-login">
						Załóż konto
					</Link>
					<button type="submit" className="btn btn-login">
						Zaloguj się
					</button>
				</div>
			</form>
		</div>
	);
}
