// Taux de cotisations sociales 2024 (moyennes)
const TAUX_COTISATIONS = {
    prive: {
        cadre: {
            salariales: [
                { nom: 'Sécurité sociale - Maladie', taux: 0.0075 },
                { nom: 'Sécurité sociale - Vieillesse (plafonnée)', taux: 0.069 },
                { nom: 'Sécurité sociale - Vieillesse (déplafonnée)', taux: 0.004 },
                { nom: 'Retraite complémentaire AGIRC-ARRCO', taux: 0.0787 },
                { nom: 'Contribution d\'équilibre général (CEG)', taux: 0.0214 },
                { nom: 'APEC', taux: 0.0024 },
                { nom: 'Chômage', taux: 0.024 },
                { nom: 'CSG déductible', taux: 0.068 },
                { nom: 'CSG non déductible', taux: 0.024 },
                { nom: 'CRDS', taux: 0.005 }
            ],
            patronales: [
                { nom: 'Allocations familiales', taux: 0.0325 },
                { nom: 'Sécurité sociale - Maladie', taux: 0.13 },
                { nom: 'Sécurité sociale - Vieillesse (plafonnée)', taux: 0.086 },
                { nom: 'Sécurité sociale - Vieillesse (déplafonnée)', taux: 0.019 },
                { nom: 'Accidents du travail', taux: 0.015 },
                { nom: 'Retraite complémentaire AGIRC-ARRCO', taux: 0.1279 },
                { nom: 'Contribution d\'équilibre général (CEG)', taux: 0.0271 },
                { nom: 'APEC', taux: 0.0036 },
                { nom: 'Chômage', taux: 0.0405 },
                { nom: 'AGS', taux: 0.0015 },
                { nom: 'Fnal', taux: 0.005 },
                { nom: 'Formation professionnelle', taux: 0.01 },
                { nom: 'Taxe d\'apprentissage', taux: 0.0068 },
                { nom: 'Contribution formation (CPF-CDD)', taux: 0.01 }
            ]
        },
        'non-cadre': {
            salariales: [
                { nom: 'Sécurité sociale - Maladie', taux: 0.0075 },
                { nom: 'Sécurité sociale - Vieillesse (plafonnée)', taux: 0.069 },
                { nom: 'Sécurité sociale - Vieillesse (déplafonnée)', taux: 0.004 },
                { nom: 'Retraite complémentaire AGIRC-ARRCO', taux: 0.0787 },
                { nom: 'Chômage', taux: 0.024 },
                { nom: 'CSG déductible', taux: 0.068 },
                { nom: 'CSG non déductible', taux: 0.024 },
                { nom: 'CRDS', taux: 0.005 }
            ],
            patronales: [
                { nom: 'Allocations familiales', taux: 0.0325 },
                { nom: 'Sécurité sociale - Maladie', taux: 0.13 },
                { nom: 'Sécurité sociale - Vieillesse (plafonnée)', taux: 0.086 },
                { nom: 'Sécurité sociale - Vieillesse (déplafonnée)', taux: 0.019 },
                { nom: 'Accidents du travail', taux: 0.015 },
                { nom: 'Retraite complémentaire AGIRC-ARRCO', taux: 0.1279 },
                { nom: 'Chômage', taux: 0.0405 },
                { nom: 'AGS', taux: 0.0015 },
                { nom: 'Fnal', taux: 0.005 },
                { nom: 'Formation professionnelle', taux: 0.01 },
                { nom: 'Taxe d\'apprentissage', taux: 0.0068 },
                { nom: 'Contribution formation (CPF-CDD)', taux: 0.01 }
            ]
        }
    },
    public: {
        cadre: {
            salariales: [
                { nom: 'Sécurité sociale - Maladie', taux: 0.0075 },
                { nom: 'Pension civile', taux: 0.1128 },
                { nom: 'Rafp', taux: 0.05 },
                { nom: 'CSG déductible', taux: 0.068 },
                { nom: 'CSG non déductible', taux: 0.024 },
                { nom: 'CRDS', taux: 0.005 }
            ],
            patronales: [
                { nom: 'Allocations familiales', taux: 0.0325 },
                { nom: 'Sécurité sociale - Maladie', taux: 0.13 },
                { nom: 'Pension civile', taux: 0.742 },
                { nom: 'Rafp', taux: 0.05 },
                { nom: 'Accidents du travail', taux: 0.015 },
                { nom: 'Fnal', taux: 0.005 },
                { nom: 'Formation professionnelle', taux: 0.01 }
            ]
        },
        'non-cadre': {
            salariales: [
                { nom: 'Sécurité sociale - Maladie', taux: 0.0075 },
                { nom: 'Pension civile', taux: 0.1128 },
                { nom: 'Rafp', taux: 0.05 },
                { nom: 'CSG déductible', taux: 0.068 },
                { nom: 'CSG non déductible', taux: 0.024 },
                { nom: 'CRDS', taux: 0.005 }
            ],
            patronales: [
                { nom: 'Allocations familiales', taux: 0.0325 },
                { nom: 'Sécurité sociale - Maladie', taux: 0.13 },
                { nom: 'Pension civile', taux: 0.742 },
                { nom: 'Rafp', taux: 0.05 },
                { nom: 'Accidents du travail', taux: 0.015 },
                { nom: 'Fnal', taux: 0.005 },
                { nom: 'Formation professionnelle', taux: 0.01 }
            ]
        }
    }
};

