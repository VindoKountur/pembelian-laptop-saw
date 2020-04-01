import React, { useContext, useState } from "react";
import { Alternatif } from './Alternatif';
import { GlobalContext } from "../Context/GlobalContext";

export const ListAlternatif = () => {
  const [, , daftarAlternatif, setDaftarAlternatif] = useContext(GlobalContext);

  const [dihapus, setDihapus] = useState(false);

  

  const hapusAlternatif = (index) => {
    const newAlternatif = [...daftarAlternatif];
    const newDaftar = newAlternatif.filter((value, i) => { return i !== index});
    setDaftarAlternatif(newDaftar);
    doNotifHapus();
  }

  const alternatifKosong = <h1 className="py-4">Belum ada alternatif <span role="img" />😪</h1>

  const doNotifHapus = () => {
    setDihapus(true);
    setTimeout(() => {
      setDihapus(false);
    }, 2000);
  };

  const notifHapus = (
    <div className="w-full fixed bg-red-400 top-0 left-0 text-center duration-300 .translate-y-8">
      <p className="py-3">
        Alternatif dihapus <span role="img" />
        😯
      </p>
    </div>
  );

  return (
    <div className="flex-auto bg-gray-500">
      {dihapus && notifHapus}
      <div className="text-center">
        <h2 className="bg-blue-500 py-3 text-xl font-bold">Daftar Alternatif</h2>
        <div className="h-full">
          {daftarAlternatif.length === 0 && alternatifKosong}
          {daftarAlternatif.map((alt, i) => {
            return <Alternatif key={i} value={alt} idx={i} hapusAlternatif={hapusAlternatif} />
          })}
        </div>
      </div>
    </div>
  );
};