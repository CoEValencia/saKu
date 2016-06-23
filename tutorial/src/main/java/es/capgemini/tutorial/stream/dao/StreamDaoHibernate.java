package es.capgemini.tutorial.stream.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import es.capgemini.devon.hibernate.dao.AbstractHibernateDao;
import es.capgemini.tutorial.stream.model.Stream;
import es.capgemini.tutorial.stream.service.StreamServiceDto;

@Repository("streamDao")
public class StreamDaoHibernate extends AbstractHibernateDao<Stream, Long> implements StreamDao {

    @Override
    public List<Stream> find(StreamServiceDto dto) {
        Criteria criteria = getSession().createCriteria(Stream.class);
        return criteria.list();
    }

    @Override
    public List<Stream> findByName(String name) {

        Criteria criteria = getSession().createCriteria(Stream.class);
        criteria.add(Restrictions.like("name", "%" + name + "%", MatchMode.ANYWHERE));

        return criteria.list();
    }

}
