export interface BuildPaths {
  html: string;
  output: string;
  src: string;
  exposes: string;
}

export type BuildMode = 'production' | 'development';

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer?: boolean;
}
