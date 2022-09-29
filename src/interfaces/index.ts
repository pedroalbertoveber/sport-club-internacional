export interface IPartner {
  id: number;
  name: string;
  imagePath: string;
}

export interface IPlayer {
  id: number,
  name: string;
  nickname: string;
  position: string;
  age: number;
  birthday: string;
  nationality: string;
  number: number;
  goals: number;
  imagePath: string;
  mainTeam: boolean;
}

export interface IMemory {
  id: number;
  title: string;
  year: number;
  description: string;
  imgPath: string;
}