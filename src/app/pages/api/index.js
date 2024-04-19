// pages/api/feedback.js
import fs from 'fs';
import path from 'path';

import { clientData } from '../PesquisaSatisfacao/data/clientData.json'

// Caminho para o arquivo JSON
const filePath = path.resolve(process.cwd(), 'pages', 'PesquisaSatisfacao', 'data', 'clientData.json');

// Função para ler os dados dos clientes do arquivo JSON
const readClientData = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler os dados dos clientes:', error);
    return [];
  }
};

// Função para adicionar um novo cliente aos dados existentes
const addClientData = (newClientData) => {
  try {
    const currentData = readClientData();
    currentData.push(newClientData);
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
    console.log('Novo cliente adicionado com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar novo cliente:', error);
  }
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Lógica para manipular os dados do formulário de pesquisa quando o método HTTP for POST
    const formData = req.body;
    addClientData(formData);
    res.status(200).json({ message: 'Dados do cliente adicionados com sucesso!' });
  } else {
    // Método HTTP não suportado
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
