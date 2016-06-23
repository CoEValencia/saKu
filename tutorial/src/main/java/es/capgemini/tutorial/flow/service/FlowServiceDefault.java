package es.capgemini.tutorial.flow.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import es.capgemini.devon.beans.Service;
import es.capgemini.tutorial.flow.dao.FlowDao;
import es.capgemini.tutorial.flow.model.Flow;

@Service("flowService")
public class FlowServiceDefault implements FlowService {

    @Autowired
    private FlowDao flow;

    @Override
    public List<Flow> find(FlowServiceDto dto) {
        return getFlowDao().find(dto);
    }

    @Override
    public Flow getUsuario(Long id) {
        return getFlowDao().get(id);
    }

    @Transactional(readOnly = false)
    @Override
    public Flow update(FlowServiceDto flow) {
        Flow aux = getFlowDao().getOrNew(flow.getId());

        aux.setName(flow.getName());
        aux.setStream(flow.getStream());

        getFlowDao().saveOrUpdate(aux);

        return aux;
    }

    @Override
    public void delete(Long id) {
        getFlowDao().deleteById(id);
    }

    public FlowDao getFlowDao() {
        return flow;
    }

    @Override
    public List<Flow> findByIdStream(Long id) {
        return getFlowDao().findByIdStream(id);
    }
}
