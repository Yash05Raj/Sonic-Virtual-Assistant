# Sonic Virtual Assistant

A modern, interactive web-based virtual assistant with voice recognition and speech synthesis capabilities. Sonic is an intelligent assistant that listens to your commands and responds intelligently.

![Sonic Virtual Assistant](images/logo.png)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Commands Supported](#commands-supported)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)
- [License](#license)

## Features

✨ **Core Features:**
- 🎤 **Voice Recognition** - Uses Web Speech API for accurate speech-to-text conversion
- 🔊 **Speech Synthesis** - Natural-sounding text-to-speech responses
- 🎨 **Modern UI Design** - Sleek, gradient-based interface with animated elements
- 📱 **Responsive Design** - Works seamlessly on desktop and tablet devices
- ✨ **Visual Feedback** - Real-time animations and pulse effects during voice interaction
- 🌐 **Web-Based** - No installation required, runs directly in your browser

## Technologies Used

- **Frontend:**
  - HTML5
  - CSS3 (with animations and gradients)
  - JavaScript (Vanilla)
  
- **APIs:**
  - Web Speech API (Speech Recognition)
  - Web Speech API (Speech Synthesis)
  
- **Design:**
  - Poppins Font (Google Fonts)
  - Custom CSS animations
  - Gradient backgrounds and visual effects

## Installation

### Prerequisites
- A modern web browser with Web Speech API support (Chrome, Edge, Safari, Firefox)
- No server or additional dependencies required

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yash05Raj/Sonic-Virtual-Assistant.git
   cd Sonic-Virtual-Assistant
   ```

2. **Open the application:**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

3. **Access the application:**
   - Open your browser and navigate to `http://localhost:8000` (if using a server)
   - Or directly open the `index.html` file

## Usage

1. **Start Listening:**
   - Click the blue interaction button to activate voice recognition
   - The button will hide and a voice animation will appear

2. **Give Commands:**
   - Speak clearly after clicking the button
   - The assistant will recognize your speech and display it on screen

3. **Get Responses:**
   - Sonic will process your command and respond with both text and voice

### Example Commands

- "Hello Sonic" - Greet the assistant
- "Who are you" - Get information about Sonic
- "What can you do" - Learn about available features
- "Open Google/YouTube" - Navigate to websites
- "What time is it" - Get current time information
- "Tell me a joke" - Hear a joke
- And many more!

## Project Structure

```
Sonic-Virtual-Assistant/
├── index.html          # Main HTML file with structure and layout
├── style.css           # Styling with animations and responsive design
├── script.js           # JavaScript logic for voice recognition and commands
├── images/             # Image assets
│   ├── logo.png       # Sonic logo
│   ├── voice.gif      # Voice animation
│   └── [other assets]
└── README.md          # This file
```

## Commands Supported

The assistant responds to various voice commands including:

| Command | Response |
|---------|----------|
| Hello/Hello Sonic | Greeting response |
| Who are you | Introduction |
| What can you do | Feature overview |
| What's the time/What time is it | Current time |
| Open [website] | Opens the specified website |
| Tell me a joke | Tells a random joke |
| What's the date | Current date information |
| My name is [name] | Acknowledges your name |
| How are you | Responds positively |

*Note: More commands can be easily added to the `takeCommand()` function in `script.js`*

## Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Best performance |
| Edge | ✅ Full | Full support |
| Firefox | ✅ Full | Full support |
| Safari | ✅ Full | Full support |
| Opera | ✅ Full | Full support |
| IE | ❌ No | Not supported |

**Note:** Web Speech API requires HTTPS in production environments for security reasons.

## Customization

### Adding New Commands

Edit the `takeCommand()` function in `script.js`:

```javascript
else if(message.includes("your command"))
{
    speak("Your response");
}
```

### Changing Colors

Modify the CSS variables in `style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... other variables */
}
```

### Adjusting Voice Properties

Modify parameters in the `speak()` function in `script.js`:

```javascript
text_speak.rate = 1;      // Speech speed (0.5 - 2.0)
text_speak.pitch = 1;     // Voice pitch (0 - 2.0)
text_speak.volume = 1;    // Volume (0 - 1.0)
text_speak.lang = "en-GB"; // Language
```

## Troubleshooting

### Microphone not working
- Check browser permissions for microphone access
- Ensure your device has a working microphone
- Try using a different browser

### Speech not recognized
- Speak clearly and at normal pace
- Reduce background noise
- Check your internet connection (required for some browsers)

### No voice response
- Check browser volume settings
- Ensure browser audio is not muted
- Verify Web Speech API is supported in your browser

## Future Enhancements

- [ ] Integration with real APIs (weather, news, etc.)
- [ ] User accounts and personalization
- [ ] Multiple language support
- [ ] Offline functionality with service workers
- [ ] Mobile app version
- [ ] Advanced NLP for better command recognition
- [ ] Dark/Light theme toggle

## Author

**Yash Raj**
- GitHub: [@Yash05Raj](https://github.com/Yash05Raj)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Fonts (Poppins)
- Web Speech API documentation
- Inspiration from modern virtual assistants
- Community feedback and contributions

For questions or support, please open an issue on GitHub.
