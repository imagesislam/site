const express = require('express'); // Framework Node.js
const phpExpress = require('php-express')({ binPath: 'php' }); // Configurez le chemin vers PHP

const app = express();
const PORT = process.env.PORT || 3000; // Port dynamique pour Vercel

// 1. Configurez les fichiers statiques pour servir HTML, CSS, et JS
app.use(express.static(__dirname));

// 2. Configurez phpExpress pour gérer les fichiers PHP
app.set('views', __dirname); // Répertoire des fichiers PHP
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');

// 3. Redirigez toutes les requêtes aux fichiers PHP
app.all(/.+\.php$/, phpExpress.router);

// 4. Démarrez le serveur
app.listen(PORT, () => {
  console.log(`Serveur Node.js actif sur le port ${PORT}`);
});
