
markdown
# Thunderbird Open WebUI Extension

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Thunderbird](https://img.shields.io/badge/Thunderbird-Extension-orange.svg)

Thunderbird OWUI is a simple Thunderbird extension that allows you to connect and send data to an OpenWebUI Docker container. This project enables seamless integration between Thunderbird and OpenWebUI's APIs.

## Features

- Connect to an OpenWebUI Docker container from Thunderbird.
- Send and receive data using a simple form in the extension's popup interface.
- Easy to configure and extend for various OpenWebUI use cases.

## Requirements

- **Mozilla Thunderbird** (latest version recommended)
- **Docker** with an OpenWebUI container running
- **Node.js** (optional, for development purposes)

## Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/cypheroxide/thunderbird-owui.git
   cd thunderbird-owui
   ```

2. Zip the extension files:
   ```bash
   zip -r thunderbird-owui.zip . -x "*.git*"
   ```

3. Open Thunderbird:
   - Go to `Tools > Add-ons and Themes > Extensions`.
   - Click the gear icon, then choose `Debug Add-ons`.
   - Click `Load Temporary Add-on` and select the `manifest.json` file from the repository.

## Usage

1. Ensure your OpenWebUI Docker container is running and accessible (e.g., at `http://localhost:8080`).
   ```bash
   docker run -d -p 8080:8080 openwebui
   ```

2. Click on the OpenWebUI Connector icon in Thunderbird to open the popup interface.

3. Enter the data you want to send and click "Send to OpenWebUI."

4. View the response directly in the popup interface.

## Project Structure

```
my-openwebui-extension/
├── manifest.json        # Extension metadata and permissions
├── background.js        # Handles background tasks and API connections
├── popup.html           # Popup interface for user interaction
├── popup.js             # Script for popup functionality
└── icons/               # Icons for the extension
```

## Development

### Prerequisites

- Familiarity with JavaScript and Thunderbird WebExtension APIs.
- Basic knowledge of Docker.

### Adding New Features

1. Modify `background.js` to implement new API endpoints or workflows.
2. Update `popup.html` and `popup.js` for changes in the user interface.

### Debugging

- Use the browser console (`Ctrl+Shift+J` in Thunderbird) to view logs and errors.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss potential changes or enhancements.

## License

This project is licensed under the MPL License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact:

- **Author**: Angel Santiago (a.k.a. CypherOxide)
- **Email**: [as@HopeIntegratedSystems](mailto:angel.santiago@hopeintsys.com)
- **GitHub**: [https://github.com/cypheroxide](https://github.com/cypheroxide)
- **Site**: [Hope Integrated Systems](https://www.hopeintsys.com)
- **Blog**: [AngelSantiago.me](https://angelsantiago.me)
```
