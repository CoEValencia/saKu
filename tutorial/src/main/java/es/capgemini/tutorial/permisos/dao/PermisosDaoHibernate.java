package es.capgemini.tutorial.permisos.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import es.capgemini.devon.hibernate.dao.AbstractHibernateDao;
import es.capgemini.tutorial.permisos.model.Permisos;
import es.capgemini.tutorial.permisos.service.PermisosServiceDto;

@Repository("permisosDao")
public class PermisosDaoHibernate extends AbstractHibernateDao<Permisos, Long> implements PermisosDao {

    @Override
    public List<Permisos> find(PermisosServiceDto dto) {
        Criteria criteria = getSession().createCriteria(Permisos.class);
        return criteria.list();
    }

    @Override
    public List<Permisos> findByUserId(Long id) {
        Criteria criteria = getSession().createCriteria(Permisos.class);
        criteria.add(Restrictions.eq("userId", id));

        return criteria.list();
    }

}
