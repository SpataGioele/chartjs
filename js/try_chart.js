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
                    label: "energy",
                    data: [50, 60, 74, 53, 57, 72],
                    borderWidth: 1,
                },
                {
                    label: "energy",
                    data: [55, 30, 24, 83, 57, 62],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            indexAxis: "y",
            scales: {
                x: {
                    grid: {
                        color: "#787878",
                    },
                    ticks: {
                        backdropColor: "#121215",
                        color: "#787878",
                    },
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
                    label: "Download",
                    data: [35, 100, 40, 80, 158, 70],
                    borderWidth: 3,
                    fill: true,
                },
                {
                    label: "Revenue",
                    data: [40, 80, 35, 160, 30, 85],
                    borderWidth: 3,
                    fill: true,
                },
                {
                    label: "Others",
                    data: [0, 80, 0, 130, 45, 160],
                    borderWidth: 3,
                    fill: true,
                },
            ],
        },
        options: {
            scales: {
                x: {
                    grid: {
                        color: "transparent",
                    },
                    beginAtZero: true,
                },
                y: {
                    grid: {
                        color: "#787878",
                    },
                    beginAtZero: true,
                },
            },
            elements: {
                line: {
                    tension: 0.4,
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