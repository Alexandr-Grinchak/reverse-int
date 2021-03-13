module.exports = function reverse (n) {
    if(n < 0) {
        n = n * -1;
    }
  let u = String(n);
  let a = u.split("");
  let x = a.reverse();
  let y = x.join("");
  let t = Number(y);
  return t;
}
