package es.capgemini.tutorial.permisos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import es.capgemini.devon.beans.Service;
import es.capgemini.tutorial.permisos.dao.PermisosDao;
import es.capgemini.tutorial.permisos.model.Permisos;

@Service("permisosService")
public class PermisosServiceDefault implements PermisosService {

    @Autowired
    private PermisosDao permisos;

    @Override
    public List<Permisos> find(PermisosServiceDto dto) {
        return getPermisosDao().find(dto);
    }

    @Override
    public List<Permisos> findByPermisosId(Long id) {
        return getPermisosDao().findByUserId(id);
    }

    @Override
    public Permisos getPermisos(Long id) {
        return getPermisosDao().get(id);
    }

    @Transactional(readOnly = false)
    @Override
    public Permisos update(PermisosServiceDto perm) {
        Permisos aux = getPermisosDao().getOrNew(perm.getId());

        aux.setAuthority(perm.getAuthority());
        aux.setUserId(perm.getUserId());

        getPermisosDao().saveOrUpdate(aux);

        return aux;
    }

    @Override
    public void delete(Long id) {
        getPermisosDao().deleteById(id);
    }

    public PermisosDao getPermisosDao() {
        return permisos;
    }

}
