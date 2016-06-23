package es.capgemini.tutorial.common;

import es.capgemini.devon.bo.annotations.BusinessProxy;
import es.capgemini.tutorial.flow.service.FlowService;
import es.capgemini.tutorial.permisos.service.PermisosService;
import es.capgemini.tutorial.stream.service.StreamService;
import es.capgemini.tutorial.usuario.service.UsuarioService;

@BusinessProxy(root = true)
public abstract class BusinessOperations {

    /**
     * Operaciones sobre la entidad {@link Sala}
     */
    public UsuarioService usuario;
    public PermisosService permisos;
    public StreamService stream;
    public FlowService flow;
}
