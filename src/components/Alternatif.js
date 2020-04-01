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
          <div className="flex justify-between items-center">
            <div className="w-4/12">
              <p className="ml-2">Harga</p>
            </div>
            <div className="w-8/12">
              <p className="ml-2">{value.harga}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-4/12">
              <p className="ml-2">RAM</p>
            </div>
            <div className="w-8/12">
              <p className="ml-2">{value.ram}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-4/12">
              <p className="ml-2">Processor</p>
            </div>
            <div className="w-8/12">
              <p className="ml-2">{value.processor}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-4/12">
              <p className="ml-2">Kapasitas</p>
            </div>
            <div className="w-8/12">
              <p className="ml-2">{value.kapasitas}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
