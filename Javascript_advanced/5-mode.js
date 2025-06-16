function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size + 'px'
        document.body.style.fontWeight = weight
        document.body.style.transform = transform
        document.body.style.background = background
        document.body.style.color = color
    }
}
function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green')
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white')
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black')
    
    const paragraph = document.createElement('p')
    paragraph.textContent = 'Welcome Holberton!'
    document.body.appendChild(paragraph)

    const spookyButton = document.createElement('button')
    spookyButton.textContent = 'Spooky'
    spookyButton.onclick = spooky
    document.body.appendChild(spookyButton)

    const darkModeButton = document.createElement('button')
    darkModeButton.textContent = 'Dark Mode'
    darkModeButton.onclick = darkMode
    document.body.appendChild(darkModeButton)

    const screamModeButton = document.createElement('button')
    screamModeButton.textContent = 'Scream Mode'
    screamModeButton.onclick = screamMode
    document.body.appendChild(screamModeButton)
} 

main()