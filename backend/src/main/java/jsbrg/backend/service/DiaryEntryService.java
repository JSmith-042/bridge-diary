package jsbrg.backend.service;

import jsbrg.backend.entity.DiaryEntryEntity;
import jsbrg.backend.repository.DiaryEntryRepo;
import org.springframework.stereotype.Service;

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
}
