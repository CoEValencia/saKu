package es.capgemini.tutorial.favoritos.service;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import es.capgemini.tutorial.stream.model.Stream;
import es.capgemini.tutorial.usuario.model.Usuario;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FavoritosServiceDto {

    private Long id;
    private Usuario user;
    private Stream stream;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getUser() {
        return user;
    }

    public void setUser(Usuario user) {
        this.user = user;
    }

    public Stream getStream() {
        return stream;
    }

    public void setStream(Stream stream) {
        this.stream = stream;
    }
}
