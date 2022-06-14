export type Source = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};

export type Sources = Source[];

export type GetSourcesResponse = {
  sources: Sources;
};
