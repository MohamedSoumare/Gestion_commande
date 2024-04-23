    // Fonction pour ajouter une commande à la table
    function ajoutCommande() {

        // Récupérer les valeurs des champs "Produit", "Quantité" et "Prix"
    var produit = document.getElementById("produit").value;
    var quantite = document.getElementById("quantite").value;
    var prix = document.getElementById("prix").value;

    // Afficher les valeurs saisies au niveau de la console
    console.log("Produit: " + produit);
    console.log("Quantité: " + quantite);
    console.log("Prix: " + prix);

    // Vérifier si le champ "Produit" contient une valeur numérique
    if (!isNaN(parseFloat(produit))) {
        alert("Veuillez saisir un produit.");
         return; // Arrêter l'exécution de la fonction si le produit est numérique
    }

    // Vérifier si les champs "Produit", "Quantité" et "Prix" sont vides
    if (produit === "" || quantite === "" || prix === "") {
    alert("Veuillez remplir tous les champs.");

        return; // Arrêter l'exécution de la fonction si un champ est vide
    
    }

    // Calculer le montant total de la commande
    var amount = quantite * prix;

    // Ajouter une nouvelle ligne à la table des commandes
    var table = document.getElementById("orderList");
    var newRow = table.insertRow();

    // Insérer les valeurs dans les cellules de la nouvelle ligne
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = produit;
    cell2.innerHTML = quantite;
    cell3.innerHTML = prix;
    cell4.innerHTML = amount;

    // Réinitialiser les champs du formulaire après enregistrement
    document.getElementById("produit").value = "";
    document.getElementById("quantite").value = "";
    document.getElementById("prix").value = "";


    // Mettre à jour le montant total des commandes
    updateTotal(amount);
    }

    // Fonction pour mettre à jour le montant total des commandes
    function updateTotal(amount) {
    // Récupérer l'élément qui affiche le montant total
    var totalAmount = document.getElementById("totalAmount");

    // Afficher le montant total au niveau de la console
    console.log("Montant Total avant mise à jour: " + totalAmount.textContent);

    // Mettre à jour le montant total en ajoutant le montant de la commande actuelle
    totalAmount.textContent = parseInt(totalAmount.textContent) + amount;

    // Afficher le montant total mis à jour au niveau de la console
    console.log("Montant Total après mise à jour: " + totalAmount.textContent);

}
