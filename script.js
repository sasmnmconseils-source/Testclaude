// Barème fiscal français des indemnités kilométriques (2024)
const BAREMES = {
    voiture: {
        3: {
            upTo5000: (d) => d * 0.529,
            from5001To20000: (d) => (5000 * 0.529) + ((d - 5000) * 0.316),
            above20000: (d) => (5000 * 0.529) + (15000 * 0.316) + ((d - 20000) * 0.370)
        },
        4: {
            upTo5000: (d) => d * 0.606,
            from5001To20000: (d) => (5000 * 0.606) + ((d - 5000) * 0.340),
            above20000: (d) => (5000 * 0.606) + (15000 * 0.340) + ((d - 20000) * 0.407)
        },
        5: {
            upTo5000: (d) => d * 0.636,
            from5001To20000: (d) => (5000 * 0.636) + ((d - 5000) * 0.357),
            above20000: (d) => (5000 * 0.636) + (15000 * 0.357) + ((d - 20000) * 0.427)
        },
        6: {
            upTo5000: (d) => d * 0.665,
            from5001To20000: (d) => (5000 * 0.665) + ((d - 5000) * 0.374),
            above20000: (d) => (5000 * 0.665) + (15000 * 0.374) + ((d - 20000) * 0.447)
        },
        7: {
            upTo5000: (d) => d * 0.697,
            from5001To20000: (d) => (5000 * 0.697) + ((d - 5000) * 0.394),
            above20000: (d) => (5000 * 0.697) + (15000 * 0.394) + ((d - 20000) * 0.470)
        }
    },
    moto: {
        '1-2': {
            upTo3000: (d) => d * 0.395,
            from3001To6000: (d) => (3000 * 0.395) + ((d - 3000) * 0.099),
            above6000: (d) => (3000 * 0.395) + (3000 * 0.099) + ((d - 6000) * 0.248)
        },
        '3-5': {
            upTo3000: (d) => d * 0.468,
            from3001To6000: (d) => (3000 * 0.468) + ((d - 3000) * 0.082),
            above6000: (d) => (3000 * 0.468) + (3000 * 0.082) + ((d - 6000) * 0.275)
        },
        '5+': {
            upTo3000: (d) => d * 0.606,
            from3001To6000: (d) => (3000 * 0.606) + ((d - 3000) * 0.075),
            above6000: (d) => (3000 * 0.606) + (3000 * 0.075) + ((d - 6000) * 0.343)
        }
    },
    cyclomoteur: {
        default: {
            upTo3000: (d) => d * 0.315,
            from3001To6000: (d) => (3000 * 0.315) + ((d - 3000) * 0.079),
            above6000: (d) => (3000 * 0.315) + (3000 * 0.079) + ((d - 6000) * 0.198)
        }
    }
};

// Éléments du DOM
const vehicleTypeSelect = document.getElementById('vehicleType');
const fiscalPowerGroup = document.getElementById('fiscalPowerGroup');
const fiscalPowerSelect = document.getElementById('fiscalPower');
const motoPowerGroup = document.getElementById('motoPowerGroup');
const motoPowerSelect = document.getElementById('motoPower');
const distanceInput = document.getElementById('distance');
const calculatorForm = document.getElementById('calculatorForm');
const resultDiv = document.getElementById('result');

// Gestion du changement de type de véhicule
vehicleTypeSelect.addEventListener('change', function() {
    const vehicleType = this.value;

    // Réinitialiser les sélections
    fiscalPowerSelect.value = '';
    motoPowerSelect.value = '';

    // Afficher/masquer les champs appropriés
    if (vehicleType === 'voiture') {
        fiscalPowerGroup.style.display = 'block';
        motoPowerGroup.style.display = 'none';
        fiscalPowerSelect.required = true;
        motoPowerSelect.required = false;
    } else if (vehicleType === 'moto') {
        fiscalPowerGroup.style.display = 'none';
        motoPowerGroup.style.display = 'block';
        fiscalPowerSelect.required = false;
        motoPowerSelect.required = true;
    } else if (vehicleType === 'cyclomoteur') {
        fiscalPowerGroup.style.display = 'none';
        motoPowerGroup.style.display = 'none';
        fiscalPowerSelect.required = false;
        motoPowerSelect.required = false;
    } else {
        fiscalPowerGroup.style.display = 'none';
        motoPowerGroup.style.display = 'none';
        fiscalPowerSelect.required = false;
        motoPowerSelect.required = false;
    }
});

