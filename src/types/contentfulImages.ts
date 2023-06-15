export interface ContentfulImageProps {
  id: string;
  fields: {
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
