// Malé algoritmy
// Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. Budeme jej používat ve všech následujících úlohách.
// 1.Vypište do stránky všechna čísla.
// 2.Vypište do stránky druhé mocniny všech čísel.
// 3.Vypište do stránky pouze záporná čísla.
// 4.Vypište do stránky absolutní hodnotu všech čísel.
// 5.Vypište do stránky pouze sudá čísla.
// 6.Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
// 7.Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
// 8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
// 9.Spočítejte, kolik je v seznamu záporných čísel.
// 10.Spočítejte součet všech čísel v poli.
// 11.Spočítejte průměr všech čísel v poli.
// 12.Spočítejte součet všech kladných čísel v poli.

const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];
// 1.Vypište do stránky všechna čísla.
document.body.innerHTML += `<p>1. Vypište do stránky všechna čísla:</p>`
document.body.innerHTML += numbers

// 2.Vypište do stránky druhé mocniny všech čísel.
document.body.innerHTML += `<p>2. Vypište do stránky druhé mocniny všech čísel:</p>`
const druheMocniny = numbers.map((numbers) => {
  return (numbers ** 2)
})
document.body.innerHTML += druheMocniny

// 3.Vypište do stránky pouze záporná čísla.
document.body.innerHTML += `<p>3. Vypište do stránky pouze záporná čísla:</p>`
const zapornaCisla = numbers.filter(number => number < 0);
document.body.innerHTML += zapornaCisla

// 4.Vypište do stránky absolutní hodnotu všech čísel.
document.body.innerHTML += `<p>4. Vypište do stránky absolutní hodnotu všech čísel:</p>`
const absolutniHodnoty = numbers.map(number => Math.abs(number));
document.body.innerHTML += absolutniHodnoty

// 5.Vypište do stránky pouze sudá čísla.
document.body.innerHTML += `<p>5. Vypište do stránky pouze sudá čísla:</p>`
const sudaCisla = numbers.filter(number => number % 2 === 0);
document.body.innerHTML += sudaCisla

// 6.Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
document.body.innerHTML += `<p>6. Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi:</p>`
const delitelnaTremi = numbers.filter(number => number % 3 === 0 );
document.body.innerHTML += delitelnaTremi

// 7.Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
document.body.innerHTML += `<p>7. Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5:</p>`
const vzdalenostOdCislaPet = numbers.map((number) => {
  return (numbers.indexOf(number)) - (numbers.indexOf(5))
})
document.body.innerHTML += vzdalenostOdCislaPet

// 8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
document.body.innerHTML += `<p>8. Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5:</p>`
const druhaMocninaVzdalenosti = numbers.map((number) => {
  return (((numbers.indexOf(number)) - (numbers.indexOf(5))) ** 2);
})
document.body.innerHTML += druhaMocninaVzdalenosti

// 9.Spočítejte, kolik je v seznamu záporných čísel.
document.body.innerHTML += `<p>9. Spočítejte, kolik je v seznamu záporných čísel:</p>`
document.body.innerHTML += zapornaCisla.length

// 10.Spočítejte součet všech čísel v poli.
document.body.innerHTML += `<p>10. Spočítejte součet všech čísel v poli:</p>`
const soucet = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
document.body.innerHTML += soucet

// 11.Spočítejte průměr všech čísel v poli.
document.body.innerHTML += `<p>11. Spočítejte průměr všech čísel v poli:</p>`
const prumer = soucet / numbers.length
document.body.innerHTML += prumer

// 12.Spočítejte součet všech kladných čísel v poli.
document.body.innerHTML += `<p>12. Spočítejte součet všech kladných čísel v poli:</p>`
const kladnaCisla = numbers.filter(number => number > 0);
const soucetKladnychCisel = kladnaCisla.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
document.body.innerHTML += soucetKladnychCisel


