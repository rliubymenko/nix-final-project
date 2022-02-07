package ua.com.alevel.dto.table.finance;

import ua.com.alevel.dto.AbstractTableDto;
import ua.com.alevel.enumeration.ReplenishmentMethod;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

public class AccountReplenishmentTableDto extends AbstractTableDto {

    private LocalDateTime date;
    private BigDecimal amount;
    private String payer;
    private String purpose;
    private String comment;
    private ReplenishmentMethod replenishmentMethod;
    private StudentAddInfoDto student;

    public StudentAddInfoDto getStudent() {
        return student;
    }

    public void setStudent(StudentAddInfoDto student) {
        this.student = student;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getPayer() {
        return payer;
    }

    public void setPayer(String payer) {
        this.payer = payer;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public ReplenishmentMethod getReplenishmentMethod() {
        return replenishmentMethod;
    }

    public void setReplenishmentMethod(ReplenishmentMethod replenishmentMethod) {
        this.replenishmentMethod = replenishmentMethod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AccountReplenishmentTableDto entity = (AccountReplenishmentTableDto) o;
        return Objects.equals(this.date, entity.date) &&
                Objects.equals(this.amount, entity.amount) &&
                Objects.equals(this.payer, entity.payer) &&
                Objects.equals(this.purpose, entity.purpose) &&
                Objects.equals(this.comment, entity.comment) &&
                Objects.equals(this.replenishmentMethod, entity.replenishmentMethod);
    }

    @Override
    public int hashCode() {
        return Objects.hash(date, amount, payer, purpose, comment, replenishmentMethod);
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "date = " + date + ", " +
                "amount = " + amount + ", " +
                "payer = " + payer + ", " +
                "purpose = " + purpose + ", " +
                "comment = " + comment + ", " +
                "replenishmentMethod = " + replenishmentMethod + ")";
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
            AccountReplenishmentTableDto.StudentAddInfoDto entity = (AccountReplenishmentTableDto.StudentAddInfoDto) o;
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
