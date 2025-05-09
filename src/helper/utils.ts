
export default class Utils {
    
    width: string;
    length: string;

    constructor(width: string, length: string) {
        this.width = width;
        this.length = length;       
    }

    getCount(): string {
        const res = Number(this.width) * Number(this.length);
        return res.toString();        
    }
}