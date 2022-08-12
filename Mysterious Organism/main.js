// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function
const pAequorFactory = (specimenNum, dna) => {
  return {
    _specimenNum: specimenNum,
    _dna: dna,
    mutate() {
      // select random number from 1 - 15
      let randBase = Math.floor(Math.random() * 15);
      // select index of current dna based on randBase result
      let currBase = this.dna[randBase];
      // get random new base
      let newBase = returnRandBase();
      // determine if new base is valid / if bases are the same re-run function
      if (newBase === currBase) {
        newBase = returnRandBase();
      } else {
        // replace with newBase
        dna[randBase] = newBase;
        return this.dna;
      }
    },
    // compare two specimen dna and print percentage in common
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          count++;
        }
      }
      console.log(
        `Specimen #${this._specimenNum} and specimen #${
          pAequor._specimenNum
        } have ${Math.floor((count / 15) * 100)}% DNA in common`
      );
    },

    // check if specimen DNA contains at least 60% C and G bases
    willLikelySurvive() {
      let survivalChance = 0;
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === "C" || this._dna[i] === "G") {
          survivalChance++;
        }
      }
      if (survivalChance >= 9) {
        return true;
      }
      return false;
    },
  };
};

//create an array of 30 viable pAequor object
const viablePAeqor = () => {
  const list = [];
  //iterate action 30 times
  for (i = 0; i < 30; i++) {
    //create a random pAequor
    let organism = pAequorFactory(i, mockUpStrand());
    //create a new pAequor until willLikelySurvive() return true
    while (!organism.willLikelySurvive()) {
      organism = pAequorFactory(i, mockUpStrand());
    }
    list.push(organism);
  }
  return list;
};

//create 30 viable pAequor
const manypAequor = viablePAeqor();
manypAequor.forEach((n) => console.log(n));
