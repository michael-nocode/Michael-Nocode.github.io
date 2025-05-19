---
sidebar_position: 2
---

# Générer un cas de test à partir d'une US
Utiliser l'IA générative pour transformer automatiquement des User Stories exprimées en langage naturel en cas d'utilisation structurés (use cases), afin d'améliorer la compréhension fonctionnelle et la couverture des scénarios métier.

## Fiche d'identité du cas d'usage

### Problématique(s) traitée(s) 
- Traduction imprécise des User Stories en cas d’utilisation exploitables pour les tests.
- Perte d’informations ou interprétations divergentes entre PO, testeurs et développeurs.
- Manque de temps pour formaliser les use cases dans les équipes agiles.    
- Faible réutilisation des cas d’utilisation pour les tests automatisés ou manuels.

### Groupe d’activité de test ISTQB
- *Conception des tests*
- exécution des tests

### Types de tests
- Tests fonctionnels
- Tests d’acceptation
- Tests basés sur les scénarios utilisateur
- Tests automatisés (modèle réutilisable pour les scripts)

### Métier / Profil
- Product Owners
- Testeurs fonctionnels / QA Analysts
- Testeurs automatisation
- Business Analysts
- Développeurs (pour intégration dans des pipelines BDD / TDD)

### Bénéfices attendus / constatés 
- Gain de temps dans la formalisation des cas d'utilisation.
- Amélioration de la couverture fonctionnelle.
- Réduction des écarts d'interprétation métier/technique.
- Support à la conception de tests automatisés via des cas d'utilisation clairs.
- Réduction des anomalies liées à une mauvaise compréhension du besoin.

### Evaluation du ROI (KPI) 
- % de couverture des exigences via les use cases générés.
- Temps moyen gagné par User Story analysée.
- Réduction du taux d’anomalies de compréhension en phase de recette.
- Taux de réutilisation des use cases dans les scripts de test automatisés.

### Risques
- Mauvaise interprétation des User Stories si mal rédigées.
- Biais dans la génération automatique (non-exhaustivité, redondances).
- Risque de surconfiance : validation humaine indispensable.
- Problèmes de confidentialité si les données sont traitées hors des systèmes internes.

### Ressources 
- Outils d’IA générative (ex : ChatGPT, Claude, Gemini, etc.)
- User Stories bien rédigées, dans un format clair (Given/When/Then, ou INVEST)
- Template de use case (nom, acteurs, scénario principal, extensions, préconditions)
- Scripts de validation humaine (revue PO/testeur)

### Références

- ISTQB Glossaire & syllabus Fondation & Agile
- IEEE 830 – Software Requirements Specifications
- Articles spécialisés sur la transformation NLP vers modèle UML / BDD
- Retours d’expérience de la communauté (ex. Ministry of Testing, forums Agiles)


## Tâches associées

### Prompt Simple

``` 
Conduis-toi comme un expert du domaine du test logiciel avec plusieurs années d’expérience dans le contexte agile et dans le monde de l’assurance de biens et de personnes. 
Adopte une vision critique et disruptive 
Inspire-toi du contenu des référentiels suivants :
- ISTQB Fondation, « 610,12-1990 – IEEE Standard Glossary of Software Engineering Terminolgy »
- « IEEE 829-1983 – IEEE Standard for Software Test Documentation »
- Des critères de qualité préconisés par l’IREB (International Requirements Engineering Board).

Je te vais te fournir une user story qui est considérée comme bien rédigée par les 3 Amigos.

Voici la user story

***Début***

User Story: XXXXXX
...

Critères d'acceptation :
...

Contraintes non fonctionnelles :
- Accessibilité :...
- Temps de réponses :...

***Fin***

Génère les titres de cas de test pour cette user story.
Formule les titres selon le format Verbe et complément(s).
Exemples :
. Saisir un mot de passe valide 
. Mesurer le temps de réponse d’affichage

Fournis les résultats sous forme d’un tableau : 
colonne 1 = compteur de ligne, 
colonne 2 = titre de cas de test.
N’ajoute pas de commentaires avant et après tes réponses.
```

#### EXEMPLE

``` 
Conduis-toi comme un expert du domaine du test logiciel avec plusieurs années d’expérience dans le contexte agile et dans le monde de l’assurance de biens et de personnes. 
Adopte une vision critique et disruptive 
Inspire-toi du contenu des référentiels suivants :
- ISTQB Fondation, « 610,12-1990 – IEEE Standard Glossary of Software Engineering Terminolgy »
- « IEEE 829-1983 – IEEE Standard for Software Test Documentation »
- Des critères de qualité préconisés par l’IREB (International Requirements Engineering Board).
Je te vais te fournir une user story qui est considérée comme bien rédigée par les 3 Amigos.

Voici la user story

***Début***

User Story: Connexion à une page web
je veux pouvoir me connecter à une page web de manière sécurisée et accessible,
afin de pouvoir accéder à mon compte et utiliser les fonctionnalités associées.

Critères d'acceptation :
Authentification par email et mot de passe :
L'utilisateur doit pouvoir se connecter en saisissant une adresse mail et un mot de passe créés préalablement.
Connexion via des comptes tiers :
L'utilisateur doit pouvoir se connecter en utilisant un compte Google ou Facebook.
Protection par captcha :
Un captcha doit être proposé pour valider l'accès après la saisie des identifiants.
Gestion des erreurs de connexion :
L'utilisateur dispose de 3 tentatives pour se connecter en cas d'erreur.
Après 3 tentatives échouées, le compte (s'il existe) est bloqué pendant 1 heure.
Réinitialisation du mot de passe :
L'utilisateur doit pouvoir réinitialiser son mot de passe depuis la page de connexion.

Contraintes non fonctionnelles :
- Accessibilité :
La page doit être conforme au RGAA (Référentiel Général d'Amélioration de l'Accessibilité) pour garantir son accessibilité à tous les utilisateurs.
- Temps de réponse :
Le temps de réponse de la page doit être inférieur à 3 secondes pour l'utilisateur.

***Fin***

Génère les titres de cas de test pour cette user story.
Formule les titres selon le format Verbe et complément(s).
Exemples :
. Saisir un mot de passe valide 
. Mesurer le temps de réponse d’affichage

Fournis les résultats sous forme d’un tableau : 
colonne 1 = compteur de ligne, 
colonne 2 = titre de cas de test.
N’ajoute pas de commentaires avant et après tes réponses.
```

[Prompt Simple](../../Prompt/PROMPT_Generer_un_cas_de_test/Prompt_simple)
