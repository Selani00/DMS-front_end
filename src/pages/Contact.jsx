import React from "react";
import LanguageBar from "../components/Common/LanguageBar";
import Navbar from "../components/Common/Navbar";
import Emergancy from "../components/Common/Emergancy_icon";
import SearchBar from "../components/Common/SearchBar";

const Contact = () => {
  return (
    <>
      <LanguageBar />
      <Navbar />
      <Emergancy />

      <div>
        <SearchBar />

        <div>
          <div className="bg-blue-100 p-5 m-5">
            <h1 className="text-base md:text-3xl font-bold text-center">
              Ministry Of Disaster Managment
            </h1>
            <p className="text-sm text-center">
              Address of the ministry -HEAD Qa
            </p>

            <div className="w-full bg-white p-2 md:p-5 mt-5 shadow-lg flex items-center justify-between">
              <h1 className="text-red-600 font-semibold text-base md:text-2xl">
                Hotline:-
              </h1>
              <div className="bg-red-600 text-white font-bold text-base md:text-2xl p-2 rounded-md">
                {" "}
                1717{" "}
              </div>
              <div className="bg-red-600 text-white font-bold text-base md:text-2xl p-2 rounded-md">
                {" "}
                117{" "}
              </div>
            </div>

            <div className="overflow-auto rounded-lg shadow">
              <table className="mt-5 w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Name
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Title
                    </th>
                    <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                      Direct Dial
                    </th>
                    <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                      Mobile
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Major General(Retired) Udaya Herath
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Director General
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      0112136103
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      0773 957 896
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <a
                        className="font-bold hover:underline"
                        href="mailto:example@example.com"
                      >
                        example@example.com
                      </a>
                    </td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Mrs.H.Udayangani
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Personal Assistant
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      0112136103
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      0760 994 808
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <a
                        className="font-bold hover:underline"
                        href="mailto:example@example.com"
                      >
                        example@example.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-green-100 p-5 m-5">
            <h1 className="text-base md:text-3xl font-bold text-center">
              Sri Lanka Army
            </h1>
            <p className="text-sm text-center">
              Army Headquarters Sri Jayawardenepura Colombo
            </p>

            <div className="w-full bg-white p-2 md:p-5 mt-5 shadow-lg flex items-center justify-between">
              <h1 className="text-red-600 font-semibold text-base md:text-2xl">
                Hotline:-
              </h1>
              <div className="bg-red-600 text-white font-bold text-base md:text-2xl p-2 rounded-md">
                {" "}
                1717{" "}
              </div>
              <div className="bg-red-600 text-white font-bold text-base md:text-2xl p-2 rounded-md">
                {" "}
                117{" "}
              </div>
            </div>

            <div className="overflow-auto rounded-lg shadow py-5">
              <table className="mt-5 w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Name
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Title
                    </th>
                    <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                      Direct Dial
                    </th>
                    <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                      Mobile
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Army Headquarters
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Director General
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      +94112432682-5
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      +94766907749
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <a
                        className="font-bold hover:underline"
                        href="mailto:example@example.com"
                      >
                        slarmymedia@gmail.com
                      </a>
                    </td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Mrs.H.Udayangani
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Personal Assistant
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      0112136103
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      0760 994 808
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <a
                        className="font-bold hover:underline"
                        href="mailto:example@example.com"
                      >
                        example@example.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
