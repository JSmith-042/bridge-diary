package jsbrg.backend.repository;

import jsbrg.backend.entity.DiaryEntryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiaryEntryRepo extends JpaRepository<DiaryEntryEntity, Long> {
}
