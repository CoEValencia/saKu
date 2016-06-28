package es.capgemini.tutorial.favoritos.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import es.capgemini.tutorial.stream.model.Stream;
import es.capgemini.tutorial.usuario.model.Usuario;

@Entity
@Table(name = "FAVS")
public class Favoritos implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;

    @JoinColumn(name = "USER_ID")
    @ManyToOne
    private Usuario user;

    @JoinColumn(name = "STREAM_ID")
    @ManyToOne
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
