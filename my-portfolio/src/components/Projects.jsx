function Projects() {
    return (
        <section id="projects">
        <h2>Projects</h2>

        <div style={styles.grid}>
            <div style={styles.card}>
            <h3>E-Commerce Platform</h3>
            <p>React + Django REST + Stripe integration</p>
            </div>

            <div style={styles.card}>
            <h3>Accounting Dashboard</h3>
            <p>Financial analytics built with React charts</p>
            </div>

            <div style={styles.card}>
            <h3>Portfolio CMS</h3>
            <p>Django-powered content management system</p>
            </div>
        </div>
        </section>
    );
}

const styles = {
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "40px",
    },
    card: {
        backgroundColor: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        transition: "0.3s",
    },
};

export default Projects;