function About() {
    return (
        <section id="about">
            <h2>About Me</h2>
            <p style={{ marginTop: "20px", maxWidth: "700px" }}>
            I’m a frontend-focused full-stack developer with strong
            experience in React, modern UI design, and backend systems using Django.
            I build responsive, scalable applications tailored for startups and businesses.
            </p>

            <h3 style={{ marginTop: "40px" }}>Tech Stack</h3>
            <ul style={{ marginTop: "15px", lineHeight: "2" }}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript (React)</li>
                <li>Python (Django)</li>
                <li>MySQL/SQlite</li>
                <li>REST APIs</li>
            </ul>
        </section>
    );
}

export default About;