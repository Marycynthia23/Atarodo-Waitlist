import React, { useState } from 'react';
import styles from './WaitlistModal.module.css';
import { loadStripe } from '@stripe/stripe-js';


const YOUR_BACKEND_ENDPOINT= "http://localhost:4242"
const YOUR_STRIPE_PUBLISHABLE_KEY = 'pk_test_51Q9mzTRr95j5UGaYhYi4EpIUuJA1oQmZLidyZR1J5rMdMg54eoHL7vYlgY81pIrUBRrrJOVe9zMeufCrC8AR0KGS007yF4tquy'

const stripePromise = loadStripe(YOUR_STRIPE_PUBLISHABLE_KEY);


const WaitlistModal = ({ buttonLabel = "Join waitlist" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    // Basic validation logic
    const validateForm = () => {
      const newErrors = {};
  
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }
  
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
  
      const phoneRegex = /^[0-9]{10,15}$/; // You can adjust the regex for the phone format you expect
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
  
      return newErrors;
    };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // const stripe = await stripePromise;
    
        // Validate the form
      const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
          setErrors(formErrors);
          setLoading(false);
          return;
        }    


try {
  // Make a request to your backend to create a Stripe Checkout session
  const response = await fetch(`${YOUR_BACKEND_ENDPOINT}/create-checkout-session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.email,
          price: 19999, // Price in cents (Stripe works with minor currency units)
    }),
  });

if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

  const session = await response.json();
  console.log("session",session)

  // Load Stripe and redirect to checkout
  const stripe = await stripePromise;

  // Redirect to Stripe Checkout
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    console.error(result.error.message);
  }
} catch (error) {
  console.error('Error:', error);
} finally {
  setLoading(false);
}
};


  return (
    <div>
      {/* <button onClick={openModal} className={styles.joinButton}>Join waitlist</button> */}
      <button onClick={() => setIsOpen(true)} className={styles.joinButton}>{buttonLabel}</button>

      
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeModal}>X</button>
            <h2>Join the waitlist</h2>
            <p>Enter your details</p>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputField}>
                <label htmlFor="firstName">First name</label>
                <input type="text"  name="firstName" value={formData.firstName}
          onChange={handleChange}/>
              </div>
              <div className={styles.inputField}>
                <label htmlFor="lastName">Last name</label>
                <input type="text"  name="lastName" value={formData.lastName}
          onChange={handleChange}/>
              </div>
              <div className={styles.inputField}>
                <label htmlFor="email">Email address</label>
                <input type="email" name="email" value={formData.email}
          onChange={handleChange}/>
              </div>
              <div className={styles.inputField}>
                <label htmlFor="number">Phone</label>
                <input type="phone"  name="phone" value={formData.phone}
          onChange={handleChange}/>
              </div>
              {/* <button type="submit" className={styles.submitButton}>Submit details</button> */}
              <button type="submit" className={styles.submitButton} disabled={loading}>
                {loading ? 'Processing...' : 'Submit details'}
              </button>
            </form>
            <p className={styles.lifetimeOffer}>Get lifetime offer for $199.99</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitlistModal;