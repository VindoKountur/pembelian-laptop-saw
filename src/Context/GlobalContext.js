import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  const [bobot, setBobot] = useState([
    { nama: "Harga", nilai: 5 },
    { nama: "RAM", nilai: 2 },
    { nama: "Processor", nilai: 2 },
    { nama: "Kapasitas (HD)", nilai: 1 }
  ]);
  const [daftarAlternatif, setDaftarAlternatif] = useState([
    { nama: "tes nama", harga: 30, ram: 8, processor: 5, kapasitas: 1000 },
    { nama: "tes nama kedua", harga: 10, ram: 2, processor: 7, kapasitas: 2000 },
    { nama: "tes nama ketiga", harga: 30, ram: 4, processor: 1, kapasitas: 3000 },
  ]);

  return (
    <GlobalContext.Provider value={[bobot, setBobot, daftarAlternatif, setDaftarAlternatif]}>
      {props.children}
    </GlobalContext.Provider>
  );
};