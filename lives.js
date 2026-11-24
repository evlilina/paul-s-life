// Список жизней в игре. Чтобы добавить нового человека:
// 1) создайте папку lives/<id>/ с файлами ru.js и en.js (образец — lives/_template/);
// 2) допишите сюда ещё один блок { ... } по образцу ниже.
window.LIVES = [
  {
    id: "mccartney",
    files: { ru: "lives/mccartney/ru.js", en: "lives/mccartney/en.js" },
    name:    { ru: "Пол Маккартни", en: "Paul McCartney" },
    years:   "1942 —",
    tagline: { ru: "От пианино в Ливерпуле до стадионов мира", en: "From a Liverpool piano to the world's stadiums" },
    color:   "#a8322a"
  }
];
