package jsbrg.backend.service;

import jsbrg.backend.entity.DiaryEntryEntity;
import jsbrg.backend.repository.DiaryEntryRepo;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class DiaryEntryService {

    DiaryEntryRepo diaryEntryRepo;

    public DiaryEntryService(DiaryEntryRepo diaryEntryRepo) {
        this.diaryEntryRepo = diaryEntryRepo;
    }

    public List<DiaryEntryEntity> findAllEntries() {
        return diaryEntryRepo.findAll();
    }

    public DiaryEntryEntity findEntryById(Long id) {
        return diaryEntryRepo.findById(id).orElse(null);
    }

    public DiaryEntryEntity save(DiaryEntryEntity testEntityNoId) {
        return diaryEntryRepo.save(testEntityNoId);
    }

    public Boolean deleteEntityById(Long id) {
        return diaryEntryRepo.deleteDiaryEntryEntityById(id) > 0;
    }


    public DiaryEntryEntity updateEntityById(Long id, DiaryEntryEntity newEntry) {
        DiaryEntryEntity oldEntry = diaryEntryRepo.findById(id).orElse(null);

        if (oldEntry == null)
            return null;

        String title = newEntry.getTitle();
        String text = newEntry.getText();
        Instant time = newEntry.getDate();
        Integer rating = newEntry.getRating();
        Double awesomeness = newEntry.getAwesomeness();

        if (title != null)
            oldEntry.setTitle(title);
        if (text != null)
            oldEntry.setText(text);
        if (time != null)
            oldEntry.setDate(time);
        if (rating != null)
            oldEntry.setRating(rating);
        if (awesomeness != null)
            oldEntry.setAwesomeness(awesomeness);

        return diaryEntryRepo.save(oldEntry);
    }
}
