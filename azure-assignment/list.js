const util = require("util");
const exec = util.promisify(require("child_process").exec);

const list_files = (storage, cont) => {
  async function list() {
    const { error, stdout, stderr } = await exec(
      '$StorageAccount = Get-AzStorageAccount -ResourceGroupName "node" -Name "' +
        storage +
        '";$Context = $StorageAccount.Context;Get-AzStorageBlob -Container "' +
        cont +
        '" -Context $Context ',
      { shell: "powershell.exe" }
    );
    if (stderr) {
      return { error: stderr };
    }
    return { data: stdout };
  }

  list()
    .then((data) => {
      console.log(data.data);
    })
    .catch((err) => {
      console.log(err.stderr);
    });
};

module.exports = { list_files };
