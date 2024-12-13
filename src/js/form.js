const form = document.querySelector(".feedback-form");
const formInputEmail = document.querySelector('input[type="email"]');
const formTextArea = document.querySelector("textarea");
const localStorageKey = "feedback-form-state";

window.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
  if (savedData.email) formInputEmail.value = savedData.email;
  if (savedData.message) formTextArea.value = savedData.message;
});

form.addEventListener("input", () => {
  const formData = {
    email: formInputEmail.value.trim(),
    message: formTextArea.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = formInputEmail.value.trim();
  const message = formTextArea.value.trim();

  if (!email || !message) {
    alert("Formda boş alanlar var! Lütfen tüm alanları doldurun.");
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(localStorageKey);
  form.reset();
});




  document.addEventListener("DOMContentLoaded", function () {
    const numberOfDots = 100;
    const body = document.body;

    for (let i = 0; i < numberOfDots; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.style.width = Math.random() * 3 + "px";
      dot.style.height = dot.style.width;
      dot.style.left = Math.random() * 100 + "vw";
      dot.style.animationDuration = Math.random() * 5 + 4 + "s";
      dot.style.animationDelay = Math.random() * 2 + "s";
      body.appendChild(dot);
    }
  });
