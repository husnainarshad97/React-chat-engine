import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="065fd290-8bf5-49ae-ada5-3ad489e4f4de"
      userName="Hasnain Arshad"
      userSecret="Ciit#1234"
      renderChatfeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  ); 
};

export default App;
