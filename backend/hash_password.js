const bcrypt = require('bcryptjs');

async function run() {
  const password = 'placementcell@sih';
  const hash = await bcrypt.hash(password, 10);
  console.log(hash);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});


