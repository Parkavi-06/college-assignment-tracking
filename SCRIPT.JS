/* ============================= */
/* RESET */
/* ============================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/* ============================= */
/* BODY */
/* ============================= */

body {

    font-family: Arial, sans-serif;

    background:
        linear-gradient(
            135deg,
            #eef3ff,
            #f7f9fc
        );

    color: #1f2937;

    min-height: 100vh;

}


/* ============================= */
/* HOME PAGE */
/* ============================= */

.home-page {

    width: 100%;

    max-width: 1200px;

    margin: auto;

    padding: 40px 25px;

}


/* ============================= */
/* HOME HEADER */
/* ============================= */

.home-header {

    background: white;

    padding: 30px;

    border-radius: 18px;

    display: flex;

    align-items: center;

    gap: 20px;

    box-shadow:
        0 10px 30px
        rgba(0, 0, 0, 0.08);

    margin-bottom: 30px;

}


.logo {

    font-size: 45px;

}


.home-header h1 {

    font-size: 34px;

    color: #1e3a8a;

    margin-bottom: 8px;

}


.home-header p {

    color: #64748b;

    font-size: 16px;

}


/* ============================= */
/* FEATURES */
/* ============================= */

.features {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 18px;

    margin-bottom: 35px;

}


.feature-card {

    background: white;

    padding: 22px;

    border-radius: 15px;

    box-shadow:
        0 8px 25px
        rgba(0, 0, 0, 0.07);

    transition: 0.3s;

}


.feature-card:hover {

    transform:
        translateY(-5px);

}


.feature-icon {

    font-size: 28px;

    margin-bottom: 12px;

}


.feature-card h3 {

    margin-bottom: 8px;

    color: #1e3a8a;

}


.feature-card p {

    color: #64748b;

    font-size: 14px;

    line-height: 1.6;

}


/* ============================= */
/* WELCOME */
/* ============================= */

.welcome-section {

    text-align: center;

    margin-bottom: 25px;

}


.welcome-section h2 {

    font-size: 28px;

    margin-bottom: 8px;

    color: #1e3a8a;

}


.welcome-section p {

    color: #64748b;

}


/* ============================= */
/* ROLE CARDS */
/* ============================= */

.role-container {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 25px;

}


.role-card {

    background: white;

    padding: 35px;

    border-radius: 18px;

    box-shadow:
        0 10px 30px
        rgba(0, 0, 0, 0.08);

    text-align: center;

    transition: 0.3s;

}


.role-card:hover {

    transform:
        translateY(-6px);

}


.role-icon {

    font-size: 42px;

    margin-bottom: 15px;

}


.role-card h2 {

    color: #1e3a8a;

    margin-bottom: 15px;

}


.role-card p {

    color: #64748b;

    line-height: 1.7;

    margin-bottom: 25px;

}


.role-button {

    display: inline-block;

    text-decoration: none;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #1e40af
        );

    color: white;

    padding: 13px 25px;

    border-radius: 8px;

    font-weight: bold;

}


.role-button:hover {

    opacity: 0.9;

}


/* ============================= */
/* FOOTER */
/* ============================= */

footer {

    text-align: center;

    margin-top: 40px;

    color: #64748b;

}


/* ============================= */
/* DASHBOARD */
/* ============================= */

.dashboard-container {

    max-width: 1200px;

    margin: auto;

    padding: 35px 25px;

}


/* ============================= */
/* DASHBOARD HEADER */
/* ============================= */

.dashboard-header {

    background: white;

    padding: 25px 30px;

    border-radius: 16px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    box-shadow:
        0 8px 25px
        rgba(0, 0, 0, 0.08);

    margin-bottom: 25px;

}


.dashboard-header h1 {

    color: #1e3a8a;

    margin-bottom: 8px;

}


.dashboard-header p {

    color: #64748b;

}


/* ============================= */
/* LOGOUT */
/* ============================= */

.logout-button {

    text-decoration: none;

    background: #ef4444;

    color: white;

    padding: 11px 20px;

    border-radius: 8px;

}


/* ============================= */
/* STATS */
/* ============================= */

.stats-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 18px;

    margin-bottom: 25px;

}


.stat-card {

    background: white;

    padding: 25px;

    border-radius: 15px;

    box-shadow:
        0 8px 20px
        rgba(0, 0, 0, 0.07);

}


.stat-card h3 {

    color: #475569;

    font-size: 16px;

    margin-bottom: 15px;

}


.stat-card span {

    color: #2563eb;

    font-size: 30px;

    font-weight: bold;

}


/* ============================= */
/* PORTAL SECTION */
/* ============================= */

.portal-section {

    background: white;

    padding: 30px;

    border-radius: 18px;

    box-shadow:
        0 8px 25px
        rgba(0, 0, 0, 0.08);

    margin-bottom: 25px;

}


.portal-section h2 {

    color: #1e3a8a;

    margin-bottom: 20px;

}


.section-description {

    color: #64748b;

    margin-bottom: 20px;

}


/* ============================= */
/* FORM */
/* ============================= */

.form-group {

    margin-bottom: 18px;

}


.form-group label {

    display: block;

    margin-bottom: 8px;

    font-weight: bold;

    color: #334155;

}


input,
select,
textarea {

    width: 100%;

    padding: 13px;

    border:

        1px solid
        #cbd5e1;

    border-radius: 8px;

    font-size: 15px;

}


textarea {

    min-height: 100px;

    resize: vertical;

}


/* ============================= */
/* SUBJECT INPUT */
/* ============================= */

.input-row {

    display: flex;

    gap: 12px;

    margin-bottom: 20px;

}


.input-row input {

    flex: 1;

}


/* ============================= */
/* BUTTON */
/* ============================= */

button {

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #1e40af
        );

    color: white;

    border: none;

    padding: 13px 22px;

    border-radius: 8px;

    cursor: pointer;

    font-size: 15px;

    font-weight: bold;

}


button:hover {

    opacity: 0.9;

}


.secondary-button {

    margin-top: 20px;

}


/* ============================= */
/* LIST */
/* ============================= */

.list-container {

    margin-top: 15px;

}


.list-item {

    background: #f8fafc;

    padding: 18px;

    border-radius: 10px;

    margin-bottom: 12px;

    border-left:

        4px solid
        #2563eb;

}


.list-item h3 {

    margin-bottom: 8px;

    color: #1e3a8a;

}


.list-item p {

    margin: 5px 0;

    color: #475569;

}


.delete-button {

    background: #ef4444;

    margin-top: 10px;

}


.empty-message {

    color: #64748b;

}


/* ============================= */
/* CGPA */
/* ============================= */

.cgpa-result {

    margin-top: 20px;

    font-size: 20px;

    font-weight: bold;

    color: #1e3a8a;

}


.cgpa-result span {

    margin-left: 10px;

    background: #2563eb;

    color: white;

    padding: 8px 15px;

    border-radius: 8px;

}


/* ============================= */
/* MOBILE */
/* ============================= */

@media (max-width: 900px) {

    .features {

        grid-template-columns:
            repeat(2, 1fr);

    }


    .stats-grid {

        grid-template-columns:
            repeat(2, 1fr);

    }

}


@media (max-width: 600px) {

    .home-header {

        flex-direction: column;

        text-align: center;

    }


    .role-container {

        grid-template-columns: 1fr;

    }


    .features {

        grid-template-columns: 1fr;

    }


    .stats-grid {

        grid-template-columns: 1fr;

    }


    .dashboard-header {

        flex-direction: column;

        gap: 15px;

        text-align: center;

    }


    .input-row {

        flex-direction: column;

    }

}