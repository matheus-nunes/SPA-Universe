export class Router {
  routes = {}

  add(routName, link) {
    this.routes[routName] = link
  }

  route(event) {
    event = event || window.event

    event.preventDefault()

    //a baixo estamos pegando o historico do pathname e passando pra url lá em cima
    window.history.pushState({}, '', event.target.href)
    this.handle()
  }

  handle() {
    const pathname = window.location.pathname

    const route = this.routes[pathname] || this.routes[404]

    console.log('antes do fetch')

    //
    //o fetch ele promete que vai buscar a função e o then é então quando ele buscar.. ele vai fazer a função
    //
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })
  }
}
