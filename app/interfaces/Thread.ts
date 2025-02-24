export interface Thread {
  title?: string;
  date: string;
  content: Content[];
}

export interface Content {
  type: "image" | "paragraph" | "code" | "video";
  url?: string;
  paragraph?: any;
  description?: string;
  code?: any;
  lang?: string;
  title?: string;
}

export interface Image extends Content {
  type: "image";
  url: string;
  description: string;
}

export interface Paragraph extends Content {
  type: "paragraph";
  paragraph: string;
}

export interface CodeSnippet extends Content {
  type: "code";
  code: any;
  lang: string;
  title: string;
}

export interface Video extends Content {
  type: "video";
  url: string;
  description: string;
}

export interface PostData {
  isPinned: boolean;
  date: string;
  title: string;
  typeOf: string[];
  body: React.ReactNode[];
  image?: string;
  anchor: string;
  link?: string;
  thread?: Thread[];
  post?: string;
  imageDescription?: string;
  imageHash?: string;
  imageWidth?: number;
  imageHeight?: number;
}
