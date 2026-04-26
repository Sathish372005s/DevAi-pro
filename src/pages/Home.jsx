import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import ChatWindow from "../components/chat/ChatWindow";

export default function Home() {
  return (
    <div className="flex h-screen gap-3.5 ">
      <div>
        <Sidebar />
      </div>
      
      <div>
        <ChatWindow />
      </div>
    </div>
  );
}
