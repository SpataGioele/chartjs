function main() {
    simpleDataChart({
        canvas: document.getElementById("energy_chart"),
        type: "polarArea",
        labels: [
            "Nuclear",
            "Solar Energy",
            "Gas",
            "Crude",
            "Renewable",
            "Coal",
        ],
        label: "energy",
        data: [50, 60, 74, 53, 57, 72],
        borderWidth: 1,
        scales: {
            r: {
                grid: {
                    color: "#1f1f1f",
                },
                ticks: {
                    backdropColor: "#121215",
                    color: "white",
                },
            },
        },
        elements: null,
    })

    tripleDataChart({
        canvas: document.getElementById("pollution_chart"),
        type: "line",
        labels: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno"],
        label: "Download",
        data: [35, 100, 40, 80, 158, 70],
        borderWidth: 3,
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
        label2: "Revenue",
        data2: [40, 80, 35, 160, 30, 85],
        label3: "Others",
        data3: [0, 80, 0, 130, 45, 160],
        fill: true,
    })

    simpleDataChart({
        canvas: document.getElementById("facts_chart"),
        type: "bar",
        labels: [
            "Nuclear",
            "Solar Energy",
            "Gas",
            "Crude",
            "Renewable",
            "Coal",
        ],
        label: "energy",
        data: [50, 60, 74, 53, 57, 72],
        borderWidth: 1,
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
        elements: null,
    })
}

// functions
function simpleDataChart({
    canvas = null,
    type = "",
    labels = [],
    label = "",
    data = [],
    borderWidth = 1,
    scales = {},
    elements = {},
}) {
    new Chart(canvas, {
        type: type,
        data: {
            labels: labels,
            datasets: [
                {
                    label: label,
                    data: data,
                    borderWidth: borderWidth,
                },
            ],
        },
        options: {
            indexAxis: 'y',
            scales: scales,
            elements: elements,
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

function tripleDataChart({
    canvas = null,
    type = "",
    labels = [],
    label = "",
    data = [],
    borderWidth = 1,
    scales = {},
    elements = {},
    label2 = "",
    data2 = [],
    label3 = "",
    data3 = [],
    fill = false
}) {
    new Chart(canvas, {
        type: type,
        data: {
            labels: labels,
            datasets: [
                {
                    label: label,
                    data: data,
                    borderWidth: borderWidth,
                    fill: fill,
                },
                {
                    label: label2,
                    data: data2,
                    borderWidth: borderWidth,
                    fill: fill,
                },
                {
                    label: label3,
                    data: data3,
                    borderWidth: borderWidth,
                    fill: fill,
                },
            ],
        },
        options: {
            scales: scales,
            elements: elements,
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

// listeners
document.addEventListener("DOMContentLoaded", main())
