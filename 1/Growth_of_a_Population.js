function nbYear(p0, percent, aug, p) {
  let n=0;
  while (p>p0) {
    p0 = Math.floor(p0 + (p0*percent/100) + aug);
    n++
  } 
  return n;
}