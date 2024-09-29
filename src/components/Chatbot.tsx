import styles from './Chatbot.module.css';

interface ChatbotProps {
  // Add any props needed for the chatbot
}

const Chatbot: React.FC<ChatbotProps> = () => {
  return (
    <div className={styles.chatbot}>
      <h2>Chatbot</h2>
      {/* Add chatbot functionality here */}
    </div>
  );
};

export default Chatbot;