import { IAgendamentoService } from '../interface/agendamentoInterface';
import { AgendamentoDTO, AgendamentoRespostaDTO } from '../dto/agendamentoDto';
import { getMedicoMockById } from '../../agenda/mocks/agendaMocks';

export class AgendamentoService implements IAgendamentoService {
  // Recebe os dados de agendamento, valida e retorna o resultado
  public marcarAgendamento(agendamento: AgendamentoDTO): AgendamentoRespostaDTO {
    const medico = getMedicoMockById(agendamento.medico_id);
    
    if (!medico) {
      throw new Error("Médico não encontrado");
    }

    return {
      mensagem: "Agendamento realizado com sucesso",
      agendamento: {
        medico: medico.nome,
        paciente: agendamento.paciente_nome,
        data_horario: agendamento.data_horario,
      }
    };
  }
}