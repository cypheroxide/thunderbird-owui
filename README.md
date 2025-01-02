# Thunderbird Open WebUI Extension

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Thunderbird](https://img.shields.io/badge/Thunderbird-Extension-orange.svg)

Thunderbird OWUI is a flexible Thunderbird extension that allows you to connect to various Large Language Model (LLM) API endpoints, including OpenWebUI, Ollama, OpenAI, and others. By default, it connects to Ollama's local API endpoint, but can be configured to work with any compatible API service.

## Features

- Connect to multiple LLM API endpoints:
  - Ollama (default: http://localhost:11434)
  - OpenWebUI Docker container
  - Other API services (configurable)
- Configurable API endpoints and authentication
- Simple, user-friendly interface
- Supports both streaming and regular JSON responses
- Secure API key storage

## Requirements

- **Mozilla Thunderbird** (latest version recommended)
- At least one of the following:
  - **Ollama** running locally
  - **Docker** with OpenWebUI container
  - Access to other LLM API services

## Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/cypheroxide/thunderbird-owui.git
   cd thunderbird-owui
   ```

2. Create a clean build:
   ```bash
   mkdir build
   cp -r manifest.json background.js popup.html popup.js options.html options.js brain-circuit-*.png build/
   cd build
   zip -r ../thunderbird-owui.zip .
   ```

3. Install in Thunderbird:
   - Go to `Tools > Add-ons and Themes > Extensions`
   - Click the gear icon (⚙️)
   - Choose `Install Add-on From File`
   - Select the `thunderbird-owui.zip` file

## Configuration

1. After installation, access the extension settings:
   - Click the extension icon in the toolbar
   - Click the gear icon (⚙️) in the popup
   - Or go to `Tools > Add-ons and Themes > Extensions > OpenWebUI Connector > Options`

2. Configure your preferred endpoint:
   - For Ollama: `http://localhost:11434`
   - For OpenWebUI: `http://localhost:8080`
   - For other services: Enter the appropriate API endpoint
   - Add API key if required

## Project Structure

```
thunderbird-owui/
├── manifest.json        # Extension configuration (Manifest V3)
├── background.js        # Background script for API handling
├── popup.html          # User interface
├── popup.js            # Popup interface logic
├── options.html        # Settings page
├── options.js          # Settings management
└── icons/              # Extension icons
    ├── brain-circuit-16.png
    ├── brain-circuit-32.png
    └── brain-circuit-128.png
```

## Development

### Prerequisites

- Understanding of JavaScript and WebExtension APIs
- Familiarity with LLM APIs
- Basic knowledge of Thunderbird extension development

### Adding New Features

1. Modify `background.js` for new API handling features
2. Update `options.html` and `options.js` for new configuration options
3. Enhance `popup.html` and `popup.js` for UI improvements

### Debugging

- Use Thunderbird's built-in debugging tools:
  - Go to `Tools > Developer Tools > Debug Add-ons`
  - Enable `Extension Debugging`
  - Use the Browser Console (Ctrl+Shift+J) for logs

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MPL License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact:

- **Author**: Angel Santiago (a.k.a. CypherOxide)
- **Email**: [as@HopeIntegratedSystems](mailto:angel.santiago@hopeintsys.com)
- **GitHub**: [https://github.com/cypheroxide](https://github.com/cypheroxide)
- **Site**: [Hope Integrated Systems](https://www.hopeintsys.com)
- **Blog**: [AngelSantiago.me](https://angelsantiago.me)