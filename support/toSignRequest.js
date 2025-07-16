const path = require('path');
const { exec } = require('child_process');

const scriptPath = path.resolve(__dirname, 'request_sign.py');

function toSignService() {
  return new Promise((resolve, reject) => {
    exec(`python "${scriptPath}"`, (error, stdout, stderr) => {
      if (error) {
        reject(`Erro ao executar script: ${error.message}`);
        return;
      }
      if (stderr) {
        reject(`Erro no script: ${stderr}`);
        return;
      }

      try {
        const result = JSON.parse(stdout);
        resolve(result);
      } catch (parseError) {
        reject(`Erro ao interpretar resposta: ${parseError.message}\nSaída: ${stdout}`);
      }
    });
  });
}

module.exports = { toSignService };
