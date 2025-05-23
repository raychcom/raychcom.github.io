// External links open in new tab
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href^='http']");
  links.forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer nofollow");
    }
  });

// Render obfuscated LinkedIn link
  const linkedInElement = document.getElementById("js-linkedin");
  if (linkedInElement) {
    const profile = "rsprague";
    linkedInElement.innerHTML = `<a href="https://www.linkedin.com/in/${profile}" rel="nofollow">LinkedIn</a>`;
  }
});