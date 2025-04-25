package jsbrg.backend.controller;

import jsbrg.backend.entity.DiaryEntryEntity;
import jsbrg.backend.service.DiaryEntryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
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

    @GetMapping("/entry/{id}")
    public ResponseEntity<DiaryEntryEntity> getAllEntries(@PathVariable Long id)
    {
        return ResponseEntity.ok(diaryEntryService.findEntryById(id));
    }

    @PostMapping("/entry")
    public ResponseEntity<DiaryEntryEntity> createEntry(@RequestBody DiaryEntryEntity newEntry)
    {
        return ResponseEntity.ok(diaryEntryService.save(newEntry));
    }

    @DeleteMapping("/entry/{id}")
    public ResponseEntity<Boolean> deleteEntry(@PathVariable Long id)
    {
        return ResponseEntity.ok(diaryEntryService.deleteEntityById(id));
    }
}
