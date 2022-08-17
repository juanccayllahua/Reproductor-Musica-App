import { ArtistModel } from "./artist.model";

export interface CancionModel {
    cancion: string;
    album: string;
    img: string;
    url: string; 
    artista:string;
    id: string | number;
    artist?: ArtistModel;
}