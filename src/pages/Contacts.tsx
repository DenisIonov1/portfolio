import React, { useState } from 'react';
import '../styles/Contacts.css';

interface FormErrors {
    name: string | null;
    email: string | null;
    message: string | null;
}

const Contacts: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [errors, setErrors] = useState<FormErrors>({
        name: null,
        email: null,
        message: null,
    });
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = { name: null, email: null, message: null };
        let isValid = true;

        if (!name) {
            newErrors.name = 'Имя обязательно для заполнения';
            isValid = false;
        }

        if (!email) {
            newErrors.email = 'Email обязателен для заполнения';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Введите корректный email';
            isValid = false;
        }

        if (!message) {
            newErrors.message = 'Сообщение обязательно для заполнения';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Спасибо за ваше сообщение!');
            setName('');
            setEmail('');
            setMessage('');
            setIsSubmitted(true);
        }
    };

    return (
        <div className="contacts-page">
            <section className="contacts-form">
                <h2>Связаться со мной</h2>

                {isSubmitted && <p className="success-message">Спасибо за ваше сообщение!</p>}

                <form onSubmit={handleSubmit}>
                    <label>
                        Имя:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </label>

                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </label>

                    <label>
                        Сообщение:
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}

                        />
                        {errors.message && <p className="error-message">{errors.message}</p>}
                    </label>

                    <button type="submit">Отправить</button>
                </form>
            </section>
        </div>
    );
};

export default Contacts;
