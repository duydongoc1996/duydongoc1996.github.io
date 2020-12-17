function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function run() {
  let eats = [
    "Kang chang kung",
    "Bún riu",
    "Bún thái",
    "Mì quảng",
    "Cơm chay",
    "Bánh bèo again",
    "Thịt nướng",
    "Bò beafsteak",
  ];
  let plays = [
    "cv gia định",
    "cv hoàng văn thụ",
    "phòng D",
    "hoàng sa trường sa",
    "phòng Q",
  ];
  console.log('test')

  document.getElementById("eat").innerHTML = eats[getRandomInt(0, eats.length)];
  document.getElementById("play").innerHTML =
    plays[getRandomInt(0, plays.length)];
}
