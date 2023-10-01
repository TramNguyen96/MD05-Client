import { Receipt } from "./Receipt";

export interface Guest {
    id: string;
    name: string;
    numberPhone: string;
    email: string;
    receipts: Receipt[];
}