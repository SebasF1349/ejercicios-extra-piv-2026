// Dadas las siguientes dos clases, realizar las siguientes tareas:
// 1. Crear una clase abstracta SmartDevice y hacer que SmartTV y SmartSpeaker hereden de ella.
//    SmartDevice debe implementar todas las propiedades y métodos necesarios.
// 2. Agregar todos los getters y setters que falten.
// 3. Agregar la posibilidad de mutear y desmutear un dispositivo.
// 4. Crear una clase SmartLight que herede de SmartDevice.
// 5. SmartLight debe poder cambiar el brillo.
// 6. Agregar en SmartDevice un método para controlar que un valor esté entre 0 y 100,
//    y utilizarlo para ajustar el volumen y el brillo según corresponda.
// 7. Validar que las acciones del dispositivo solo sean posibles de ejecutar si este está encendido.
// 8. Crear una clase SmartDeviceManager que administre un arreglo de SmartDevices y realice las siguientes operaciones:
//      a. Agregar y quitar dispositivos, evitando duplicados.
//      b. Apagar y encender todos los dispositivos.
//      c. Verificar si todos los dispositivos están apagados.
//      d. Verificar si algún dispositivo está muteado.
//      e. Verificar si dos dispositivos son del mismo tipo.
//      f. Obtener todos los dispositivos encendidos.
//      g. Encontrar un dispositivo en particular por su ID.
//      h. Obtener el nombre de todos los dispositivos.

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
