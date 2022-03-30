
# AP4_TKT


Développement d'une application en utilisant le Framework Ionic/Angular

En s'appuyant sur un cahier des charges, 
développement et mise en production d'une application 
cross-platform en utilisant le Framework Ionic et Angular,
mise en place d’une API-REST a l’aide d’un serveur NodeJS 
pour communiquer avec une base de données MySQL.




## Authors

- [@Meervv](https://github.com/Meervv)
- [@YohannDR](https://github.com/YohannDR)
- [@TristanCarnesciali](https://github.com/TristanCarnesciali)


## Tech Stack

**Client:** IONIC 6

**Langages:** Typescript / Javascript

**Server:** MySQL


## Installation

- Cloner ou télécharger le .zip
- Créer la base de données avec le fichier tkt-bdd.sql

## API Reference

#### Get all items

```http
  GET /items
```

#### Get item

```http
  GET /item/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Deployment

Pour déployer le projet

```bash
  cd /TKTionic/ && ionic serve
```
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

