// React 18 compatibility shim for baseui which uses React.RefForwardingComponent
// (removed in React 18 — it's now ForwardRefRenderFunction)
import { ForwardRefRenderFunction } from "react";

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type RefForwardingComponent<T, P = Record<string, any>> = ForwardRefRenderFunction<T, P>;
}
