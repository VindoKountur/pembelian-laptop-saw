import React from "react";
import { Header } from "./components/Header";
import { Bobot } from "./components/Bobot";
import { FormAlternatif } from "./components/FormAlternatif";
import { ListAlternatif } from "./components/ListAlternatif";

import { GlobalProvider } from "./Context/GlobalContext";

import linkedinIcon from "./img/linkedin_icon.png";

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
        <div className="flex justify-around items-center bg-gray-900 w-full py-4 text-gray-200">
          <p>&copy;2020 Lifeindo Kountur</p>
          <div>
            <a
              title="My linkedin 🙂"
              className="flex items-center hover:text-gray-600"
              href="https://www.linkedin.com/in/lifeindo-kountur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="Find me" />
              <span className="ml-2">Find Me</span>
            </a>
          </div>
        </div>
      </GlobalProvider>
    </div>
  );
};

export default App;
