function toggleMode(){
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute('src', "./assets/people-875617_640.jpg")
 } else {
  img.setAttribute("src", "./assets/people-875617_640.jpg")
 }
}