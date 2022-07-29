import { ArtistModel } from "./artist.model";

export interface CancionModel {
    nombre: string;
    album: string;
    cover: string;
    url: string;
    _id: string | number;
    artist?: ArtistModel;
}