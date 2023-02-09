export interface IAdress {
  data?: {};
  unrestricted_value?: string;
  value?: string;
}

export interface IFile extends File {
  preview?: string;
}

export interface IDeal {
  id: number;
  creator_id: string;
  accepter_id: string;
  creation_date: string;
  acception_date: string;
  deadline_date: string;
  confirm_date?: string;
  category: number; // 1 - service; 2 - product;
  title: string;
  description: string;
  attachments?: IFile[] | null;
  commission_paid_by: number; // 1 - creator; 2 - accepter; 3 - half;
  shipping_method: number; // 1 - yourself; 2 - safe sides partner;
  shipping_amount?: number;
  creator_name?: string;
  creator_phone?: string;
  creator_adress?: IAdress;
  creator_entrance?: number;
  creator_floor?: number;
  creator_appart?: number;
  creator_comment?: string;
  accepter_name?: string;
  accepter_phone?: string;
  accepter_adress?: IAdress;
  accepter_entrance?: number;
  accepter_floor?: number;
  accepter_appart?: number;
  accepter_comment?: string;
  size?: string;
  weight?: number;
  price: number;
  status: number; // 1 - created; 2 - active; 3 - completed; 4 - canceled;
}
