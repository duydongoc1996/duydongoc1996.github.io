import React from "react";
import TUU_3525 from "../assets/images/TUU_3525.JPG";

export default function Header() {
  const gTime = new Date("2024-06-01T02:00:00.000Z").getTime();
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  // update time every second with React hook
  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = gTime - now;

      if (distance < 0) return;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section class="body-font text-gray-600">
      <div class="container mx-auto flex flex-wrap px-5 py-10">
        <div class="-mx-4 mb-auto mt-auto flex flex-wrap content-start sm:w-1/2 sm:pr-10 lg:w-1/3">
          <div class="mb-6 w-full px-4 sm:p-4">
            <div class="mb-10 flex w-full flex-col text-center">
              <h2 class="title-font mb-1 text-xs font-medium tracking-widest text-red-500">
                Và thế là ...
              </h2>
              <h2 class="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
                Chúng mình sắp kết hôn rồi nè!
              </h2>
            </div>
          </div>
          <div class="w-1/2 p-4 text-center md:w-1/4 lg:w-1/4">
            <h2 class="title-font text-3xl font-medium text-gray-900">
              {days}
            </h2>
            <p class="leading-relaxed">Ngày</p>
          </div>
          <div class="w-1/2 p-4 text-center md:w-1/4 lg:w-1/4">
            <h2 class="title-font text-3xl font-medium text-gray-900">
              {hours}
            </h2>
            <p class="leading-relaxed">Giờ</p>
          </div>
          <div class="w-1/2 p-4 text-center md:w-1/4 lg:w-1/4">
            <h2 class="title-font text-3xl font-medium text-gray-900">
              {minutes}
            </h2>
            <p class="leading-relaxed">Phút</p>
          </div>
          <div class="w-1/2 p-4 text-center md:w-1/4 lg:w-1/4">
            <h2 class="title-font text-3xl font-medium text-gray-900">
              {seconds}
            </h2>
            <p class="leading-relaxed">Giây</p>
          </div>
        </div>
        <div class="mt-4 w-full overflow-hidden rounded-lg shadow-lg sm:mt-0 sm:w-1/2 lg:w-2/3">
          <img
            class="h-full w-full object-cover object-center"
            src={TUU_3525}
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
}
