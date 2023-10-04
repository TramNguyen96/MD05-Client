import { Guest } from "./Guest";
import { Option } from "./Product";
import { User } from "./User";

enum ReceiptStatus {
    SHOPPING = "SHOPPING", // Khách đang lựa, cart
    PENDING = "PENDING", // chờ shop xác nhận
    ACCEPTED = "ACCEPTED", // shop đã ok chờ vận chuyển tới nhận
    SHIPPING = "SHIPPING", // bên vận chuyển thao tác
    DONE = "DONE" // khách đã nhận hàng và hoàn tất thủ tục thanh toán
}

enum PayMode {
    CASH = "CASH",
    ZALO = "ZALO"
}

export interface ReceiptDetail {
    id: string;
    receiptId: string;
    optionId: string;
    quantity: number;
    receipt: Receipt;
    option: Option
}

export interface Receipt {
    id: string;
    userId: string;
    guestId: string;
    user: User;
    guest: Guest;
    total: number;
    paid: boolean;
    status: ReceiptStatus;
    payMode: PayMode;
    createAt: string;
    accepted: string;
    shipAt: string;
    doneAt: string;
    detail: ReceiptDetail[]
}