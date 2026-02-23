import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
        "service_p22gzh8",
        "template_jv5lhym",
        form.current,
        "lbzvh0Nh-XRjTzDsJ"
        ).then(
        () => alert("Message sent successfully!"),
        () => alert("Something went wrong.")
        );

        e.target.reset();
    };

    return (
        <section id="contact" className="contact-section">
        <div className="contact-container">
            <h2>Let’s Work Together</h2>
            <p>I’m available for freelance and contract opportunities.</p>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
            />

            <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
            />

            <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                required
            />

            <button type="submit">Send Message</button>
            </form>
        </div>
        </section>
    );
}

export default Contact;