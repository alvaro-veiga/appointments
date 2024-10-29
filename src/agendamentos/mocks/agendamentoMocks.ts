import { AgendamentoDTO } from '../dto/agendamentoDto';

let agendamentos: AgendamentoDTO[] = [];

export const addAgendamentoMock = (agendamento: AgendamentoDTO) => {
  agendamentos.push(agendamento);
};

export const getAgendamentosMock = () => {
  return agendamentos;
};
