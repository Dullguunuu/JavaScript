let ognoo = prompt("Та жилээ оруулна уу"),
    sar = prompt("Та сараа оруулна уу"),
    udur = prompt("Та өдөрөө оруулна уу");

let ognooNumber = Number(ognoo);
let sarNumber = Number(sar);
let udurNumber = Number(udur);

if (Number.isInteger(ognooNumber) && ognooNumber > 0) {
    if (Number.isInteger(sarNumber) && sarNumber > 0 && sarNumber <= 1) {
        if (Number.isInteger(udurNumber) && udurNumber > 0 && udurNumber <= 31) {
            if (ognoo.length == 4) {
                sar = sar.length == 1 ? "0" + sar : sar;
                udur = udur.length == 1 ? "0" + udur : udur;

                let result = ognoo + "-" + sar + "-" + udur;

                alert(result);

                // console.log (ognoo + "-" + sar + "-" + udur);
            }
            else {
                alert("Та жилээ зөв оруулна уу")
            }
        } else {
            alert("Та өдрөө бүхэл тоо оруулна уу")
        }
    }
    else {
        alert("Та сараа бүхэл тоо оруулна уу")
    }
}
else {
    alert("Та жилээ бүхэл тоо оруулна уу")
}