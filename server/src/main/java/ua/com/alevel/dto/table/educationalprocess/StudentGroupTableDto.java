package ua.com.alevel.dto.table.educationalprocess;

import ua.com.alevel.dto.AbstractTableDto;
import ua.com.alevel.enumeration.GroupType;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

public class StudentGroupTableDto extends AbstractTableDto {

    private String name;
    private String description;
    private GroupType groupType;
    private LocalDate startDate;
    private LocalDate endDate;
    private Boolean isFormed;
    private Set<StudentAddInfoDto> students = new HashSet<>();

    public Set<StudentAddInfoDto> getStudents() {
        return students;
    }

    public void setStudents(Set<StudentAddInfoDto> students) {
        this.students = students;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public GroupType getGroupType() {
        return groupType;
    }

    public void setGroupType(GroupType groupType) {
        this.groupType = groupType;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Boolean getIsFormed() {
        return isFormed;
    }

    public void setIsFormed(Boolean isFormed) {
        this.isFormed = isFormed;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StudentGroupTableDto entity = (StudentGroupTableDto) o;
        return Objects.equals(this.name, entity.name) &&
                Objects.equals(this.description, entity.description) &&
                Objects.equals(this.groupType, entity.groupType) &&
                Objects.equals(this.startDate, entity.startDate) &&
                Objects.equals(this.endDate, entity.endDate) &&
                Objects.equals(this.isFormed, entity.isFormed);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, description, groupType, startDate, endDate, isFormed);
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "name = " + name + ", " +
                "description = " + description + ", " +
                "groupType = " + groupType + ", " +
                "startDate = " + startDate + ", " +
                "endDate = " + endDate + ", " +
                "isFormed = " + isFormed + ")";
    }

    public static class StudentAddInfoDto {

        private UUID uuid;
        private String username;
        private String firstName;
        private String lastName;

        public UUID getUuid() {
            return uuid;
        }

        public void setUuid(UUID uuid) {
            this.uuid = uuid;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getFirstName() {
            return firstName;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            StudentGroupTableDto.StudentAddInfoDto entity = (StudentGroupTableDto.StudentAddInfoDto) o;
            return Objects.equals(this.uuid, entity.uuid) &&
                    Objects.equals(this.username, entity.username) &&
                    Objects.equals(this.firstName, entity.firstName) &&
                    Objects.equals(this.lastName, entity.lastName);
        }

        @Override
        public int hashCode() {
            return Objects.hash(uuid, username, firstName, lastName);
        }

        @Override
        public String toString() {
            return getClass().getSimpleName() + "(" +
                    "uuid = " + uuid + ", " +
                    "username = " + username + ", " +
                    "firstName = " + firstName + ", " +
                    "lastName = " + lastName + ")";
        }
    }
}
