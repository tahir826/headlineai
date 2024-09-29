"use client"
import Chat from '@/components/Chat'
import ChatApp from '@/components/ChatApp'
import ChatInput from '@/components/ChatInput'
import Header from '@/components/Header'
import SideLayout from '@/components/SidePanel'


  const handleSendMessage = (message: string) => {

  };

function page() {
  return (
    <main>
      <Header />
      <SideLayout />
      
        {/* <ChatInput onSendMessage={handleSendMessage} /> */}
        {/* <Chat /> */}
        < ChatApp />
        </main>
  )
}

export default page