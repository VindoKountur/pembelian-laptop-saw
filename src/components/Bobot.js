import React, { useState, useContext, useCallback, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalContext";

export const Bobot = () => {
  const [bobot, setBobot, , ] = useContext(GlobalContext);
  const [jumlahBobot, setJumlahBobot] = useState(0);

  useEffect(() => {
    hitungBobot();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bobot]);

  const hitungBobot = () => {
    let tmp = 0;
    bobot.forEach(ele => {
      tmp += Number(ele.nilai);
    });
    setJumlahBobot(tmp);
  };
  const gantiNilaiBobot = useCallback(
    index => event => {
      const newBobot = [...bobot];
      newBobot[index].nilai = Number(event.target.value);
      setBobot(newBobot);
    },
    [bobot, setBobot]
  );

  const alert10 = (
    <p id="alertBelum10" className="text-white bg-red-700 w-full text-center py-3">
      Jumlah Bobot Harus 10
    </p>
  );

  return (
    <div className="w-full bg-gray-300">
      <h2 className="text-center text-xl py-3">Bobot Kategori</h2>
      {jumlahBobot !== 10 && alert10}
      <div className="flex flex-wrap container w-10/12 m-auto">
        {bobot.map((value, i) => (
          <div className="flex-auto w-5/12" key={i}>
            <div className="bg-green-500 text-center m-2 shadow-lg">
              <p className="py-3 text-xl">{value.nama}</p>
              <input
                className="text-center w-full py-3 text-4xl"
                type="number"
                value={value.nilai}
                min="0"
                max="10"
                onChange={gantiNilaiBobot(i)}
              />
            </div>
          </div>
        ))}
        ;
      </div>
      <p className="pb-3 w-10/12 m-auto font-semibold">
        Note : Jumlah total bobot harus bernilai 10
      </p>
    </div>
  );
};
