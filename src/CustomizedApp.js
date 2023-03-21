import React, { useState } from "react";

import SBConversation from "@sendbird/uikit-react/Channel";
import SBChannelList from "@sendbird/uikit-react/ChannelList";
import SBChannelSettings from "@sendbird/uikit-react/ChannelSettings";
import { withSendBird } from "@sendbird/uikit-react";

function CustomizedApp() {
  // useState
  const [showSettings, setShowSettings] = useState(false);
  const [currentChannelUrl, setCurrentChannelUrl] = useState("");
  // const currentChannelUrl =
  //   "sendbird_group_channel_174697001_20a42024927f81bd183cf6545842162392cf3027";

  return (
    <div className="customized-app">
      <div className="sendbird-app__wrap">
        <div className="sendbird-app__channellist-wrap">
          <SBChannelList
            onChannelSelect={(channel) => {
              if (channel && channel.url) {
                setCurrentChannelUrl(channel.url);
              }
            }}
          />
        </div>
        <div className="sendbird-app__conversation-wrap">
          <SBConversation
            channelUrl={currentChannelUrl}
            onChatHeaderActionClick={() => {
              setShowSettings(true);
            }}
          />
        </div>
      </div>
      {showSettings && (
        <div className="sendbird-app__settingspanel-wrap">
          <SBChannelSettings
            channelUrl={currentChannelUrl}
            onCloseClick={() => {
              setShowSettings(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
export default CustomizedApp;

// import React, { useState, useCallback } from "react";

// import withSendBird from "@sendbird/uikit-react/withSendbird";
// import sendBirdSelectors from "@sendbird/uikit-react/sendbirdSelectors";
// import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext";
// import SBConversation from "@sendbird/uikit-react/Channel";
// import SBChannelList from "@sendbird/uikit-react/ChannelList";
// import SBChannelSettings from "@sendbird/uikit-react/ChannelSettings";

// function CustomizedApp(props) {
//   // default props

//   const currentChannelUrl =
//     "sendbird_group_channel_174697001_20a42024927f81bd183cf6545842162392cf3027";
//   // useState
//   const [showSettings, setShowSettings] = useState(false);
//   // const [currentChannelUrl, setCurrentChannelUrl] = useState("");
//   const context = useSendbirdStateContext();
//   const sdkInstance = sendBirdSelectors.getSdk(context);

//   return (
//     <div className="customized-app">
//       <div className="sendbird-app__wrap">
//         <div className="sendbird-app__conversation-wrap">
//           <SBConversation
//             // replyType="THREAD"
//             channelUrl={currentChannelUrl}
//           ></SBConversation>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default withSendBird(CustomizedApp);
