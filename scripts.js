const commandesGit = {
    "git init": "Initialise un nouveau dépôt Git dans le répertoire actuel.",
    "git clone <url>": "Clone un dépôt Git distant dans un nouveau répertoire.",
    "git add <fichier>": "Ajoute des fichiers à l'index pour les préparer à la prochaine validation.",
    "git commit -m 'message'": "Valide les modifications ajoutées à l'index avec un message descriptif.",
    "git status": "Affiche l'état des fichiers dans le répertoire de travail par rapport à l'index et au dernier commit.",
    "git log": "Affiche l'historique des validations (commits) du dépôt.",
    "git branch": "Affiche la liste des branches et met en évidence la branche courante.",
    "git checkout <branche>": "Permet de basculer vers une autre branche.",
    "git merge <branche>": "Fusionne une branche spécifiée avec la branche courante.",
    "git push": "Envoie les modifications locales vers un dépôt distant.",
    "git pull": "Récupère les modifications à partir d'un dépôt distant et les fusionne dans la branche locale courante.",
    "git remote add <nom> <url>": "Ajoute un nouveau dépôt distant avec un nom spécifié.",
    "git remote -v": "Affiche les dépôts distants configurés avec leurs URLs.",
    "git diff": "Affiche les différences entre les modifications en cours et le dernier commit.",
    "git reset": "Permet de réinitialiser l'index ou le répertoire de travail à un état spécifique.",
    "git checkout -- <fichier>": "Annule les modifications non validées dans un fichier spécifique.",
    "git stash": "Range temporairement les modifications non validées pour les appliquer ultérieurement.",
    "git tag": "Gère les tags (étiquettes) pour marquer des commits spécifiques dans l'historique."
};

const commandesGitList = document.getElementById('git-commands');

Object.keys(commandesGit).forEach(function (commande) {
    const listItem = document.createElement('li');
    const commandName = document.createElement('strong');
    commandName.textContent = commande;
    listItem.appendChild(commandName);
    listItem.innerHTML += " - " + commandesGit[commande];
    commandesGitList.appendChild(listItem);
});


// Modales

