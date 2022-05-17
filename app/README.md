<p align="center"><a href="#" target="_blank" rel="noopener noreferrer"><img width="100" src="./public/leaf.png" alt="Automated Greenhouse logo"></a></p>

<p align="center" style="font-size: 40px">Automated Greenhouse</p>

Fully automated greenhouse powerd by Raspberry PI. The app allows you to fully controll lights, watering or temparature of your greenhouse via phone and PC connected to the same Wi-Fi or directly from RPI.

## Prerequisites

### Hardware

- Raspberry Pi 4
- Water pumps
- Set of LED lights
- Power relay
- Heating elements
- Fans
- Humidity and temperature sensor (DHT22 recomended)
- Soil moisture sensor

### Software (non-developers)

- Raspbian (64 or 32 bit)

### Software (developers)

- Docker

## Quick start

Run `install.bash` file on your Raspberry Pi. It will install all neccesery programs, libraries and set up your system to automatically start http server with the app and open Chrome browser on system startup. Now you can access the app in your browser (on any device connected to the same Wi-Fi) via `localhost:7070`.

## Contributing

Feel free to rise issues, open PRs or contact with me about any ideas/criticism.

## Installation

- Run:

```bash
cp .env_template .env
```

- Run:

```bash
docker-compose up
```

## Scripts

Build:

```bash
docker exec -it gluecodes_framework npm run build
```

Test (remember to run Build script before):

```bash
docker exec -it gluecodes_framework npm run test
```

Lint:

```bash
docker exec -it gluecodes_framework npm run lint
```

## Collaborators

- [Przemyslaw Michalak](https://github.com/w-eagle)

## License

[MIT](https://github.com/gluecodes/gluecodes-framework/blob/master/LICENSE)
