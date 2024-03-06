function main() {
    // primo chart
    const ctx = document.getElementById("try_one")
    new Chart(ctx, {
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


}

document.addEventListener("DOMContentLoaded", main)