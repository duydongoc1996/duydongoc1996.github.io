import {
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import API from "../assets/data/key.json";

export default function MessageTable() {
  const TABLE_HEAD = ["Name", "Message", "Date", ""];
  const [data, setData] = useState({ items: [] });
  const [selected, setSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setSelected(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;
    setIsLoading(true);

    const response = await fetch(API.apiMessages + `/${selected.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API.apiKey,
      },
      body: JSON.stringify(selected),
    });

    if (response.ok) {
      setIsLoading(false);
      // Handle successful submission
      setSelected(null);

      // Reload
      window.location.reload();
    } else {
      setIsLoading(false);
      // Handle error
      alert("An error occurred");
    }
  };

  const handleChange = (event) => {
    console.debug("selected", selected);

    const newData = { ...selected, [event.target.name]: event.target.value };

    console.debug(newData);
    setSelected(newData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API.apiMessages, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + API.apiKey,
        },
      });
      const data = await response.json();
      setData({
        ...data,
        items: data.items.map((item) => ({
          id: item._uuid,
          name: item.name,
          message: item.message,
          date: new Date(item._created * 1000).toLocaleDateString(),
        })),
      });
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once, when the component initializes

  return (
    <section id="contact" className="body-font text-gray-600">
      <Dialog open={!!selected} size="xs" handler={handleClose}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              Update message
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleClose}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <div className="grid gap-6">
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Name
            </Typography>
            <Input
              label="Name"
              name="name"
              onChange={handleChange}
              value={selected?.name}
            />
            <Textarea
              label="Message"
              name="message"
              onChange={handleChange}
              value={selected?.message}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="gradient" color="gray" onClick={handleSubmit}>
            Update
          </Button>
        </DialogFooter>
      </Dialog>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, index) => {
              const { name, message, date } = item;
              const isLast = index === data.items.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {message}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Button
                      as={"button"}
                      onClick={() => {
                        setSelected(item);
                        console.log(item);
                      }}
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </section>
  );
}
