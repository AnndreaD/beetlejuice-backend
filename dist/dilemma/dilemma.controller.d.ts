import { DilemmaService } from "./dilemma.service";
export declare class DilemmaController {
    service: DilemmaService;
    constructor(service: DilemmaService);
    findRandomizedByQuantity(quantity: string): Promise<any>;
    findRandomizedByQLC(quantity: number, languageid: number, categoryid: number): Promise<any>;
}
