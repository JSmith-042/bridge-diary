package jsbrg.backend.service;


import jsbrg.backend.entity.DiaryEntryEntity;
import jsbrg.backend.repository.DiaryEntryRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

public class DiaryEntryServiceTest {

    @Mock
    DiaryEntryRepo diaryEntryRepo;

    @InjectMocks
    DiaryEntryService diaryEntryService;


    List<DiaryEntryEntity> testEntryList;
    DiaryEntryEntity testEntity;
    DiaryEntryEntity testEntity2;
    DiaryEntryEntity testEntityNoId;

    @BeforeEach
    void setUp() throws ParseException {
        MockitoAnnotations.openMocks(this);


        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        testEntity = new DiaryEntryEntity("my thoughts", "my text", sdf.parse("02-02-2025").toInstant(), 3, .25);
        testEntity.setId(1L);

        testEntityNoId = new DiaryEntryEntity("my thoughts", "my text", sdf.parse("02-02-2025").toInstant(), 3, .25);

        testEntity2 = new DiaryEntryEntity("my second thoughts", "you can't read me", sdf.parse("01-02-2025").toInstant(), 2, .75);
        testEntity2.setId(2L);

        testEntryList = new ArrayList<>();
        testEntryList.add(testEntity);
        testEntryList.add(testEntity2);
    }

    @Test
    void shouldGetAllEntries() {
        when(diaryEntryRepo.findAll()).thenReturn(testEntryList);
        List<DiaryEntryEntity> listOfEntryRequest = diaryEntryService.findAllEntries();
        verify(diaryEntryRepo, times(1)).findAll();
        assertThat(listOfEntryRequest).isEqualTo(testEntryList);
    }

    @Test
    void shouldGetEntryById() {
        when(diaryEntryRepo.findById(1L)).thenReturn(Optional.of(testEntity));
        DiaryEntryEntity actualRequest = diaryEntryService.findEntryById(1L);
        verify(diaryEntryRepo, times(1)).findById(1L);
        assertThat(actualRequest).isEqualTo(testEntity);
    }

    @Test
    void shouldSaveEntry() {
        when(diaryEntryRepo.save(testEntityNoId)).thenReturn(testEntity);
        DiaryEntryEntity actualRequest = diaryEntryService.save(testEntityNoId);
        verify(diaryEntryRepo, times(1)).save(testEntityNoId);
        assertThat(actualRequest).isEqualTo(testEntity);
    }

    @Test
    void shouldDeleteEntry() {
        when(diaryEntryRepo.deleteDiaryEntryEntityById(2L)).thenReturn(1L);
        boolean isDeleted = diaryEntryService.deleteEntityById(2L);
        verify(diaryEntryRepo, times(1)).deleteDiaryEntryEntityById(2L);
        assertThat(isDeleted).isTrue();
    }

    @Test
    void shouldUpdateEntry() {
        Long testId = 1L;

        DiaryEntryEntity existingEntry = testEntity;
        existingEntry.setId(testId);

        DiaryEntryEntity updatedEntry = testEntity2;
        updatedEntry.setId(testId);

        when(diaryEntryRepo.findById(testId)).thenReturn(Optional.of(existingEntry));
        when(diaryEntryRepo.save(any(DiaryEntryEntity.class))).thenReturn(updatedEntry);

        DiaryEntryEntity actualRequest = diaryEntryService.updateEntityById(testId, updatedEntry);

        verify(diaryEntryRepo, times(1)).findById(testId);
        verify(diaryEntryRepo, times(1)).save(any(DiaryEntryEntity.class));

        assertThat(actualRequest).isEqualTo(updatedEntry);
    }

    @Test
    void shouldNotUpdateEntry() {
        Long testId = 0L;

        DiaryEntryEntity updatedEntry = testEntity2;
        updatedEntry.setId(testId);

        when(diaryEntryRepo.findById(testId)).thenReturn(Optional.empty());

        DiaryEntryEntity actualRequest = diaryEntryService.updateEntityById(testId, updatedEntry);

        verify(diaryEntryRepo, times(1)).findById(testId);

        assertThat(actualRequest).isEqualTo(null);

    }
}
