import React from 'react';
import decorator from "../assets/Decoration.svg";

export default function HomeContact() {
    return (
        <div className="HomeContact">
            <div className="Contact-background">
        <div className="Contact-container">

        
            <h3 className="Contact-title">Skontaktuj się z nami</h3>
            <img src={decorator} alt="decoration" className="decoration" />
<form className="Contact-form">
        <div className="Contact-input-row">
            <div className="Contact-input">
<label for="name">Wpisz swoje imię</label>
<input type="text" name="name" placeholder="Krzysztof"></input>
</div>
<div className="Contact-input">
<label for="mail">Wpisz swój email</label>
<input type="text" name="mail" placeholder="abc@xyz.pl"></input>
</div>
</div>
<label for="message">Wpisz swoją wiadomość</label>
<input type="textarea" name="message" className="Contact-message" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></input>
<button type="submit" className="btn btn-contact">Wyślij</button>
</form>
        </div>
        </div>
        </div>
    )
}
