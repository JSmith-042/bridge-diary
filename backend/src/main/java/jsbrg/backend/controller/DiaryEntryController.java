package jsbrg.backend.controller;

import jsbrg.backend.entity.DiaryEntryEntity;
import jsbrg.backend.service.DiaryEntryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class DiaryEntryController {

    private final DiaryEntryService diaryEntryService;

    public DiaryEntryController(DiaryEntryService diaryEntryService) {
        this.diaryEntryService = diaryEntryService;
    }

    @GetMapping("/entries")
    public ResponseEntity<List<DiaryEntryEntity>> getAllEntries()
    {
        return ResponseEntity.ok(diaryEntryService.findAllEntries());
    }
}
