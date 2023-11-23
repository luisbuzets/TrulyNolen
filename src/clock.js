function setup() {
    noCanvas()
    frameRate(1)
    
    let html = `
    <circle 
        cx="150" 
        cy="150" 
        r="5" 
        stroke="transparent" 
        fill="black" 
    />
    `
    for (let i = 0; i < 60; i++) {
        html += `
        <circle 
            cx="${(120 * cos(2 * PI * i / 60)) + 150}" 
            cy="${(120 * sin(2 * PI * i / 60)) + 150}" 
            r="${i % 15 == 0 ? 4 : i % 5 == 0 ? 2 : 1}" 
            stroke="transparent" 
            fill="black" 
            stroke-width="1"
        />`
    }
    select("#puntos").html(html)
}

function draw() {
    let hora = hour() % 12
    let minuto = minute()
    let segundo = second()
    select("#texto-hora-digital").html(`
        ${(hora + "").padStart(2, 0)}:${(minuto + "").padStart(2, 0)}:${(segundo + "").padStart(2, 0)}
    `)
    select("#horas").style("transform", `rotate(${360 * hora / 12}deg)`)
    select("#minutos").style("transform", `rotate(${360 * minuto / 60}deg)`)
    select("#segundos").style("transform", `rotate(${360 * segundo / 60}deg)`)
}