import React from "react";
import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
import "./App.css";

import SendbirdProvider from "@sendbird/uikit-react/SendbirdProvider";
import CustomizedApp from "./CustomizedApp";

export default function App() {
  const APP_ID = "B1C2424D-662D-477D-B7D5-5CFD9039CE22";
  const User_ID = "UIKit001";
  const NickName = "UIKit001";

  return (
    <SendbirdProvider appId={APP_ID} userId={User_ID} nickname={NickName}>
      <CustomizedApp />
    </SendbirdProvider>
    // <div className="App">
    //   <SendbirdApp
    //     appId={APP_ID}
    //     userId={User_ID}
    //     nickname={NickName}
    //   />
    // </div>
  );
}
