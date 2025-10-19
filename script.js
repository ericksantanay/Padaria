    indice = 0
    setInterval(function(){
    let mensa = document.getElementById('txt')
    
    let frases = [ 
        "Sinta o aroma da felicidade",
        "Cada pão, uma história",
        "O sabor que transforma o dia",
        "Comece o dia com alegria",
        "Delícias feitas com amor",
        "Tradição que se renova a cada fornada",
        "Mais que pão, momentos",
        "O melhor da manhã está aqui",
        "Sabor que desperta sorrisos",
        "A felicidade tem cheiro de pão quentinho",
        "Cada fornada é feita com carinho",
        "Amor e pão em cada fatia",
        "O dia começa melhor com pão quentinho",
        "Sabores que encantam a todos",
        "Venha experimentar a alegria em forma de pão"
    ]
    // InnerText e indice
    mensa.innerText = (frases[indice])
    indice++

    // If
    if (indice >= frases.length) {
        indice = 0
    }
    
}, 1000)