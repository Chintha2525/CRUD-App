import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


let Data=[
    {
        Id: 1,
        ToMeet: "Arun",
        Date: "2023-07-07",
        Time: "11:00",
        Purpose: "Playing",
      },
      {
        Id: 2,
        ToMeet: "JK",
        Date: "2023-07-10",
        Time: "10:00",
        Purpose: "Function",
      },
      {
        Id: 3,
        ToMeet: "Dinesh",
        Date: "2023-07-15",
        Time: "5:00",
        Purpose: "Friends meeting",
      },
]




ReactDOM.createRoot(document.getElementById("root")).render(<App Data={Data}/>);
