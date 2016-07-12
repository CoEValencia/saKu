package es.capgemini.tutorial.usuario.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import es.capgemini.devon.beans.Service;
import es.capgemini.tutorial.usuario.dao.UsuarioDao;
import es.capgemini.tutorial.usuario.model.Usuario;

@Service("usuarioService")
public class UsuarioServiceDefault implements UsuarioService {

    @Autowired
    private UsuarioDao usuario;

    @Override
    public Collection<Usuario> find(UsuarioServiceDto dto) {
        return getUsuarioDao().find(dto);
    }

    @Override
    public Usuario getUsuario(Long id) {
        return getUsuarioDao().get(id);
    }

    @Transactional(readOnly = false)
    @Override
    public Usuario update(UsuarioServiceDto user) {
        Usuario aux = getUsuarioDao().getOrNew(user.getId());

        aux.setUserName(user.getUserName());
        aux.setEmail(user.getEmail());
        aux.setPassword(user.getPassword());
        aux.setName(user.getName());
        aux.setUserPic(user.getUserPic());
        
        getUsuarioDao().saveOrUpdate(aux);

        return aux;
    }

    @Transactional(readOnly = false)
    @Override
    public void delete(Long id) {
        getUsuarioDao().deleteById(id);
    }

    public UsuarioDao getUsuarioDao() {
        return usuario;
    }

    @Override
    public Usuario findByName(String name) {
        // TODO Auto-generated method stub
        return getUsuarioDao().findByName(name);
    }

}
