package es.capgemini.tutorial.flow.dao;

import java.util.List;

import es.capgemini.devon.hibernate.dao.HibernateDao;
import es.capgemini.tutorial.flow.model.Flow;
import es.capgemini.tutorial.flow.service.FlowServiceDto;

public interface FlowDao extends HibernateDao<Flow, Long> {

    public List<Flow> find(FlowServiceDto dto);

    public List<Flow> findByIdStream(Long id);
}
