package jsbrg.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import jsbrg.backend.entity.DiaryEntryEntity;
import jsbrg.backend.service.DiaryEntryService;
import org.json.JSONObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

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
    DiaryEntryEntity newEntity;
    SimpleDateFormat sdf;

    @BeforeEach
    void setUp() throws ParseException {
        sdf = new SimpleDateFormat("yyyy-MM-dd");
        testEntity1 = new DiaryEntryEntity("my title", "my text", sdf.parse("2025-01-22").toInstant(), 4, .22);
        testEntity1.setId(1L);
        testEntity2 = new DiaryEntryEntity("my second title", "my second text", sdf.parse("2025-03-04").toInstant(), 1, .86);
        testEntity2.setId(2L);

        newEntity = new DiaryEntryEntity("my title", "my text", sdf.parse("2025-01-22").toInstant(), 4, .22);;


        diaryEntryEntityList.add(testEntity1);
        diaryEntryEntityList.add(testEntity2);
        Mockito.when(diaryEntryService.findAllEntries()).thenReturn(diaryEntryEntityList);
        Mockito.when(diaryEntryService.save(any(DiaryEntryEntity.class))).thenReturn(testEntity1);
        Mockito.when(diaryEntryService.findEntryById(2L)).thenReturn(testEntity2);
        Mockito.when(diaryEntryService.deleteEntityById(2L)).thenReturn(true);
    }

    @Test
    void shouldGetAllEntries() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/entries"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));

        verify(diaryEntryService, times(1)).findAllEntries();
    }

    @Test
    void shouldGetEntryById() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/entry/2"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(2));

            verify(diaryEntryService, times(1)).findEntryById(2L);
    }

    @Test
    void shouldCreateNewEntry() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/entry")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(newEntity)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.title").value("my title"))
                .andExpect(jsonPath("$.text").value("my text"))
                .andExpect(jsonPath("$.date").value(sdf.parse("2025-01-22").toInstant().toString()))
                .andExpect(jsonPath("$.rating").value(4))
                .andExpect(jsonPath("$.awesomeness").value(.22));
    }

    @Test
    void shouldDeleteEntry() throws Exception{
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/entry/2"))
                .andExpect(status().isOk())
                .andExpect(content().string("true"));

        verify(diaryEntryService, times(1)).deleteEntityById(2L);
    }

}
