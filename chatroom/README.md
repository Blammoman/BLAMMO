# BLAMMO Chatroom

A sleek, modern chatroom application with a striking black and orange design.

## Features

✨ **Features Included:**
- Clean, modern UI with black and orange color scheme
- Real-time message sending and receiving
- Automatic reply simulation (bot responses)
- Message persistence using localStorage
- Smooth animations and transitions
- Responsive design (works on desktop and mobile)
- Scrollable message container
- Timestamp for each message
- Visual distinction between your messages and others
- Auto-scroll to latest messages
- Focus on accessibility and user experience

## Structure

```
chatroom/
├── index.html      # HTML structure
├── style.css       # Styling and layout
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Getting Started

1. Open `index.html` in your web browser
2. Type a message in the input field at the bottom
3. Click "Send" or press Enter to send your message
4. The chatroom will automatically reply with a simulated response
5. Messages are saved in your browser's localStorage

## Usage

### Basic Interaction
- Type your message in the input field
- Click the "Send" button or press Enter
- Watch for automatic replies from the bot
- Your messages appear on the right in orange
- Bot replies appear on the left in gray

### Message Persistence
- All messages are automatically saved to localStorage
- Reload the page to see your previous messages
- Your conversation history is preserved

### Clear Messages
To clear all messages, open the browser console and run:
```javascript
chatroom.clearAllMessages();
```

## Customization

### Colors
Edit the CSS variables in `style.css`:
- Primary Orange: `#ff8c00`
- Dark Orange: `#ff6b00`
- Background: `#0d0d0d` and `#1a1a1a`

### Bot Replies
Modify the replies array in `script.js`:
```javascript
const replies = [
    'Your custom response 1',
    'Your custom response 2',
    // Add more...
];
```

### Styling
- Adjust padding, margins, and border-radius in `style.css`
- Modify font sizes and families
- Customize animation speeds

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Technical Details

### Technologies Used
- HTML5
- CSS3 (Flexbox, Gradients, Animations)
- Vanilla JavaScript (ES6+)
- localStorage API

### Key Components
1. **Chatroom Class**: Manages all chat functionality
2. **Message Objects**: Store message data with timestamps
3. **DOM Manipulation**: Dynamic message rendering
4. **Event Handling**: Message submission and input handling
5. **Data Persistence**: localStorage integration

## Future Enhancements

Potential features to add:
- User authentication
- Real-time WebSocket connection
- User typing indicators
- Message editing and deletion
- Emoji support
- File/image sharing
- Multiple chat rooms
- User profiles
- Message reactions

## License

This chatroom is part of the BLAMMO project.

---

**Made with ❤️ for BLAMMO**
