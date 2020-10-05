import { ClaimService } from "./claim.service";
export declare class ClaimController {
    service: ClaimService;
    constructor(service: ClaimService);
    findRandomizedByQuantity(quantity: number): Promise<any>;
    findRandomizedByQLC(quantity: number, languageid: number, categoryid: number): Promise<any>;
}
