type Author = {
  bio: string | null;
  name: string;
  id: string;
  photo: {
    url: string;
    fileName: string;
    width: number;
    height: number;
  };
};

export type { Author };
