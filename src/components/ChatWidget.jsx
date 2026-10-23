export function ChatWidget({ messages = [] }) {
  return (
    <div className="chat-stream">
      {messages.map((m, idx) => <p key={idx}>{m.text}</p>)}
    </div>
  );
}
