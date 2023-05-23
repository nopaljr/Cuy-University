const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loader = document.getElementById("loader")
const container = document.getElementsByClassName("container")
let init = 0

const botsay = (data) => {
    return ["Selamat datang, saya ZeroBot, siapa nama kamu ?",
        `Hallo ${data?.Nama}, usia kamu berapa tahun ?`,
        `owhh ${data?.usia} tahun, hobi kamu apa ?`,
        `owhh ${data?.hobi} sama dong, btw kamu punya pacar gak ?`,
        `owhh ${data?.pacar}, okeh deh kalau gitu, have nice day ya`,
    ]
}

pertanyaan.innerHTML = botsay()[0]

function botstart() {
    if (jawaban.value.length < 1) {
        return alert ("Silahkan isi jawaban terlebih dahulu")
    }
    init++
    if (init === 1) {
        botDelay({ Nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function finishing() {
    loader.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        loader.style.display = "none"
        container[0].style.filter = "blur(0)"
        pertanyaan.innerHTML = `Terimakasih sudah mampir ke ZeroBot`
    }, [1000])
    jawaban.value = ""
}

function botEnd() {
    alert("Kamu akan diarahkan ke halaman utama")
    loader.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        loader.style.display = "none"
        container[0].style.filter = "blur(0)"
        window.location.reload()
    }, [1000])
    jawaban.value = ""
    
}

function botDelay(jawabanUser) {
    loader.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botsay(jawabanUser)[init]
        loader.style.display = "none"
        container[0].style.filter = "blur(0)"
    }, [1500])
    jawaban.value = ""
    
}