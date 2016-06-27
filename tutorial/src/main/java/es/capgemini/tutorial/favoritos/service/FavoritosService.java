package es.capgemini.tutorial.favoritos.service;

import java.util.List;

import es.capgemini.devon.bo.annotations.WebBusinessOperation;
import es.capgemini.tutorial.favoritos.model.Favoritos;

public interface FavoritosService {

    @WebBusinessOperation(value = "FAVS_FIND", convertToClass = FavoritosServiceDto.class)
    public List<Favoritos> find(FavoritosServiceDto dto);

    @WebBusinessOperation(value = "FAVS_GET", convertToClass = FavoritosServiceDto.class)
    public Favoritos getUsuario(Long id);

    @WebBusinessOperation(value = "FAVS_UPDATE", convertToClass = FavoritosServiceDto.class)
    public Favoritos update(FavoritosServiceDto sala);

    @WebBusinessOperation("FAVS_DELETE")
    public void delete(Long id);
}
