function changeColor() {
    let hex_code = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hex_num = '';

    for (let i = 0; i <= 5; i++) {

        let random_index = Math.floor(Math.random() * hex_code.length);
        hex_num += hex_code[random_index];
    }
    document.getElementById("hex-code").innerHTML = hex_num;
    document.getElementsByTagName("body")[0].style.background = "#" + hex_num;
}