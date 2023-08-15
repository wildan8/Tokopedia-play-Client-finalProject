import React from "react";

export default function Header() {
  return (
    <div>
      <header className="bg-darkTokPed">
        <div>
          <h1 className="text-xl font-semibold text-white">Tokopedia Play</h1>
        </div>
        <div className="mt-5">
          <ul className="flex text-white text-base gap-4">
            <li className="border-2 border-solid rounded-full px-2 py-1 opacity-80 hover:text-green-tokopedia hover:border-green-tokopedia hover:opacity-100">
              Live Now
            </li>
            <li className="border-2 border-solid rounded-full px-2 py-1 opacity-80 hover:text-green-tokopedia hover:border-green-tokopedia hover:opacity-100">
              Featured
            </li>
            <li className="border-2 border-solid rounded-full px-2 py-1 opacity-80 hover:text-green-tokopedia hover:border-green-tokopedia hover:opacity-100">
              New Host
            </li>
            <li className="border-2 border-solid rounded-full px-2 py-1 opacity-80 hover:text-green-tokopedia hover:border-green-tokopedia hover:opacity-100">
              Rekomendasi
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
