/* The Hone page codes*/
const form = document.getElementById("enrollForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;
    const error = document.getElementById("error");

    if (!name || !age || !grade) {
      error.textContent = "All fields required!";
      return;
    }

    error.textContent = "";

    const student = {
      name,
      age,
      grade,
    };

    document.getElementById("welcome").textContent =
      `Welcome ${student.name} to Bright Future School!`;

    document.getElementById("summary").innerHTML = `<h3>Student Summary</h3>
Name: ${student.name}<br>
Age: ${student.age}<br>
Grade: ${student.grade}`;
  });
}

/*The Profile page codes*/
const emailBtn = document.getElementById("emailBtn");

if (emailBtn) {
  const contact = document.getElementById("contactInfo");

  document
    .getElementById("emailBtn")

    .addEventListener("click", () => {
      contact.textContent = "Email: student@school.com";
    });

  document
    .getElementById("phoneBtn")

    .addEventListener("click", () => {
      contact.textContent = "Phone: 0700000000";
    });

  document
    .getElementById("hideBtn")

    .addEventListener("click", () => {
      contact.textContent = "";
    });

  document
    .getElementById("updateStatus")

    .addEventListener("click", () => {
      const newStatus = document.getElementById("newStatus").value;

      if (newStatus) {
        document.getElementById("status").textContent = newStatus;
      }
    });
}

/*The Theme toggle*/
const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}
/*The Courses page codes*/
const courseList = document.getElementById("courseList");

if (courseList) {
  let courses = [
    {
      name: "Physics",
      instructor: "Mr Rohin",
      grade: "12",
      desc: "Physics and Mechanics",
    },
    {
      name: "Business Administration",
      instructor: "Ms Sadaf",
      grade: "10",
      desc: "Introduction to Economics",
    },
  ];

  /* The render course*/
  function renderCourses() {
    courseList.innerHTML = "";

    for (const course of courses) {
      const card = document.createElement("div");
      card.classList.add("course-card");

      card.innerHTML = `
        <h3>${course.name}</h3>
        <p><b>Instructor:</b> ${course.instructor}</p>
        <p><b>Grade:</b> ${course.grade}</p>

        <button data-name="${course.name}"
                data-desc="${course.desc}">
          View Course Details
        </button>
      `;

      courseList.appendChild(card);
    }

    addButtons();
  }

  /* So, the course button details */
  function addButtons() {
    document.querySelectorAll("button[data-name]").forEach((btn) => {
      btn.addEventListener("click", function () {
        const name = this.dataset.name;
        const desc = this.dataset.desc;

        document.getElementById("courseDetails").innerHTML = `
            <h3>${name}</h3>
            <p>${desc}</p>
          `;
      });
    });
  }

  /*This is for adding of new course*/
  const courseForm = document.getElementById("courseForm");

  if (courseForm) {
    courseForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const newCourse = {
        name: cname.value,
        instructor: instructor.value,
        grade: gradeLevel.value,
        desc: desc.value,
      };

      if (
        !newCourse.name ||
        !newCourse.instructor ||
        !newCourse.grade ||
        !newCourse.desc
      ) {
        alert("Please fill all fields");
        return;
      }

      courses.push(newCourse);

      renderCourses();

      courseForm.reset();
    });
  }

  renderCourses();
}

/* The Contact page codes*/
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactName.value;
    const email = contactEmail.value;
    const msg = message.value;
    if (!name || !email || !msg) {
      alert("Please fill all fields");

      return;
    }

    document.getElementById("confirmation").textContent =
      "Message sent successfully!";

    contactForm.reset();
  });
}

/*The search filter*/
const searchInput = document.getElementById("searchCourse");

searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();

  const filtered = courses.filter((course) =>
    course.name.toLowerCase().includes(keyword),
  );

  renderCourses(filtered);
});
