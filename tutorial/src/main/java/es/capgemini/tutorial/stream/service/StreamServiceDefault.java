package es.capgemini.tutorial.stream.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import es.capgemini.devon.beans.Service;
import es.capgemini.tutorial.flow.service.FlowService;
import es.capgemini.tutorial.flow.service.FlowServiceDto;
import es.capgemini.tutorial.stream.dao.StreamDao;
import es.capgemini.tutorial.stream.model.Stream;

@Service("streamService")
public class StreamServiceDefault implements StreamService {

    @Autowired
    private StreamDao stream;

    @Autowired
    private FlowService flowManager;

    @Override
    public List<Stream> find(StreamServiceDto dto) {
        return getStreamDao().find(dto);
    }

    @Override
    public List<Stream> findByName(String name) {
        return getStreamDao().findByName(name);
    }

    @Override
    public Stream getUsuario(Long id) {
        return getStreamDao().get(id);
    }

    @Transactional(readOnly = false)
    @Override
    public Stream update(StreamServiceDto stream) {

        Stream aux = getStreamDao().getOrNew(stream.getId());
        aux.setName(stream.getName());
        getStreamDao().saveOrUpdate(aux);

        if (stream.getId() == null) {
            FlowServiceDto nuevo = new FlowServiceDto();
            nuevo.setName("[ MAIN ]");
            nuevo.setStreamId(aux.getId());
            getFlowDao().update(nuevo);
        }

        return aux;
    }

    @Override
    public void delete(Long id) {
        getStreamDao().deleteById(id);

    }

    public StreamDao getStreamDao() {
        return stream;
    }

    public FlowService getFlowDao() {
        return flowManager;
    }

}
