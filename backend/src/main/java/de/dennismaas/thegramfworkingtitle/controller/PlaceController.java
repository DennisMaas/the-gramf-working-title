package de.dennismaas.thegramfworkingtitle.controller;

import de.dennismaas.thegramfworkingtitle.model.Place;
import de.dennismaas.thegramfworkingtitle.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/places")
public class PlaceController {
    private final PlaceService placeService;

    @Autowired
    public PlaceController(PlaceService placeService){
        this.placeService = placeService;
    }

    @GetMapping
    public List<Place> searchPlace(@RequestParam Optional<String> title) {
        return placeService.search(title);
    }

    @GetMapping("{placeId}")
    public  Place getById(@PathVariable @NonNull String placeId) {
        return placeService.findById(placeId);
    }

}
