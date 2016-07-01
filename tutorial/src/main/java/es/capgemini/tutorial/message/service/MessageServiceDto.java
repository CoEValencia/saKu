package es.capgemini.tutorial.message.service;

import java.util.Date;

import es.capgemini.tutorial.flow.model.Flow;
import es.capgemini.tutorial.usuario.model.Usuario;

public class MessageServiceDto {

    private Long id;
    private String message;
    private Usuario user;
    private Flow flow;
    private Date date;

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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
