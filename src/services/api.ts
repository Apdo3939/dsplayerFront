
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

export const headerInfo = {
  title: "Músicas Favoritas",
  subtitle: "Suas músicas mais tocadas",
};

export type PlayerResponse = {
  content: PlayerMusics[];
  totalPages: number;
}

export type PlayerMusics = {
  albumName: string;
  coverUrl: string;
  id: number;
  isLike: boolean,
  musicUrl: string;
  title: string;
}

