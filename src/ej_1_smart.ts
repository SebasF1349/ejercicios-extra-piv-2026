// Dadas las siguientes dos clases, realizar las siguientes tareas:
// 1. Crear una clase SmartDevice y hacer que SmartTV y SmartSpeaker hereden de la misma.
//      SmartDevice debe ser abstracta e implementar todos las propiedades y métodos necesarios
// 2. Agregar todos los setters y getters que falten
// 3. Agregar la posibilidad de mutear y desmutear un dispositivo
// 4. Controlar que el volumen esté entre 0 y 100
// 5. Agregar una clase SmartLight que herede de SmartDevice
// 6. SmartLight debe poder cambiar el brillo y controlar sus límites
// 7. Crear una clase SmartDeviceManager que con un arreglo de SmartDevices realice las siguientes operaciones:
//      a. Agregar y quitar dispositivos, evitando duplicados
//      b. Apagar y prender todos los dispositivos
//      c. Verificar si todos los dispositivos están apagado
//      d. Verificar si algún dispositivo está muteado
//      e. Verificar si dos dispositivos son del mismo tipo
//      f. Obtener todos los dispositivos prendidos
//      g. Encontrar un dispositivo en particular por id
//      h. Obtener el nombre de todos los dispositivos

class SmartTV {
    id: string;
    name: string;
    isOn: boolean;
    volume: number;
    currentChannel: number;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.isOn = false;
        this.volume = 10;
        this.currentChannel = 1;
    }

    turnOn(): void {
        this.isOn = true;
    }
    turnOff(): void {
        this.isOn = false;
    }
    setVolume(level: number): void {
        this.volume = level;
    }
    changeChannel(channel: number): void {
        this.currentChannel = channel;
    }

    getStatus(): string {
        return `La TV ${this.name} está ${this.isOn ? "prendida" : "apagada"} en el canal ${this.currentChannel}.`;
    }
}

class SmartSpeaker {
    id: string;
    name: string;
    isOn: boolean;
    volume: number;
    currentSong: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.isOn = false;
        this.volume = 5;
        this.currentSong = "None";
    }

    turnOn(): void {
        this.isOn = true;
    }
    turnOff(): void {
        this.isOn = false;
    }
    setVolume(level: number): void {
        this.volume = level;
    }
    playSong(song: string): void {
        this.currentSong = song;
    }

    getStatus(): string {
        return `El parlante ${this.name} está ${this.isOn ? "prendida" : "apagada"} con la canción ${this.currentSong}.`;
    }
}
