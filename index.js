function reductionNumer(n) {
  if (n < 1000) return n;
  n = n.toString();
  if (n.length == 4) {
    let a = n[1];
    if (a != 0) {
      return `${n[0]}.${a}к`;
    }
    return `${n[0]}к`;
  }
  if (n.length == 6) {
    return `${n[0]}${n[1]}${n[2]}к`;
  }
  if (n.length == 7) {
    let a = n[1];
    if (a != 0) {
      return `${n[0]}.${a}кк`;
    }
    return `${n[0]}кк`;
  }
  if (n.length == 8) {
    let a = n[2];
    if (a != 0) {
      return `${n[0]}${n[1]}.${a}кк`;
    }
    return `${n[0]}кк`;
  }
  if (n.length == 9) {
    return `${n[0]}${n[1]}${n[2]}кк`;
  }
  if (n.length == 10) {
    let a = n[1];
    if (a != 0) {
      return `${n[0]}.${a}ккк`;
    }
    return `${n[0]}ккк`;
  }
  return parseInt(n);
}

let user = {
  balance: 554419515,
};

let balanceUserInBrowser = reductionNumer(user.balance);

console.log(balanceUserInBrowser);
