const personName = prompt(`Ismingizni kiriting`);
const randomHarf = prompt(`Birorta harf kiriting`);

if (personName.includes(`${randomHarf}`)) {
    alert(`ismining ichida ${randomHarf} harfi mavjud`);
} else {
    alert(`ismining ichida ${randomHarf} harfi mavjud emas`)
}