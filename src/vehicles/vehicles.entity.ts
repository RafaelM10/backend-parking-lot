import { Companies } from 'src/company/company.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Vehicles {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ length: 100, nullable: false })
  brand: string;

  @Column({ length: 50, nullable: false })
  model: string;

  @Column({ length: 120, nullable: false })
  color: string;

  @Column({ length: 50, nullable: false })
  plate: string;

  @Column({ length: 50, nullable: false })
  type: string;

  @ManyToOne(() => Companies, company => company.id,  { eager: true })
  company: Companies;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}