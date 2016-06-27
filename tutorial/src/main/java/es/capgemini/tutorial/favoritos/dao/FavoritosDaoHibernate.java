package es.capgemini.tutorial.favoritos.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.springframework.stereotype.Repository;

import es.capgemini.devon.hibernate.dao.AbstractHibernateDao;
import es.capgemini.tutorial.favoritos.model.Favoritos;
import es.capgemini.tutorial.favoritos.service.FavoritosServiceDto;
import es.capgemini.tutorial.flow.model.Flow;

@Repository("favoritosDao")
public class FavoritosDaoHibernate extends AbstractHibernateDao<Favoritos, Long> implements FavoritosDao {

    @Override
    public List<Favoritos> find(FavoritosServiceDto dto) {
        Criteria criteria = getSession().createCriteria(Flow.class);
        return criteria.list();
    }

    //    @Override
    //    public List<Flow> findByIdUser(Long id) {
    //        Criteria criteria = getSession().createCriteria(Flow.class);
    //        criteria.add(Restrictions.eq("stream.id", id));
    //        return criteria.list();
    //    }

}