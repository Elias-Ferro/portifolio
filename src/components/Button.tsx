import { Button } from "@mui/material";

type Props = {
  label: string;
  color: "secondary";
};

export const CustomButton = ({ label, color }: Props) => {
  return <Button color={color}>{label}</Button>;
};
