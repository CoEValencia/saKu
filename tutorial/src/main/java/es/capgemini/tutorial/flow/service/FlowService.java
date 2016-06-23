package es.capgemini.tutorial.flow.service;

import java.util.List;

import es.capgemini.devon.bo.annotations.BusinessProxy;
import es.capgemini.devon.bo.annotations.WebBusinessOperation;
import es.capgemini.tutorial.flow.model.Flow;

@BusinessProxy
public interface FlowService {

    @WebBusinessOperation(value = "FLOW_FIND", convertToClass = FlowServiceDto.class)
    public List<Flow> find(FlowServiceDto dto);

    @WebBusinessOperation(value = "FLOW_GET", convertToClass = FlowServiceDto.class)
    public Flow getUsuario(Long id);

    @WebBusinessOperation(value = "FLOW_UPDATE", convertToClass = FlowServiceDto.class)
    public Flow update(FlowServiceDto sala);

    @WebBusinessOperation("FLOW_DELETE")
    public void delete(Long id);

    @WebBusinessOperation(value = "FLOW_FIND_BY_ID", convertToClass = FlowServiceDto.class)
    public List<Flow> findByIdStream(Long id);

}
