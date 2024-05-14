import { Button } from "@material-tailwind/react";
import React from "react";

export function MessageUpdate(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleSubmit = () => setOpen(!open);

  const { message } = props;

  return (
    <>
      <Button onClick={handleOpen}>Message Dialog</Button>
    </>
  );
}
