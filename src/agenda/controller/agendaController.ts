import { APIGatewayProxyHandler } from 'aws-lambda';
import { getAgendaMock } from '../mocks/agendaMocks';

export const getAgendas: APIGatewayProxyHandler = async () => {
  const agendas = getAgendaMock();
  return {
    statusCode: 200,
    body: JSON.stringify({ medicos: agendas }),
  };
};