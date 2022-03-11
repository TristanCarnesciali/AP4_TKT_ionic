export interface Mission {
    id: string;
    libelle: string;
    description: string;
    complete: number;
    commentaire: string;
    idUser: number;
    idEtat: number;
    date: Date;
 }