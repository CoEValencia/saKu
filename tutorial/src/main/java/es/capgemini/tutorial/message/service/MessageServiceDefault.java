package es.capgemini.tutorial.message.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import es.capgemini.devon.beans.Service;
import es.capgemini.tutorial.message.dao.MessageDao;
import es.capgemini.tutorial.message.model.Message;

@Service("messagesService")
public class MessageServiceDefault implements MessageService {

    @Autowired
    private MessageDao message;

    @Override
    public List<Message> find(MessageServiceDto dto) {
        return getMessageDao().find(dto);
    }

    @Override
    public Message getUsuario(Long id) {
        // TODO Auto-generated method stub
        return getMessageDao().get(id);
    }

    @Transactional(readOnly = false)
    @Override
    public Message update(MessageServiceDto mess) {
        Message aux = getMessageDao().getOrNew(mess.getId());

        aux.setFlow(mess.getFlow());
        aux.setUser(mess.getUser());
        aux.setMessage(mess.getMessage());

        getMessageDao().saveOrUpdate(aux);

        return aux;
    }

    @Override
    public void delete(Long id) {
        getMessageDao().deleteById(id);
    }

    public MessageDao getMessageDao() {
        return message;
    }

    @Override
    public List<Message> findByFlow(Long id) {
        return getMessageDao().findByFlow(id);
    }
}
