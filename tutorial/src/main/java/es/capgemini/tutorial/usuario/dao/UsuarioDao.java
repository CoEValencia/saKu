package es.capgemini.tutorial.usuario.dao;

import java.util.List;

import es.capgemini.devon.hibernate.dao.HibernateDao;
import es.capgemini.tutorial.usuario.model.Usuario;
import es.capgemini.tutorial.usuario.service.UsuarioServiceDto;

public interface UsuarioDao extends HibernateDao<Usuario, Long> {

    public List<Usuario> find(UsuarioServiceDto dto);

    public Usuario findByName(String name);
}
