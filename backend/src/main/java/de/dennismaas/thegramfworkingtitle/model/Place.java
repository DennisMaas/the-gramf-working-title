package de.dennismaas.thegramfworkingtitle.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "places")
public class Place {
    @Id
    private String id;
    private String primaryPictureUrl;
    private String type;
    private String title;
    private String street;
    private String address;
    private String latitude;
    private String longitude;
    private String placeDescription;
    private String pictureDescription;
    private String aperture;
    private String focalLength;
    private String shutterSpeed;
    private String iso;
    private String youTubeUrl;
    private String extraOne;
    private String extraTwo;
    private String particularities;
}