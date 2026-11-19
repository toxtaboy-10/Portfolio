# Sultanov To‘xtaboy — Portfolio

Premium dark-purple glassmorphism portfolio. Faqat **HTML + CSS + Vanilla JavaScript** — build, npm yoki framework kerak emas.
Tillar: **EN / UZ / RU**.

## Loyiha strukturasi

```
portfolio/
├── index.html
├── 404.html
├── css/style.css
├── js/script.js          ← barcha matn, loyiha, ko‘nikma, sertifikat ma’lumotlari shu yerda
├── assets/
│   ├── icons/favicon.svg
│   ├── images/           ← portrait.jpg, og-image.jpg, certificates/cert-1.jpg ...
│   ├── projects/         ← project-1.jpg ... project-6.jpg
│   └── cv/               ← cv.pdf
└── README.md
```

## Lokal ishga tushirish

1. Papkani oching va `index.html` ni brauzerda oching.
2. Yaxshisi, oddiy lokal server bilan (CV tekshiruvi va fetch to‘g‘ri ishlashi uchun):
   - VS Code: **Live Server** kengaytmasi, yoki
   - `python -m http.server 8000` va `http://localhost:8000`

## Nimalarni almashtirish kerak

| Nima | Qayerda |
|---|---|
| Shaxsiy rasm | `assets/images/portrait.jpg` (nisbat 4:5, masalan 800×1000) |
| Loyiha rasmlari | `assets/projects/project-1.jpg` … `project-6.jpg` (16:10) |
| Loyiha nomi, texnologiya, havolalar | `js/script.js` → `PROJECTS` |
| Loyiha tavsifi (3 tilda) | `PROJECTS` ichida `desc`, `details`, `features` qo‘shing (namuna pastda) |
| Ko‘nikmalar | `SKILLS` (bilmaganingizga `hidden: true` yozing yoki qatorni o‘chiring) |
| Sertifikatlar | `CERTIFICATES` + rasm `assets/images/certificates/` |
| CV | `assets/cv/cv.pdf` |
| Ta’lim / tajriba | `index.html` → `#experience` bo‘limi va `js/script.js` → `exp.*` matnlari |
| Email | `CONFIG.email` |
| Matnlar | `I18N` obyekti (en / uz / ru) |
| Open Graph rasmi | `assets/images/og-image.jpg` (1200×630) |

Loyiha uchun 3 tilli matn namunasi:

```js
{ id: 'p1', category: 'websites', title: 'My Site', tech: ['HTML5','CSS3'],
  image: 'assets/projects/project-1.jpg', live: 'https://...', github: 'https://github.com/toxtaboy-10/repo',
  desc:     { en: 'Short text', uz: 'Qisqa matn', ru: 'Краткий текст' },
  details:  { en: '...', uz: '...', ru: '...' },
  features: { en: ['A','B'], uz: ['A','B'], ru: ['A','B'] } }
```

Rasm fayli topilmasa, sayt avtomatik tarzda vaqtinchalik rasm chizadi — shuning uchun faylni qo‘yguncha ham hammasi ishlaydi. `placeholder: true` bo‘lgan kartalarda "Namuna" belgisi chiqadi; haqiqiy loyiha qo‘shganda uni o‘chiring.

## Contact forma (muhim)

GitHub Pages — statik hosting: serverda email yuborib bo‘lmaydi va maxfiy API kalitlarini frontend kodida saqlab bo‘lmaydi.
Shuning uchun forma `CONFIG.formEndpoint` bo‘sh bo‘lsa **yuborilmaydi** va foydalanuvchiga "forma hali ulanmagan, Telegram orqali yozing" deb **rostini** aytadi (yolg‘on "yuborildi" chiqmaydi).

Ulash:
1. [Formspree](https://formspree.io) (yoki Web3Forms, Getform) da bepul forma yarating va emailingizni tasdiqlang.
2. Berilgan **ochiq** endpoint URL ni `js/script.js` → `CONFIG.formEndpoint` ga qo‘ying (masalan `https://formspree.io/f/xxxxxxxx`).
3. Hech qachon **maxfiy** kalit (secret/private key) ni frontendga yozmang.

Spamdan himoya: yashirin honeypot maydon (`_gotcha`), minimal to‘ldirish vaqti, 30 soniyalik cooldown, validatsiya. Xizmat tomonida CAPTCHA ni yoqish tavsiya etiladi.

## GitHub Pages'ga joylash

Eng oson variant — repozitoriyga `toxtaboy-10.github.io` deb nom bering (sayt `https://toxtaboy-10.github.io/` da ochiladi):

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/toxtaboy-10/toxtaboy-10.github.io.git
git push -u origin main
```

Keyin GitHub → repo → **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `/ (root)`** → Save. 1–2 daqiqadan so‘ng sayt tayyor.

Boshqa nomli repo bo‘lsa, sayt `https://toxtaboy-10.github.io/repo-nomi/` da ochiladi — u holda `404.html` ichidagi `href="/"` ni `href="/repo-nomi/"` ga o‘zgartiring.

## Funksiyalar

- Floating glass navbar, active section, smooth scroll, fullscreen mobil menyu
- EN / UZ / RU — butun sayt tarjimasi, tanlov `localStorage` da saqlanadi
- Loyiha filtri (5 kategoriya), modal (ESC, tashqariga bosish, fokus tuzoqi)
- Sertifikat lightbox, CV preview/download (fayl yo‘q bo‘lsa aniq xabar)
- Custom cursor (faqat sichqonchali qurilmalarda), scroll progress, reveal, back-to-top
- Canvas zarrachalar (mobilda yengil, tab yashirilsa to‘xtaydi), CSS 3D shakllar
- Ovoz effektlari: dastlab **o‘chiq**, faqat tugma orqali yoqiladi
- `prefers-reduced-motion` qo‘llab-quvvatlanadi

## Tekshiruv ro‘yxati

- [ ] Rasm, CV, loyihalar, sertifikatlarni almashtirdim
- [ ] `CONFIG.formEndpoint` ni ulab, test xabar yubordim
- [ ] 3 tilni almashtirib ko‘rdim
- [ ] Telefonda menyu va modalni tekshirdim
- [ ] `og-image.jpg` ni qo‘shdim
