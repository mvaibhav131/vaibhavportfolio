/// <reference types="react-scripts" />

// Asset declarations
declare module "*.svg" {
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export { ReactComponent };
  export default src;
}

declare module "*.png" { const content: string; export default content; }
declare module "*.jpg" { const content: string; export default content; }
declare module "*.jpeg" { const content: string; export default content; }
declare module "*.gif" { const content: string; export default content; }
declare module "*.webp" { const content: string; export default content; }
declare module "*.ico" { const content: string; export default content; }
declare module "*.css" { const content: Record<string, string>; export default content; }
declare module "*.scss" { const content: Record<string, string>; export default content; }
declare module "*.module.css" { const classes: Record<string, string>; export default classes; }
declare module "*.module.scss" { const classes: Record<string, string>; export default classes; }