// Fonction pour formater les montants en euros
function formatEuros(montant) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(montant);
}

// Fonction pour formater les pourcentages
function formatPourcentage(taux) {
    return (taux * 100).toFixed(2) + ' %';
}

// Fonction principale de calcul
function calculerCharges(salaireBrut, statut, type) {
    const cotisations = TAUX_COTISATIONS[type][statut];

    // Calcul des cotisations salariales
    let totalSalarial = 0;
    const detailSalarial = cotisations.salariales.map(cotisation => {
        const montant = salaireBrut * cotisation.taux;
        totalSalarial += montant;
        return {
            nom: cotisation.nom,
            taux: cotisation.taux,
            montant: montant
        };
    });

    // Calcul des cotisations patronales
    let totalPatronal = 0;
    const detailPatronal = cotisations.patronales.map(cotisation => {
        const montant = salaireBrut * cotisation.taux;
        totalPatronal += montant;
        return {
            nom: cotisation.nom,
            taux: cotisation.taux,
            montant: montant
        };
    });

    // Calcul du salaire net
    const salaireNet = salaireBrut - totalSalarial;

    // Calcul du coût total pour l'employeur
    const coutTotal = salaireBrut + totalPatronal;

    return {
        salaireBrut: salaireBrut,
        salaireNet: salaireNet,
        coutTotal: coutTotal,
        totalSalarial: totalSalarial,
        totalPatronal: totalPatronal,
        detailSalarial: detailSalarial,
        detailPatronal: detailPatronal
    };
}

// Fonction pour afficher les résultats
function afficherResultats(resultats) {
    // Afficher les montants principaux
    document.getElementById('montantBrut').textContent = formatEuros(resultats.salaireBrut);
    document.getElementById('montantNet').textContent = formatEuros(resultats.salaireNet);
    document.getElementById('coutTotal').textContent = formatEuros(resultats.coutTotal);

    // Afficher le détail des cotisations salariales
    const tbodySalarial = document.getElementById('cotisationsSalariales');
    tbodySalarial.innerHTML = '';
    resultats.detailSalarial.forEach(cotisation => {
        const row = tbodySalarial.insertRow();
        row.innerHTML = `
            <td>${cotisation.nom}</td>
            <td>${formatPourcentage(cotisation.taux)}</td>
            <td>${formatEuros(cotisation.montant)}</td>
        `;
    });
    document.getElementById('totalSalarial').textContent = formatEuros(resultats.totalSalarial);

    // Afficher le détail des cotisations patronales
    const tbodyPatronal = document.getElementById('cotisationsPatronales');
    tbodyPatronal.innerHTML = '';
    resultats.detailPatronal.forEach(cotisation => {
        const row = tbodyPatronal.insertRow();
        row.innerHTML = `
            <td>${cotisation.nom}</td>
            <td>${formatPourcentage(cotisation.taux)}</td>
            <td>${formatEuros(cotisation.montant)}</td>
        `;
    });
    document.getElementById('totalPatronal').textContent = formatEuros(resultats.totalPatronal);

    // Afficher la section résultats
    document.getElementById('results').style.display = 'block';

    // Scroll vers les résultats
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Fonction de validation
function validerFormulaire() {
    const salaireBrut = parseFloat(document.getElementById('salaireBrut').value);

    if (isNaN(salaireBrut) || salaireBrut <= 0) {
        alert('Veuillez entrer un salaire brut valide (supérieur à 0).');
        return false;
    }

    if (salaireBrut > 1000000) {
        alert('Le salaire semble anormalement élevé. Veuillez vérifier votre saisie.');
        return false;
    }

    return true;
}

// Gestionnaire d'événement pour le bouton calculer
document.getElementById('calculer').addEventListener('click', function() {
    if (!validerFormulaire()) {
        return;
    }

    const salaireBrut = parseFloat(document.getElementById('salaireBrut').value);
    const statut = document.getElementById('statut').value;
    const type = document.getElementById('type').value;

    const resultats = calculerCharges(salaireBrut, statut, type);
    afficherResultats(resultats);
});

// Permettre le calcul avec la touche Entrée
document.getElementById('salaireBrut').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('calculer').click();
    }
});

// Calculer automatiquement lors du changement de statut ou type
document.getElementById('statut').addEventListener('change', function() {
    const salaireBrut = parseFloat(document.getElementById('salaireBrut').value);
    if (!isNaN(salaireBrut) && salaireBrut > 0) {
        document.getElementById('calculer').click();
    }
});

document.getElementById('type').addEventListener('change', function() {
    const salaireBrut = parseFloat(document.getElementById('salaireBrut').value);
    if (!isNaN(salaireBrut) && salaireBrut > 0) {
        document.getElementById('calculer').click();
    }
});

// Message de bienvenue dans la console
console.log('%c🧮 Simulateur de Charges Sociales', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cCalculez vos charges sociales en France', 'font-size: 14px; color: #666;');
