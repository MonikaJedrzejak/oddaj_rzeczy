import React, {useState} from "react";
import decorator from "../assets/Decoration.svg";
import validator from 'validator';
// import axios from "axios";

export default function HomeContact() {
    const [serverResponse, setServerResponse] = useState('');
	const [formData, setFormData] = useState({
        name: "",
		mail: "",
        message: "",
    });
    const [error, setError] = useState({
        name: "",
		mail: "",
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
        const { name, mail, message } = formData;
		// console.log(formData);
        setError({
            name:
                name.length < 2 ? "Username musi miec wiecej niz 2 znaki" : "",
            mail:
                !(validator.isEmail(mail)) ? "Nieprawidłowy email" : "",
			message:
				message.length < 120 ? "Wiadomość musi miec conajmniej 120 znaków" : "",
        });
		// console.log(error);

        if (!error.name && !error.mail && !error.message) {
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
								<label for="mail">Wpisz swój email</label>
								<input
                        type="text"
                        name="mail"
						placeholder="abc@xyz.pl"
                        value={formData.mail}
                        onChange={handleChange}
                    />
                    <span className="form-err">{error?.mail}</span>
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
