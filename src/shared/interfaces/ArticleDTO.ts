interface ProviderDTO {
  id: string
  provider: string
}

interface ArticleDTO {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: false;
  launches: ProviderDTO[];
  events: [];
}