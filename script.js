const languageButton = document.querySelector('#language');
let language = 'es';
try { language = localStorage.getItem('nonsquare-language') === 'en' ? 'en' : 'es'; } catch {}
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll('[data-es]').forEach(element => {
    element.textContent = element.dataset[next].replaceAll('\\n', '\n');
  });
  document.querySelectorAll('[data-label-es]').forEach(element => element.setAttribute('aria-label', element.dataset[next === 'es' ? 'labelEs' : 'labelEn']));
  document.querySelector('nav').setAttribute('aria-label', next === 'es' ? 'Principal' : 'Main');
  languageButton.innerHTML = `${next === 'es' ? 'EN' : 'ES'} <span aria-hidden="true">↗</span>`;
  languageButton.setAttribute('aria-label', next === 'es' ? 'Switch to English' : 'Cambiar a español');
  const description = document.querySelector('meta[name="description"]');
  description.content = description.dataset[next === 'es' ? 'descriptionEs' : 'descriptionEn'] || (next === 'es' ? 'Nonsquare Pixel Studio. Estudio independiente de videojuegos. Descubre Trivia Party y nuestros próximos proyectos.' : 'Nonsquare Pixel Studio. Independent game studio. Discover Trivia Party and our upcoming concepts.');
  try { localStorage.setItem('nonsquare-language', next); } catch {}
}
languageButton.addEventListener('click', () => setLanguage(language === 'es' ? 'en' : 'es'));
document.querySelector('#year').textContent = new Date().getFullYear();
setLanguage(language);
