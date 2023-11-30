// Prime Number Checker 

function IsPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

export default IsPrime;