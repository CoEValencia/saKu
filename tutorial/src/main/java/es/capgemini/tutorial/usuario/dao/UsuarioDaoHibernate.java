package es.capgemini.tutorial.usuario.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import es.capgemini.devon.hibernate.dao.AbstractHibernateDao;
import es.capgemini.tutorial.usuario.model.Usuario;
import es.capgemini.tutorial.usuario.service.UsuarioServiceDto;

@Repository("usuarioDao")
public class UsuarioDaoHibernate extends AbstractHibernateDao<Usuario, Long> implements UsuarioDao {

    @SuppressWarnings("unchecked")
    @Override
    public List<Usuario> find(UsuarioServiceDto dto) {
        Criteria criteria = getSession().createCriteria(Usuario.class);
        return criteria.list();
    }

    @Override
    public Usuario findByName(String name) {
        // TODO Auto-generated method stub

        Criteria criteria = getSession().createCriteria(Usuario.class);
        criteria.add(Restrictions.eq("userName", name));

        if (criteria.list().size() == 0) {
            return null;
        }

        return (Usuario) criteria.list().get(0);
    }

}
