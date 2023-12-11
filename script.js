const text = document.getElementById("text")
const add = document.getElementById("add")
const output = document.getElementById("myTable")

let clientsArray = []

add.addEventListener("click", () => {
    // Validacija
    if(!text.value) return alert("Laukelis tuščias")
    
    // Vardo padalinimas
    const fName = text.value.split(" ")

    // Sukurti eilute
    const row = document.createElement("tr")

    // Sukūrimas per DOM
    const fNameCell = document.createElement("td")
    fNameCell.innerText = fName[0]
    row.appendChild(fNameCell)

    const lNameCell = document.createElement("td")
    lNameCell.innerText = fName[1]
    row.appendChild(lNameCell)
    
    //pridėjimas prie lentelės
    output.appendChild(row)
    
    const clients = {
        firstName: fName[0],
        lastName:  fName[1]
    }

    // Pridėjimas į textArray
    clientsArray.push(clients)

    // Input išvalymas
    text.value = ""

    // Localstorage užkrovimas
    localStorage.setItem("clientsArray", JSON.stringify(clientsArray))

    // Atstatyti iš JSON į objektą
    const getItem = localStorage.getItem("clientsArray")
    clientsArray = JSON.parse(getItem)

    console.log(clientsArray)
})

clientsArray.forEach(client => {
    // Sukūrimas per DOM
    const span = document.createElement("span");
    span.innerText = `${client.firstName} ${client.lastName}, `
    output.append(span)
})





