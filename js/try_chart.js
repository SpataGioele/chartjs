function main() {
    // primo chart
    new Chart(document.getElementById("try_one"), {
        type: "bar",
        data: {
            labels: [
                "Nuclear",
                "Solar Energy",
                "Gas",
                "Crude",
                "Renewable",
                "Coal",
            ],
            datasets: [
                {
                    label: "2000",
                    data: [50, 60, 74, 53, 57, 72],
                    borderWidth: 1,
                },
                {
                    label: "2024",
                    data: [55, 30, 24, 83, 57, 62],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            indexAxis: "y", // le barre partono dall'asse y
            scales: {
                x: {    // asse x
                    grid: { // grid dell'asse x
                        color: "#787878",
                    },
                    ticks: {    // le etichette generate di valori inseriti
                        backdropColor: "#121215",   // il colore di sfondo
                        color: "#787878",   // il colore del testo
                    },
                },
            },
            plugins: {
                legend: {   // legenda
                    position: "bottom", // sotto il grafico
                    labels: {
                        usePointStyle: true,    // le etichette sono a cerchio, di solito sono a rettangolo
                    },
                },
            },
        },
    })

    // secondo chart
    new Chart(document.getElementById("try_second"), {
        type: "line",
        data: {
            labels: [
                "gennaio",
                "febbraio",
                "marzo",
                "aprile",
                "maggio",
                "giugno",
            ],
            datasets: [
                {
                    // prima serie di dati
                    label: "Download",
                    data: [35, 100, 40, 80, 158, 70],
                    borderWidth: 3,
                    fill: true, // copre l'area sottostante alle linee
                },
                {
                    // seconda serie di dati
                    label: "Revenue",
                    data: [40, 80, 35, 160, 30, 85],
                    borderWidth: 3,
                    fill: true,
                },
                {
                    // terza serie di dati
                    label: "Others",
                    data: [0, 80, 0, 130, 45, 160],
                    borderWidth: 3,
                    fill: true,
                },
            ],
        },
        options: {
            scales: {
                x: {    // asse x
                    grid: { // griglia asse x
                        color: "transparent",   // colore della griglia trasparente
                    },
                },
                y: {    // asse y
                    grid: { // griglia asse y
                        color: "#787878",   // colore griglia
                    },
                },
            },
            elements: {
                line: { // linee
                    tension: 0.4,   // linea  curva "smooth"
                },
            },
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: true,
                    },
                },
            },
        },
    })
}

document.addEventListener("DOMContentLoaded", main)