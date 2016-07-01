package es.capgemini.tutorial.message.dao;

import java.util.Date;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import es.capgemini.devon.hibernate.dao.AbstractHibernateDao;
import es.capgemini.tutorial.message.model.Message;
import es.capgemini.tutorial.message.service.MessageServiceDto;

@Repository("messageDao")
public class MessageDaoHibernate extends AbstractHibernateDao<Message, Long> implements MessageDao {

    @Override
    public List<Message> find(MessageServiceDto dto) {
        Criteria criteria = getSession().createCriteria(Message.class);
        return criteria.list();
    }

    @Override
    public List<Message> findByFlow(Long id, Date last) {
        Criteria criteria = getSession().createCriteria(Message.class);
        criteria.add(Restrictions.eq("flow.id", id));
        //        criteria.add(Restrictions.gt("date", last.getTime()));
        return criteria.list();
    }

}
