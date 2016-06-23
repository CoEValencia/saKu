package es.capgemini.tutorial.flow.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import es.capgemini.devon.hibernate.dao.AbstractHibernateDao;
import es.capgemini.tutorial.flow.model.Flow;
import es.capgemini.tutorial.flow.service.FlowServiceDto;

@Repository("flowDao")
public class FlowDaoHibernate extends AbstractHibernateDao<Flow, Long> implements FlowDao {

    @Override
    public List<Flow> find(FlowServiceDto dto) {
        Criteria criteria = getSession().createCriteria(Flow.class);
        return criteria.list();
    }

    @Override
    public List<Flow> findByIdStream(Long id) {
        Criteria criteria = getSession().createCriteria(Flow.class);
        criteria.add(Restrictions.eq("stream", id));
        return criteria.list();
    }

}
