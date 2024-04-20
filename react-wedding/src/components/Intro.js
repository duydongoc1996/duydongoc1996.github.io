import React from "react";
import image1 from "../assets/images/7U8A9922.jpg";

export default function Intro() {
  return (
    <section id="intro" className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col px-5 py-24">
        <div className="mx-auto lg:w-4/6">
          <div class="mb-20 flex w-full flex-col text-center">
            <h2 class="title-font mb-1 text-xs font-medium tracking-widest text-red-500">
              Chuyện là thế này ...
            </h2>
            <h1 class="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
              Ngày xửa ngày xưa
            </h1>
          </div>
          <div className="h-100 overflow-hidden rounded-lg">
            <img
              alt="content"
              className="h-full w-full object-cover object-center"
              src={image1}
            />
          </div>
          <div className="mt-10 flex flex-col sm:flex-row">
            <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                  Dạ Quyên
                </h2>
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-red-500"></div>
                <p className="text-base">
                  Raclette knausgaard hella meggs normcore williamsburg enamel
                  pin sartorial venmo tbh hot chicken gentrify portland.
                </p>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
              <p className="mb-4 text-lg leading-relaxed">
                Meggings portland fingerstache lyft, post-ironic fixie man bun
                banh mi umami everyday carry hexagon locavore direct trade art
                party. Locavore small batch listicle gastropub farm-to-table
                lumbersexual salvia messenger bag. Coloring book flannel
                truffaut craft beer drinking vinegar sartorial, disrupt fashion
                axe normcore meh butcher. Portland 90's scenester vexillologist
                forage post-ironic asymmetrical, chartreuse disrupt butcher
                paleo intelligentsia pabst before they sold out four loko. 3
                wolf moon brooklyn.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row">
            <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-r sm:border-t-0 sm:py-8 sm:pr-8 sm:text-left">
              <p className="mb-4 text-lg leading-relaxed">
                Meggings portland fingerstache lyft, post-ironic fixie man bun
                banh mi umami everyday carry hexagon locavore direct trade art
                party. Locavore small batch listicle gastropub farm-to-table
                lumbersexual salvia messenger bag. Coloring book flannel
                truffaut craft beer drinking vinegar sartorial, disrupt fashion
                axe normcore meh butcher. Portland 90's scenester vexillologist
                forage post-ironic asymmetrical, chartreuse disrupt butcher
                paleo intelligentsia pabst before they sold out four loko. 3
                wolf moon brooklyn.
              </p>
            </div>
            <div className="text-center sm:w-1/3 sm:py-8 sm:pl-8">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                  Ngọc Duy
                </h2>
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-red-500"></div>
                <p className="text-base">
                  Raclette knausgaard hella meggs normcore williamsburg enamel
                  pin sartorial venmo tbh hot chicken gentrify portland.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
