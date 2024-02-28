export type heroType = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: string;
  backgroundImage: string;
  backgroundImageHotspot: {
    x: number;
    y: number;
  };
};
