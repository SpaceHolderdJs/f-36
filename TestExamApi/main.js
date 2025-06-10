const API_KEY = 'AIzaSyB4ru9QDMr3GvFeMfmw2cJ6TUqrKLhWCAA';

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

// React - axios
// Angular - HTTPClient

class AIChat {
  constructor(key) {
    this.key = key;
    this.history = [];

    this.conversation = {
      contents: [],
    };
  }

  updateConversation(conversationPart) {
    this.conversation.contents.push(conversationPart);
  }

  getTheLatestConversationPart() {
    return this.conversation.contents.at(-1);
  }

  removeTheLatestConversationPart() {
    this.conversation.contents.pop();
  }

  async sendMessage(text = '') {
    //[NOTE]:Initial request from a user is saved to the conversation
    this.updateConversation({ parts: [{ text: text }], role: 'user' });

    try {
      const response = await axios.post(API_URL, this.conversation);

      if (response.data) {
        const responseContent = response.data.candidates[0].content;
        //[NOTE]:The response from AI is saved to the conversation
        this.updateConversation(responseContent);
      }
    } catch (err) {
      this.removeTheLatestConversationPart();
      alert('The error is occurred!');
    }
  }
}

const chat1 = new AIChat(API_KEY);

// const message = prompt('Your message to the AI');

// chat1.sendMessage(message).then(() => {
//   const aIResponse = chat1.getTheLatestConversationPart();
//   console.log(aIResponse.parts[0].text);
// });

// Elements

const textarea = document.querySelector('#chat-text');
const button = document.querySelector('#chat-button');

const chatContent = document.querySelector('#chat-content');

let isResponseLoading = false;

const updateChatContent = () => {
  chatContent.innerHTML = '';

  for (const part of chat1.conversation.contents) {
    const messageText = part.parts[0].text;
    const role = part.role;

    const messageHTML = `
            <div class="chat-message ${
              role === 'user' ? 'user-message' : 'ai-message'
            }">
                <span>${role === 'user' ? 'You' : 'Gemini'}</span>
                <h5>${markdownToHtml(messageText)}</h5>
            </div>
        `;

    chatContent.innerHTML += messageHTML;
  }
};

button.onclick = () => {
  const message = textarea.value;

  if (!message.trim()) {
    alert('Please enter the message');
    return;
  }

  chat1
    .sendMessage(message)
    .then(() => {
      updateChatContent();
      textarea.value = '';
    })
    .finally(() => {
      isResponseLoading = false;
      document.querySelector('.loader')?.remove();
    });

  updateChatContent();

  isResponseLoading = true;
  chatContent.innerHTML += `<div class="loader"></div>`;
};



function markdownToHtml(markdown) {
    if (!markdown || typeof markdown !== 'string') {
      return '';
    }
  
    let html = markdown;
  
    // Headers (h1-h6)
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
    // Bold text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
  
    // Italic text
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.*?)_/g, '<em>$1</em>');
  
    // Strikethrough
    html = html.replace(/~~(.*?)~~/g, '<del>$1</del>');
  
    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
    // Code blocks
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
    // Images
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');
  
    // Unordered lists
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
  
    // Ordered lists
    html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>');
  
    // Wrap consecutive list items in ul/ol tags
    html = html.replace(/(<li>.*<\/li>)/gs, (match) => {
      return '<ul>' + match + '</ul>';
    });
  
    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
  
    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr>');
    html = html.replace(/^\*\*\*$/gim, '<hr>');
  
    // Line breaks and paragraphs
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');
  
    // Wrap in paragraph tags if content doesn't start with a block element
    if (!html.match(/^<(h[1-6]|ul|ol|blockquote|pre|hr)/)) {
      html = '<p>' + html + '</p>';
    }
  
    // Clean up empty paragraphs
    html = html.replace(/<p><\/p>/g, '');
  
    return html;
}