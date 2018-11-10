export class SurfSpot
{
    constructor
    (
        public name: string,
        public description: string,
        public tide: string,
        public waveBreak: string,
        public seaBottom: string,        
        public swellDirection: string,      
        public windDirection: string,
        public waveSize: string,
        public imagePathSpot: string,
        public imagePathTide: string,
        public imagePathWaveBreak: string,
        public imagePathSeaBottom: string,
        public imagePathSwellDirection: string,
        public imagePathWindDirection: string,
        public imagePathWaveSize: string,
        public adresse: string
    )
    {
        
    }
}