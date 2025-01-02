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
   cd build
   zip -r owui-thunderbird.xpi . -x "*.git*"
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
      - For OpenWebUI: `http://localhost:8080`
## Project Structure

```
thunderbird-owui/
├── manifest.json        # Extension configuration (Manifest V2)
└── icons/              # Extension icons
    ├── brain-circuit-32.png
    
```

## Development

### Prerequisites

- Understanding of JavaScript and WebExtension APIs
- Familiarity with Docker container networks
- Basic knowledge of Thunderbird extension development

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