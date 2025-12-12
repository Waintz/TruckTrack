export interface ICompanyInformation {
  id: string; 
  name: string;
  description?: string; // Описание деятельности (необязательное)
  website?: string;
  address: string;
  phone: string;
  email: string;
  logoUrl?: string; // Ссылка на логотип
  taxId?: string; // ИНН или налоговый номер
  foundedYear?: number; // Год основания
  isActive: boolean; // Активна ли компания в системе
};