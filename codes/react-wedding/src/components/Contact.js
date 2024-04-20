import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import API from "../assets/data/key.json";

function SubmittedDialog({ open, setOpen }) {
  const handleOpen = () => setOpen(!open);
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  return (
    <Dialog open={open} handler={handleOpen} size="sm">
      <DialogHeader>Thành công!!</DialogHeader>
      <DialogBody>
        Chúng mình xin trân trọng cảm ơn lời chúc của bạn! 🥰
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleClose}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

function MessageForm() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;
    setIsLoading(true);

    const response = await fetch(API.apiMessages, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API.apiKey,
      },
      body: JSON.stringify([formData]),
    });

    if (response.ok) {
      setIsLoading(false);
      // Handle successful submission
      setOpen(true);
      setFormData({ name: "", message: "" });
    } else {
      setIsLoading(false);
      // Handle error
      alert("An error occurred");
    }
  };

  const handleChange = (event) => {
    const newData = { ...formData, [event.target.name]: event.target.value };
    setFormData(newData);
  };

  return (
    <form
      id="message-form"
      className="mt-10 w-full md:ml-auto md:mt-0 md:w-1/2 lg:w-2/6"
      onSubmit={handleSubmit}
    >
      <div className="flex w-full flex-col rounded-lg bg-gray-100 p-8 shadow-lg">
        <h2 className="title-font mb-5 text-center text-lg font-medium text-gray-900">
          Gửi lời chúc
        </h2>
        <div className="relative mb-4">
          <label for="name" className="text-sm leading-7 text-gray-600">
            Tên
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-red-500 focus:ring-2 focus:ring-red-200"
          />
        </div>
        <div className="relative mb-4">
          <label for="message" className="text-sm leading-7 text-gray-600">
            Lời nhắn:
          </label>
          <textarea
            required
            type="text"
            rows={5}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className=" w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200"
          ></textarea>
        </div>
        <button
          type="submit"
          className="rounded border-0 bg-red-500 px-8 py-2 text-lg text-white hover:bg-red-600 focus:outline-none"
          disabled={isLoading}
        >
          {isLoading ? "Đang gửi ..." : "Gửi"}
        </button>
        <p className="mt-3 text-center text-xs text-gray-500">
          Chúng mình xin trân trọng cảm ơn lời chúc của bạn! 🥰
        </p>
      </div>
      <SubmittedDialog open={open} setOpen={setOpen} />
    </form>
  );
}

function Message({ name, msg }) {
  return (
    <div className="w-full px-4 pt-4">
      <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8 shadow-lg">
        <div className="mb-3 flex items-center">
          <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
          </div>
          <h2 className="title-font text-lg font-medium text-gray-900">
            {name}
          </h2>
        </div>
        <div className="flex-grow">
          <p className="text-base leading-relaxed">{msg}</p>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API.apiMessages, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + API.apiKey,
        },
      });
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once, when the component initializes

  return (
    <section id="contact" className="body-font text-gray-600">
      <div className="container mx-auto flex flex-wrap px-5 py-24">
        <div className="pr-0 md:w-1/2 md:pr-4 lg:w-3/5 lg:pr-0 ">
          <h2 class="title-font mb-1 text-center text-xs font-medium tracking-widest text-red-500">
            Hãy để lại lời chúc cho chúng mình nhé!
          </h2>
          <h2 className="title-font mb-4  text-center text-xl font-medium text-gray-900 sm:text-4xl">
            Sổ lưu bút
            <a
              className="ml-2 mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white"
              href="#message-form"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </a>
          </h2>

          <div className="-mx-4 flex flex-wrap">
            {data.items.map((item) => (
              <Message name={item.name} msg={item.message} />
            ))}
          </div>
        </div>
        <MessageForm />
      </div>
    </section>
  );
}
