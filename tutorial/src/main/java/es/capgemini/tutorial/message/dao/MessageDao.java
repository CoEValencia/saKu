package es.capgemini.tutorial.message.dao;

import java.util.Date;
import java.util.List;

import es.capgemini.devon.hibernate.dao.HibernateDao;
import es.capgemini.tutorial.message.model.Message;
import es.capgemini.tutorial.message.service.MessageServiceDto;

public interface MessageDao extends HibernateDao<Message, Long> {

    public List<Message> find(MessageServiceDto dto);

    public List<Message> findByFlow(Long id, Date last);

}