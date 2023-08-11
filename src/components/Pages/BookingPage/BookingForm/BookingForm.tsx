import React, { useEffect, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./BookingForm.module.scss";
import FormFieldGroup from "components/Pages/BookingPage/BookingForm/FormFieldGroup";
import Button from "components/Button/Button";
import { getAvailableTimes } from "api/getAvailableTimes";
import createTableReservation from "api/createTableReservation";
import Text from "components/Text/Text";
import Box from "components/Box/Box";
import { useNavigate } from "react-router-dom";

type Inputs = {
  date: string | null;
  time: string | null;
  guests: string;
  occasion: string;
};

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      date: "",
      guests: null,
      time: "",
      occasion: "birthday",
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await createTableReservation({
      date: data.date,
      time: data.time,
      occasion: data.occasion,
      noOfGuests: parseInt(data.guests, 10),
    });
    navigate("/book-confirmed");
  };

  const date: string | null = watch("date"); // watch input value by passing the name of it

  const availableTimes: Array<string> = useMemo(() => {
    if (!date) {
      return [];
    }

    return getAvailableTimes(new Date(date));
  }, [date]);

  useEffect(() => {
    setValue("time", "");
  }, [date, setValue]);

  const availableTimeOptions = availableTimes.map((time) => {
    return (
      <option key={time} value={time}>
        {time}
      </option>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Text align={"center"} size={40}>
          Book a table
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormFieldGroup id={"resDate"} label={"Choose date"}>
            <input
              aria-label="Choose date"
              role={"dialog"}
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
              id="resTime"
              disabled={!date}
            >
              <option value=""></option>
              {availableTimeOptions}
            </select>
            {errors.time && <span>{errors.time.message}</span>}
          </FormFieldGroup>
          <FormFieldGroup id={"guests"} label={"Number of guests"}>
            <Box marginBottom={3}>
              <Text>Maximum of 10 guests per reservation</Text>
            </Box>
            <input
              {...register("guests", {
                required: "Guests is required",
                max: { value: 10, message: "10 max guests" },
                min: { value: 1, message: "1 min guests" },
              })}
              className={styles.formField}
              type="number"
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
          <Button
            disabled={isSubmitting}
            type={"submit"}
            text="Make Your reservation"
          />
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
