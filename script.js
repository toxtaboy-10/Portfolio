/* =========================================================
   Sultanov To‘xtaboy — Portfolio
   Sections:
   1 Config · 2 Translations · 3 Data (projects, skills, certificates)
   4 Helpers · 5 i18n · 6 Rendering · 7 Overlays · 8 Navigation
   9 Effects · 10 Sound · 11 CV · 12 Contact form · 13 Init
   ========================================================= */
(() => {
  'use strict';

  /* ===== 1. CONFIG — edit these values ===== */
  const CONFIG = {
    email: '',                 // e.g. 'you@example.com' — shown in Contact when filled
    formEndpoint: '',          // e.g. 'https://formspree.io/f/xxxxxxxx' (public URL, never a secret key)
    cvPath: 'assets/cv/cv.pdf',
    defaultLang: 'en',
    minSubmitSeconds: 3,       // anti-spam: forms sent faster than this are rejected
    cooldownSeconds: 30,       // minimum gap between two submissions
    social: {
      telegram: 'https://t.me/SultanovToxtaboy',
      instagram: 'https://www.instagram.com/toxtaboy_10/',
      github: 'https://github.com/toxtaboy-10'
    }
  };

  /* ===== 2. TRANSLATIONS ===== */
  const I18N = {
    en: {
      'meta.title': 'Sultanov To‘xtaboy — Junior Frontend Developer',
      'meta.description': 'Portfolio of Sultanov To‘xtaboy, a Junior Frontend Developer building modern, responsive and animated web interfaces.',
      'nav.home': 'Home', 'nav.about': 'About', 'nav.projects': 'Projects', 'nav.skills': 'Skills',
      'nav.experience': 'Experience', 'nav.certificates': 'Certificates', 'nav.contact': 'Contact',
      'nav.menu': 'Open menu', 'nav.close': 'Close menu', 'nav.lang': 'Language', 'nav.main': 'Main navigation',
      'hero.greeting': 'Hello, I’m', 'hero.role': 'Junior Frontend Developer',
      'hero.desc': 'I’m learning frontend development and love building modern, responsive web projects with clean code and thoughtful details.',
      'hero.viewWork': 'View My Work', 'hero.downloadCv': 'Download CV', 'hero.scroll': 'Scroll',
      'alt.portrait': 'Portrait of Sultanov To‘xtaboy',
      'about.eyebrow': 'About me', 'about.title': 'Building the web, one detail at a time',
      'about.lead': 'A developer who is learning frontend development and is passionate about creating modern web projects.',
      'about.passionTitle': 'Passion for coding',
      'about.passion': 'I enjoy turning ideas into interfaces that feel fast, clear and alive. Every new project is a chance to learn something new.',
      'about.philosophyTitle': 'Coding philosophy',
      'about.philosophy': 'Write clean, readable code. Design with purpose. Keep improving a little every day.',
      'about.goalsTitle': 'Future goals',
      'about.goals': 'To grow into a confident frontend developer, build real-world products and keep learning modern web technologies.',
      'about.interestsTitle': 'Interests',
      'about.i1': 'Frontend development', 'about.i2': 'UI/UX design', 'about.i3': 'Web animation', 'about.i4': 'Learning new technologies',
      'projects.eyebrow': 'Selected work', 'projects.title': 'Projects',
      'projects.subtitle': 'A collection of projects I’m building and learning from. Placeholders will be replaced with real work.',
      'filter.all': 'All Projects', 'filter.websites': 'Websites', 'filter.webapps': 'Web Applications', 'filter.uiux': 'UI/UX', 'filter.experiments': 'Experiments',
      'projects.view': 'View Project', 'projects.github': 'GitHub', 'projects.live': 'Live Demo', 'projects.repo': 'GitHub Repository',
      'projects.technologies': 'Technologies', 'projects.features': 'Key features', 'projects.close': 'Close',
      'projects.empty': 'No projects in this category yet.',
      'projects.placeholderDesc': 'Short description of the project. Replace this text with your own.',
      'projects.placeholderDetails': 'This is a placeholder project. Replace it in js/script.js with the real story: what you built, why, and what you learned.',
      'projects.f1': 'Responsive layout', 'projects.f2': 'Clean, reusable code', 'projects.f3': 'Smooth interactions',
      'skills.eyebrow': 'Toolbox', 'skills.title': 'Skills & Technologies',
      'skills.subtitle': 'Technologies I work with and am learning. Edit this list to match your real skills.',
      'skill.html': 'Semantic page structure and accessibility.',
      'skill.css': 'Layouts, responsive design and animations.',
      'skill.js': 'Interactivity and dynamic page behavior.',
      'skill.react': 'Component-based library for user interfaces.',
      'skill.next': 'React framework for production web apps.',
      'skill.tailwind': 'Utility-first CSS framework.',
      'skill.bootstrap': 'Popular CSS framework for responsive layouts.',
      'skill.git': 'Version control for tracking code changes.',
      'skill.github': 'Code hosting and collaboration platform.',
      'skill.vscode': 'Code editor used for everyday development.',
      'skill.figma': 'Interface design and prototyping tool.',
      'skill.uiux': 'Designing clear, usable user experiences.',
      'ui.placeholder': 'Placeholder',
      'exp.eyebrow': 'Journey', 'exp.title': 'Education & Experience',
      'exp.subtitle': 'Sample entries — replace them with your real details.',
      'exp.edu.period': '20XX — Present', 'exp.edu.title': 'Field of study', 'exp.edu.org': 'Your educational institution',
      'exp.edu.text': 'Describe what you study and the subjects that matter most to you.',
      'exp.practice.period': '20XX — Present', 'exp.practice.title': 'Practice projects', 'exp.practice.org': 'Self-learning',
      'exp.practice.text': 'Describe the practice projects you have built while learning.',
      'exp.work.period': '20XX', 'exp.work.title': 'Experience', 'exp.work.org': 'Company or team',
      'exp.work.text': 'Add real work or internship experience here when you have it.',
      'cert.eyebrow': 'Recognition', 'cert.title': 'Certificates & Achievements',
      'cert.subtitle': 'Add your real certificates in js/script.js.',
      'cert.view': 'View Certificate', 'cert.placeholderTitle': 'Certificate title', 'cert.placeholderOrg': 'Issuing organization', 'cert.close': 'Close',
      'cv.eyebrow': 'Resume', 'cv.title': 'My CV', 'cv.subtitle': 'Preview my resume or download it as a PDF.',
      'cv.preview': 'Preview CV', 'cv.hide': 'Hide preview', 'cv.download': 'Download CV', 'cv.open': 'Open in new tab',
      'cv.missing': 'CV file not found yet. Add it as assets/cv/cv.pdf.',
      'cv.mobileNote': 'If the preview doesn’t show on your device, use “Open in new tab”.',
      'cv.cardTitle': 'Curriculum Vitae', 'cv.cardText': 'PDF · Sultanov To‘xtaboy',
      'contact.eyebrow': 'Get in touch', 'contact.title': 'Let’s work together',
      'contact.intro': 'Have a question, an idea or an opportunity? Send a message or reach me on social media.',
      'contact.name': 'Name', 'contact.email': 'Email', 'contact.subject': 'Subject', 'contact.message': 'Message',
      'contact.send': 'Send message', 'contact.sending': 'Sending…',
      'contact.success': 'Thank you! Your message has been sent.',
      'contact.error': 'Something went wrong. Please try again or contact me on Telegram.',
      'contact.notConfigured': 'The contact form is not connected to an email service yet. Please reach me on Telegram or Instagram.',
      'contact.rate': 'Please wait a bit before sending another message.',
      'contact.spam': 'Please take a moment to fill in the form, then try again.',
      'contact.errRequired': 'This field is required.', 'contact.errEmail': 'Enter a valid email address.', 'contact.errShort': 'Please write a little more.',
      'contact.invalidForm': 'Please fix the highlighted fields.',
      'contact.telegram': 'Telegram', 'contact.instagram': 'Instagram', 'contact.github': 'GitHub', 'contact.emailMe': 'Email',
      'footer.tagline': 'Crafting modern web experiences.', 'footer.nav': 'Navigation', 'footer.social': 'Social', 'footer.rights': 'All rights reserved.',
      'ui.backToTop': 'Back to top', 'ui.soundOn': 'Sound effects on', 'ui.soundOff': 'Sound effects off',
      'ui.soundToggle': 'Toggle sound effects', 'ui.skip': 'Skip to content'
    },

    uz: {
      'meta.title': 'Sultanov To‘xtaboy — Junior Frontend Dasturchi',
      'meta.description': 'Sultanov To‘xtaboy portfoliosi — zamonaviy, moslashuvchan va animatsiyali web-interfeyslar yaratadigan Junior Frontend dasturchi.',
      'nav.home': 'Bosh sahifa', 'nav.about': 'Men haqimda', 'nav.projects': 'Loyihalar', 'nav.skills': 'Ko‘nikmalar',
      'nav.experience': 'Tajriba', 'nav.certificates': 'Sertifikatlar', 'nav.contact': 'Aloqa',
      'nav.menu': 'Menyuni ochish', 'nav.close': 'Menyuni yopish', 'nav.lang': 'Til', 'nav.main': 'Asosiy navigatsiya',
      'hero.greeting': 'Salom, men', 'hero.role': 'Junior Frontend Dasturchi',
      'hero.desc': 'Frontend dasturlashni o‘rganmoqdaman va toza kod hamda e’tibor bilan yaratilgan zamonaviy, moslashuvchan web-loyihalarni yaratishni yaxshi ko‘raman.',
      'hero.viewWork': 'Loyihalarimni ko‘rish', 'hero.downloadCv': 'CV yuklab olish', 'hero.scroll': 'Pastga',
      'alt.portrait': 'Sultanov To‘xtaboy portreti',
      'about.eyebrow': 'Men haqimda', 'about.title': 'Web’ni har bir detal bilan quraman',
      'about.lead': 'Frontend dasturlashni o‘rganayotgan va zamonaviy web-loyihalar yaratishga qiziqadigan dasturchi.',
      'about.passionTitle': 'Dasturlashga qiziqish',
      'about.passion': 'G‘oyalarni tez, tushunarli va jonli interfeyslarga aylantirishni yoqtiraman. Har bir yangi loyiha — yangi narsa o‘rganish imkoniyati.',
      'about.philosophyTitle': 'Kodlash falsafasi',
      'about.philosophy': 'Toza va o‘qilishi oson kod yozish. Maqsad bilan dizayn qilish. Har kuni ozgina bo‘lsa-da yaxshilanib borish.',
      'about.goalsTitle': 'Kelajakdagi maqsadlar',
      'about.goals': 'Ishonchli frontend dasturchiga aylanish, real mahsulotlar yaratish va zamonaviy web-texnologiyalarni o‘rganishda davom etish.',
      'about.interestsTitle': 'Qiziqishlar',
      'about.i1': 'Frontend dasturlash', 'about.i2': 'UI/UX dizayn', 'about.i3': 'Web animatsiyalar', 'about.i4': 'Yangi texnologiyalarni o‘rganish',
      'projects.eyebrow': 'Tanlangan ishlar', 'projects.title': 'Loyihalar',
      'projects.subtitle': 'Men yaratayotgan va ulardan o‘rganayotgan loyihalar to‘plami. Namunaviy ma’lumotlar haqiqiy ishlar bilan almashtiriladi.',
      'filter.all': 'Barcha loyihalar', 'filter.websites': 'Veb-saytlar', 'filter.webapps': 'Veb-ilovalar', 'filter.uiux': 'UI/UX', 'filter.experiments': 'Tajribalar',
      'projects.view': 'Loyihani ko‘rish', 'projects.github': 'GitHub', 'projects.live': 'Jonli demo', 'projects.repo': 'GitHub repozitoriysi',
      'projects.technologies': 'Texnologiyalar', 'projects.features': 'Asosiy imkoniyatlar', 'projects.close': 'Yopish',
      'projects.empty': 'Bu kategoriyada hozircha loyiha yo‘q.',
      'projects.placeholderDesc': 'Loyihaning qisqa tavsifi. Bu matnni o‘zingiznikiga almashtiring.',
      'projects.placeholderDetails': 'Bu namunaviy loyiha. js/script.js faylida uni haqiqiy ma’lumot bilan almashtiring: nima yaratdingiz, nima uchun va nimani o‘rgandingiz.',
      'projects.f1': 'Moslashuvchan maket', 'projects.f2': 'Toza va qayta ishlatiladigan kod', 'projects.f3': 'Silliq interaktivlik',
      'skills.eyebrow': 'Asboblar', 'skills.title': 'Ko‘nikmalar va texnologiyalar',
      'skills.subtitle': 'Ishlatadigan va o‘rganayotgan texnologiyalarim. Ro‘yxatni haqiqiy ko‘nikmalaringizga moslab tahrirlang.',
      'skill.html': 'Semantik sahifa tuzilmasi va qulaylik.',
      'skill.css': 'Maket, moslashuvchan dizayn va animatsiyalar.',
      'skill.js': 'Interaktivlik va dinamik sahifa mantiqi.',
      'skill.react': 'Interfeyslar uchun komponentlarga asoslangan kutubxona.',
      'skill.next': 'Production veb-ilovalar uchun React freymvorki.',
      'skill.tailwind': 'Utility-first CSS freymvorki.',
      'skill.bootstrap': 'Moslashuvchan maketlar uchun mashhur CSS freymvorki.',
      'skill.git': 'Kod o‘zgarishlarini kuzatish uchun versiyalarni boshqarish.',
      'skill.github': 'Kodni saqlash va hamkorlik platformasi.',
      'skill.vscode': 'Kundalik dasturlash uchun kod muharriri.',
      'skill.figma': 'Interfeys dizayni va prototiplash vositasi.',
      'skill.uiux': 'Aniq va qulay foydalanuvchi tajribasini loyihalash.',
      'ui.placeholder': 'Namuna',
      'exp.eyebrow': 'Yo‘l', 'exp.title': 'Ta’lim va tajriba',
      'exp.subtitle': 'Namunaviy yozuvlar — ularni haqiqiy ma’lumotlar bilan almashtiring.',
      'exp.edu.period': '20XX — hozir', 'exp.edu.title': 'O‘qish yo‘nalishi', 'exp.edu.org': 'Ta’lim muassasangiz nomi',
      'exp.edu.text': 'Nimani o‘qishingiz va siz uchun eng muhim fanlarni yozing.',
      'exp.practice.period': '20XX — hozir', 'exp.practice.title': 'Amaliy loyihalar', 'exp.practice.org': 'Mustaqil o‘rganish',
      'exp.practice.text': 'O‘rganish jarayonida yaratgan amaliy loyihalaringizni tasvirlang.',
      'exp.work.period': '20XX', 'exp.work.title': 'Tajriba', 'exp.work.org': 'Kompaniya yoki jamoa',
      'exp.work.text': 'Haqiqiy ish yoki amaliyot tajribangiz bo‘lsa, shu yerga qo‘shing.',
      'cert.eyebrow': 'E’tirof', 'cert.title': 'Sertifikatlar va yutuqlar',
      'cert.subtitle': 'Haqiqiy sertifikatlaringizni js/script.js faylida qo‘shing.',
      'cert.view': 'Sertifikatni ko‘rish', 'cert.placeholderTitle': 'Sertifikat nomi', 'cert.placeholderOrg': 'Tashkilot nomi', 'cert.close': 'Yopish',
      'cv.eyebrow': 'Rezyume', 'cv.title': 'Mening CV’im', 'cv.subtitle': 'Rezyumeni ko‘ring yoki PDF sifatida yuklab oling.',
      'cv.preview': 'CV’ni ko‘rish', 'cv.hide': 'Ko‘rishni yopish', 'cv.download': 'CV yuklab olish', 'cv.open': 'Yangi tabda ochish',
      'cv.missing': 'CV fayli hali topilmadi. Uni assets/cv/cv.pdf sifatida joylang.',
      'cv.mobileNote': 'Agar ko‘rinish qurilmangizda chiqmasa, “Yangi tabda ochish” tugmasidan foydalaning.',
      'cv.cardTitle': 'Curriculum Vitae', 'cv.cardText': 'PDF · Sultanov To‘xtaboy',
      'contact.eyebrow': 'Bog‘lanish', 'contact.title': 'Birga ishlaymiz',
      'contact.intro': 'Savol, g‘oya yoki taklifingiz bormi? Xabar yuboring yoki ijtimoiy tarmoqlarda yozing.',
      'contact.name': 'Ism', 'contact.email': 'Email', 'contact.subject': 'Mavzu', 'contact.message': 'Xabar',
      'contact.send': 'Xabar yuborish', 'contact.sending': 'Yuborilmoqda…',
      'contact.success': 'Rahmat! Xabaringiz yuborildi.',
      'contact.error': 'Xatolik yuz berdi. Qayta urinib ko‘ring yoki Telegram orqali yozing.',
      'contact.notConfigured': 'Aloqa formasi hali email xizmatiga ulanmagan. Iltimos, Telegram yoki Instagram orqali yozing.',
      'contact.rate': 'Yangi xabar yuborishdan oldin biroz kuting.',
      'contact.spam': 'Formani to‘ldirish uchun biroz vaqt ajrating va qayta urinib ko‘ring.',
      'contact.errRequired': 'Bu maydon to‘ldirilishi shart.', 'contact.errEmail': 'To‘g‘ri email manzil kiriting.', 'contact.errShort': 'Iltimos, biroz batafsilroq yozing.',
      'contact.invalidForm': 'Iltimos, belgilangan maydonlarni to‘g‘rilang.',
      'contact.telegram': 'Telegram', 'contact.instagram': 'Instagram', 'contact.github': 'GitHub', 'contact.emailMe': 'Email',
      'footer.tagline': 'Zamonaviy web tajribalarni yarataman.', 'footer.nav': 'Navigatsiya', 'footer.social': 'Ijtimoiy tarmoqlar', 'footer.rights': 'Barcha huquqlar himoyalangan.',
      'ui.backToTop': 'Yuqoriga qaytish', 'ui.soundOn': 'Ovoz effektlari yoqilgan', 'ui.soundOff': 'Ovoz effektlari o‘chirilgan',
      'ui.soundToggle': 'Ovoz effektlarini almashtirish', 'ui.skip': 'Asosiy kontentga o‘tish'
    },

    ru: {
      'meta.title': 'Sultanov To‘xtaboy — Junior Frontend-разработчик',
      'meta.description': 'Портфолио Султанова Тухтабоя — Junior Frontend-разработчика, создающего современные адаптивные веб-интерфейсы.',
      'nav.home': 'Главная', 'nav.about': 'Обо мне', 'nav.projects': 'Проекты', 'nav.skills': 'Навыки',
      'nav.experience': 'Опыт', 'nav.certificates': 'Сертификаты', 'nav.contact': 'Контакты',
      'nav.menu': 'Открыть меню', 'nav.close': 'Закрыть меню', 'nav.lang': 'Язык', 'nav.main': 'Главная навигация',
      'hero.greeting': 'Привет, я', 'hero.role': 'Junior Frontend-разработчик',
      'hero.desc': 'Я изучаю фронтенд-разработку и люблю создавать современные адаптивные веб-проекты с чистым кодом и вниманием к деталям.',
      'hero.viewWork': 'Мои работы', 'hero.downloadCv': 'Скачать резюме', 'hero.scroll': 'Вниз',
      'alt.portrait': 'Портрет Султанова Тухтабоя',
      'about.eyebrow': 'Обо мне', 'about.title': 'Создаю веб, внимательно к каждой детали',
      'about.lead': 'Разработчик, который изучает фронтенд и увлечён созданием современных веб-проектов.',
      'about.passionTitle': 'Страсть к программированию',
      'about.passion': 'Мне нравится превращать идеи в быстрые, понятные и живые интерфейсы. Каждый новый проект — возможность узнать что-то новое.',
      'about.philosophyTitle': 'Философия кода',
      'about.philosophy': 'Писать чистый и читаемый код. Проектировать с целью. Становиться чуточку лучше каждый день.',
      'about.goalsTitle': 'Цели на будущее',
      'about.goals': 'Стать уверенным фронтенд-разработчиком, создавать реальные продукты и продолжать изучать современные веб-технологии.',
      'about.interestsTitle': 'Интересы',
      'about.i1': 'Фронтенд-разработка', 'about.i2': 'UI/UX дизайн', 'about.i3': 'Веб-анимация', 'about.i4': 'Изучение новых технологий',
      'projects.eyebrow': 'Избранные работы', 'projects.title': 'Проекты',
      'projects.subtitle': 'Коллекция проектов, которые я создаю и на которых учусь. Примеры будут заменены реальными работами.',
      'filter.all': 'Все проекты', 'filter.websites': 'Сайты', 'filter.webapps': 'Веб-приложения', 'filter.uiux': 'UI/UX', 'filter.experiments': 'Эксперименты',
      'projects.view': 'Смотреть проект', 'projects.github': 'GitHub', 'projects.live': 'Живое демо', 'projects.repo': 'Репозиторий GitHub',
      'projects.technologies': 'Технологии', 'projects.features': 'Ключевые возможности', 'projects.close': 'Закрыть',
      'projects.empty': 'В этой категории пока нет проектов.',
      'projects.placeholderDesc': 'Краткое описание проекта. Замените этот текст своим.',
      'projects.placeholderDetails': 'Это пример проекта. Замените его в js/script.js реальной историей: что вы создали, зачем и чему научились.',
      'projects.f1': 'Адаптивная вёрстка', 'projects.f2': 'Чистый переиспользуемый код', 'projects.f3': 'Плавные взаимодействия',
      'skills.eyebrow': 'Инструменты', 'skills.title': 'Навыки и технологии',
      'skills.subtitle': 'Технологии, с которыми я работаю и которые изучаю. Измените список в соответствии с вашими реальными навыками.',
      'skill.html': 'Семантическая структура страниц и доступность.',
      'skill.css': 'Вёрстка, адаптивный дизайн и анимации.',
      'skill.js': 'Интерактивность и динамическое поведение страниц.',
      'skill.react': 'Библиотека для интерфейсов на основе компонентов.',
      'skill.next': 'Фреймворк на React для веб-приложений.',
      'skill.tailwind': 'CSS-фреймворк с утилитарными классами.',
      'skill.bootstrap': 'Популярный CSS-фреймворк для адаптивной вёрстки.',
      'skill.git': 'Контроль версий для отслеживания изменений кода.',
      'skill.github': 'Платформа для хостинга кода и совместной работы.',
      'skill.vscode': 'Редактор кода для повседневной разработки.',
      'skill.figma': 'Инструмент для дизайна интерфейсов и прототипов.',
      'skill.uiux': 'Проектирование понятного и удобного пользовательского опыта.',
      'ui.placeholder': 'Пример',
      'exp.eyebrow': 'Путь', 'exp.title': 'Образование и опыт',
      'exp.subtitle': 'Примеры записей — замените их своими данными.',
      'exp.edu.period': '20XX — настоящее время', 'exp.edu.title': 'Направление обучения', 'exp.edu.org': 'Название учебного заведения',
      'exp.edu.text': 'Опишите, что вы изучаете и какие предметы для вас важнее всего.',
      'exp.practice.period': '20XX — настоящее время', 'exp.practice.title': 'Практические проекты', 'exp.practice.org': 'Самообучение',
      'exp.practice.text': 'Опишите практические проекты, созданные в процессе обучения.',
      'exp.work.period': '20XX', 'exp.work.title': 'Опыт', 'exp.work.org': 'Компания или команда',
      'exp.work.text': 'Добавьте сюда реальный опыт работы или стажировки.',
      'cert.eyebrow': 'Признание', 'cert.title': 'Сертификаты и достижения',
      'cert.subtitle': 'Добавьте свои настоящие сертификаты в js/script.js.',
      'cert.view': 'Смотреть сертификат', 'cert.placeholderTitle': 'Название сертификата', 'cert.placeholderOrg': 'Организация', 'cert.close': 'Закрыть',
      'cv.eyebrow': 'Резюме', 'cv.title': 'Моё резюме', 'cv.subtitle': 'Просмотрите резюме или скачайте его в формате PDF.',
      'cv.preview': 'Просмотреть резюме', 'cv.hide': 'Скрыть просмотр', 'cv.download': 'Скачать резюме', 'cv.open': 'Открыть в новой вкладке',
      'cv.missing': 'Файл резюме пока не найден. Добавьте его как assets/cv/cv.pdf.',
      'cv.mobileNote': 'Если просмотр не отображается на вашем устройстве, используйте «Открыть в новой вкладке».',
      'cv.cardTitle': 'Curriculum Vitae', 'cv.cardText': 'PDF · Sultanov To‘xtaboy',
      'contact.eyebrow': 'Связаться', 'contact.title': 'Давайте работать вместе',
      'contact.intro': 'Есть вопрос, идея или предложение? Отправьте сообщение или напишите мне в соцсетях.',
      'contact.name': 'Имя', 'contact.email': 'Email', 'contact.subject': 'Тема', 'contact.message': 'Сообщение',
      'contact.send': 'Отправить сообщение', 'contact.sending': 'Отправка…',
      'contact.success': 'Спасибо! Ваше сообщение отправлено.',
      'contact.error': 'Что-то пошло не так. Попробуйте ещё раз или напишите мне в Telegram.',
      'contact.notConfigured': 'Форма пока не подключена к почтовому сервису. Пожалуйста, напишите мне в Telegram или Instagram.',
      'contact.rate': 'Пожалуйста, подождите немного перед отправкой нового сообщения.',
      'contact.spam': 'Пожалуйста, потратьте немного времени на заполнение формы и повторите попытку.',
      'contact.errRequired': 'Это поле обязательно.', 'contact.errEmail': 'Введите корректный email.', 'contact.errShort': 'Пожалуйста, напишите чуть подробнее.',
      'contact.invalidForm': 'Пожалуйста, исправьте отмеченные поля.',
      'contact.telegram': 'Telegram', 'contact.instagram': 'Instagram', 'contact.github': 'GitHub', 'contact.emailMe': 'Email',
      'footer.tagline': 'Создаю современные веб-проекты.', 'footer.nav': 'Навигация', 'footer.social': 'Соцсети', 'footer.rights': 'Все права защищены.',
      'ui.backToTop': 'Наверх', 'ui.soundOn': 'Звуковые эффекты включены', 'ui.soundOff': 'Звуковые эффекты выключены',
      'ui.soundToggle': 'Переключить звуковые эффекты', 'ui.skip': 'К основному содержимому'
    }
  };

  /* ===== 3. DATA — edit freely ===== */

  // category: websites | webapps | uiux | experiments
  // Optional per-language fields: desc, details, features  ->  { en: '', uz: '', ru: '' }  (features: arrays)
  // Leave `live` / `github` empty if there is no link yet.
  const PROJECTS = [
    { id: 'p1', category: 'websites',    title: 'Landing Page Concept',  tech: ['HTML5', 'CSS3', 'JavaScript'],       image: 'assets/projects/project-1.jpg', live: '', github: '', placeholder: true },
    { id: 'p2', category: 'webapps',     title: 'Task Manager App',      tech: ['JavaScript', 'LocalStorage'],        image: 'assets/projects/project-2.jpg', live: '', github: '', placeholder: true },
    { id: 'p3', category: 'uiux',        title: 'Mobile App UI Kit',     tech: ['Figma', 'UI/UX Design'],             image: 'assets/projects/project-3.jpg', live: '', github: '', placeholder: true },
    { id: 'p4', category: 'experiments', title: 'CSS Animation Lab',     tech: ['CSS3', 'JavaScript'],                image: 'assets/projects/project-4.jpg', live: '', github: '', placeholder: true },
    { id: 'p5', category: 'websites',    title: 'Personal Blog Layout',  tech: ['HTML5', 'CSS3'],                     image: 'assets/projects/project-5.jpg', live: '', github: '', placeholder: true },
    { id: 'p6', category: 'webapps',     title: 'Weather Dashboard',     tech: ['JavaScript', 'REST API'],            image: 'assets/projects/project-6.jpg', live: '', github: '', placeholder: true }
  ];

  // Set hidden: true to remove a card. `desc` is a key from I18N (skill.*).
  const SKILLS = [
    { name: 'HTML5',        abbr: 'HTML', desc: 'skill.html' },
    { name: 'CSS3',         abbr: 'CSS',  desc: 'skill.css' },
    { name: 'JavaScript',   abbr: 'JS',   desc: 'skill.js' },
    { name: 'React',        abbr: 'Re',   desc: 'skill.react' },
    { name: 'Next.js',      abbr: 'Nx',   desc: 'skill.next' },
    { name: 'Tailwind CSS', abbr: 'Tw',   desc: 'skill.tailwind' },
    { name: 'Bootstrap',    abbr: 'Bs',   desc: 'skill.bootstrap' },
    { name: 'Git',          abbr: 'Git',  desc: 'skill.git' },
    { name: 'GitHub',       abbr: 'GH',   desc: 'skill.github' },
    { name: 'VS Code',      abbr: 'VS',   desc: 'skill.vscode' },
    { name: 'Figma',        abbr: 'Fig',  desc: 'skill.figma' },
    { name: 'UI/UX Design', abbr: 'UX',   desc: 'skill.uiux' }
  ];

  // Use `title` / `org` (plain text) for real certificates; the *Key fields are for placeholders.
  const CERTIFICATES = [
    { id: 'c1', titleKey: 'cert.placeholderTitle', orgKey: 'cert.placeholderOrg', date: '20XX', image: 'assets/images/certificates/cert-1.jpg', placeholder: true },
    { id: 'c2', titleKey: 'cert.placeholderTitle', orgKey: 'cert.placeholderOrg', date: '20XX', image: 'assets/images/certificates/cert-2.jpg', placeholder: true },
    { id: 'c3', titleKey: 'cert.placeholderTitle', orgKey: 'cert.placeholderOrg', date: '20XX', image: 'assets/images/certificates/cert-3.jpg', placeholder: true }
  ];

  /* ===== 4. HELPERS ===== */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const lsGet = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } };
  const icon = (id) => `<svg class="icon" aria-hidden="true"><use href="#${id}"/></svg>`;

  const state = { lang: 'en', filter: 'all', openProject: null, menuOpen: false, cvOk: null, formStart: Date.now() };

  const t = (key) => {
    const l = I18N[state.lang];
    return (l && l[key] !== undefined) ? l[key] : (I18N.en[key] !== undefined ? I18N.en[key] : key);
  };
  const pick = (obj) => (obj ? (obj[state.lang] || obj.en || null) : null);

  /* Fallback images: drawn on the fly if a real file is missing */
  function fallbackSrc(kind, hint) {
    const h = esc(hint || '');
    const defs = '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a1250"/><stop offset="1" stop-color="#0b0716"/></linearGradient></defs>';
    const label = (x, y, size) => `<text x="${x}" y="${y}" text-anchor="middle" fill="#c4b5fd" opacity=".7" font-family="Arial,sans-serif" font-size="${size}">${h}</text>`;
    let svg;
    if (kind === 'portrait') {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">${defs}<rect width="800" height="1000" fill="url(#g)"/><circle cx="400" cy="400" r="120" fill="#8b3dff" opacity=".35"/><path d="M160 940c0-150 100-260 240-260s240 110 240 260z" fill="#8b3dff" opacity=".35"/>${label(400, 120, 28)}</svg>`;
    } else if (kind === 'cert') {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">${defs}<rect width="1200" height="900" fill="url(#g)"/><rect x="60" y="60" width="1080" height="780" rx="24" fill="none" stroke="#8b3dff" stroke-width="3" stroke-dasharray="14 10" opacity=".6"/><circle cx="600" cy="400" r="90" fill="none" stroke="#c4b5fd" stroke-width="4" opacity=".6"/>${label(600, 640, 34)}</svg>`;
    } else {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">${defs}<rect width="1200" height="750" fill="url(#g)"/><g stroke="#8b3dff" stroke-opacity=".18"><path d="M0 150H1200M0 300H1200M0 450H1200M0 600H1200M200 0V750M400 0V750M600 0V750M800 0V750M1000 0V750"/></g><rect x="360" y="215" width="480" height="320" rx="26" fill="#8b3dff" opacity=".18" stroke="#c4b5fd" stroke-opacity=".5" stroke-width="2"/>${label(600, 700, 30)}</svg>`;
    }
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }
  function applyFallback(img) {
    if (!img.dataset.fallback || img.dataset.failed) return;
    img.dataset.failed = '1';
    img.src = fallbackSrc(img.dataset.fallback, img.dataset.hint);
  }

  /* ===== 5. i18n ===== */
  function applyLang(lang) {
    if (!I18N[lang]) lang = CONFIG.defaultLang;
    state.lang = lang;
    lsSet('st:lang', lang);
    document.documentElement.lang = lang;

    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-alt]').forEach((el) => { el.alt = t(el.dataset.i18nAlt); });
    $$('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });

    document.title = t('meta.title');
    const md = $('meta[name="description"]'); if (md) md.content = t('meta.description');
    const ogt = $('meta[property="og:title"]'); if (ogt) ogt.content = t('meta.title');

    $$('.lang-btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));

    renderProjects(false);
    if (state.openProject) renderProjectModal(state.openProject);
    updateMenuLabel();
    updateSoundUi();
    updateCvButton();
  }

  /* ===== 6. RENDERING ===== */
  const revealed = new WeakSet();
  let revealObserver = null;
  function observeReveals() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); revealObserver.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    }
    $$('.reveal').forEach((el) => {
      if (revealed.has(el)) return;
      revealed.add(el);
      if (reduceMotion()) el.classList.add('is-visible'); else revealObserver.observe(el);
    });
  }

  function projectCard(p, i, animate) {
    const title = esc(p.title);
    const desc = esc(pick(p.desc) || t('projects.placeholderDesc'));
    const gh = p.github || CONFIG.social.github;
    return `
      <article class="project-card${animate ? ' anim-in' : ''}" data-id="${esc(p.id)}" style="--i:${i}">
        <div class="project-thumb">
          <img src="${esc(p.image)}" alt="${title}" loading="lazy" width="1200" height="750" data-fallback="project" data-hint="${esc(p.image)}">
          ${p.placeholder ? `<span class="badge">${esc(t('ui.placeholder'))}</span>` : ''}
          <span class="project-cat">${esc(t('filter.' + p.category))}</span>
        </div>
        <div class="project-body">
          <h3>${title}</h3>
          <p>${desc}</p>
          <ul class="tags">${p.tech.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
          <div class="project-actions">
            <button type="button" class="btn btn-primary btn-sm" data-open="${esc(p.id)}">${esc(t('projects.view'))}${icon('i-arrow-ur')}</button>
            <a class="btn btn-ghost btn-sm" href="${esc(gh)}" target="_blank" rel="noopener noreferrer">${icon('i-github')}${esc(t('projects.github'))}</a>
          </div>
        </div>
      </article>`;
  }

  function renderProjects(animate = true) {
    const grid = $('#projectGrid');
    const list = PROJECTS.filter((p) => state.filter === 'all' || p.category === state.filter);
    grid.innerHTML = list.length
      ? list.map((p, i) => projectCard(p, i, animate)).join('')
      : `<p class="project-empty glass">${esc(t('projects.empty'))}</p>`;
  }

  function renderProjectModal(id) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return;
    const feats = pick(p.features) || [t('projects.f1'), t('projects.f2'), t('projects.f3')];
    const details = pick(p.details) || t('projects.placeholderDetails');
    const gh = p.github || CONFIG.social.github;
    $('#modalBody').innerHTML = `
      <div class="modal-media"><img src="${esc(p.image)}" alt="${esc(p.title)}" data-fallback="project" data-hint="${esc(p.image)}"></div>
      <div class="modal-content">
        <span class="project-cat" style="align-self:flex-start">${esc(t('filter.' + p.category))}</span>
        <h3 id="modalTitle">${esc(p.title)}</h3>
        <p class="modal-text">${esc(details)}</p>
        <h4>${esc(t('projects.technologies'))}</h4>
        <ul class="tags">${p.tech.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
        <h4>${esc(t('projects.features'))}</h4>
        <ul class="feature-list">${feats.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
        <div class="modal-actions">
          ${p.live ? `<a class="btn btn-primary" href="${esc(p.live)}" target="_blank" rel="noopener noreferrer">${esc(t('projects.live'))}${icon('i-arrow-ur')}</a>` : ''}
          <a class="btn btn-ghost" href="${esc(gh)}" target="_blank" rel="noopener noreferrer">${icon('i-github')}${esc(t('projects.repo'))}</a>
        </div>
      </div>`;
  }

  function renderSkills() {
    $('#skillsGrid').innerHTML = SKILLS.filter((s) => !s.hidden).map((s, i) => `
      <article class="skill-card glass reveal" style="--d:${i * 50}ms">
        <div class="skill-icon" aria-hidden="true">${esc(s.abbr)}</div>
        <h3>${esc(s.name)}</h3>
        <p data-i18n="${esc(s.desc)}">${esc(t(s.desc))}</p>
      </article>`).join('');
  }

  function renderCerts() {
    $('#certGrid').innerHTML = CERTIFICATES.map((c, i) => {
      const title = c.title ? esc(c.title) : `<span data-i18n="${esc(c.titleKey)}">${esc(t(c.titleKey))}</span>`;
      const org = c.org ? esc(c.org) : `<span data-i18n="${esc(c.orgKey)}">${esc(t(c.orgKey))}</span>`;
      return `
      <article class="cert-card glass reveal" style="--d:${i * 70}ms">
        <button type="button" class="cert-thumb" data-cert="${esc(c.id)}" aria-label="${esc(t('cert.view'))}">
          <img src="${esc(c.image)}" alt="" loading="lazy" width="1200" height="900" data-fallback="cert" data-hint="${esc(c.image)}">
        </button>
        <div class="cert-body">
          ${c.placeholder ? `<span class="badge" data-i18n="ui.placeholder">${esc(t('ui.placeholder'))}</span>` : ''}
          <h3>${title}</h3>
          <p>${org}</p>
          <time>${esc(c.date)}</time>
          <button type="button" class="btn btn-ghost btn-sm" data-cert="${esc(c.id)}">${icon('i-eye')}<span data-i18n="cert.view">${esc(t('cert.view'))}</span></button>
        </div>
      </article>`;
    }).join('');
  }

  /* ===== 7. OVERLAYS (modal + lightbox) ===== */
  const overlays = [];
  let lastFocus = null;

  function lockScroll() { document.body.classList.toggle('no-scroll', overlays.length > 0 || state.menuOpen); }

  function openOverlay(el) {
    clearTimeout(el._t);
    lastFocus = document.activeElement;
    el.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('is-open')));
    if (!overlays.includes(el)) overlays.push(el);
    lockScroll();
    const closeBtn = $('[data-close]', el);
    if (closeBtn) closeBtn.focus({ preventScroll: true });
    sound.play('open');
  }
  function closeOverlay(el) {
    el.classList.remove('is-open');
    el._t = setTimeout(() => { el.hidden = true; }, 300);
    const i = overlays.indexOf(el); if (i > -1) overlays.splice(i, 1);
    if (el.id === 'projectModal') state.openProject = null;
    lockScroll();
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    sound.play('close');
  }

  function openProject(id) {
    state.openProject = id;
    renderProjectModal(id);
    openOverlay($('#projectModal'));
  }
  function openCert(id) {
    const c = CERTIFICATES.find((x) => x.id === id);
    if (!c) return;
    const img = $('#lightboxImg');
    const title = c.title || t(c.titleKey);
    delete img.dataset.failed;
    img.dataset.hint = c.image;
    img.src = c.image;
    img.alt = title;
    $('#lightboxCaption').textContent = `${title} · ${c.org || t(c.orgKey)} · ${c.date}`;
    openOverlay($('#lightbox'));
  }

  function initOverlays() {
    [$('#projectModal'), $('#lightbox')].forEach((m) => {
      m.addEventListener('click', (e) => { if (e.target === m || e.target.closest('[data-close]')) closeOverlay(m); });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (overlays.length) closeOverlay(overlays[overlays.length - 1]);
        else if (state.menuOpen) setMenu(false);
      }
      if (e.key === 'Tab' && overlays.length) {
        const top = overlays[overlays.length - 1];
        const f = $$('a[href], button:not([disabled])', top).filter((x) => x.offsetParent !== null);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    $('#projectGrid').addEventListener('click', (e) => {
      if (e.target.closest('a')) return;           // external links work normally
      const card = e.target.closest('.project-card');
      if (card) openProject(card.dataset.id);
    });
    $('#certGrid').addEventListener('click', (e) => {
      const b = e.target.closest('[data-cert]');
      if (b) openCert(b.dataset.cert);
    });
    $('#projectFilters').addEventListener('click', (e) => {
      const b = e.target.closest('.filter-btn');
      if (!b) return;
      state.filter = b.dataset.filter;
      $$('.filter-btn').forEach((x) => { const on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', String(on)); });
      renderProjects(true);
    });
  }

  /* ===== 8. NAVIGATION ===== */
  function updateMenuLabel() {
    const b = $('#burger');
    b.setAttribute('aria-label', t(state.menuOpen ? 'nav.close' : 'nav.menu'));
  }
  function setMenu(open) {
    state.menuOpen = open;
    const menu = $('#mobileMenu');
    menu.classList.toggle('is-open', open);
    menu.inert = !open;
    $('#burger').setAttribute('aria-expanded', String(open));
    updateMenuLabel();
    lockScroll();
  }

  function initNav() {
    $('#burger').addEventListener('click', () => setMenu(!state.menuOpen));

    // Smooth anchor scrolling (works with the mobile menu too)
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      setMenu(false);
      target.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });

    $$('.lang-btn').forEach((b) => b.addEventListener('click', () => applyLang(b.dataset.lang)));

    // Scroll: progress bar, navbar glass, back-to-top, active section
    const sections = $$('main section[id]');
    const links = $$('[data-section]');
    const bar = $('#scrollProgress'), nav = $('#navbar'), top = $('#backTop');
    let ticking = false;
    function onScroll() {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      nav.classList.toggle('scrolled', y > 40);
      top.classList.toggle('show', y > 600);
      let current = sections[0];
      sections.forEach((s) => { if (s.getBoundingClientRect().top <= window.innerHeight * 0.35) current = s; });
      // CV section has no own nav link: keep Certificates highlighted until Contact
      const key = current.id === 'cv' ? 'certificates' : current.id;
      links.forEach((l) => l.classList.toggle('active', l.dataset.section === key));
      ticking = false;
    }
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' }));
  }

  /* ===== 9. EFFECTS ===== */
  function initCursor() {
    if (!finePointer()) return;
    const dot = $('#cursorDot'), ring = $('#cursorRing');
    document.body.classList.add('has-cursor');
    let mx = -100, my = -100, rx = -100, ry = -100, running = false;
    function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      if (Math.abs(mx - rx) > 0.1 || Math.abs(my - ry) > 0.1) requestAnimationFrame(loop); else running = false;
    }
    window.addEventListener('pointermove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
      if (!running) { running = true; requestAnimationFrame(loop); }
    }, { passive: true });
    document.addEventListener('mouseover', (e) => {
      document.body.classList.toggle('cursor-hover', !!e.target.closest('a, button, .project-card, .skill-card, input, textarea, label'));
    });
    document.addEventListener('mouseleave', () => { dot.style.opacity = 0; ring.style.opacity = 0; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = ''; ring.style.opacity = ''; });
  }

  function initParticles() {
    const canvas = $('#particles');
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = 1, parts = [], raf = null;
    const mouse = { x: -9999, y: -9999 };

    function build() {
      const small = window.innerWidth < 768;
      const count = Math.round(Math.min(small ? 30 : 70, (window.innerWidth * window.innerHeight) / 20000));
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28 * dpr, vy: (Math.random() - 0.5) * 0.28 * dpr,
        r: (Math.random() * 1.5 + 0.6) * dpr, a: Math.random() * 0.5 + 0.25
      }));
    }
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      build();
      if (reduceMotion()) draw(false);
    }
    function draw(move) {
      ctx.clearRect(0, 0, w, h);
      const link = 120 * dpr;
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        if (move) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,181,253,${p.a})`;
        ctx.fill();
        for (let j = i + 1; j < parts.length; j++) {
          const q = parts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
          if (d < link) {
            ctx.strokeStyle = `rgba(139,92,246,${(1 - d / link) * 0.22})`;
            ctx.lineWidth = dpr * 0.8;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (md < 150 * dpr) {
          ctx.strokeStyle = `rgba(196,181,253,${(1 - md / (150 * dpr)) * 0.35})`;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
    }
    function loop() { draw(true); raf = requestAnimationFrame(loop); }
    function start() { if (!raf && !reduceMotion()) raf = requestAnimationFrame(loop); }
    function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

    let rt;
    window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 150); });
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
    if (finePointer()) {
      window.addEventListener('pointermove', (e) => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; }, { passive: true });
    }
    resize();
    start();
  }

  function initHeroParallax() {
    if (!finePointer() || reduceMotion()) return;
    const hero = $('.hero');
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
      hero.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    });
  }

  function initTilt() {
    if (!finePointer() || reduceMotion()) return;
    const grid = $('#projectGrid');
    grid.addEventListener('pointermove', (e) => {
      const card = e.target.closest('.project-card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--ry', ((px - 0.5) * 8).toFixed(2) + 'deg');
      card.style.setProperty('--rx', ((0.5 - py) * 8).toFixed(2) + 'deg');
      card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
      card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
    });
    grid.addEventListener('pointerout', (e) => {
      const card = e.target.closest('.project-card');
      if (card && !card.contains(e.relatedTarget)) { card.style.removeProperty('--rx'); card.style.removeProperty('--ry'); }
    });
  }

  /* ===== 10. SOUND (off by default, user-activated) ===== */
  const sound = {
    enabled: false,
    ctx: null,
    beep(freq, dur, type, vol, to) {
      const c = this.ctx; if (!c) return;
      const o = c.createOscillator(), g = c.createGain(), now = c.currentTime;
      o.type = type;
      o.frequency.setValueAtTime(freq, now);
      if (to) o.frequency.exponentialRampToValueAtTime(to, now + dur);
      g.gain.setValueAtTime(vol, now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      o.connect(g); g.connect(c.destination);
      o.start(now); o.stop(now + dur + 0.02);
    },
    play(kind) {
      if (!this.enabled || !this.ctx) return;
      if (kind === 'click') this.beep(520, 0.09, 'sine', 0.05, 760);
      else if (kind === 'open') this.beep(380, 0.18, 'triangle', 0.05, 720);
      else if (kind === 'close') this.beep(720, 0.14, 'triangle', 0.04, 380);
      else if (kind === 'on') { this.beep(440, 0.1, 'sine', 0.05, 660); setTimeout(() => this.beep(660, 0.12, 'sine', 0.05, 880), 90); }
    },
    toggle() {
      if (!this.enabled) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) { showToast('Audio is not supported in this browser.'); return; }
        if (!this.ctx) this.ctx = new AC();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        this.enabled = true;
        this.play('on');
      } else {
        this.enabled = false;
      }
      updateSoundUi();
      showToast(t(this.enabled ? 'ui.soundOn' : 'ui.soundOff'));
    }
  };
  function updateSoundUi() {
    const b = $('#soundToggle');
    b.setAttribute('aria-pressed', String(sound.enabled));
    b.title = t(sound.enabled ? 'ui.soundOn' : 'ui.soundOff');
    $('#soundIcon').setAttribute('href', sound.enabled ? '#i-volume' : '#i-volume-x');
  }
  function initSound() {
    $('#soundToggle').addEventListener('click', () => sound.toggle());
    document.addEventListener('click', (e) => {
      if (e.target.closest('#soundToggle')) return;
      if (e.target.closest('a.btn, button, .nav-link, .mobile-link, .social-link')) sound.play('click');
    });
  }

  let toastTimer;
  function showToast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 3500);
  }

  /* ===== 11. CV ===== */
  async function checkCv() {
    try {
      const r = await fetch(CONFIG.cvPath, { method: 'HEAD', cache: 'no-store' });
      state.cvOk = r.ok;
    } catch (e) {
      state.cvOk = null;   // unknown (e.g. opened via file://) — let the browser try
    }
  }
  function updateCvButton() {
    const btn = $('#cvPreviewBtn');
    const open = btn.getAttribute('aria-expanded') === 'true';
    $('span', btn).textContent = t(open ? 'cv.hide' : 'cv.preview');
  }
  function initCv() {
    checkCv();
    $$('[data-cv-download]').forEach((a) => {
      a.setAttribute('href', CONFIG.cvPath);
      a.addEventListener('click', (e) => {
        if (state.cvOk === false) { e.preventDefault(); showToast(t('cv.missing')); }
      });
    });
    const btn = $('#cvPreviewBtn'), box = $('#cvPreview'), frame = $('#cvFrame'), note = $('#cvNote');
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      if (open) {
        box.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
      } else {
        box.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
        if (state.cvOk === false) {
          frame.hidden = true;
          note.dataset.i18n = 'cv.missing';
          note.textContent = t('cv.missing');
          note.classList.add('is-error');
        } else {
          frame.hidden = false;
          note.dataset.i18n = 'cv.mobileNote';
          note.textContent = t('cv.mobileNote');
          note.classList.remove('is-error');
          if (!frame.getAttribute('src')) frame.src = CONFIG.cvPath + '#view=FitH';
        }
      }
      updateCvButton();
    });
  }

  /* ===== 12. CONTACT FORM ===== */
  const FIELDS = {
    name:    (v) => (!v ? 'contact.errRequired' : v.length < 2 ? 'contact.errShort' : null),
    email:   (v) => (!v ? 'contact.errRequired' : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? 'contact.errEmail' : null),
    subject: (v) => (!v ? 'contact.errRequired' : v.length < 3 ? 'contact.errShort' : null),
    message: (v) => (!v ? 'contact.errRequired' : v.length < 10 ? 'contact.errShort' : null)
  };

  function setFieldError(name, key) {
    const input = $('#f-' + name), err = $('#err-' + name);
    const wrap = input.closest('.field');
    if (key) {
      err.dataset.i18n = key; err.textContent = t(key);
      wrap.classList.add('has-error'); input.setAttribute('aria-invalid', 'true');
    } else {
      delete err.dataset.i18n; err.textContent = '';
      wrap.classList.remove('has-error'); input.removeAttribute('aria-invalid');
    }
  }
  function setStatus(type, key) {
    const el = $('#formStatus');
    el.className = 'form-status' + (type ? ' ' + type : '');
    if (key) { el.dataset.i18n = key; el.textContent = t(key); }
    else { delete el.dataset.i18n; el.textContent = ''; }
  }
  function setLoading(on) {
    const btn = $('#submitBtn'), label = $('#submitLabel');
    btn.disabled = on;
    btn.classList.toggle('is-loading', on);
    btn.setAttribute('aria-busy', String(on));
    label.dataset.i18n = on ? 'contact.sending' : 'contact.send';
    label.textContent = t(label.dataset.i18n);
  }
  function validateForm(form) {
    let ok = true, firstBad = null;
    Object.keys(FIELDS).forEach((n) => {
      const key = FIELDS[n](form.elements[n].value.trim());
      setFieldError(n, key);
      if (key) { ok = false; if (!firstBad) firstBad = form.elements[n]; }
    });
    if (firstBad) firstBad.focus();
    return ok;
  }

  function initForm() {
    const form = $('#contactForm');
    state.formStart = Date.now();

    Object.keys(FIELDS).forEach((n) => $('#f-' + n).addEventListener('input', () => setFieldError(n, null)));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (form.elements['_gotcha'].value) return;                  // honeypot filled → bot, drop silently
      setStatus(null);
      if (!validateForm(form)) { setStatus('error', 'contact.invalidForm'); return; }
      if (Date.now() - state.formStart < CONFIG.minSubmitSeconds * 1000) { setStatus('error', 'contact.spam'); return; }
      if (Date.now() - Number(lsGet('st:lastSubmit') || 0) < CONFIG.cooldownSeconds * 1000) { setStatus('error', 'contact.rate'); return; }
      if (!CONFIG.formEndpoint) { setStatus('error', 'contact.notConfigured'); return; }   // never fake a success

      setLoading(true);
      try {
        const res = await fetch(CONFIG.formEndpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        lsSet('st:lastSubmit', String(Date.now()));
        form.reset();
        state.formStart = Date.now();
        setStatus('success', 'contact.success');
      } catch (err) {
        setStatus('error', 'contact.error');
      } finally {
        setLoading(false);
      }
    });

    // Optional public email shown in Contact
    if (CONFIG.email) {
      const a = $('#emailLink');
      a.href = 'mailto:' + CONFIG.email;
      $('#emailText').textContent = CONFIG.email;
      a.hidden = false;
    }
  }

  /* ===== 13. INIT ===== */
  function init() {
    $('#year').textContent = new Date().getFullYear();

    // Missing real images → generated placeholders
    document.addEventListener('error', (e) => { if (e.target.tagName === 'IMG') applyFallback(e.target); }, true);
    $$('img[data-fallback]').forEach((img) => { if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) applyFallback(img); });

    renderSkills();
    renderCerts();
    const saved = lsGet('st:lang');
    applyLang(I18N[saved] ? saved : CONFIG.defaultLang);

    initOverlays();
    initNav();
    initCursor();
    initParticles();
    initHeroParallax();
    initTilt();
    initSound();
    initCv();
    initForm();
    observeReveals();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
