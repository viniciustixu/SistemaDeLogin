const { exec } = require('child_process');

// Função para automatizar o commit e push
const gitAutoCommitAndPush = (commitMessage) => {
  // Execute os comandos git para adicionar, fazer commit e fazer push
  exec('git add .', (addErr) => {
    if (addErr) {
      console.error(`Erro ao adicionar alterações: ${addErr}`);
      return;
    }

    exec(`git commit -m "${commitMessage}"`, (commitErr) => {
      if (commitErr) {
        console.error(`Erro ao fazer commit: ${commitErr}`);
        return;
      }

      exec('git push', (pushErr) => {
        if (pushErr) {
          console.error(`Erro ao fazer push: ${pushErr}`);
          return;
        }

        console.log('Commit e push realizados com sucesso!');
      });
    });
  });
};

// Exporte a função para que ela possa ser importada em outros arquivos
module.exports = gitAutoCommitAndPush;

