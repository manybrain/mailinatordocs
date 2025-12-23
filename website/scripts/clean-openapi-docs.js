const fs = require('node:fs/promises');
const path = require('node:path');

const docsDir = path.join(process.cwd(), 'docs', 'api');

async function cleanGeneratedDocs() {
  try {
    const entries = await fs.readdir(docsDir, {withFileTypes: true});
    const targets = entries.filter(
      (entry) => entry.isFile() && entry.name.endsWith('.api.mdx'),
    );

    await Promise.all(
      targets.map((entry) => fs.unlink(path.join(docsDir, entry.name))),
    );

    if (targets.length > 0) {
      console.log(`Removed ${targets.length} generated API doc(s).`);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      return;
    }

    throw error;
  }
}

cleanGeneratedDocs();
