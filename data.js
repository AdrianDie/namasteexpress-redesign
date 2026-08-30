// Ekte innhold hentet fra namasteexpress.no — ikke oppdiktet.
const MENU_CATEGORIES = [
  {
    key: "forretter",
    label: "Forretter",
    items: [
      { num: "01", name: "Samosa", desc: "Sprø samosa med krydret potetfyll." },
      { num: "02", name: "Onion Bhaji", desc: "Sprøstekte løkfritters med indiske krydder." },
      { num: "03", name: "Pani Puri", desc: "Sprø puri fylt med poteter, kikerter og krydret tamarindvann." },
    ],
  },
  {
    key: "naan",
    label: "Naan Brød",
    items: [
      { num: "04", name: "Plain Naan", desc: "Mykt, tradisjonelt indisk naanbrød." },
      { num: "05", name: "Garlic Naan", desc: "Naanbrød fylt med krydrede poteter og hvitløk." },
      { num: "06", name: "Peshwari Naan", desc: "Naanbrød fylt med kokos, rosiner og nøtter." },
    ],
  },
  {
    key: "tilbehor",
    label: "Tilbehør",
    items: [
      { num: "07", name: "Cucumber Raita", desc: "Yoghurtdipp med agurk og milde krydder." },
      { num: "08", name: "Chicken Coconut Soup", desc: "Kremet kyllingsuppe med naan." },
    ],
  },
  {
    key: "drikke",
    label: "Drikke",
    items: [
      { num: "", name: "Brus – Cola Zero, Coca Cola, Sprite, Fanta, Farris", desc: "Kalde brusdrikker (0,33 l)." },
      { num: "09", name: "Mango Lassi", desc: "Yoghurtdrikk med mango." },
    ],
  },
  {
    key: "kylling",
    label: "Kyllingretter",
    items: [
      { num: "10", name: "Butter Chicken", desc: "Mør kylling i kremet smør- og tomatsaus." },
      { num: "11", name: "Chicken Tikka Masala", desc: "Grillet kylling i krydret tomat- og fløtesaus." },
      { num: "12", name: "Mango Chicken", desc: "Kylling i en mild og kremet mangosaus." },
    ],
  },
  {
    key: "lamme",
    label: "Lammeretter",
    items: [
      { num: "15", name: "Lamb Tikka Masala", desc: "Mørt lammekjøtt i krydret masalasaus." },
      { num: "16", name: "Lamb Korma", desc: "Mørt lam i mild, kremet kormasaus." },
    ],
  },
  {
    key: "andrett",
    label: "Andretter",
    items: [
      { num: "18", name: "Duck Chili", desc: "Sprøstekt and i en sterk chilisaus med grønnsaker." },
      { num: "19", name: "Duck Szechuan Masala", desc: "Mør and i en smakfull Szechuan-masalasaus med paprika, løk og koriander." },
    ],
  },
  {
    key: "tandoori",
    label: "Tandoori Grill",
    items: [
      { num: "31", name: "Chicken Tikka", desc: "Marinert og grillet kylling fra tandoor." },
      { num: "32", name: "Garlic Chicken Tikka", desc: "Grillet kylling marinert med hvitløk, mynte og indiske krydder." },
      { num: "33", name: "Chicken Tikka Mango", desc: "Grillet kylling marinert med mango og indiske krydder." },
      { num: "34", name: "Mixed Grill", desc: "Et utvalg av grillet kylling, lam og reker fra tandooroven." },
    ],
  },
  {
    key: "sjomat",
    label: "Sjømat",
    items: [
      { num: "40", name: "Fish Coconut Korma", desc: "Fisk i en mild og kremet kokos- og kormasaus." },
      { num: "41", name: "Prawn Tamarind Curry", desc: "Reker i en syrlig tamarindsaus med indiske krydder." },
    ],
  },
  {
    key: "vegetar",
    label: "Vegetarretter",
    items: [
      { num: "51", name: "Kikerter Masala", desc: "Kikerter i krydret tomatsaus med indiske krydder." },
      { num: "52", name: "Paneer Makhani", desc: "Indisk ost i kremet tomat- og smørsaus." },
      { num: "53", name: "Tofu Korma", desc: "Tofu i en mild og kremet kormasaus." },
    ],
  },
  {
    key: "kids",
    label: "Kids Meny",
    items: [
      { num: "61", name: "Butter Chicken (Kids)", desc: "Mild butter chicken med ris eller fingerchips." },
      { num: "62", name: "Chicken Nuggets", desc: "Serveres med fingerchips." },
    ],
  },
];

const HOURS = [
  { days: "Man – Lør", time: "16:00 – 21:30" },
  { days: "Søndag", time: "14:00 – 21:30" },
];

// Maskinlesbar versjon til live åpen/stengt-status. 0 = søndag ... 6 = lørdag.
const HOURS_BY_WEEKDAY = {
  0: { open: "14:00", close: "21:30" },
  1: { open: "16:00", close: "21:30" },
  2: { open: "16:00", close: "21:30" },
  3: { open: "16:00", close: "21:30" },
  4: { open: "16:00", close: "21:30" },
  5: { open: "16:00", close: "21:30" },
  6: { open: "16:00", close: "21:30" },
};
