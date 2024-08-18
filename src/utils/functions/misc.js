import dayjs from "dayjs";

const INITIAL_WORK_DATE = "2023-07-20";

export const workingTime = () => {
  const startedIn = dayjs(INITIAL_WORK_DATE);
  const currentDate = dayjs();
  const yearsWorked = currentDate.diff(startedIn, "year");
  const monthsWorked = currentDate.diff(startedIn.add(yearsWorked, "year"), "month");

  return {
    yearsWorked,
    monthsWorked,
  };
};
