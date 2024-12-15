// Interfaces for MajorCredits and MinorCredits
interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}
// Functions to sum credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major"
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor"
  };
}
