package es.capgemini.tutorial.message.service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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
        aux.setDate(new Date());

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
    public List<Message> findByFlow(Long id, String superior) {
        DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
        Date date = null;
        try {
            date = formatter.parse(superior);
        } catch (ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return getMessageDao().findByFlow(id, date);
    }
}
