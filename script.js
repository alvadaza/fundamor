document.getElementById("whatsappIcon").addEventListener("click", function () {
  const predefinedMessage = "Me gustaría saber más sobre sus servicios.";
  const whatsappURL = `https://wa.me/3133574711?text=${encodeURIComponent(
    predefinedMessage
  )}`;
  window.open(whatsappURL, "_blank");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  fetch(
    "https://script.google.com/macros/s/AKfycbwqo4HuAVUlNYa4MY7chGhwQ4Tlizj-HPuWnPT5gFUOZboac8pDfc9QJWgTuBKkJoE/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(
        email
      )}&phone=${encodeURIComponent(phone)}&message=${encodeURIComponent(
        message
      )}`,
    }
  )
    .then((response) => response.text())
    .then((data) => {
      alert("Mensaje enviado con éxito pronto nos contactaremos contigo");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Hubo un error al enviar el mensaje");
    });
});

var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

/*activar el muenu de por que elegirno */

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
}

function closemenu() {
  sidemeu.style.right = "-200px";
}

/*para mostrar el portafolio*/

document.addEventListener("DOMContentLoaded", () => {
  const workElements = document.querySelectorAll(".work");

  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const layerElement = entry.target.querySelector(".layer");
      const imgElement = entry.target.querySelector("img");

      if (entry.isIntersecting) {
        setTimeout(() => {
          layerElement.classList.add("active");
          imgElement.classList.add("active");
        }, 2000); // 2 seconds delay
      } else {
        layerElement.classList.remove("active");
        imgElement.classList.remove("active");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  workElements.forEach((workElement) => {
    observer.observe(workElement);
  });
});
