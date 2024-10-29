import { IAgendaService } from '../interface/agendaInterface';
import { MedicoDTO } from '../dto/agendaDto';
import { getAgendaMock } from '../mocks/agendaMocks';

export class AgendaService implements IAgendaService {
  public getAgendas(): MedicoDTO[] {
    return getAgendaMock();
  }
}