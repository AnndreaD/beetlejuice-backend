import { ClaimService } from "./claim.service";
export declare class ClaimController {
    service: ClaimService;
    constructor(service: ClaimService);
    findRandomizedByQuantity(quantity: number): Promise<any>;
    findRandomizedByQLC(quantity: number, language: number, category: number): Promise<any>;
}
