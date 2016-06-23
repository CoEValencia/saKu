package es.capgemini.tutorial.stream.dao;

import java.util.List;

import es.capgemini.devon.hibernate.dao.HibernateDao;
import es.capgemini.tutorial.stream.model.Stream;
import es.capgemini.tutorial.stream.service.StreamServiceDto;

public interface StreamDao extends HibernateDao<Stream, Long> {

    public List<Stream> find(StreamServiceDto dto);

    public List<Stream> findByName(String name);
}
