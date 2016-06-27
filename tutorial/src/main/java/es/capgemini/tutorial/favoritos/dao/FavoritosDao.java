package es.capgemini.tutorial.favoritos.dao;

import java.util.List;

import es.capgemini.devon.hibernate.dao.HibernateDao;
import es.capgemini.tutorial.favoritos.model.Favoritos;
import es.capgemini.tutorial.favoritos.service.FavoritosServiceDto;

public interface FavoritosDao extends HibernateDao<Favoritos, Long> {

    public List<Favoritos> find(FavoritosServiceDto dto);

    //    public List<Flow> findByIdUser(Long id);
}
