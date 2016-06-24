package es.capgemini.tutorial.flow.service;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import es.capgemini.tutorial.stream.model.Stream;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FlowServiceDto {

    private Long id;
    private Long streamId;
    private String name;
    //private Stream stream;
    

    public Long getStreamId() {
        return streamId;
    }

    
    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    
    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    public void setStreamId(Long streamId) {
        this.streamId = streamId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

//    public Stream getStream() {
//        return stream;
//    }
//
//    public void setStream(Stream streamId) {
//        this.stream = streamId;
//    }
}
