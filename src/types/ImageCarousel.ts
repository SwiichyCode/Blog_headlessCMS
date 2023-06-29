export interface ImageCarouselProps {
  fields: {
    description: string;
    image: {
      fields: {
        description: string;
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
