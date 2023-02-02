class ChatMessage {
  constructor(id, sender, body, timeStamp, liked, isLocal, color) {
    this.id = id;
    this.sender = sender;
    this.body = body;
    this.timeStamp = timeStamp;
    this.liked = liked;
    this.isLocal = isLocal;
  }
}

export default ChatMessage;
