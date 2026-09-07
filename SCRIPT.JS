console.log("SCRIPT JS WORKING");

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // SUBJECT MANAGEMENT ELEMENTS
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
    // ASSIGNMENT ELEMENTS
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
    // GPA ELEMENTS
    // =====================================

    const gpaSubjectName =
        document.getElementById("gpaSubjectName");

    const gpaSubjectCode =
        document.getElementById("gpaSubjectCode");

    const gpaCredit =
        document.getElementById("gpaCredit");

    const gpaGrade =
        document.getElementById("gpaGrade");

    const addGpaSubjectButton =
        document.getElementById("addGpaSubjectButton");

    const gpaSubjectList =
        document.getElementById("gpaSubjectList");

    const calculateGpaButton =
        document.getElementById("calculateGpaButton");

    const gpaResult =
        document.getElementById("gpaResult");


    // =====================================
    // CGPA ELEMENTS
    // =====================================

    const semesterName =
        document.getElementById("semesterName");

    const semesterGpa =
        document.getElementById("semesterGpa");

    const addSemesterButton =
        document.getElementById("addSemesterButton");

    const semesterList =
        document.getElementById("semesterList");

    const calculateCgpaButton =
        document.getElementById("calculateCgpaButton");

    const cgpaResult =
        document.getElementById("cgpaResult");


    // =====================================
    // DATA ARRAYS
    // =====================================

    let subjects = [];
    let assignments = [];

    let gpaSubjects = [];

    let semesters = [];


    // =====================================
    // LOAD SUBJECTS
    // =====================================

    try {

        const savedSubjects =
            localStorage.getItem("subjects");

        if (savedSubjects) {

            subjects =
                JSON.parse(savedSubjects);

        }

    } catch (error) {

        subjects = [];

        localStorage.removeItem("subjects");

    }


    // =====================================
    // LOAD ASSIGNMENTS
    // =====================================

    try {

        const savedAssignments =
            localStorage.getItem("assignments");

        if (savedAssignments) {

            assignments =
                JSON.parse(savedAssignments);

        }

    } catch (error) {

        assignments = [];

        localStorage.removeItem("assignments");

    }


    // =====================================
    // SAVE SUBJECTS
    // =====================================

    function saveSubjects() {

        localStorage.setItem(
            "subjects",
            JSON.stringify(subjects)
        );

    }


    // =====================================
    // SAVE ASSIGNMENTS
    // =====================================

    function saveAssignments() {

        localStorage.setItem(
            "assignments",
            JSON.stringify(assignments)
        );

    }


    // =====================================
    // UPDATE SUBJECT DROPDOWN
    // =====================================

    function updateSubjectDropdown() {

        if (!assignmentSubject) return;

        assignmentSubject.innerHTML =
            `<option value="">Select Subject</option>`;

        subjects.forEach(function (subject) {

            const option =
                document.createElement("option");

            option.value = subject;

            option.textContent = subject;

            assignmentSubject.appendChild(option);

        });

    }


    // =====================================
    // DISPLAY SUBJECTS
    // =====================================

    function displaySubjects() {

        if (!subjectList) return;

        subjectList.innerHTML = "";

        if (subjects.length === 0) {

            subjectList.innerHTML =
                `<p class="empty-message">
                    No subjects added yet.
                </p>`;

        } else {

            subjects.forEach(function (subject, index) {

                const item =
                    document.createElement("div");

                item.className =
                    "list-item";

                item.innerHTML = `
                    <h3>${subject}</h3>

                    <button
                        type="button"
                        class="delete-button"
                        onclick="deleteSubject(${index})"
                    >
                        Delete
                    </button>
                `;

                subjectList.appendChild(item);

            });

        }

        if (subjectCount) {

            subjectCount.textContent =
                subjects.length;

        }

        updateSubjectDropdown();

    }


    // =====================================
    // ADD SUBJECT
    // =====================================

    if (addSubjectButton) {

        addSubjectButton.addEventListener(
            "click",
            function () {

                const subjectName =
                    subjectInput.value.trim();

                if (subjectName === "") {

                    alert(
                        "Please enter a subject name"
                    );

                    return;

                }

                subjects.push(subjectName);

                saveSubjects();

                displaySubjects();

                subjectInput.value = "";

            }
        );

    }


    // =====================================
    // DELETE SUBJECT
    // =====================================

    window.deleteSubject =
        function (index) {

            subjects.splice(index, 1);

            saveSubjects();

            displaySubjects();

        };


    // =====================================
    // DISPLAY ASSIGNMENTS
    // =====================================

    function displayAssignments() {

        if (!publishedAssignmentList) return;

        publishedAssignmentList.innerHTML = "";

        if (assignments.length === 0) {

            publishedAssignmentList.innerHTML =
                `<p class="empty-message">
                    No assignments published yet.
                </p>`;

        } else {

            assignments.forEach(
                function (assignment, index) {

                    const item =
                        document.createElement("div");

                    item.className =
                        "list-item";

                    item.innerHTML = `
                        <h3>${assignment.title}</h3>

                        <p>
                            <strong>Subject:</strong>
                            ${assignment.subject}
                        </p>

                        <p>
                            <strong>Description:</strong>
                            ${assignment.description}
                        </p>

                        <p>
                            <strong>Deadline:</strong>
                            ${assignment.deadline}
                        </p>

                        <p>
                            <strong>Priority:</strong>
                            ${assignment.priority}
                        </p>

                        <button
                            type="button"
                            class="delete-button"
                            onclick="deleteAssignment(${index})"
                        >
                            Delete
                        </button>
                    `;

                    publishedAssignmentList.appendChild(item);

                }
            );

        }

        if (assignmentCount) {

            assignmentCount.textContent =
                assignments.length;

        }

    }


    // =====================================
    // PUBLISH ASSIGNMENT
    // =====================================

    if (publishAssignmentButton) {

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

                    subject: subject,

                    title: title,

                    description: description,

                    deadline: deadline,

                    priority: priority

                };


                assignments.push(newAssignment);

                saveAssignments();

                displayAssignments();


                assignmentSubject.value = "";

                assignmentTitle.value = "";

                assignmentDescription.value = "";

                assignmentDeadline.value = "";

                assignmentPriority.value = "Low";


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

            assignments.splice(index, 1);

            saveAssignments();

            displayAssignments();

        };


    // =====================================
    // GPA GRADE POINT FUNCTION
    // =====================================

    function getGradePoint(grade) {

        const gradePoints = {

            "O": 10,
            "A+": 9,
            "A": 8,
            "B+": 7,
            "B": 6,
            "C": 5,
            "F": 0

        };

        return gradePoints[grade];

    }


    // =====================================
    // ADD GPA SUBJECT
    // =====================================

    if (addGpaSubjectButton) {

        addGpaSubjectButton.addEventListener(
            "click",
            function () {

                const name =
                    gpaSubjectName.value.trim();

                const code =
                    gpaSubjectCode.value.trim();

                const credit =
                    Number(gpaCredit.value);

                const grade =
                    gpaGrade.value;


                if (
                    name === "" ||
                    code === "" ||
                    gpaCredit.value === "" ||
                    grade === ""
                ) {

                    alert(
                        "Please fill all subject details"
                    );

                    return;

                }


                if (
                    credit <= 0 ||
                    !Number.isInteger(credit)
                ) {

                    alert(
                        "Please enter a valid whole number for Credit"
                    );

                    return;

                }


                const newSubject = {

                    name: name,

                    code: code,

                    credit: credit,

                    grade: grade,

                    gradePoint:
                        getGradePoint(grade)

                };


                // ADD UNLIMITED SUBJECTS

                gpaSubjects.push(newSubject);


                displayGpaSubjects();


                // CLEAR FOR NEXT SUBJECT

                gpaSubjectName.value = "";

                gpaSubjectCode.value = "";

                gpaCredit.value = "";

                gpaGrade.value = "";


                // CURSOR RETURNS TO SUBJECT NAME

                gpaSubjectName.focus();

            }
        );

    }


    // =====================================
    // DISPLAY GPA SUBJECTS
    // =====================================

    function displayGpaSubjects() {

        if (!gpaSubjectList) return;

        gpaSubjectList.innerHTML = "";


        if (gpaSubjects.length === 0) {

            gpaSubjectList.innerHTML =
                `<p class="empty-message">
                    No subjects added yet.
                </p>`;

            return;

        }


        gpaSubjects.forEach(
            function (subject, index) {

                const item =
                    document.createElement("div");

                item.className =
                    "list-item";


                item.innerHTML = `
                    <h3>${subject.name}</h3>

                    <p>
                        <strong>Subject Code:</strong>
                        ${subject.code}
                    </p>

                    <p>
                        <strong>Credit:</strong>
                        ${subject.credit}
                    </p>

                    <p>
                        <strong>Grade:</strong>
                        ${subject.grade}
                    </p>

                    <p>
                        <strong>Grade Point:</strong>
                        ${subject.gradePoint}
                    </p>

                    <button
                        type="button"
                        class="delete-button"
                        onclick="deleteGpaSubject(${index})"
                    >
                        Delete
                    </button>
                `;


                gpaSubjectList.appendChild(item);

            }
        );

    }


    // =====================================
    // DELETE GPA SUBJECT
    // =====================================

    window.deleteGpaSubject =
        function (index) {

            gpaSubjects.splice(index, 1);

            displayGpaSubjects();

        };


    // =====================================
    // CALCULATE GPA
    // =====================================

    if (calculateGpaButton) {

        calculateGpaButton.addEventListener(
            "click",
            function () {

                if (
                    gpaSubjects.length === 0
                ) {

                    alert(
                        "Please add at least one subject"
                    );

                    return;

                }


                let totalPoints = 0;

                let totalCredits = 0;


                gpaSubjects.forEach(
                    function (subject) {

                        totalPoints +=
                            subject.credit *
                            subject.gradePoint;

                        totalCredits +=
                            subject.credit;

                    }
                );


                const gpa =
                    totalPoints /
                    totalCredits;


                gpaResult.textContent =
                    gpa.toFixed(2);

            }
        );

    }


    // =====================================
    // ADD SEMESTER GPA
    // =====================================

    if (addSemesterButton) {

        addSemesterButton.addEventListener(
            "click",
            function () {

                const semester =
                    semesterName.value;

                const gpa =
                    Number(semesterGpa.value);


                if (
                    semester === "" ||
                    semesterGpa.value === ""
                ) {

                    alert(
                        "Please select semester and enter GPA"
                    );

                    return;

                }


                if (
                    gpa < 0 ||
                    gpa > 10
                ) {

                    alert(
                        "GPA must be between 0 and 10"
                    );

                    return;

                }


                const alreadyAdded =
                    semesters.some(
                        function (item) {

                            return (
                                item.semester ===
                                semester
                            );

                        }
                    );


                if (alreadyAdded) {

                    alert(
                        "This semester is already added"
                    );

                    return;

                }


                semesters.push({

                    semester: semester,

                    gpa: gpa

                });


                displaySemesters();


                semesterName.value = "";

                semesterGpa.value = "";

            }
        );

    }


    // =====================================
    // DISPLAY SEMESTERS
    // =====================================

    function displaySemesters() {

        if (!semesterList) return;

        semesterList.innerHTML = "";


        if (semesters.length === 0) {

            semesterList.innerHTML =
                `<p class="empty-message">
                    No semester GPA added yet.
                </p>`;

            return;

        }


        semesters.forEach(
            function (semester, index) {

                const item =
                    document.createElement("div");

                item.className =
                    "list-item";


                item.innerHTML = `
                    <h3>${semester.semester}</h3>

                    <p>
                        <strong>GPA:</strong>
                        ${semester.gpa.toFixed(2)}
                    </p>

                    <button
                        type="button"
                        class="delete-button"
                        onclick="deleteSemester(${index})"
                    >
                        Delete
                    </button>
                `;


                semesterList.appendChild(item);

            }
        );

    }


    // =====================================
    // DELETE SEMESTER
    // =====================================

    window.deleteSemester =
        function (index) {

            semesters.splice(index, 1);

            displaySemesters();

        };


    // =====================================
    // CALCULATE OVERALL CGPA
    // =====================================

    if (calculateCgpaButton) {

        calculateCgpaButton.addEventListener(
            "click",
            function () {

                if (
                    semesters.length === 0
                ) {

                    alert(
                        "Please add at least one semester GPA"
                    );

                    return;

                }


                let totalGpa = 0;


                semesters.forEach(
                    function (semester) {

                        totalGpa +=
                            semester.gpa;

                    }
                );


                const cgpa =
                    totalGpa /
                    semesters.length;


                cgpaResult.textContent =
                    cgpa.toFixed(2);

            }
        );

    }


    // =====================================
    // INITIAL LOAD
    // =====================================

    displaySubjects();

    displayAssignments();

    displayGpaSubjects();

    displaySemesters();git status

});