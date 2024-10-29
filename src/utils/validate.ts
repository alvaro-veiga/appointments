export const validateAgendamento = (data: any) => {
    const errors = [];
    if (!data.medico_id) {
      errors.push("medico_id é obrigatório");
    }
    if (!data.paciente_nome) {
      errors.push("Nome do paciente é obrigatório");
    }
    if (!data.data_horario) {
      errors.push("Data e horário são obrigatórios");
    }
    return errors;
  };