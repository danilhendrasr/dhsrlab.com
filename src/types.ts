interface BlogPost {
  url: string;
  title: string;
  subtitle: string;
  coverImage: {
    url: string;
  };
  readTimeInMinutes: number;
  views: number;
}
