package jsbrg.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import jsbrg.backend.entity.DiaryEntryEntity;
import jsbrg.backend.service.DiaryEntryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = DiaryEntryController.class)
public class DiaryEntryControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private DiaryEntryService diaryEntryService;

    List<DiaryEntryEntity> diaryEntryEntityList = new ArrayList<>();
    DiaryEntryEntity testEntity1;
    DiaryEntryEntity testEntity2;
    SimpleDateFormat sdf;

    @BeforeEach
    void setUp() throws ParseException {
        sdf = new SimpleDateFormat("yyyy-MM-dd");
        testEntity1 = new DiaryEntryEntity("my title", "my text", sdf.parse("2025-01-22").toInstant(), 4, .22);
        testEntity1.setId(1L);
        testEntity2 = new DiaryEntryEntity("my second title", "my second text", sdf.parse("2025-03-04").toInstant(), 1, .86);
        testEntity2.setId(2L);

        diaryEntryEntityList.add(testEntity1);
        diaryEntryEntityList.add(testEntity2);
        Mockito.when(diaryEntryService.findAllEntries()).thenReturn(diaryEntryEntityList);
    }

    @Test
    void shouldGetAllEntries() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/entries"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));

        verify(diaryEntryService, times(1)).findAllEntries();
    }
}
