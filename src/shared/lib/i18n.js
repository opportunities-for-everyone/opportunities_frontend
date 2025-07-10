import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Тексти перекладів
const resources = {
  en: {
    translation: {
      //header
      logo: 'Opportunities',
      forEvery: 'for Everyone',
      main: 'Home',
      about: 'About the Fund',
      news: 'News',
      help: 'Help',
      contacts: 'Contacts',
      fastDon: 'Quick Donate',
      changeLang: 'Change Language',

      //main
      world: 'A World of Opportunities for Everyone',
      connectNeeds: 'We connect the country\'s needs with opportunities to help everyone.',
      becameVol: 'Become a Volunteer',

      aboutUs: 'About Us',
      aboutText1: 'No barriers – only opportunities! 🚀',
      aboutText21: '"Opportunities for Everyone"',
      aboutText2: ' – is an organization that helps people with disabilities, youth, and those in need of support to realize their dreams. Work, education, social integration – we are here to help!',
      aboutText3: 'Our mission is to create a society without barriers!',

      fondRes: 'Organizational Results',
      weTried: 'We are actively working to create new opportunities for everyone.',
      resText1: 'career consultations were conducted, thanks to which 617 people found jobs',
      resText2: 'children received psycho-emotional support',

      ourTeam: 'Our Team',
      teamDeskr1: 'Everyone on our team is part of a great mission.',
      teamDeskr2: ' We are diverse, but united by a common desire – to help, support, and develop a society where everyone has equal opportunities.',
      name1: 'Andriy Sukmanovsky',
      pos1: 'President of the Organization',
      name2: 'Ivan Levitsky',
      pos2: 'Head of Projects and Programs',
      name3: 'Sofia Mandziuk',
      pos3: 'Project Manager',
      connectUs: 'Contact Us',

      routesAnd: 'Directions and Values of the Organization',
      routes: 'Directions of Our Activities:',
      routes1: 'Development of an Inclusive Society',
      routes2: 'Innovative Technologies for Social Development',
      routes3: 'Volunteering and Civic Engagement',
      routes4: 'Education and Skills Development',
      routes5: 'Support for Entrepreneurship and Career Development',
      routes6: 'Culture, Ecology, and Sustainable Development',

      values: 'Our Values:',
      value1: 'Humanity',
      value2: 'Activity',
      value3: 'Innovation',
      value4: 'Courage',
      value5: 'Development',
      value6: 'Responsibility',

      cowork: 'Applications and Requests for Cooperation',
      statem: 'Application for Legal Entities',
      queryState: 'Submit a request for cooperation or financial support for joint charitable initiatives.',
      becamePart: 'Become a Partner',

      projects: 'Projects',
      collect1: 'Fundraising for Children\'s Treatment',
      end: 'Deadline',
      collected: 'Collected',
      donate: 'Donate',

      news: 'News',
      seeAllNews: 'See All News',
      seeAll: 'See All',
      hideNews: 'Hide Some News',

      country: 'Create Opportunities With Us!',
      helpBtn: 'Help',

      //footer
      official: 'Officially registered public organization "Opportunities for Everyone"',
      guarantee: 'Guarantees',
      reports: 'Reports',
      foundingDocuments: 'Founding Documents',
      ourAddress: '79000, UKRAINE, LVIV REGION, LVIV DISTRICT, VELIKI PODLISKY VILLAGE, INDEPENDENCE STREET, BLDG. 148',

      //payment page
      helpCountry: 'Saving the Country Together',
      everyGrn: 'Every Hryvnia Can Change a Person\'s Life',
      oneTime: 'One-Time Assistance',
      monthly: 'Monthly Assistance',
      juridic: 'Legal Entities',
      monobank: 'Recharge by QR code',
      crypto: 'Cryptocurrency',
      abroad: 'From Abroad',
      paymError: "Select donation amount and enter your mobile phone number.",
      paymWay: 'Choose the method you want to donate.',
      paymChoose: 'Choose Method',
      paymentDesk: '*Be sure to indicate "Charitable contribution for the implementation of statutory activities" in the payment description.',
      paymWayDon: 'Select Payment Method',
      changePayWay: 'Change Payment Method',

      chooseSum: 'Choose the amount you want to donate.',
      becameHero: 'Become a Superhero for Those in Need',
      yourSum: 'Your Amount',
      agree1: 'I have read and agree to the terms of ',
      agree2: 'the public offer',
      doDepos: 'Make a Deposit',
      changeCur: 'Change Currency',

      forjuridic: 'Requisites for Legal Entities',
      address: 'Legal and Actual Address:',
      code: 'EDRPOY Code:',
      bank: 'Recipient\'s Bank:',
      receiver: 'Recipient:',
      currency: 'Account Currency:',

      foregTitle: 'Foreign Currency Account',
      compName: 'Company Name:',
      ibanCode: 'IBAN Code:',
      nameBank: 'Name of the Bank:',
      swiftCode: 'Bank SWIFT Code:',
      addressComp: 'Company Address:',

      doMono: 'Make a transfer using the QR code',
      openLink: 'Open Link',

      doCrypto: 'Support Us Through Cryptocurrency',

      //form page
      please: 'Please fill out the form below to continue.',
      name: 'First Name',
      namepl: 'John',
      lastName: 'Last Name',
      lastNamepl: 'Shevchenko',
      email: 'Email',
      emailpl: 'johnshevch@gmail.com',
      number: 'Phone Number',
      message: 'Personal Message *optional*',
      send: 'Submit Form',
      errorInput: 'Field is required.',
      errorText: 'Only letters are allowed.',
      errorNumber: 'Only numbers are allowed.',
      errorEmail: 'Enter a valid email address.',
      errorTel: 'Enter a valid number.',
      enterSome: 'Enter some value.',
      sending: 'Sending...',
      successSend: 'Your request has been sent.',

      //thanks
      thanks: 'Thank you! We received your response and will contact you shortly.',
      goMain: 'Go to Main Page',

      //form-partner
      formPartTitle: 'Apply for Partnership',
      nameOrg: 'Name of Organization/Company',
      typePart: 'Partner Type',
      typeFop: 'Individual Entrepreneur', // ФОП (Фізична особа-підприємець)
      typeJurid: 'Legal Entity',
      typePublic: 'Public Organization',
      contactsDir: 'Company Director Contacts',
      formLastname: 'Last Name',
      formFirstname: 'First Name',
      formMiddlename: 'Middle Name',
      formPhone: 'Phone Number',
      formEmail: 'Email Address',
      formGoalCoop: 'Goal of Cooperation',
      formLink: 'Link to Social Networks or Website',
      formAddress: 'Enter Legal Address',
      formCode: 'Identification Code (EDRPOU)',
      formImf: 'Logo',

      //documents
      reports: 'Reports',
      founds: 'Founding Documents',
      linkFile: 'File Link',
    },
  },
  uk: {
    translation: {
      //header
      logo: 'Можливості',
      forEvery: 'для кожного',
      main: 'Головна',
      about: 'Про фонд',
      news: 'Новини',
      help: 'Допомога',
      contacts: 'Контакти',
      fastDon: 'Швидкий донат',
      changeLang: 'Змінити мову',

      //main
      world: 'Світ можливостей для кожного',
      connectNeeds: 'З’єднуємо потреби країни з можливостями допомоги кожному',
      becameVol: 'Стати волонтером',

      aboutUs: 'Про нас',
      aboutText1: 'Жодних бар’єрів – лише можливості! 🚀',
      aboutText21: '“Можливості для кожного”',
      aboutText2: ' – це організація, яка допомагає людям з інвалідністю, молоді та тим, хто потребує підтримки, реалізувати свої мрії. Робота, освіта, соціальна інтеграція – ми тут, щоб допомогти!',
      aboutText3: 'Наша місія - створити суспільство без барʼєрів !',

      fondRes: 'Результати організації',
      weTried: 'Ми активно працюємо, щоб створювати нові можливості для кожного',
      resText1: 'проведених карʼєрних консультацій, завдяки яким 617 людей знайшли роботу',
      resText2: 'дітям надано психоемоційну підтримку',

      ourTeam: 'Наша команда',
      teamDeskr1: 'Кожен у нашій команді – це частина великої місії.',
      teamDeskr2: ' Ми різні, але нас об’єднує спільне прагнення – допомагати, підтримувати та розвивати суспільство, де кожен має рівні можливості',
      name1: 'Андрій Сукмановський',
      pos1: 'Президент організації',
      name2: 'Іван Левицький',
      pos2: 'Керівник проєктів та програм',
      name3: 'Софія Мандзюк',
      pos3: 'Проєктна менеджерка',
      connectUs: 'Зв`язок з нами',

      routesAnd: 'Напрями та цінності організації',
      routes: 'Напрямки нашої діяльності:',
      routes1: 'Розвиток інклюзивного суспільства',
      routes2: 'Інноваційні технології для соціального розвитку',
      routes3: 'Волонтерство та громадська активність',
      routes4: 'Освіта та розвиток навичок',
      routes5: 'Підтримка підприємництва та карʼєрний розвиток',
      routes6: 'Культура , екологія та сталий розвиток',

      values: 'Наші цінності:',
      value1: 'Людяність',
      value2: 'Активність',
      value3: 'Інноваційність',
      value4: 'Сміливість',
      value5: 'Розвиток',
      value6: 'Відповідальність',

      cowork: 'Звернення та запити на співпрацю',
      statem: 'Заява для юридичних осіб',
      queryState: 'Подайте запит на співпрацю або фінансову підтримку для спільних благодійних ініціатив.',
      becamePart: 'Стати партнером',

      projects: 'Проєкти',
      collect1: 'Збір для лікування дітей',
      end: 'Кінцевий термін',
      collected: 'Зібрано',
      donate: 'Донатити',

      news: 'Новини',
      seeAll: 'Дивитися всі',
      seeAllNews: 'Дивитися всі новини',
      hideNews: 'Приховати деякі новини',

      country: 'Створюй можливості разом із нами!',
      helpBtn: 'Допомогти',

      //footer
      official: 'Офіційно зареєстрована громадська організація “Можливості для кожного”',
      guarantee: 'Гарантії',
      reports: 'Звіти',
      foundingDocuments: 'Установчі документи',
      ourAddress: '79000, УКРАЇНА, ОБЛ. ЛЬВІВСЬКА, Р-Н. ЛЬВІВСЬКИЙ, С. ВЕЛИКІ ПІДЛІСКИ, ВУЛ. НЕЗАЛЕЖНОСТІ, Б. 148',
      //payment page
      helpCountry: 'Рятуємо країну разом',
      everyGrn: 'Кожна гривня здатна змінити життя людини',
      oneTime: 'Разова допомога',
      monthly: 'Щомісячна допомога',
      juridic: 'Юридичні особи',
      monobank: 'Поповнення по QR коду',
      crypto: 'Криптовалюта',
      abroad: 'З-за кордону',
      paymError: "Виберіть суму донату й введіть номер мобільно телефону",
      paymWay: 'Оберіть спосіб яким ви хочете задонатити',
      paymChoose: 'Обрати спосіб',
      paymentDesk: '*Обов\'язково у призначені платежу вказувати "Благодійний внесок на виконання статутної діяльності"',
      paymWayDon: 'Оберіть спосіб оплати',
      changePayWay: 'Змінити спосіб оплати',

      chooseSum: 'Оберіть суму, яку ви хочете задонатити',
      becameHero: 'Стань супергероєм для тих, кому це необхідно',
      yourSum: 'Ваша сумма',
      agree1: 'Я ознайомився/-лась і погоджуюсь з умовами ',
      agree2: 'публічної оферти',
      doDepos: 'Зробити внесок',
      changeCur: 'Змінити валюту',

      forjuridic: 'Реквізити для юридичних осіб',
      address: 'Адреса юридична та фактична:',
      code: 'Код ЄДРПОУ:',
      bank: 'Банк отримувача:',
      receiver: 'Отримувач:',
      currency: 'Валюта рахунку:',

      foregTitle: 'Валютний рахунок',
      compName: 'Назва компанії:',
      ibanCode: 'IBAN Код:',
      nameBank: 'Назва банку:',
      swiftCode: 'SWIFT Код банку:',
      addressComp: 'Адреса компанії:',

      doMono: 'Зроби переказ по QR коду',
      openLink: 'Відкрити посилання',

      doCrypto: 'Підтримай нас через криптовалюту',

      //form page
      please: 'Будь ласка, заповніть форму нижче щоб продовжити',
      name: 'Імʼя',
      namepl: 'Степан',
      lastName: 'Призвісько',
      lastNamepl: 'Шевченко',
      email: 'Електронна пошта',
      emailpl: 'stepanshevch@gmail.com',
      number: 'Номер телефону',
      message: 'Особисте повідомлення *не обовʼязково*',
      send: 'Відправити форму',
      errorInput: 'Поле є обов`язковим',
      errorText: 'Тільки літери дозволені',
      errorNumber: 'Тільки числа дозволені',
      errorEmail: 'Введіть правильну пошту',
      errorTel: 'Введіть правильний номер',
      enterSome: 'Введіть якесь значення',
      sending: 'Відправлення...',
      successSend: 'Ваша заявка була відправлена',

      //thanks
      thanks: 'Дякуємо! Ми отримали вашу відповідь, найближчим часом ми звʼяжемось з вами',
      goMain: 'На головну',


      //form-partner
      formPartTitle: 'Подати заявку на партнерство',
      nameOrg: 'Назва організації/компанії',
      typePart: 'Тип партнера',
      typeFop: 'ФОП',
      typeJurid: 'Юридична особа',
      typePublic: 'Громадська організація',
      contactsDir: 'Контакти директора компанії',
      formLastname: 'Прізвище',
      formFirstname: 'Ім`я',
      formMiddlename: 'По-батькові',
      formPhone: 'Номер телефону',
      formEmail: 'Електронна адреса',
      formGoalCoop: 'Мета співпраці',
      formLink: 'Посилання на соцмережі або сайт',
      formAddress: 'Введіть юридичну адресу',
      formCode: 'Ідентифікаційний код (ЄДРПОУ)',
      formImf: 'Логотип',

      //documents
      reports: 'Звіти',
      founds: 'Установчі документи',
      linkFile: 'Посилання на файл',
    },
  },
};

i18n
  .use(LanguageDetector) // Визначає мову (localStorage, cookie, браузер)
  .use(initReactI18next)  // Інтеграція з React
  .init({
    resources,
    fallbackLng: 'uk', // Мова за замовчуванням
    interpolation: {
      escapeValue: false, // Для захисту від XSS (не обов'язково в React)
    },
    detection: {
      order: ['localStorage', 'navigator'], // Порядок визначення мови
      caches: ['localStorage'], // Зберігаємо мову в localStorage
    },
  });

export default i18n;
