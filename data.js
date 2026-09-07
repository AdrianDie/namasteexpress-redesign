// Ekte innhold hentet fra namasteexpress.no — ikke oppdiktet.
const MENU_CATEGORIES = [
  {
    key: "forretter",
    label: "Forretter",
    items: [
      { num: "01", name: "Samosa", desc: "Sprø samosa med krydret potetfyll.", price: "kr 69", img: "assets/dishes/01-samosa.jpg", tags: ["Gluten", "Melk"] },
      { num: "02", name: "Onion Bhaji", desc: "Sprøstekte løkfritters med indiske krydder.", price: "kr 69", img: "assets/dishes/02-onion-bhaji.jpg", tags: ["Gluten"] },
      { num: "03", name: "Pani Puri", desc: "Sprø puri fylt med poteter, kikerter og krydret tamarindvann.", price: "kr 79", img: "assets/dishes/03-pani-puri.jpg", tags: ["Gluten"] },
    ],
  },
  {
    key: "naan",
    label: "Naan Brød",
    items: [
      { num: "04", name: "Plain Naan", desc: "Mykt, tradisjonelt indisk naanbrød.", price: "kr 45", img: "assets/dishes/04-plain-naan.jpg", tags: ["Gluten", "Melk"] },
      { num: "05", name: "Garlic Naan", desc: "Naanbrød fylt med krydrede poteter og hvitløk.", price: "kr 49", img: "assets/dishes/05-garlic-naan.jpg", tags: ["Gluten", "Melk"] },
      { num: "06", name: "Peshwari Naan", desc: "Naanbrød fylt med kokos, rosiner og nøtter.", price: "kr 69", img: "assets/dishes/06-peshwari-naan.jpg", tags: ["Gluten", "Melk", "Nøtter"] },
    ],
  },
  {
    key: "tilbehor",
    label: "Tilbehør",
    items: [
      { num: "07", name: "Cucumber Raita", desc: "Yoghurtdipp med agurk og milde krydder.", price: "kr 69", img: "assets/dishes/07-cucumber-raita.jpg", tags: ["Melk"] },
      { num: "08", name: "Chicken Coconut Soup", desc: "Kremet kyllingsuppe med naan.", price: "kr 149", img: "assets/dishes/08-chicken-coconut-soup.jpg", tags: ["Gluten", "Melk"] },
    ],
  },
  {
    key: "drikke",
    label: "Drikke",
    items: [
      { num: "", name: "Brus – Cola Zero, Coca Cola, Sprite, Fanta, Farris", desc: "Kalde brusdrikker (0,33 l).", price: "kr 45", img: "assets/dishes/drikke-brus.jpg", tags: [] },
      { num: "09", name: "Mango Lassi", desc: "Yoghurtdrikk med mango.", price: "kr 69", img: "assets/dishes/09-mango-lassi.jpg", tags: ["Melk"] },
    ],
  },
  {
    key: "kylling",
    label: "Kyllingretter",
    items: [
      { num: "10", name: "Butter Chicken", desc: "Mør kylling i kremet smør- og tomatsaus.", price: "kr 259", img: "assets/dishes/10-butter-chicken.jpg", tags: ["Melk", "Nøtter"] },
      { num: "11", name: "Chicken Tikka Masala", desc: "Grillet kylling i krydret tomat- og fløtesaus.", price: "kr 259", img: "assets/dishes/11-chicken-tikka-masala.jpg", tags: ["Melk", "Nøtter", "Gluten"] },
      { num: "12", name: "Mango Chicken", desc: "Kylling i en mild og kremet mangosaus.", price: "kr 259", img: "assets/dishes/12-mango-chicken.jpg", tags: ["Melk", "Nøtter"] },
    ],
  },
  {
    key: "lamme",
    label: "Lammeretter",
    items: [
      { num: "15", name: "Lamb Tikka Masala", desc: "Mørt lammekjøtt i krydret masalasaus.", price: "kr 279", img: "assets/dishes/15-lamb-tikka-masala.jpg", tags: ["Melk", "Nøtter"] },
      { num: "16", name: "Lamb Korma", desc: "Mørt lam i mild, kremet kormasaus.", price: "kr 279", img: "assets/dishes/16-lamb-korma.jpg", tags: ["Melk"] },
    ],
  },
  {
    key: "andrett",
    label: "Andretter",
    items: [
      { num: "18", name: "Duck Chili", desc: "Sprøstekt and i en sterk chilisaus med grønnsaker.", price: "kr 279", img: "assets/dishes/18-duck-chili.jpg", tags: ["Gluten", "Soya"] },
      { num: "19", name: "Duck Szechuan Masala", desc: "Mør and i en smakfull Szechuan-masalasaus med paprika, løk og koriander.", price: "kr 279", img: "assets/dishes/19-duck-szechuan-masala.jpg", tags: ["Gluten", "Nøtter"] },
    ],
  },
  {
    key: "tandoori",
    label: "Tandoori Grill",
    items: [
      { num: "31", name: "Chicken Tikka", desc: "Marinert og grillet kylling fra tandoor.", price: "kr 279", img: "assets/dishes/31-chicken-tikka.jpg", tags: ["Gluten", "Nøtter", "Melk"] },
      { num: "32", name: "Garlic Chicken Tikka", desc: "Grillet kylling marinert med hvitløk, mynte og indiske krydder.", price: "kr 279", img: "assets/dishes/32-garlic-chicken-tikka.jpg", tags: ["Gluten", "Nøtter", "Melk"] },
      { num: "33", name: "Chicken Tikka Mango", desc: "Grillet kylling marinert med mango og indiske krydder.", price: "kr 279", img: "assets/dishes/33-chicken-tikka-mango.jpg", tags: ["Gluten", "Nøtter", "Melk"] },
      { num: "34", name: "Mixed Grill", desc: "Et utvalg av grillet kylling, lam og reker fra tandooroven.", price: "kr 299", img: "assets/dishes/34-mixed-grill.jpg", tags: ["Gluten", "Nøtter", "Melk", "Skalldyr"] },
    ],
  },
  {
    key: "sjomat",
    label: "Sjømat",
    items: [
      { num: "40", name: "Fish Coconut Korma", desc: "Fisk i en mild og kremet kokos- og kormasaus.", price: "kr 269", img: "assets/dishes/40-fish-coconut-korma.jpg", tags: ["Melk", "Gluten", "Fisk"] },
      { num: "41", name: "Prawn Tamarind Curry", desc: "Reker i en syrlig tamarindsaus med indiske krydder.", price: "kr 279", img: "assets/dishes/41-prawn-tamarind-curry.jpg", tags: ["Skalldyr", "Melk", "Nøtter"] },
    ],
  },
  {
    key: "vegetar",
    label: "Vegetarretter",
    items: [
      { num: "51", name: "Kikerter Masala", desc: "Kikerter i krydret tomatsaus med indiske krydder.", price: "kr 229", img: "assets/dishes/51-kikerter-masala.jpg", tags: ["Melk", "Gluten", "Nøtter"] },
      { num: "52", name: "Paneer Makhani", desc: "Indisk ost i kremet tomat- og smørsaus.", price: "kr 239", img: "assets/dishes/52-paneer-makhani.jpg", tags: ["Melk", "Nøtter"] },
      { num: "53", name: "Tofu Korma", desc: "Tofu i en mild og kremet kormasaus.", price: "kr 229", img: "assets/dishes/53-tofu-korma.jpg", tags: ["Soya", "Melk", "Nøtter"] },
    ],
  },
  {
    key: "kids",
    label: "Kids Meny",
    items: [
      { num: "61", name: "Butter Chicken (Kids)", desc: "Mild butter chicken med ris eller fingerchips.", price: "kr 149", img: "assets/dishes/61-butter-chicken-kids.jpg", tags: ["Melk", "Nøtter"] },
      { num: "62", name: "Chicken Nuggets", desc: "Serveres med fingerchips.", price: "kr 149", img: "assets/dishes/62-chicken-nuggets.jpg", tags: ["Gluten", "Melk"] },
    ],
  },
];

const HOURS = [
  { days: "Man – Lør", time: "16:00 – 21:30" },
  { days: "Søndag", time: "14:00 – 21:30" },
];
