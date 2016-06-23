package es.capgemini.tutorial.message.service;

import es.capgemini.tutorial.flow.model.Flow;
import es.capgemini.tutorial.usuario.model.Usuario;

public class MessageServiceDto {

    private Long id;
    private String message;
    private Usuario user;
    private Flow flow;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Usuario getUser() {
        return user;
    }

    public void setUser(Usuario user) {
        this.user = user;
    }

    public Flow getFlow() {
        return flow;
    }

    public void setFlow(Flow flow) {
        this.flow = flow;
    }
}
