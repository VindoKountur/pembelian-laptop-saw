import React from "react";

export const Alternatif = ({ value, idx, hapusAlternatif }) => {
  const doHapus = () => {
    hapusAlternatif(idx);
  };
  return (
    <div className="py-4">
      <div className="container w-10/12 m-auto bg-white text-left relative border-solid border-blue-500 border-l-8 shadow-lg">
        <span 
          className="absolute top-0 right-0 bg-red-600 text-white py-1 px-2 cursor-pointer hover:bg-red-500"
          onClick={doHapus}
        >
          X
        </span>
        <div className="ml-2 w-11/12 py-2">
          <h3 className="font-semibold leading-10">"{value.nama}"</h3>
          <div className="flex justify-start items-center">
            <p className="ml-2 w-2/12">Harga</p>
            <p className="ml-2">:</p>
            <p className="ml-2">{value.harga}</p>
          </div>
          <div className="flex justify-start items-center">
            <p className="ml-2 w-2/12">RAM</p>
            <p className="ml-2">:</p>
            <p className="ml-2">{value.ram}</p>
          </div>
          <div className="flex justify-start items-center">
            <p className="ml-2 w-2/12">Processor</p>
            <p className="ml-2">:</p>
            <p className="ml-2">{value.processor}</p>
          </div>
          <div className="flex justify-start items-center">
            <p className="ml-2 w-2/12">Kapasitas</p>
            <p className="ml-2">:</p>
            <p className="ml-2">{value.kapasitas}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
