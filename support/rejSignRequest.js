const path = require('path');
const { exec } = require('child_process');

const scriptPath = path.resolve(__dirname, 'request_rej_sign.py');

function rejectSignService() {
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

module.exports = { rejectSignService };
