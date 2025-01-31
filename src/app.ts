import UnixSocketCommunication from "./unixSocketClient";

class App {
    protected unixSocketClient;
    constructor(unixSocketAddress: string|undefined) {
        this.unixSocketClient = new UnixSocketCommunication(unixSocketAddress);
    }
}