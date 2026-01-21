import axios from "axios"

interface FullAlbum {
    userId: number
    id: number
    title: string
}
interface Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

export async function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]>{
    const res = await axios.get<>()
}
