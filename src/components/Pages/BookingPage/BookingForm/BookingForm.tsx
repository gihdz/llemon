import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./BookingForm.module.scss";
import FormFieldGroup from "components/Pages/BookingPage/BookingForm/FormFieldGroup";
import Button from "components/Button/Button";

type Inputs = {
  date: string;
  time: string;
  guests: string;
  occasion: string;
};

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      date: null,
      guests: null,
      time: "20:00",
      occasion: "birthday",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const availableTimeOptions = availableTimes.map((time) => {
    return (
      <option key={time} value={time}>
        {time}
      </option>
    );
  });
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldGroup id={"resDate"} label={"Choose date"}>
          <input
            type="date"
            id="resDate"
            className={styles.formField}
            {...register("date", { required: "Date is required" })}
          />
          {errors.date && <span>{errors.date.message}</span>}
        </FormFieldGroup>
        <FormFieldGroup id={"resTime"} label={"Choose time"}>
          <select
            className={styles.formField}
            {...register("time", { required: "Time is required" })}
            id="resTime "
          >
            {availableTimeOptions}
          </select>
          {errors.time && <span>{errors.time.message}</span>}
        </FormFieldGroup>
        <FormFieldGroup id={"guests"} label={"Number of guests"}>
          <input
            {...register("guests", { required: "Guests is required" })}
            className={styles.formField}
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
          />
          {errors.guests && <span>{errors.guests.message}</span>}
        </FormFieldGroup>
        <FormFieldGroup id={"occasion"} label={"Occasion"}>
          <select
            {...register("occasion", { required: "Occasion is required" })}
            className={styles.formField}
            id="occasion"
          >
            <option value={"birthday"}>Birthday</option>
            <option value={"anniversary"}>Anniversary</option>
          </select>
        </FormFieldGroup>
        <Button text="Make Your reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
