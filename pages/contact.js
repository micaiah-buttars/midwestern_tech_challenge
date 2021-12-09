import { useState } from 'react';
import axios from 'axios';
import Header from '../components/header'

import styles from '../styles/contact.module.css'

export default function Contact() {
    const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [title, setTitle] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	async function handleSubmit(e) {
        e.preventDefault();
		let FormData = { firstName, lastName, title, email, message };
		const res = await axios.post(
			'http://localhost:3000/contact',
			FormData,
		);
		console.log(res.data.message);

		setFirstName('');
		setLastName('');
		setTitle('');
		setEmail('');
		setMessage('');
	};

	return (
        <>
		    <Header directory='home'/>

            <div className={styles.contact}>
                <div className={styles.body_container}>
                    <div className={styles.body_content}>
                        <h1 className={styles.body_heading}> One</h1>
                        <p className={styles.body_paragraph}>
                            Lorem ipsum dolor sit amet, consecetur adispiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace
                            dolore magna aliqua.
                            <br />
                            <br />
                            Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem
                        </p>
                    </div>
                </div>
                <div className={styles.contact_container}>
                    <div className={styles.contact_form}>
                        <h1 className={styles.contact_header}>
                            Heading Two
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.input_wrapper}>
                                <input
                                    type='text'
                                    placeholder={'First Name'}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)
                                    }
                                />
                                <input
                                    type='text'
                                    placeholder={'Last Name'}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className={styles.input_wrapper}>
                                <input
                                    type='text'
                                    placeholder={'Title'}
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <input
                                    type='email'
                                    id='email'
                                    placeholder={'Email'}
                                    required
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <textarea
                                placeholder={'Message'}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />

                            <button 
                            className={styles.submit}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
	);
};
