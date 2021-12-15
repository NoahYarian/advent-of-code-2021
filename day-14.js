const TEMPLATE = "FPNFCVSNNFSFHHOCNBOB";
const PAIRS = [["ON","S"],["SO","B"],["OH","C"],["SN","F"],["BP","O"],["SK","F"],["OO","K"],["CF","O"],["PP","F"],["KS","K"],["KN","B"],["BN","H"],["HN","H"],["NP","P"],["BB","N"],["SB","F"],["BH","V"],["NV","S"],["PO","S"],["CN","N"],["VP","B"],["HH","B"],["NB","V"],["NF","O"],["BV","B"],["CV","B"],["SS","H"],["CB","C"],["VN","S"],["FH","K"],["BF","H"],["NH","P"],["PV","K"],["OP","F"],["HO","N"],["SH","C"],["VH","P"],["VK","B"],["OF","F"],["KK","B"],["SC","H"],["CO","S"],["BK","V"],["PF","B"],["OK","K"],["FO","V"],["CH","O"],["KO","B"],["CS","V"],["OC","P"],["SP","V"],["KF","C"],["HV","S"],["KH","B"],["VS","K"],["KB","F"],["FF","P"],["VF","H"],["NC","S"],["HB","V"],["NN","C"],["FV","B"],["PH","V"],["KV","C"],["PB","C"],["OS","O"],["PS","H"],["FS","N"],["FP","O"],["VV","O"],["FN","V"],["NO","K"],["NK","V"],["OB","F"],["PC","O"],["OV","H"],["FK","C"],["HS","F"],["SF","N"],["VC","C"],["BS","N"],["PK","O"],["FB","S"],["CK","B"],["KP","N"],["KC","F"],["BC","F"],["HK","H"],["VO","O"],["NS","B"],["VB","K"],["FC","K"],["SV","O"],["HF","H"],["HC","C"],["CP","O"],["CC","P"],["PN","P"],["HP","C"],["BO","F"]];

function step(polymer) {
  let newPolymer = polymer[0];
  outer: for (let i = 1, pairMatched, pair; i < polymer.length; i++) {
    pair = polymer[i-1] + polymer[i];
    pairMatched = false;
    inner: for (let j = 0; j < PAIRS.length; j++) {
      if (pair === PAIRS[j][0]) {
        newPolymer += (PAIRS[j][1] + polymer[i]);
        pairMatched = true;
        continue outer;
      }
    }
    if (!pairMatched) {
      newPolymer += polymer[i];
    }
  }
  return newPolymer;
}

function stepXTimes (polymer, x) {
  let newPolymer = polymer.slice();
  for (let i = 0; i < x; i++) {
    newPolymer = step(newPolymer);
  }
  return newPolymer;
}

function getMostCommonCountMinusLeastCommon(polymer) {
  let counts = {};
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0, null;
  for (let i = 0, element; i < polymer.length; i++) {
    element = polymer[i];
    if (counts[element]) {
      counts[element]++;
    } else {
      counts[element] = 1;
    }
  }
  for (let element in counts) {
    let count = counts[element];
    if (count > max) max = count;
    if (count < min) min = count;
  }
  return max - min;
}