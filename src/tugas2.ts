// Menyimpan informasi mengenai pahlawan
type Hero = {
    name: string;
    age: number;
    isReadyFoBattery: boolean;
}

const hero: Hero = {
    name: "Arion",
    age: 30,
    isReadyFoBattery: true,
}

// Inisiasi varibel untuk sumber daya yang ada
let gold : number = 5000;
let foodSupply: number = 120;
let soldiers: number = 200;

// Variabel untuk menambah emas
let additionalGold: number = 1500;
gold += additionalGold;

// Variabel untuk menyimpan jumlah pengalaman
let battleExperience: number = 75;

// Fungsi untuk mengurangi kesehatan prajurit
const reduceHealth = (numberOfSoldiers: number, lostHealthPoints: number): void => {
    // Cek inputan tidak boleh kurang dari 0
    if (numberOfSoldiers < 0 || lostHealthPoints < 0) {
        throw new Error("Number of soldiers and lost health points must be greater than or equal to 0.");
    }
    let soldierHealth: number[] = Array(numberOfSoldiers).fill(100);
    for (let i = 0; i < numberOfSoldiers; i++) {
        soldierHealth[i] -= lostHealthPoints;
        console.log(`Soldier ${i + 1} Health: ${soldierHealth[i]}`);
    }
    console.log("\n");
}

// Rangkuman perjalanan arion
const summaryOfArion = (hero: Hero) : void => {
    console.log(`Hero name: ${hero.name}`);
    console.log(`Gold obtained: ${gold}`)
    console.log(`Experience point: ${battleExperience}\n`)
}

// Rangkuman sumber daya kerajaan
const kingdomResource = () : void => {
    console.log(`Gold: ${gold}`);
    console.log(`Food supply: ${foodSupply}`);
    console.log(`Soldiers: ${soldiers}`);
}

reduceHealth(5, 2);
summaryOfArion(hero)
kingdomResource()
