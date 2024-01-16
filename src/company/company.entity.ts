import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Companies {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ length: 150, nullable: false })
  name: string;

  @Column({ length: 50, nullable: false })
  cnpj: string;

  @Column({ length: 120, nullable: false })
  address: string;

  @Column({ length: 25, nullable: false })
  phone: string;

  @Column({ type: 'int', nullable: false })
  motorcycleSpaces: number;

  @Column({ type: 'int', nullable: false })
  carSpaces: number;

  @Column({nullable: false})
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}