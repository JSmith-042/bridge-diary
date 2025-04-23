package jsbrg.backend.service;

import jsbrg.backend.entity.DiaryEntryEntity;
import jsbrg.backend.repository.DiaryEntryRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        Optional<DiaryEntryEntity> entity = diaryEntryRepo.findById(id);
        return entity.orElse(null);
    }

    public DiaryEntryEntity save(DiaryEntryEntity testEntityNoId) {
        return diaryEntryRepo.save(testEntityNoId);
    }

    public Boolean deleteEntityById(Long id) {
        return diaryEntryRepo.deleteDiaryEntryEntityById(id) > 0;
    }
}
