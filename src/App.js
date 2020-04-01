import React from "react";
import { Header } from "./components/Header";
import { Bobot } from "./components/Bobot";
import { FormAlternatif } from "./components/FormAlternatif";
import { ListAlternatif } from "./components/ListAlternatif";

import { GlobalProvider } from "./Context/GlobalContext";

const App = () => {
  return (
    <div className="bg-gray-400">
      <GlobalProvider>
        <Header />
        <Bobot />
        {/* Form And List Component */}
        <div className="flex-column md:flex md:items-start">
          <FormAlternatif />
          <ListAlternatif />
        </div>
        <p className="text-center bg-gray-900 text-gray-300 text-xs py-4">
          &copy;2020 Lifeindo Kountur. All rights reserved.
        </p>
      </GlobalProvider>
    </div>
  );
};

export default App;
