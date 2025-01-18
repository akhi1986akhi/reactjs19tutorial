import React, { useState } from 'react'
import styles from '../../styles/Contact.module.css';
import image from '../../assets/img-1.webp';
export default function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!firstName.trim()) {
            newErrors.firstName = "First Name is Required!"
        }

        if (!lastName.trim()) {
            newErrors.lastName = "Last Name is Required!"
        }
        if (!contact.trim()) {
            newErrors.contact = "Contact No is Required!"
        } else if (!/^\d{10}$/.test(contact)) {
            newErrors.contact = "Please Enter Valid No.!"
        }

        if (!email) {
            newErrors.email = "Email ID is Required!"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

            newErrors.email = "please Enter Valid Email!"
        }
        if (!message.trim()) {
            newErrors.message = "Message is Required!"
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {

            const formData = {
                firstName,
                lastName,
                email,
                contact,
                message
            }
            console.log("Form Successfully Submitted:", formData);
            // Reset all input fields and errors
            setFirstName('');
            setLastName('');
            setEmail('');
            setContact('');
            setMessage('');
            setErrors({});

        } else {
            console.log("Please fill all Valid details")
            alert("Please Fill valid details")
        }

    }

    return (
        <>
            <div className={styles.containerFluid} >

                <div className={styles.row}>
                    <div className={styles.colLeft}>
                        <h2 style={{ color: 'seagreen' }}>Send Your Message</h2>
                        <img src={image} alt="image" style={{ with: 'auto', height: '250px' }} />
                    </div>
                    <div className="colRight">

                        <form onSubmit={handleSubmit} className={styles.contactForm}>
                            <div className={styles.col}>
                                <label htmlFor="">First Name <sup>*</sup> </label>
                                <input type="text" className={styles.input} value={firstName}  onChange={(e) => setFirstName(e.target.value)} placeholder='Enter Your First Name' />
                                {errors.firstName ? <div style={{ color: 'red' }}>{errors.firstName}</div> : ""}
                            </div>
                            <div className={styles.col}>
                                <label htmlFor="">Last Name <sup>*</sup> </label>
                                <input type="text" className={styles.input} value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Enter Your Last Name' />
                                {errors.lastName ? <div style={{ color: 'red' }}>{errors.lastName}</div> : ""}
                            </div>
                            <div className={styles.col}>
                                <label htmlFor="">E-mail <sup>*</sup> </label>
                                <input type="email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your E-mail' />
                                {errors.email ? <div style={{ color: 'red' }}>{errors.email}</div> : ""}
                            </div>
                            <div className={styles.col}>
                                <label htmlFor="">Contact <sup>*</sup> </label>
                                <input type="text" className={styles.input} value={contact} onChange={(e) => setContact(e.target.value)} placeholder='Enter Your Conatct' />
                                {errors.contact ? <div style={{ color: 'red' }}>{errors.contact}</div> : ""}
                            </div>
                            <div className={styles.col}>
                                <label htmlFor="">Message <sup>*</sup> </label>
                                <textarea name="" id="" className={styles.input} value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter Your Message'></textarea>
                                {errors.message ? <div style={{ color: 'red' }}>{errors.message}</div> : ""}
                            </div>
                            <div className={styles.col}>
                                <button type='submit' className={styles.submitBtn}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
