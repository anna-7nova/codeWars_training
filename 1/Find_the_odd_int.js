function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    const count = A.filter((item) => item == A[i]);
    if (count.length % 2 !== 0) {
      return A[i];
    }
  }
}
