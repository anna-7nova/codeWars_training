function greet(language) {
  const languageInBase = [
    ["english", "Welcome"],
    ["czech", "Vitejte"],
    ["danish", "Velkomst"],
    ["dutch", "Welkom"],
    ["estonian", "Tere tulemast"],
    ["finnish", "Tervetuloa"],
    ["flemish", "Welgekomen"],
    ["french", "Bienvenue"],
    ["german", "Willkommen"],
    ["irish", "Failte"],
    ["italian", "Benvenuto"],
    ["latvian", "Gaidits"],
    ["lithuanian", "Laukiamas"],
    ["polish", "Witamy"],
    ["spanish", "Bienvenido"],
    ["spanish", "Bienvenido"],
    ["swedish", "Valkommen"],
    ["welsh", "Croeso"],
  ];
  for (let i = 0; i < languageInBase.length; i++) {
    if (language === languageInBase[i][0]) {
      return languageInBase[i][1];
    }
  }
  return languageInBase[0][1];
}
