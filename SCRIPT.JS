console.log("SCRIPT.JS WORKING");

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // STAFF DASHBOARD - SUBJECT ELEMENTS
    // =====================================

    const subjectInput =
        document.getElementById("subjectInput");

    const addSubjectButton =
        document.getElementById("addSubjectButton");

    const subjectList =
        document.getElementById("subjectList");

    const subjectCount =
        document.getElementById("subjectCount");


    // =====================================
    // STAFF DASHBOARD - ASSIGNMENT ELEMENTS
    // =====================================

    const assignmentSubject =
        document.getElementById("assignmentSubject");

    const assignmentTitle =
        document.getElementById("assignmentTitle");

    const assignmentDescription =
        document.getElementById("assignmentDescription");

    const assignmentDeadline =
        document.getElementById("assignmentDeadline");

    const assignmentPriority =
        document.getElementById("assignmentPriority");

    const publishAssignmentButton =
        document.getElementById("publishAssignmentButton");

    const publishedAssignmentList =
        document.getElementById("publishedAssignmentList");

    const assignmentCount =
        document.getElementById("assignmentCount");


    // =====================================
    // STUDENT DASHBOARD ELEMENTS
    // =====================================

    const studentAssignmentList =
        document.getElementById("studentAssignmentList");

    const studentAssignmentCount =
        document.getElementById("studentAssignmentCount");

    const studentAssignmentSelect =
        document.getElementById("studentAssignmentSelect");

    const studentName =
        document.getElementById("studentName");

    const assignmentFile =
        document.getElementById("assignmentFile");

    const submitAssignmentButton =
        document.getElementById("submitAssignmentButton");

    const studentSubmissionHistory =
        document.getElementById("studentSubmissionHistory");

    const studentSubmittedCount =
        document.getElementById("studentSubmittedCount");

    const staffSubmissionList =
        document.getElementById("staffSubmissionList");

    const submissionCount =
        document.getElementById("submissionCount");


    // =====================================
    // LOAD DATA FROM LOCAL STORAGE
    // =====================================

    let subjects = [];

    let assignments = [];

    let submissions = [];


    // LOAD SUBJECTS

    try {

        const savedSubjects =
            localStorage.getItem("subjects");

        if (savedSubjects) {

            subjects =
                JSON.parse(savedSubjects);

        }

    } catch (error) {

        console.log(
            "Subject data error"
        );

        subjects = [];

        localStorage.removeItem(
            "subjects"
        );

    }


    // LOAD ASSIGNMENTS

    try {

        const savedAssignments =
            localStorage.getItem("assignments");

        if (savedAssignments) {

            assignments =
                JSON.parse(savedAssignments);

        }

    } catch (error) {

        console.log(
            "Assignment data error"
        );

        assignments = [];

        localStorage.removeItem(
            "assignments"
        );

    }


    // LOAD SUBMISSIONS

    try {

        const savedSubmissions =
            localStorage.getItem("submissions");

        if (savedSubmissions) {

            submissions =
                JSON.parse(savedSubmissions);

        }

    } catch (error) {

        console.log(
            "Submission data error"
        );

        submissions = [];

        localStorage.removeItem(
            "submissions"
        );

    }


    // =====================================
    // SAVE DATA
    // =====================================

    function saveSubjects() {

        localStorage.setItem(
            "subjects",
            JSON.stringify(subjects)
        );

    }


    function saveAssignments() {

        localStorage.setItem(
            "assignments",
            JSON.stringify(assignments)
        );

    }


    function saveSubmissions() {

        localStorage.setItem(
            "submissions",
            JSON.stringify(submissions)
        );

    }


    // =====================================
    // UPDATE SUBJECT DROPDOWN
    // =====================================

    function updateSubjectDropdown() {

        if (!assignmentSubject) {

            return;

        }


        assignmentSubject.innerHTML =
            `<option value="">
                Select Subject
            </option>`;


        subjects.forEach(function (subject) {

            const option =
                document.createElement("option");


            option.value =
                subject;


            option.textContent =
                subject;


            assignmentSubject.appendChild(
                option
            );

        });

    }


    // =====================================
    // DISPLAY SUBJECTS
    // =====================================

    function displaySubjects() {

        if (!subjectList) {

            return;

        }


        subjectList.innerHTML =
            "";


        if (
            subjects.length === 0
        ) {

            subjectList.innerHTML =
                `<p class="empty-message">
                    No subjects added yet.
                </p>`;

        } else {

            subjects.forEach(
                function (
                    subject,
                    index
                ) {

                    const subjectItem =
                        document.createElement(
                            "div"
                        );


                    subjectItem.className =
                        "list-item";


                    subjectItem.innerHTML =
                        `
                        <h3>
                            ${subject}
                        </h3>

                        <button
                            class="delete-button"
                            onclick="deleteSubject(${index})"
                        >
                            Delete
                        </button>
                        `;


                    subjectList.appendChild(
                        subjectItem
                    );

                }
            );

        }


        if (
            subjectCount
        ) {

            subjectCount.textContent =
                subjects.length;

        }


        updateSubjectDropdown();

    }


    // =====================================
    // ADD SUBJECT
    // =====================================

    if (
        addSubjectButton
    ) {

        addSubjectButton.addEventListener(
            "click",
            function () {

                const subjectName =
                    subjectInput.value.trim();


                if (
                    subjectName === ""
                ) {

                    alert(
                        "Please enter a subject name"
                    );

                    return;

                }


                subjects.push(
                    subjectName
                );


                saveSubjects();


                displaySubjects();


                subjectInput.value =
                    "";


                alert(
                    "Subject added successfully!"
                );

            }
        );

    }


    // =====================================
    // DELETE SUBJECT
    // =====================================

    window.deleteSubject =
        function (index) {

            subjects.splice(
                index,
                1
            );


            saveSubjects();


            displaySubjects();

        };


    // =====================================
    // DISPLAY STAFF ASSIGNMENTS
    // =====================================

    function displayAssignments() {

        if (
            !publishedAssignmentList
        ) {

            return;

        }


        publishedAssignmentList.innerHTML =
            "";


        if (
            assignments.length === 0
        ) {

            publishedAssignmentList.innerHTML =
                `<p class="empty-message">
                    No assignments published yet.
                </p>`;

        } else {

            assignments.forEach(
                function (
                    assignment,
                    index
                ) {

                    const assignmentItem =
                        document.createElement(
                            "div"
                        );


                    assignmentItem.className =
                        "list-item";


                    assignmentItem.innerHTML =
                        `
                        <h3>
                            ${assignment.title}
                        </h3>

                        <p>
                            <strong>
                                Subject:
                            </strong>

                            ${assignment.subject}
                        </p>

                        <p>
                            <strong>
                                Description:
                            </strong>

                            ${assignment.description}
                        </p>

                        <p>
                            <strong>
                                Deadline:
                            </strong>

                            ${assignment.deadline}
                        </p>

                        <p>
                            <strong>
                                Priority:
                            </strong>

                            ${assignment.priority}
                        </p>

                        <button
                            class="delete-button"
                            onclick="deleteAssignment(${index})"
                        >
                            Delete
                        </button>
                        `;


                    publishedAssignmentList.appendChild(
                        assignmentItem
                    );

                }
            );

        }


        if (
            assignmentCount
        ) {

            assignmentCount.textContent =
                assignments.length;

        }

    }


    // =====================================
    // PUBLISH ASSIGNMENT
    // =====================================

    if (
        publishAssignmentButton
    ) {

        publishAssignmentButton.addEventListener(
            "click",
            function () {

                const subject =
                    assignmentSubject.value;


                const title =
                    assignmentTitle.value.trim();


                const description =
                    assignmentDescription.value.trim();


                const deadline =
                    assignmentDeadline.value;


                const priority =
                    assignmentPriority.value;


                if (

                    subject === "" ||

                    title === "" ||

                    description === "" ||

                    deadline === ""

                ) {

                    alert(
                        "Please fill all assignment details"
                    );

                    return;

                }


                const newAssignment = {

                    subject:
                        subject,

                    title:
                        title,

                    description:
                        description,

                    deadline:
                        deadline,

                    priority:
                        priority

                };


                assignments.push(
                    newAssignment
                );


                saveAssignments();


                displayAssignments();


                assignmentSubject.value =
                    "";


                assignmentTitle.value =
                    "";


                assignmentDescription.value =
                    "";


                assignmentDeadline.value =
                    "";


                assignmentPriority.value =
                    "Low";


                alert(
                    "Assignment published successfully!"
                );

            }
        );

    }


    // =====================================
    // DELETE ASSIGNMENT
    // =====================================

    window.deleteAssignment =
        function (index) {

            assignments.splice(
                index,
                1
            );


            saveAssignments();


            displayAssignments();

        };


    // =====================================
    // STUDENT - DISPLAY ASSIGNMENTS
    // =====================================

    function displayStudentAssignments() {

        if (
            !studentAssignmentList
        ) {

            return;

        }


        studentAssignmentList.innerHTML =
            "";


        if (
            assignments.length === 0
        ) {

            studentAssignmentList.innerHTML =
                `<p class="empty-message">
                    No assignments available.
                </p>`;

        } else {

            assignments.forEach(
                function (
                    assignment
                ) {

                    const item =
                        document.createElement(
                            "div"
                        );


                    item.className =
                        "list-item";


                    item.innerHTML =
                        `
                        <h3>
                            ${assignment.title}
                        </h3>

                        <p>
                            <strong>
                                Subject:
                            </strong>

                            ${assignment.subject}
                        </p>

                        <p>
                            <strong>
                                Description:
                            </strong>

                            ${assignment.description}
                        </p>

                        <p>
                            <strong>
                                Deadline:
                            </strong>

                            ${assignment.deadline}
                        </p>

                        <p>
                            <strong>
                                Priority:
                            </strong>

                            ${assignment.priority}
                        </p>
                        `;


                    studentAssignmentList.appendChild(
                        item
                    );

                }
            );

        }


        if (
            studentAssignmentCount
        ) {

            studentAssignmentCount.textContent =
                assignments.length;

        }

    }


    // =====================================
    // STUDENT ASSIGNMENT DROPDOWN
    // =====================================

    function updateStudentAssignmentDropdown() {

        if (
            !studentAssignmentSelect
        ) {

            return;

        }


        studentAssignmentSelect.innerHTML =
            `<option value="">
                Select Assignment
            </option>`;


        assignments.forEach(
            function (
                assignment,
                index
            ) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    index;


                option.textContent =
                    assignment.title +
                    " - " +
                    assignment.subject;


                studentAssignmentSelect.appendChild(
                    option
                );

            }
        );

    }


    // =====================================
    // SUBMIT ASSIGNMENT
    // =====================================

    if (
        submitAssignmentButton
    ) {

        submitAssignmentButton.addEventListener(
            "click",
            function () {

                const name =
                    studentName.value.trim();


                const selectedAssignment =
                    studentAssignmentSelect.value;


                const file =
                    assignmentFile.files[0];


                if (
                    name === "" ||
                    selectedAssignment === "" ||
                    !file
                ) {

                    alert(
                        "Please fill all details and select a file"
                    );

                    return;

                }


                const assignment =
                    assignments[
                        selectedAssignment
                    ];


                const submission = {

                    studentName:
                        name,

                    assignmentTitle:
                        assignment.title,

                    subject:
                        assignment.subject,

                    fileName:
                        file.name,

                    submittedDate:
                        new Date()
                            .toLocaleDateString()

                };


                submissions.push(
                    submission
                );


                saveSubmissions();


                displayStudentSubmissions();


                displayStaffSubmissions();


                studentName.value =
                    "";


                studentAssignmentSelect.value =
                    "";


                assignmentFile.value =
                    "";


                alert(
                    "Assignment submitted successfully!"
                );

            }
        );

    }


    // =====================================
    // STUDENT SUBMISSION HISTORY
    // =====================================

    function displayStudentSubmissions() {

        if (
            !studentSubmissionHistory
        ) {

            return;

        }


        studentSubmissionHistory.innerHTML =
            "";


        if (
            submissions.length === 0
        ) {

            studentSubmissionHistory.innerHTML =
                `<p class="empty-message">
                    No submissions yet.
                </p>`;

        } else {

            submissions.forEach(
                function (
                    submission
                ) {

                    const item =
                        document.createElement(
                            "div"
                        );


                    item.className =
                        "list-item";


                    item.innerHTML =
                        `
                        <h3>
                            ${submission.assignmentTitle}
                        </h3>

                        <p>
                            <strong>
                                Student:
                            </strong>

                            ${submission.studentName}
                        </p>

                        <p>
                            <strong>
                                Subject:
                            </strong>

                            ${submission.subject}
                        </p>

                        <p>
                            <strong>
                                File:
                            </strong>

                            ${submission.fileName}
                        </p>

                        <p>
                            <strong>
                                Submitted:
                            </strong>

                            ${submission.submittedDate}
                        </p>
                        `;


                    studentSubmissionHistory.appendChild(
                        item
                    );

                }
            );

        }


        if (
            studentSubmittedCount
        ) {

            studentSubmittedCount.textContent =
                submissions.length;

        }

    }


    // =====================================
    // STAFF - VIEW SUBMISSIONS
    // =====================================

    function displayStaffSubmissions() {

        if (
            !staffSubmissionList
        ) {

            return;

        }


        staffSubmissionList.innerHTML =
            "";


        if (
            submissions.length === 0
        ) {

            staffSubmissionList.innerHTML =
                `<p class="empty-message">
                    No student submissions yet.
                </p>`;

        } else {

            submissions.forEach(
                function (
                    submission
                ) {

                    const item =
                        document.createElement(
                            "div"
                        );


                    item.className =
                        "list-item";


                    item.innerHTML =
                        `
                        <h3>
                            ${submission.assignmentTitle}
                        </h3>

                        <p>
                            <strong>
                                Student Name:
                            </strong>

                            ${submission.studentName}
                        </p>

                        <p>
                            <strong>
                                Subject:
                            </strong>

                            ${submission.subject}
                        </p>

                        <p>
                            <strong>
                                Submitted File:
                            </strong>

                            ${submission.fileName}
                        </p>

                        <p>
                            <strong>
                                Date:
                            </strong>

                            ${submission.submittedDate}
                        </p>
                        `;


                    staffSubmissionList.appendChild(
                        item
                    );

                }
            );

        }


        if (
            submissionCount
        ) {

            submissionCount.textContent =
                submissions.length;

        }

    }


    // =====================================
    // INITIAL LOAD
    // =====================================

    displaySubjects();

    displayAssignments();

    displayStudentAssignments();

    updateStudentAssignmentDropdown();

    displayStudentSubmissions();

    displayStaffSubmissions();

});