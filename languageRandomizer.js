class LanguageRandomizer {
    constructor(msg) {
      this.msg = msg;
      this.languages = [
        { langCode: 'af', description: 'Afrikaans' },
        { langCode: 'sq', description: 'Albanian' },
        { langCode: 'am', description: 'Amharic' },
        { langCode: 'ar', description: 'Arabic' },
        { langCode: 'hy', description: 'Armenian' },
        { langCode: 'az', description: 'Azerbaijani' },
        { langCode: 'eu', description: 'Basque' },
        { langCode: 'be', description: 'Belarusian' },
        { langCode: 'bn', description: 'Bengali' },
        { langCode: 'bs', description: 'Bosnian' },
        { langCode: 'bg', description: 'Bulgarian' },
        { langCode: 'ca', description: 'Catalan' },
        { langCode: 'ceb', description: 'Cebuano' },
        { langCode: 'ny', description: 'Chichewa' },
        { langCode: 'zh', description: 'Chinese' },
        { langCode: 'co', description: 'Corsican' },
        { langCode: 'hr', description: 'Croatian' },
        { langCode: 'cs', description: 'Czech' },
        { langCode: 'da', description: 'Danish' },
        { langCode: 'nl', description: 'Dutch' },
        { langCode: 'en', description: 'English' },
        { langCode: 'eo', description: 'Esperanto' },
        { langCode: 'et', description: 'Estonian' },
        { langCode: 'fi', description: 'Finnish' },
        { langCode: 'fr', description: 'French' },
        { langCode: 'fy', description: 'Frisian' },
        { langCode: 'gl', description: 'Galician' },
        { langCode: 'ka', description: 'Georgian' },
        { langCode: 'de', description: 'German' },
        { langCode: 'el', description: 'Greek' },
        { langCode: 'gu', description: 'Gujarati' },
        { langCode: 'ht', description: 'Haitian Creole' },
        { langCode: 'ha', description: 'Hausa' },
        { langCode: 'haw', description: 'Hawaiian' },
        { langCode: 'he', description: 'Hebrew' },
        { langCode: 'hi', description: 'Hindi' },
        { langCode: 'hmn', description: 'Hmong' },
        { langCode: 'hu', description: 'Hungarian' },
        { langCode: 'is', description: 'Icelandic' },
        { langCode: 'ig', description: 'Igbo' },
        { langCode: 'id', description: 'Indonesian' },
        { langCode: 'ga', description: 'Irish' },
        { langCode: 'it', description: 'Italian' },
        { langCode: 'ja', description: 'Japanese' },
        { langCode: 'jw', description: 'Javanese' },
        { langCode: 'kn', description: 'Kannada' },
        { langCode: 'kk', description: 'Kazakh' },
        { langCode: 'km', description: 'Khmer' },
        { langCode: 'rw', description: 'Kinyarwanda' },
        { langCode: 'ko', description: 'Korean' },
        { langCode: 'ku', description: 'Kurdish (Kurmanji)' },
        { langCode: 'ky', description: 'Kyrgyz' },
        { langCode: 'lo', description: 'Lao' },
        { langCode: 'la', description: 'Latin' },
        { langCode: 'lv', description: 'Latvian' },
        { langCode: 'lt', description: 'Lithuanian' },
        { langCode: 'lb', description: 'Luxembourgish' },
        { langCode: 'mk', description: 'Macedonian' },
        { langCode: 'mg', description: 'Malagasy' },
        { langCode: 'ms', description: 'Malay' },
        { langCode: 'ml', description: 'Malayalam' },
        { langCode: 'mt', description: 'Maltese' },
        { langCode: 'mi', description: 'Maori' },
        { langCode: 'mr', description: 'Marathi' },
        { langCode: 'mn', description: 'Mongolian' },
        { langCode: 'my', description: 'Myanmar (Burmese)' },
        { langCode: 'ne', description: 'Nepali' },
        { langCode: 'no', description: 'Norwegian' },
        { langCode: 'or', description: 'Odia (Oriya)' },
        { langCode: 'ps', description: 'Pashto' },
        { langCode: 'fa', description: 'Persian' },
        { langCode: 'pl', description: 'Polish' },
        { langCode: 'pt', description: 'Portuguese' },
        { langCode: 'pa', description: 'Punjabi' },
        { langCode: 'ro', description: 'Romanian' },
        { langCode: 'ru', description: 'Russian' },
        { langCode: 'sm', description: 'Samoan' },
        { langCode: 'gd', description: 'Scots Gaelic' },
        { langCode: 'sr', description: 'Serbian' },
        { langCode: 'st', description: 'Sesotho' },
        { langCode: 'sn', description: 'Shona' },
        { langCode: 'sd', description: 'Sindhi' },
        { langCode: 'si', description: 'Sinhala' },
        { langCode: 'sk', description: 'Slovak' },
        { langCode: 'sl', description: 'Slovenian' },
        { langCode: 'so', description: 'Somali' },
        { langCode: 'es', description: 'Spanish' },
        { langCode: 'su', description: 'Sundanese' },
        { langCode: 'sw', description: 'Swahili' },
        { langCode: 'sv', description: 'Swedish' },
        { langCode: 'tg', description: 'Tajik' },
        { langCode: 'ta', description: 'Tamil' },
        { langCode: 'tt', description: 'Tatar' },
        { langCode: 'te', description: 'Telugu' },
        { langCode: 'th', description: 'Thai' },
        { langCode: 'tr', description: 'Turkish' },
        { langCode: 'tk', description: 'Turkmen' },
        { langCode: 'uk', description: 'Ukrainian' },
        { langCode: 'ur', description: 'Urdu' },
        { langCode: 'ug', description: 'Uyghur' },
        { langCode: 'uz', description: 'Uzbek' },
        { langCode: 'vi', description: 'Vietnamese' },
        { langCode: 'cy', description: 'Welsh' },
        { langCode: 'xh', description: 'Xhosa' },
        { langCode: 'yi', description: 'Yiddish' },
        { langCode: 'yo', description: 'Yoruba' },
        { langCode: 'zu', description: 'Zulu' }
      ];
      this.selectedLanguages = [];
      this.randomLanguage = null;
    }
  
    handleSelectChange(event) {
      this.selectedLanguages = Array.from(event.target.selectedOptions, option => option.value);
    }
  
    randomizeLanguage() {
      const availableLanguages = this.languages.filter(
        lang => !this.selectedLanguages.includes(lang.langCode)
      );
      const randomIndex = Math.floor(Math.random() * availableLanguages.length);
      this.randomLanguage = availableLanguages[randomIndex];
      this.displayRandomLanguage();
    }
  
    displayRandomLanguage() {
      const resultElement = document.getElementById('result');
      if (this.randomLanguage) {
        resultElement.textContent = `Your next language to learn is: ${this.randomLanguage.description}`;
        resultElement.classList.add('result');
      } else {
        resultElement.textContent = '';
        resultElement.classList.remove('result');
      }
    }
  
    render() {
      const container = document.createElement('div');
  
      const header = document.createElement('header');
      const h1 = document.createElement('h1');
      h1.textContent = this.msg;
      const h2 = document.createElement('h2');
      h2.textContent = 'Which language should I study next?';
      header.appendChild(h1);
      header.appendChild(h2);
  
      const main = document.createElement('main');
  
      const label = document.createElement('label');
      label.setAttribute('for', 'nativeLanguages');
      label.textContent = 'Select your native or known languages:';
      
      const select = document.createElement('select');
      select.id = 'nativeLanguages';
      select.multiple = true;
      select.addEventListener('change', this.handleSelectChange.bind(this));
  
      this.languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang.langCode;
        option.textContent = `${lang.description} (${lang.langCode})`;
        select.appendChild(option);
      });
  
      const button = document.createElement('button');
      button.textContent = 'Randomize Language';
      button.addEventListener('click', this.randomizeLanguage.bind(this));
  
      const result = document.createElement('p');
      result.id = 'result';
  
      main.appendChild(label);
      main.appendChild(select);
      main.appendChild(button);
      main.appendChild(result);
  
      container.appendChild(header);
      container.appendChild(main);
  
      return container;
    }
  }
  