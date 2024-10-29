import { MedicoDTO } from '../dto/agendaDto';

export interface IAgendaService {
  getAgendas(): MedicoDTO[];
}