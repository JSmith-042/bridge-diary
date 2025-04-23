package jsbrg.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.Instant;

@Entity
public class DiaryEntryEntity {
    @Id
    private Long id;

    private String title;

    private String text;

    private Instant date;

    private Integer rating;

    private Double awesomeness;


    public DiaryEntryEntity() {
    }

    public DiaryEntryEntity(String title, String text, Instant date, Integer rating, Double awesomeness) {
        this.id = null;
        this.title = title;
        this.text = text;
        this.date = date;
        this.rating = rating;
        this.awesomeness = awesomeness;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Instant getDate() {
        return date;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Double getAwesomeness() {
        return awesomeness;
    }

    public void setAwesomeness(Double awesomeness) {
        this.awesomeness = awesomeness;
    }
}
