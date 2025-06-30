function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  const alt = document.querySelector("alt")
  if (html.classList.contains("light")){
    img.setAttribute("src", "./assets/avatardia.jpg")
    img.setAttribute("alt", "Snoop de Oculos")
  }else{
    img.setAttribute("src", "./assets/avatarnoite.jpg")
    img.setAttribute("alt", "Snloop com Fundo Branco")
  }
}

