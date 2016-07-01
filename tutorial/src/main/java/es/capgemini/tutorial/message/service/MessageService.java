package es.capgemini.tutorial.message.service;

import java.util.List;

import es.capgemini.devon.bo.annotations.BusinessProxy;
import es.capgemini.devon.bo.annotations.WebBusinessOperation;
import es.capgemini.tutorial.message.model.Message;

@BusinessProxy
public interface MessageService {

    @WebBusinessOperation(value = "MESSAGE_FIND", convertToClass = MessageServiceDto.class)
    public List<Message> find(MessageServiceDto dto);

    @WebBusinessOperation(value = "MESSAGE_GET", convertToClass = MessageServiceDto.class)
    public Message getUsuario(Long id);

    @WebBusinessOperation(value = "MESSAGE_UPDATE", convertToClass = MessageServiceDto.class)
    public Message update(MessageServiceDto sala);

    @WebBusinessOperation("MESSAGE_DELETE")
    public void delete(Long id);

    @WebBusinessOperation(value = "MESSAGE_FIND_BY_FLOW", convertToClass = MessageServiceDto.class)
    public List<Message> findByFlow(Long id, String superior);
}
