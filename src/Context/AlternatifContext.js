import React, { createContext, useState } from "react";

export const AlternatifContext = createContext();

export const AlternatifProvider = props => {
  const [daftarAlternatif, setDaftarAlternatif] = useState([
    // { nama: "tes nama", harga: 30, ram: 8, processor: 5, kapasitas: 1000 },
    // { nama: "tes nama kedua", harga: 10, ram: 2, processor: 7, kapasitas: 2000 },
    // { nama: "tes nama ketiga", harga: 30, ram: 4, processor: 1, kapasitas: 3000 },
  ]);
  return (
    <AlternatifContext.Provider value={[daftarAlternatif, setDaftarAlternatif]}>{props.children}</AlternatifContext.Provider>
  );
};
