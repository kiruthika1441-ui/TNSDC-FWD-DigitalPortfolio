// Typing effect
const typingText = "Kiruthika S";
let i = 0;
function typeWriter() {
  if (i < typingText.length) {
    document.getElementById("typing").innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}
window.onload = typeWriter;

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
