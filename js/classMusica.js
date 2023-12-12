export default class Musica {
  #id;
  #titulo;
  #artista;
  #categoria;
  #imagen;
  #duracion;

  constructor(id, titulo, artista, categoria, imagen, duracion) {
    this.#id = id;
    this.#titulo = titulo;
    this.#artista = artista;
    this.#categoria = categoria;
    this.#imagen = imagen;
    this.#duracion = duracion;
  }

  get id() {
    return this.#id;
  }

  get titulo() {
    return this.#titulo;
  }

  set titulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }

  get artista() {
    return this.#artista;
  }

  set artista(nuevoArtista) {
    this.#artista = nuevoArtista;
  }

  get categoria() {
    return this.#categoria;
  }

  set categoria(nuevaCategoria) {
    this.#categoria = nuevaCategoria;
  }

  get imagen() {
    return this.#imagen;
  }

  set imagen(nuevaImagen) {
    this.#imagen = nuevaImagen;
  }

  get duracion() {
    return this.#duracion;
  }

  set duracion(nuevaDuracion) {
    this.#duracion = nuevaDuracion;
  }
}
