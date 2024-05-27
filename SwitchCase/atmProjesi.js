
let bakiye = 1000;
let işlem = Number(prompt("1-Bakiye görüntüleme" + "\n2-Para çekme" + "\n3-Para yatırma"
    + "\n4-Çıkış" + "\nYapmak istediğiniz işlemi seçiniz"));

switch (işlem) {
    case 1:
        alert("Bakiyeniz: " + bakiye);
        break;

    case 2:
        let withdrawal = Number(prompt("çekmek istediğiniz tutarı giriniz"))
        if (bakiye >= withdrawal) {
            alert("işlem başarılı kalan bakiye: " + (bakiye - withdrawal));
        } else {
            alert("bakiyeniz yetersizdir. Çekilebilir tutar: " + bakiye)
        }
        break;

    case 3:
        let investment = Number(prompt("yatırmak istediğiniz tutarı giriniz"))
        if (investment > 0) {
            alert("işlem başarılı güncel bakiyeniz: " + (bakiye + investment));
        } else {
            alert("lütfen geçerli bir tutar giriniz ")
        }
        break;

    case 4:
        alert("güle güle ");
        break;

        default :
        alert("geçerli bir işlem seçiniz ")
}