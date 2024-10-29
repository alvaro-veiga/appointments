import { AgendamentoDTO, AgendamentoRespostaDTO } from '../dto/agendamentoDto';

export interface IAgendamentoService {
  marcarAgendamento(agendamento: AgendamentoDTO): AgendamentoRespostaDTO;
}