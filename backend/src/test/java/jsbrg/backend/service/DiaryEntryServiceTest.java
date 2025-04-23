package jsbrg.backend.service;


import jsbrg.backend.entity.DiaryEntryEntity;
import jsbrg.backend.repository.DiaryEntryRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

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

    @BeforeEach
    void setUp() throws ParseException {
        MockitoAnnotations.openMocks(this);


        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        testEntity = new DiaryEntryEntity("my thoughts", "my text", sdf.parse("02-02-2025").toInstant(), 3, .25);
        testEntity.setId(1L);

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
}
