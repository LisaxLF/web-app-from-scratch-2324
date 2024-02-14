// Selecteer het section-element
const sectionTwo = document.querySelector('section:nth-of-type(2)');
const sectionTwoImg = sectionTwo.querySelector('img');

// Voeg een scrollgebeurtenisluisteraar toe aan het venster
window.addEventListener('scroll', function () {
  // Bereken het percentage van hoe ver je bent gescrold ten opzichte van de volledige scrollhoogte
  const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

  // Bereken het blurpercentage op basis van het scrollpercentage
  const blurPercentage = 10 - (scrollPercentage * 0.1); // 0.1 omdat 100% scrollen het volledige blur bereik (10px) zou moeten hebben

  // Pas de blur-stijl toe op de afbeelding
  sectionTwoImg.style.filter = `blur(${blurPercentage}px)`;
  sectionTwoImg.style.transition = 'filter 0.3s ease'; // Voeg een overgang toe met een duur van 0.3 seconden en een 'ease' timing-functie
});

// observer als het section weer uit beeld gaat
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      sectionTwoImg.style.filter = 'blur(0px)';
    }
  });
});

observer.observe(sectionTwo);