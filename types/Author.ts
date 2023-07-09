type Author = {
  bio: string | null;
  name: string;
  id: string;
  avatar: {
    url: string;
    fileName: string;
    width: number;
    height: number;
  };
};

export type { Author };
