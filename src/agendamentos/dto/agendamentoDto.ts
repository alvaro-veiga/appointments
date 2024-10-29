export interface AgendamentoDTO {
    medico_id: number;
    paciente_nome: string;
    data_horario: string;
  }
  
  export interface AgendamentoRespostaDTO {
    mensagem: string;
    agendamento: {
      medico: string;
      paciente: string;
      data_horario: string;
    };
  }