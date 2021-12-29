function fungsi() {
    let hewan = document.getElementById("pilihan").value;

    if (hewan == "gajah") {
        gajah = document.getElementById("isigambar").innerHTML = '<img src="gajahsrilanka.jpg" class="gambar">'
        window.alert("Ini adalah gambar hewan langka, yaitu Gajah Sri Lanka")
    }

    if (hewan == "lumbalumba") {
        gajah = document.getElementById("isigambar").innerHTML = '<img src="lumbalumbavaquita.jpg" class="gambar">'
        window.alert("Ini adalah gambar hewan langka, yaitu Lumba Lumba Vaquita")
    }

    if (hewan == "orangutan") {
        gajah = document.getElementById("isigambar").innerHTML = '<img src="orangutan.jpg" class="gambar">'
        window.alert("Ini adalah gambar hewan langka, yaitu Orang Utan")
    }

    if (hewan == "pandamerah") {
        gajah = document.getElementById("isigambar").innerHTML = '<img src="pandamerah.jpg" class="gambar">'
        window.alert("Ini adalah gambar hewan langka, yaitu Panda Merah")
    }

    if (hewan == "penyubelimbing") {
        gajah = document.getElementById("isigambar").innerHTML = '<img src="penyubelimbing.jpg" class="gambar">'
        window.alert("Ini adalah gambar hewan langka, yaitu Penyu Belimbing")
    }
}
