/* ===================================
   BLAMMO - Main Application
   =================================== */

// Chatroom Class
class Chatroom {
    constructor() {
        this.messages = this.loadMessages();
        this.botReplies = [
            'That sounds great! Tell me more.',
            'I totally agree with you!',
            'That\'s interesting. What else?',
            'I couldn\'t have said it better myself.',
            'Absolutely! You\'re thinking correctly.',
            'That\'s a good point.',
            'I couldn\'t agree more!',
            'Thanks for sharing that!',
            'That\'s awesome! 🔥',
            'Keep it up! You\'re doing great.',
        ];
    }

    loadMessages() {
        const stored = localStorage.getItem('blammo-messages');
        return stored ? JSON.parse(stored) : [];
    }

    saveMessages() {
        localStorage.setItem('blammo-messages', JSON.stringify(this.messages));
    }

    addMessage(text, isUser = true) {
        const message = {
            text: text,
            isUser: isUser,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        this.messages.push(message);
        this.saveMessages();
        return message;
    }

    getRandomReply() {
        return this.botReplies[Math.floor(Math.random() * this.botReplies.length)];
    }

    clearMessages() {
        this.messages = [];
        this.saveMessages();
    }
}

// To-Do List Class
class TodoList {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFilter = 'all';
    }

    loadTasks() {
        const stored = localStorage.getItem('blammo-tasks');
        return stored ? JSON.parse(stored) : [];
    }

    saveTasks() {
        localStorage.setItem('blammo-tasks', JSON.stringify(this.tasks));
    }

    addTask(text) {
        const task = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString()
        };
        this.tasks.push(task);
        this.saveTasks();
        return task;
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
        }
    }

    getTasks(filter = 'all') {
        switch (filter) {
            case 'active':
                return this.tasks.filter(t => !t.completed);
            case 'completed':
                return this.tasks.filter(t => t.completed);
            default:
                return this.tasks;
        }
    }

    getStats() {
        return {
            total: this.tasks.length,
            completed: this.tasks.filter(t => t.completed).length,
            remaining: this.tasks.filter(t => !t.completed).length
        };
    }
}

// Main BLAMMO Application
class BlammoApp {
    constructor() {
        this.chatroom = new Chatroom();
        this.todoList = new TodoList();
        this.currentSection = 'home';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderChatroom();
        this.renderTodoList();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.dataset.section;
                this.switchSection(section);
            });
        });

        // CTA Buttons
        document.querySelectorAll('.cta-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const section = btn.dataset.section;
                this.switchSection(section);
            });
        });

        // Chatroom
        const messageInput = document.getElementById('messageInput');
        const sendBtn = document.getElementById('sendBtn');
        const clearChatBtn = document.getElementById('clearChatBtn');

        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && messageInput.value.trim()) {
                this.sendMessage();
            }
        });

        sendBtn.addEventListener('click', () => this.sendMessage());

        clearChatBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all messages?')) {
                this.chatroom.clearMessages();
                this.renderChatroom();
            }
        });

        // To-Do List
        const taskInput = document.getElementById('taskInput');
        const addTaskBtn = document.getElementById('addTaskBtn');

        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && taskInput.value.trim()) {
                this.addTask();
            }
        });

        addTaskBtn.addEventListener('click', () => this.addTask());

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.todoList.currentFilter = btn.dataset.filter;
                this.renderTodoList();
            });
        });
    }

    switchSection(section) {
        // Update active section
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.getElementById(section).classList.add('active');

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        document.querySelector(`[data-section="${section}"]`).classList.add('active');

        this.currentSection = section;
    }

    sendMessage() {
        const input = document.getElementById('messageInput');
        const text = input.value.trim();

        if (!text) return;

        // Add user message
        this.chatroom.addMessage(text, true);
        input.value = '';
        this.renderChatroom();

        // Simulate bot reply
        setTimeout(() => {
            const reply = this.chatroom.getRandomReply();
            this.chatroom.addMessage(reply, false);
            this.renderChatroom();
        }, 500);
    }

    renderChatroom() {
        const container = document.getElementById('messagesContainer');
        container.innerHTML = '';

        if (this.chatroom.messages.length === 0) {
            container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">💬</div><p>No messages yet. Start a conversation!</p></div>';
            return;
        }

        this.chatroom.messages.forEach(msg => {
            const msgEl = document.createElement('div');
            msgEl.className = `message ${msg.isUser ? 'user' : 'bot'}`;
            msgEl.innerHTML = `
                <div>
                    <div class="message-content">${this.escapeHtml(msg.text)}</div>
                    <div class="message-time">${msg.timestamp}</div>
                </div>
            `;
            container.appendChild(msgEl);
        });

        // Scroll to bottom
        container.scrollTop = container.scrollHeight;
    }

    addTask() {
        const input = document.getElementById('taskInput');
        const text = input.value.trim();

        if (!text) return;

        this.todoList.addTask(text);
        input.value = '';
        this.renderTodoList();
    }

    renderTodoList() {
        // Update stats
        const stats = this.todoList.getStats();
        document.getElementById('totalTasks').textContent = stats.total;
        document.getElementById('completedTasks').textContent = stats.completed;
        document.getElementById('remainingTasks').textContent = stats.remaining;

        // Render tasks
        const container = document.getElementById('tasksContainer');
        const tasks = this.todoList.getTasks(this.todoList.currentFilter);

        container.innerHTML = '';

        if (tasks.length === 0) {
            container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">✓</div><p>No tasks yet. Add one to get started!</p></div>';
            return;
        }

        tasks.forEach(task => {
            const taskEl = document.createElement('div');
            taskEl.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskEl.innerHTML = `
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}">
                <span class="task-text">${this.escapeHtml(task.text)}</span>
                <button class="task-delete" data-id="${task.id}">Delete</button>
            `;

            const checkbox = taskEl.querySelector('.task-checkbox');
            checkbox.addEventListener('change', () => {
                this.todoList.toggleTask(task.id);
                this.renderTodoList();
            });

            const deleteBtn = taskEl.querySelector('.task-delete');
            deleteBtn.addEventListener('click', () => {
                this.todoList.deleteTask(task.id);
                this.renderTodoList();
            });

            container.appendChild(taskEl);
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the application when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new BlammoApp();
});