// Fonction de calcul
function calculateIndemnity(vehicleType, power, distance) {
    let bareme;
    let amount = 0;
    let baremeText = '';
    let calculDetail = '';

    if (vehicleType === 'voiture') {
        bareme = BAREMES.voiture[power];
        baremeText = `Voiture ${power} CV`;

        if (distance <= 5000) {
            amount = bareme.upTo5000(distance);
            calculDetail = `${distance} km × coefficient = ${amount.toFixed(2)} €`;
        } else if (distance <= 20000) {
            amount = bareme.from5001To20000(distance);
            calculDetail = `(5 000 premiers km) + (${distance - 5000} km supplémentaires) = ${amount.toFixed(2)} €`;
        } else {
            amount = bareme.above20000(distance);
            calculDetail = `(5 000 premiers km) + (15 000 km suivants) + (${distance - 20000} km au-delà) = ${amount.toFixed(2)} €`;
        }
    } else if (vehicleType === 'moto') {
        bareme = BAREMES.moto[power];
        baremeText = `Moto ${power} CV`;

        if (distance <= 3000) {
            amount = bareme.upTo3000(distance);
            calculDetail = `${distance} km × coefficient = ${amount.toFixed(2)} €`;
        } else if (distance <= 6000) {
            amount = bareme.from3001To6000(distance);
            calculDetail = `(3 000 premiers km) + (${distance - 3000} km supplémentaires) = ${amount.toFixed(2)} €`;
        } else {
            amount = bareme.above6000(distance);
            calculDetail = `(3 000 premiers km) + (3 000 km suivants) + (${distance - 6000} km au-delà) = ${amount.toFixed(2)} €`;
        }
    } else if (vehicleType === 'cyclomoteur') {
        bareme = BAREMES.cyclomoteur.default;
        baremeText = 'Cyclomoteur (50 cm³ ou moins)';

        if (distance <= 3000) {
            amount = bareme.upTo3000(distance);
            calculDetail = `${distance} km × coefficient = ${amount.toFixed(2)} €`;
        } else if (distance <= 6000) {
            amount = bareme.from3001To6000(distance);
            calculDetail = `(3 000 premiers km) + (${distance - 3000} km supplémentaires) = ${amount.toFixed(2)} €`;
        } else {
            amount = bareme.above6000(distance);
            calculDetail = `(3 000 premiers km) + (3 000 km suivants) + (${distance - 6000} km au-delà) = ${amount.toFixed(2)} €`;
        }
    }

    return {
        amount: amount,
        baremeText: baremeText,
        calculDetail: calculDetail
    };
}

// Gestion de la soumission du formulaire
calculatorForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const vehicleType = vehicleTypeSelect.value;
    const distance = parseInt(distanceInput.value);
    let power;

    if (vehicleType === 'voiture') {
        power = fiscalPowerSelect.value;
        if (!power) {
            alert('Veuillez sélectionner la puissance fiscale de votre voiture.');
            return;
        }
    } else if (vehicleType === 'moto') {
        power = motoPowerSelect.value;
        if (!power) {
            alert('Veuillez sélectionner la cylindrée de votre moto.');
            return;
        }
    } else if (vehicleType === 'cyclomoteur') {
        power = 'default';
    }

    if (!distance || distance <= 0) {
        alert('Veuillez saisir une distance valide.');
        return;
    }

    const result = calculateIndemnity(vehicleType, power, distance);

    // Afficher les résultats
    document.getElementById('resultDistance').textContent = `${distance.toLocaleString('fr-FR')} km`;
    document.getElementById('resultBareme').textContent = result.baremeText;
    document.getElementById('resultAmount').textContent = `${result.amount.toFixed(2)} €`;
    document.getElementById('calculDetail').textContent = result.calculDetail;

    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
