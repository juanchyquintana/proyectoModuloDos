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
}