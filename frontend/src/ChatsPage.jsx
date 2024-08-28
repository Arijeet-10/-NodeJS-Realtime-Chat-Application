// react-chat-engine-pretty

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='52c2b1c4-a1f9-40d2-89ee-31162ee5612d'
        username={props.user.username}
        secret={props.user.secret}
        style={{height : '100%'}}
      />
    </div>
  );
};

export default ChatsPage;


// react-chat-engine-advanced

// import React from 'react';

// import {
//   ChatEngine,
//   MultiChatSocket,
//   useMultiChatLogic,
// } from 'react-chat-engine-advanced';

// export function App() {
//   const ChatsPage = useMultiChatLogic(
//     '52c2b1c4-a1f9-40d2-89ee-31162ee5612d',
//     props.user.username,
//     props.user.secret
//   );
//   return (
//     <>
//       <MultiChatWindow {...ChatsPage} />
//       <MultiChatSocket {...ChatsPage} />
//     </>
//   );
// };

// export default ChatsPage;