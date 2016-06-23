package es.capgemini.tutorial.flow.service;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import es.capgemini.tutorial.stream.model.Stream;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FlowServiceDto {

    private Long id;
    private String name;
    private Stream stream;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Stream getStream() {
        return stream;
    }

    public void setStream(Stream streamId) {
        this.stream = streamId;
    }
}
