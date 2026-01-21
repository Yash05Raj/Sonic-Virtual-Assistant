# Sonic Virtual Assistant

A modern, web-based virtual assistant with voice recognition and speech synthesis capabilities. Sonic listens to your commands and responds intelligently with both text and voice.

![Sonic Virtual Assistant](images/logo.png)

## Features

- 🎤 **Voice Recognition** - Speech-to-text using Web Speech API
- 🔊 **Speech Synthesis** - Natural text-to-speech responses with customizable settings
- 🎨 **Modern UI** - Sleek gradient interface with glassmorphic design and animations
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ✨ **Visual Feedback** - Real-time animations during voice interaction
- 🌐 **Web-Based** - No installation required, runs in your browser
- 📜 **Conversation History** - Tracks and displays your recent conversations
- 💡 **Command Suggestions** - Quick-access buttons for common commands
- ⚙️ **Voice Settings** - Customize speech rate, pitch, and volume
- 🎭 **Theme Toggle** - Switch between dark and light modes
- ⌨️ **Keyboard Shortcuts** - Efficient navigation with hotkeys
- 💾 **Persistent Storage** - Saves your preferences and history locally

## Technologies Used

- **HTML5, CSS3, JavaScript** (Vanilla)
- **Web Speech API** (Recognition & Synthesis)
- **Google Fonts** (Poppins)
- **Custom CSS Animations**

## Installation

### Prerequisites
- Modern web browser with Web Speech API support (Chrome, Edge, Safari, Firefox)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yash05Raj/Sonic-Virtual-Assistant.git
   cd Sonic-Virtual-Assistant
   ```

2. **Open the application:**
   - Open `index.html` directly in your browser, or
   - Use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js
     npx http-server
     ```

3. **Access:** Navigate to `http://localhost:8000` or open `index.html` directly

## Usage

1. Click the blue interaction button (or press `Space`) to activate voice recognition
2. Speak your command clearly
3. Sonic will process and respond with text and voice
4. View your conversation history by clicking the history icon or pressing `Ctrl+H`
5. Customize voice settings by clicking the settings icon or pressing `Ctrl+,`
6. Toggle between dark and light themes using the theme button

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Space` | Activate voice recognition |
| `Esc` | Cancel listening / Close panels |
| `Ctrl+H` | Toggle conversation history |
| `Ctrl+,` | Open settings panel |

### Example Commands

- "Hello Sonic" - Greet the assistant
- "Who are you" - Learn about Sonic
- "What can you do" - View available features
- "Open Google/YouTube" - Navigate to websites
- "What time is it" - Get current time
- "Tell me a joke" - Hear a joke

## New Features

### Conversation History
- Automatically saves all your conversations
- View past commands and responses
- Clear history anytime
- Persists across browser sessions

### Voice Settings
- Adjust speech rate (0.5x - 2x)
- Customize pitch (0.5 - 2.0)
- Control volume (0% - 100%)
- Reset to defaults with one click

### Theme Toggle
- Switch between dark and light modes
- Preference saved automatically
- Smooth transitions between themes

### Command Suggestions
- Quick-access buttons for common commands
- Click any suggestion to execute instantly
- Perfect for new users

## Project Structure

```
Sonic-Virtual-Assistant/
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Voice recognition logic
├── images/             # Image assets
│   ├── logo.png
│   └── voice.gif
└── README.md
```

## Commands Supported

| Command | Response |
|---------|----------|
| Hello/Hello Sonic | Greeting |
| Who are you | Introduction |
| What can you do | Feature overview |
| What's the time | Current time |
| Open [website] | Opens specified website |
| Tell me a joke | Random joke |
| What's the date | Current date |
| My name is [name] | Acknowledges name |

*Add more commands in the `takeCommand()` function in `script.js`*

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Edge | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Opera | ✅ Full |
| IE | ❌ No |

**Note:** Web Speech API requires HTTPS in production.

## Customization

**Add Commands** - Edit `takeCommand()` in `script.js`:
```javascript
else if(message.includes("your command")) {
    speak("Your response");
}
```

**Change Colors** - Modify CSS variables in `style.css`

**Adjust Voice** - Edit `speak()` function parameters (rate, pitch, volume, language)

## Troubleshooting

- **Microphone issues:** Check browser permissions and device microphone
- **Speech not recognized:** Speak clearly, reduce background noise, check internet
- **No voice response:** Check browser volume and audio settings

## Author

**Yash Raj**
- GitHub: [@Yash05Raj](https://github.com/Yash05Raj)

## License

MIT License - See LICENSE file for details

---

For questions or support, please open an issue on GitHub.
