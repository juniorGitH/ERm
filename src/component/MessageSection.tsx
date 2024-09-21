import React from 'react';
import  '../MessageSection.css';
const MessageSection = () => {

    const images = [
        '../imag/image1.png',
        '../imag/image2.png',
        '../imag/image3.png',
    ];
    return (
        <div  >
            <div className="detailForm">
            <h3>Détails</h3>
            <div className="formGroup">
                <label>Nom de famille</label>
                <input type="text" />
            </div>
            <div className="formGroup">
                <label>Prénoms</label>
                <input type="text" />
            </div>
            <div className="formGroup">
                <label>Email</label>
                <input type="email" />
            </div>
            <div className="formGroup">
                <label>Numéro de Téléphone</label>
                <input type="text" />
            </div>
            <div className="formGroup">
                <label>Objet</label>
                <input type="text" />
            </div>
        </div>
        <div className="messageSection">
            <h3>Message</h3>
            <textarea placeholder="Lorem ipsum dolor sit amet..."></textarea>
        </div>
        <div className="imageGallery">
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Gallery Image ${index + 1}`} className=".image" />
            ))}
        </div>
        <button className="mainButton">Prendre en charge</button>
        </div>
          
       
    );
};

export default MessageSection;
