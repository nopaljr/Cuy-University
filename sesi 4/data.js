function saklar(action, lamp) {
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    

    if (action == 'on') {
        if (lamp == "1") {
            lampu1.src = "asset/on.gif";
        }
        if (lamp == "2") {
            lampu2.src = "asset/on.gif";
        }
    }
    if (action == 'off') {
        if (lamp == "1") {
            lampu1.src = "asset/off.gif";
        }
        if (lamp == "2") {
            lampu2.src = "asset/off.gif";
        }
    }
    
} 




















