import React, { useState, createContext } from "react";

export const BobotContext = createContext();

export const BobotProvider = props => {
  const [bobot, setBobot] = useState([
    { nama: "Harga", nilai: 5 },
    { nama: "RAM", nilai: 2 },
    { nama: "Processor", nilai: 2 },
    { nama: "Kapasitas (HD)", nilai: 1 }
  ]);

  return (
    <BobotContext.Provider value={[bobot, setBobot]}>
      {props.children}
    </BobotContext.Provider>
  );
};
