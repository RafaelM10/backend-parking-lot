export class CompanyCreateDTO {
  readonly nome: string;
  readonly cnpj: string;
  readonly address: string;
  readonly phone: string;
  readonly vagasMotos: number;
  readonly vagasCarros: number;
  readonly isActive: boolean;
}