// Tugas 1

// No 1


// No 2
class Kalkulator {
    penjumlahan = (a : number, b : number) : number => {
        return a + b;
    }
    pengurangan = (a : number, b : number) : number => {
        return a - b;
    }
    perkalian = (a : number, b : number) : number => {
        return a * b;
    }
    pembagian = (a : number, b : number) : number => {
        return a / b;
    }
}

const kalkulator = new Kalkulator()

console.log(kalkulator.penjumlahan(20, 20))
console.log(kalkulator.pengurangan(20, 20))
console.log(kalkulator.perkalian(20, 20))
console.log(kalkulator.pembagian(20, 20))


