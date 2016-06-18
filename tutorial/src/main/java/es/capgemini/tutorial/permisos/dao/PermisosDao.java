package es.capgemini.tutorial.permisos.dao;

import java.util.List;

import es.capgemini.devon.hibernate.dao.HibernateDao;
import es.capgemini.tutorial.permisos.model.Permisos;
import es.capgemini.tutorial.permisos.service.PermisosServiceDto;

public interface PermisosDao extends HibernateDao<Permisos, Long> {

    public List<Permisos> find(PermisosServiceDto dto);

    public List<Permisos> findByUserId(Long id);
}