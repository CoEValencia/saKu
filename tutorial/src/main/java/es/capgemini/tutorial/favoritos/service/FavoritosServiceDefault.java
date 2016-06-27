package es.capgemini.tutorial.favoritos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import es.capgemini.devon.beans.Service;
import es.capgemini.tutorial.favoritos.dao.FavoritosDao;
import es.capgemini.tutorial.favoritos.model.Favoritos;
import es.capgemini.tutorial.flow.dao.FlowDao;
import es.capgemini.tutorial.stream.service.StreamService;

@Service("favoriteService")
public class FavoritosServiceDefault implements FavoritosService {

    @Autowired
    private FavoritosDao favoritosDao;

    @Autowired
    private FlowDao flowDao;

    @Autowired
    private StreamService streamManager;

    @Override
    public List<Favoritos> find(FavoritosServiceDto dto) {
        return getFavoritosDao().find(dto);
    }

    @Override
    public Favoritos getUsuario(Long id) {
        return getFavoritosDao().get(id);
    }

    @Transactional(readOnly = false)
    @Override
    public Favoritos update(FavoritosServiceDto flow) {
        return null;
    }

    @Override
    public void delete(Long id) {
        getFavoritosDao().deleteById(id);
    }

    public FavoritosDao getFavoritosDao() {
        return favoritosDao;
    }

}