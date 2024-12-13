
  document.addEventListener("DOMContentLoaded", function() {
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
