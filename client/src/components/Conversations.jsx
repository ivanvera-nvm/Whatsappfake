import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";

const Conversations = () => {
  const { conversations, selectConversationIndex} = useConversations();


  return (
    <div>
      <ListGroup variant="flush">
        {conversations.map(({ recipients, selected}, i) => (
          <ListGroup.Item key={i} action active={selected} onClick={()=>{selectConversationIndex(i)}}>
            {recipients.map(({ name }) => name).join(", ")}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Conversations;
