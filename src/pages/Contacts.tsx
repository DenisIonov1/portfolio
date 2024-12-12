import React from 'react';
import '../styles/Contacts.css'
const Contacts: React.FC = () => {
    return (
        <div className="contacts-page">
            <section className="contacts-form">
                <h2>Связаться со мной</h2>
                <form>
                    <label>
                        Имя:
                        <input type="text" name="name" placeholder="Ваше имя" />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" placeholder="Ваш email" />
                    </label>
                    <label>
                        Сообщение:
                        <textarea name="message" placeholder="Ваше сообщение" />
                    </label>
                    <button type="submit">Отправить</button>
                </form>
            </section>
        </div>
    );
};


export default Contacts;