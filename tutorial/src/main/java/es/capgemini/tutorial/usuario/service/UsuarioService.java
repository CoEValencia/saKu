package es.capgemini.tutorial.usuario.service;

import java.util.Collection;

import es.capgemini.devon.bo.annotations.BusinessProxy;
import es.capgemini.devon.bo.annotations.WebBusinessOperation;
import es.capgemini.tutorial.usuario.model.Usuario;

@BusinessProxy
public interface UsuarioService {

    @WebBusinessOperation(value = "USUARIO_FIND", convertToClass = UsuarioServiceDto.class)
    public Collection<Usuario> find(UsuarioServiceDto dto);

    @WebBusinessOperation(value = "USUARIO_FIND_BY_NAME", convertToClass = UsuarioServiceDto.class)
    public Usuario findByName(String name);

    @WebBusinessOperation(value = "USUARIO_GET", convertToClass = UsuarioServiceDto.class)
    public Usuario getUsuario(Long id);

    @WebBusinessOperation(value = "USUARIO_UPDATE", convertToClass = UsuarioServiceDto.class)
    public Usuario update(UsuarioServiceDto sala);

    @WebBusinessOperation("USUARIO_DELETE")
    public void delete(Long id);
}
