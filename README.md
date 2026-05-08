# 🔥 BLAMMO - Integrated Platform

A modern, full-featured web application combining a real-time chatroom with a powerful to-do list manager. Built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

### 🏠 Home Page
- Beautiful landing page showcasing the platform
- Quick access buttons to Chatroom and To-Do List
- Modern, responsive grid layout
- Eye-catching feature cards

### 💬 Chatroom
- Real-time message sending and receiving
- Automatic bot replies
- Message timestamps
- Smooth slide-in animations
- Full message history persistence
- Custom orange-themed scrollbar
- Clear chat history option
- Responsive design

### ✓ To-Do List
- Add, complete, and delete tasks
- Real-time task statistics (Total, Completed, Remaining)
- Filter tasks (All, Active, Completed)
- Task persistence across sessions
- Smooth animations and transitions
- Task completion checkboxes
- Modern, intuitive UI

### 🎨 Design
- Bold black and orange color scheme
- Gradient headers and buttons
- Smooth animations and transitions
- Fully responsive (desktop, tablet, mobile)
- Professional typography
- Consistent styling throughout

### 💾 Data Persistence
- Browser localStorage integration
- All data saved automatically
- Messages and tasks persist across sessions
- No external database needed

## 📁 File Structure

```
BLAMMO/
├── index.html       # Main HTML file with all sections
├── styles.css       # Comprehensive styling and layout
├── app.js          # Main application logic
└── README.md       # This file
```

## 🚀 Getting Started

1. Clone or download the repository
2. Open `index.html` in your web browser
3. Navigate between Chatroom and To-Do List using the navigation bar
4. Start chatting and managing your tasks!

### No Installation Required
- Pure vanilla JavaScript (no frameworks or dependencies)
- Works in all modern browsers
- No build process or compilation needed
- Just open and use!

## 🎮 How to Use

### Chatroom
1. Click "Chatroom" in the navigation
2. Type your message in the input field
3. Click "Send" or press Enter
4. The bot will automatically reply
5. View your chat history
6. Clear chat with the "Clear Chat" button

### To-Do List
1. Click "To-Do List" in the navigation
2. Enter a task and click "Add Task" or press Enter
3. Check the checkbox to mark tasks complete
4. Use filter buttons to view All, Active, or Completed tasks
5. Click "Delete" to remove tasks
6. View live statistics at the top

## 🎨 Customization

### Color Scheme
Edit the CSS variables at the top of `styles.css`:
```css
:root {
    --primary-orange: #ff8c00;
    --dark-orange: #ff6b00;
    --dark-bg: #0d0d0d;
    /* ... more variables ... */
}
```

### Bot Replies
Modify the `botReplies` array in `app.js`:
```javascript
this.botReplies = [
    'Your custom reply 1',
    'Your custom reply 2',
    // Add more replies...
];
```

### Styling
- Adjust colors, spacing, and sizing in `styles.css`
- Customize fonts and typography
- Modify animation speeds and transitions

## 🔧 Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Storage**: Browser localStorage API
- **Architecture**: Single Page Application (SPA)
- **Design Pattern**: Object-Oriented Programming (Classes)

## 📊 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Key Features Explained

### Single Page Application (SPA)
- Smooth navigation without page reloads
- Fast transitions between sections
- Efficient resource usage

### Local Storage
- All data stored in browser's localStorage
- No external server required
- Data persists across browser sessions
- Automatic saving on every action

### Responsive Design
- Adapts to all screen sizes
- Mobile-first approach
- Touch-friendly on mobile devices
- Flexible grid layouts

### Object-Oriented Design
- `Chatroom` class manages chat functionality
- `TodoList` class manages tasks
- `BlammoApp` class coordinates the application

## 🚀 Future Enhancements

Potential features to add:
- User accounts and authentication
- Real-time WebSocket communication
- Message editing and deletion
- Emoji and formatting support
- File/image sharing
- Multiple chat rooms
- User profiles and avatars
- Task priorities and due dates
- Export/import functionality
- Dark/Light theme toggle

## 📝 License

This project is part of the BLAMMO platform.

## 👨‍💻 Author

Created by **Blammoman**

---

**Made with ❤️ using vanilla JavaScript**

🔥 Experience the power of BLAMMO - Your all-in-one productivity platform! 🔥
