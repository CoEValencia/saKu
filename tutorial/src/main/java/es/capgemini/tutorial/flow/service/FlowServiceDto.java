package es.capgemini.tutorial.flow.service;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FlowServiceDto {

    private Long id;
    private String name;
    private Long stream;

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

    public Long getStream() {
        return stream;
    }

    public void setStream(Long streamId) {
        this.stream = streamId;
    }
}
