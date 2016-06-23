package es.capgemini.tutorial.stream.service;

import java.util.List;

import es.capgemini.devon.bo.annotations.BusinessProxy;
import es.capgemini.devon.bo.annotations.WebBusinessOperation;
import es.capgemini.tutorial.stream.model.Stream;

@BusinessProxy
public interface StreamService {

    @WebBusinessOperation(value = "STREAM_FIND", convertToClass = StreamServiceDto.class)
    public List<Stream> find(StreamServiceDto dto);

    @WebBusinessOperation(value = "STREAM_FIND_BY_NAME")
    public List<Stream> findByName(String name);

    @WebBusinessOperation(value = "STREAM_GET", convertToClass = StreamServiceDto.class)
    public Stream getUsuario(Long id);

    @WebBusinessOperation(value = "STREAM_UPDATE", convertToClass = StreamServiceDto.class)
    public Stream update(StreamServiceDto sala);

    @WebBusinessOperation("STREAM_DELETE")
    public void delete(Long id);
}
