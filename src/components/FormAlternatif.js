import React, { useContext, useState, useCallback } from "react";
import axios from "axios";
import { GlobalContext } from "../Context/GlobalContext";

export const FormAlternatif = () => {
  const [bobot, , daftarAlternatif, setDaftarAlternatif] = useContext(
    GlobalContext
  );

  const [newAlternatif, setNewAlternatif] = useState({
    nama: "",
    harga: 0,
    ram: 0,
    processor: 0,
    kapasitas: 0
  });

  const [hasilDidapat, setHasilDidapat] = useState([
    // { nama: "tes nama", hasil: 0.3277777777777778 },
    // { nama: "tes nama kedua", hasil: 0.3011111111111111 },
    // { nama: "tes nama ketiga", hasil: 0.22555555555555556 },
    // { nama: "trdfg", hasil: 0.9333333333333332 }
  ]);

  const [menghitung, setMenghitung] = useState(false);
  const [ditambah, setDitambah] = useState(false);
  
  const classHitung =
    "block w-full mt-6 py-3 rounded-full bg-blue-500 cursor-pointer hover:bg-blue-400 font-bold";
  const classHitungWait =
    "block w-full mt-6 py-3 rounded-full bg-blue-500 font-bold cursor-wait";

  const emptyAlternatif = () => {
    setNewAlternatif({
      nama: "",
      harga: 0,
      ram: 0,
      processor: 0,
      kapasitas: 0
    });
  };

  const gantiAlternatif = useCallback(
    objek => event => {
      const tmpNew = { ...newAlternatif };
      tmpNew[objek] = event.target.value;
      setNewAlternatif(tmpNew);
    },
    [newAlternatif]
  );

  const tambahAlternatif = useCallback(
    event => {
      event.preventDefault();
      if (
        newAlternatif.nama === "" ||
        newAlternatif.harga === 0 ||
        newAlternatif.ram === 0 ||
        newAlternatif.processor === 0 ||
        newAlternatif.kapasitas === 0
      )
        return;
      const tmpDaftar = [...daftarAlternatif, newAlternatif];
      setDaftarAlternatif(tmpDaftar);
      doNotifTambah();
      emptyAlternatif();
    },
    [daftarAlternatif, newAlternatif, setDaftarAlternatif]
  );

  const hitungHasil = () => {
    setMenghitung(true);
    const finalBobot = {
      harga: (bobot[0].nilai * 10) / 100,
      ram: (bobot[1].nilai * 10) / 100,
      processor: (bobot[2].nilai * 10) / 100,
      kapasitas: (bobot[3].nilai * 10) / 100
    };
    const jumlah =
      finalBobot.harga * 10 +
        finalBobot.ram * 10 +
        finalBobot.processor * 10 +
        finalBobot.kapasitas * 10 !==
      10;
    if (jumlah) {
      console.log("blum spuluh");
      document.getElementById("alertBelum10").scrollIntoView({
        behavior: "smooth"
      });
      setMenghitung(false);
      return;
    }
    const urlPos = "https://make-life-easier.herokuapp.com/api/algoritma/saw";
    const finalValue = {
      bobot: finalBobot,
      alternative: daftarAlternatif
    };

    axios
      .post(urlPos, finalValue)
      .then(res => {
        setMenghitung(false);
        const tmpHasil = [...res.data.data];
        setHasilDidapat(tmpHasil);
        document.getElementById("hasil").scrollIntoView({
          behavior: "smooth"
        });
      })
      .catch(err => console.error(err));
  };

  const divHasil = (
    <div className="w-full my-5">
      <div
        id="hasil"
        className="w-full bg-blue-500 py-2 text-center text-xl font-bold"
      >
        <p>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <span role="img">✨</span> Hasil <span role="img">✨</span>
        </p>
      </div>
      {hasilDidapat.map((value, i) => {
        if (i === 0) {
          return (
            <p className="bg-white px-2 py-2 pl-4">
              {i + 1}. {value.nama} 🤑
            </p>
          );
        } else {
          return (
            <p className="bg-white px-2 py-2 pl-4">
              {i + 1}. {value.nama}
            </p>
          );
        }
      })}
      ;
    </div>
  );

  

  const notifTambah = (
    <div className="w-full fixed bg-green-400 top-0 left-0 text-center duration-300 .translate-y-8">
      <p className="py-3">
        Alternatif ditambah <span role="img" />
        😉
      </p>
    </div>
  );

  const doNotifTambah = () => {
    setDitambah(true);
    setTimeout(() => {
      setDitambah(false);
    }, 2000);
  };
  


  return (
    <div className="flex-auto py-8 flex justify-center items-center">
      {ditambah && notifTambah}
      <div className="container w-10/12 md:w-8/12">
        <div className="w-full">
          <div className="w-full bg-blue-500 p-3 text-center text-xl font-bold">
            <p>
              <span role="img" />✨ Form Alternatif <span role="img"/>✨
            </p>
          </div>
          <form onSubmit={tambahAlternatif}>
            <label className="block mt-2">Nama</label>
            <input
              className="w-full rounded p-1 shadow-md focus:shadow-outline"
              type="text"
              value={newAlternatif.nama === "" ? "" : newAlternatif.nama}
              onChange={gantiAlternatif("nama")}
            />
            <label className="block mt-2">Harga (Juta)</label>
            <input
              className="w-full rounded p-1 shadow-md focus:shadow-outline"
              type="text"
              value={newAlternatif.harga === 0 ? "" : newAlternatif.harga}
              onChange={gantiAlternatif("harga")}
            />
            <label className="block mt-2">RAM (GB)</label>
            <input
              className="w-full rounded p-1 shadow-md focus:shadow-outline"
              type="text"
              value={newAlternatif.ram === 0 ? "" : newAlternatif.ram}
              onChange={gantiAlternatif("ram")}
            />
            <label className="block mt-2">Processor (Grade it 1-10?100)</label>
            <input
              className="w-full rounded p-1 shadow-md focus:shadow-outline"
              type="text"
              value={
                newAlternatif.processor === 0 ? "" : newAlternatif.processor
              }
              onChange={gantiAlternatif("processor")}
            />
            <label className="block mt-2">Kapasitas (GB / MB)</label>
            <input
              className="w-full rounded p-1 shadow-md focus:shadow-outline"
              type="text"
              value={
                newAlternatif.kapasitas === 0 ? "" : newAlternatif.kapasitas
              }
              onChange={gantiAlternatif("kapasitas")}
            />
            <input
              className="block w-full mt-6 p-2 rounded-full bg-green-500 cursor-pointer hover:bg-green-400 font-bold"
              type="submit"
              value="Tambah Alternatif"
            />
          </form>
          <button
            className={menghitung ? classHitungWait : classHitung}
            disabled={menghitung}
            onClick={hitungHasil}
          >
            {menghitung ? "Menghitung...." : "Lihat Hasil"}
          </button>
        </div>
        {hasilDidapat.length !== 0 && divHasil}
      </div>
    </div>
  );
};
