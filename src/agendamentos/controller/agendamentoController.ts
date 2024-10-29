import { APIGatewayProxyHandler } from 'aws-lambda';
import { validateAgendamento } from '../../utils/validate';
import { getMedicoMockById } from '../../agenda/mocks/agendaMocks';

export const marcarAgendamento: APIGatewayProxyHandler = async (event) => {
  const body = JSON.parse(event.body || '{}');
  const errors = validateAgendamento(body);

  if (errors.length > 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ erros: errors }),
    };
  }

  const medico = getMedicoMockById(body.medico_id);
  const agendamento = {
    medico: medico.nome,
    paciente: body.paciente_nome,
    data_horario: body.data_horario,
  };

  return {
    statusCode: 200,
    body: JSON.stringify({
      mensagem: 'Agendamento realizado com sucesso',
      agendamento,
    }),
  };
};