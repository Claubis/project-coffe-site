const fs = require('fs');

// Função para ler os dados dos clientes do arquivo JSON
const readClientData = () => {
  try {
    const data = fs.readFileSync('clientData.json', 'utf8');
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
      fs.writeFileSync('clientData.json', JSON.stringify(currentData, null, 2));
      console.log('Novo cliente adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar novo cliente:', error);
    }
};

module.exports = {
  readClientData,
  addClientData,
};
