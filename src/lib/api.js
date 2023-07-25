import datas from "../data/data.json";

export class FakeKasaAPI {
    async retrieveFlats() {
        return datas;
    }
}

export class KasaAPI {
    async retrieveFlats() {
        const response = await fetch('http://localhost:5500/src/data/data.json');
        return await response.json();
    }
}