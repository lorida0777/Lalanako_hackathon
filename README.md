---

# 🏛️ LALÀNAKO

### La loi malgache, expliquée simplement

**LALÀNAKO** est une application web qui permet de **lire, parcourir et comprendre les textes juridiques malgaches**, **article par article**, grâce à une **explication simple générée par l’intelligence artificielle**, en **langue malagasy**.

🎯 **Objectif principal** : rendre le droit **lisible, compréhensible et accessible** à tous les citoyens.

---

## 🌍 Problème

À Madagascar, les textes de loi :

- sont difficiles d’accès,
- écrits dans un langage juridique complexe,
- peu compris par le grand public.

👉 Résultat :
les citoyens **connaissent mal leurs droits et obligations**.

---

## 💡 Solution proposée

**LALÀNAKO** transforme la loi écrite en **loi comprise**.

- L’utilisateur **ne saisit aucun texte**
- Il **parcourt les textes juridiques officiels**
- Il **lit un article**
- Il clique sur **“Explication simple”**
- Il obtient une **explication claire en malagasy**

---

## 🚀 Fonctionnalités principales

- 📚 **Navigation structurée des textes juridiques malgaches**
  (Code → Livre → Titre → Chapitre → Article)

- 📜 **Lecture fidèle des articles de loi**
  Présentation claire, inspirée des applications _Bible / Codes juridiques numériques_

- 🧭 **Défilement fluide (scroll)**
  Consultation naturelle des textes, sans saisie manuelle

- 🔘 **Bouton “Explication simple”**
  Génère une explication :

  - en langage courant
  - en malagasy
  - avec des exemples concrets

- 🤖 **IA responsable**
  L’IA **n’invente pas la loi** :
  elle explique uniquement l’article affiché

---

## 🖥️ Parcours utilisateur

```text
Accueil
  ↓
Choix d’un Code juridique
  ↓
Navigation (Livre → Titre → Chapitre)
  ↓
Article affiché (lecture)
  ↓
[ Bouton : "Explication simple" ]
  ↓
Explication claire en malagasy
```

---

## 🧠 Fonctionnement de l’IA

1. L’utilisateur sélectionne un **article de loi officiel**
2. Le texte est transmis à l’API
3. L’IA produit :

   - une explication pédagogique
   - fidèle au sens juridique
   - adaptée au grand public

👉 **Aucune création de norme juridique**
👉 **Aucune modification du texte de loi**

---

## 🧱 Architecture technique

```text
lalnako_hackathon/
├── frontend/        # React + Vite + Nginx
├── backend/         # FastAPI (API IA)
└── docker-compose.yml
```

### 🔄 Communication

- Frontend → Backend : `http://api:8000`
- Réseau interne Docker
- Configuration automatique dev / prod

---

## 🛠️ Technologies utilisées

### Frontend

- React
- Vite
- Tailwind CSS
- Nginx

### Backend

- Python 3.10
- FastAPI
- Middleware CORS

### Infrastructure

- Docker
- Docker Compose

---

## ⚙️ Installation & Lancement

### Prérequis

- Docker
- Docker Compose

### Lancer le projet

```bash
docker-compose up --build
```

### Accès

- 🌐 Interface utilisateur :
  [http://localhost:3000](http://localhost:3000)

- 🔌 API backend :
  [http://localhost:8000](http://localhost:8000)

---

## 🔐 Sécurité & conformité

- Respect strict du texte juridique officiel
- Pas de conseil juridique personnalisé
- Outil pédagogique et informatif
- IA utilisée comme **outil de vulgarisation**

---

## 🌱 Évolutions futures

- 🔍 Recherche intelligente par article
- ⭐ Favoris et annotations
- 🔊 Lecture audio des articles
- 🌐 Multilingue (Malagasy / Français)
- 📱 Version mobile
- 🏫 Usage éducatif (écoles, universités)

---

## 🏆 Positionnement du projet

> **LALÀNAKO n’est pas un chatbot juridique.**
>
> C’est une **bibliothèque légale intelligente**,
> qui explique la loi **article par article**,
> en langage simple, pour tous.

---

## 👨‍💻 Auteur

**Kanto Tsiferana**
Médecin • Enseignant • Développeur IA
📍 Madagascar

---

## 📄 Licence

Projet open-source – licence à définir.

---

### 🎤 Phrase clé à retenir (jury)

> « LALÀNAKO permet au citoyen de lire la loi,
> puis de la comprendre simplement,
> sans avoir besoin d’être juriste. »

---
