document.addEventListener('DOMContentLoaded', () => {
    const languageRandomizer = new LanguageRandomizer('Language Randomizer');
    document.getElementById('language-randomizer').appendChild(languageRandomizer.render());
  });
  