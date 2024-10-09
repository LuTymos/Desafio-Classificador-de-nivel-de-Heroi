let herois = [
  ["Skye", 7143],
  ["Sova", 2754],
  ["Omen", 9432],
  ["Gekko", 15000],
];

function classificarHeroi(xp) {
  if (xp < 1000) {
    return "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    return "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    return "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    return "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    return "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    return "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

herois.forEach(([nome, xp]) => {
  var nivel = classificarHeroi(xp);

  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
});
