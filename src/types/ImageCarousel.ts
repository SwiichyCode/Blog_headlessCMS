export interface ImageCarouselProps {
  fields: {
    image: {
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
