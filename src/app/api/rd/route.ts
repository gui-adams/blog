import { NextRequest, NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';  // Importa AxiosError para o cast

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, } = body;

    // Verifica se os campos estão presentes
    if (!name || !email) {
      return NextResponse.json({ message: 'Nome e e-mail são obrigatórios.' }, { status: 400 });
    }

    // API Key pública
    const apiKey = '729ac94f7a9074cac329ddca29d16eff';

    // Envio dos dados para o RD Station com a API Key
    const response = await axios.post(
      `https://api.rd.services/platform/conversions?api_key=${apiKey}`, // Passa a API Key na URL
      {
        event_family: 'CDP',  // Define o tipo de evento como "CDP"
        event_type: 'CONVERSION',  // Tipo de evento como conversão
        payload: {  // O payload contém os dados do lead e o identificador da conversão
          conversion_identifier: 'newsletter',  // Identificador único da conversão
          name: name,  
          email: email,
          tags: ['newsletter'],  // Adiciona tags se necessário
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json({ message: 'Obrigado!' }, { status: 200 });
  } catch (err) {
    // Faz o cast do erro para o tipo AxiosError
    const error = err as AxiosError;
    
    // Verifica se a resposta está disponível no erro
    const errorMessage = error.response?.data || error.message;
    console.error('Erro ao enviar lead para o RD Station:', errorMessage);

    return NextResponse.json({ message: 'Erro ao enviar lead para o RD Station' }, { status: 500 });
  }
}
