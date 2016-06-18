package es.capgemini.tutorial.permisos.service;

import java.util.List;

import es.capgemini.devon.bo.annotations.BusinessProxy;
import es.capgemini.devon.bo.annotations.WebBusinessOperation;
import es.capgemini.tutorial.permisos.model.Permisos;

@BusinessProxy
public interface PermisosService {

    @WebBusinessOperation(value = "PERMISOS_FIND", convertToClass = PermisosServiceDto.class)
    public List<Permisos> find(PermisosServiceDto dto);

    @WebBusinessOperation(value = "PERMISOS_FIND_BY_ID", convertToClass = PermisosServiceDto.class)
    public List<Permisos> findByPermisosId(Long id);

    @WebBusinessOperation(value = "PERMISOS_GET", convertToClass = PermisosServiceDto.class)
    public Permisos getPermisos(Long id);

    @WebBusinessOperation(value = "PERMISOS_UPDATE", convertToClass = PermisosServiceDto.class)
    public Permisos update(PermisosServiceDto sala);

    @WebBusinessOperation("PERMISOS_DELETE")
    public void delete(Long id);

}
