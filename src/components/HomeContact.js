import React, {useState} from "react";
import decorator from "../assets/Decoration.svg";
import validator from 'validator';
// import axios from "axios";

export default function HomeContact() {
    const [serverResponse, setServerResponse] = useState('');
	const [formData, setFormData] = useState({
        name: "",
		email: "",
        message: "",
    });
    const [error, setError] = useState({
        name: "",
		email: "",
        message: "",
    });

    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };

const sendMessage = () => {
    // axios.post('https://fer-api.coderslab.pl/v1/portfolio/contact', {
    //         formData
    //     })
    //         .then(response => {
    //             console.log(response);
    //             if (response.status === 200) {
    //                 setServerResponse('Wiadomość została wysłana! Wkrótce się skontaktujemy!');
    //                 setFormData({ name: "", mail: "", message: ""});
    //                 setTimeout(()=>{
    //                     setServerResponse('');
    //                 },3000)
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                  "Content-Type": "application/json"
                }
              })
              .then(r => r.json())
                .then(response => {
                    
                    console.log(response);
                    if (response.status === 200) {
                        setServerResponse('Wiadomość została wysłana! Wkrótce się skontaktujemy!');
                        // setFormData({ name: "", mail: "", message: ""});
                    }
                })
                .catch(error => {
                    console.log(error.errors);
                  });
                

}
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
		// console.log(formData);
        setError({
            name:
                name.length < 2 ? "Username musi miec wiecej niz 2 znaki" : "",
            email:
                !(validator.isEmail(email)) ? "Nieprawidłowy email" : "",
			message:
				message.length < 120 ? "Wiadomość musi miec conajmniej 120 znaków" : "",
        });
		// console.log(error);

        if (!error.name && !error.email && !error.message) {
            console.log(formData);
            sendMessage();
            // setFormData({ name: "", mail: "", message: ""});
        }
    };


	return (
		<div className="HomeContact" href="#Contact">
			<div className="Contact-background">
				<div className="Contact-container">
					<h3 className="Contact-title">Skontaktuj się z nami</h3>
					<img src={decorator} alt="decoration" className="decoration" />
                    {
                            serverResponse && <h3 className="message-sent">{serverResponse}</h3>
                        }
					<form className="Contact-form" onSubmit={handleSubmit}>
						<div className="Contact-input-row">
							<div className="Contact-input">
								<label for="name">Wpisz swoje imię</label>
								<input
                        type="text"
                        name="name"
						placeholder="Maria"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <span className="form-err">{error?.name}</span>
							</div>
							<div className="Contact-input">
								<label for="email">Wpisz swój email</label>
								<input
                        type="text"
                        name="email"
						placeholder="abc@xyz.pl"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <span className="form-err">{error?.email}</span>
						</div>
						</div>
						<label for="message">Wpisz swoją wiadomość</label>
						<textarea
							name="message"
							className="Contact-message"
							onChange={handleChange}
							value={formData.message}
							placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
							<span className="form-err">{error?.message}</span>
						<button type="submit" className="btn btn-contact">
							Wyślij
						</button>
					</form>
				</div>
			</div>
</div>
	);
}
