export interface Video {
  fields: {
    description: string;
    video: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
  sys: {
    id: string;
  };
}
