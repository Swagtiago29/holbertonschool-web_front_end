function createElement(data){
    const paragraph = document.createElement('p')
    paragraph.textContent = data
    document.body.appendChild(paragraph)
}
function queryWikipedia(callback){
    const xhr = new XMLHttpRequest()
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
    
    xhr.open("GET", url, true)
    xhr.onload = function () {
        console.log(xhr.status)
        if (xhr.status === 200){
            const response = JSON.parse(xhr.responseText)
            console.log(response)
        }
        else{
            console.log('error:', xhr.status)
        }
    }
}
queryWikipedia(createElement)