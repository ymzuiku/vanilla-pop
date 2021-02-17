import tippy, { followCursor, inlinePositioning } from "tippy.js";
import "./style";

export interface Instance {
  clearDelayTimeouts(): void;
  destroy(): void;
  disable(): void;
  enable(): void;
  hide(): void;
  hideWithInteractivity(event: MouseEvent): void;
  id: number;
  plugins: any[];
  popper: any;
  popperInstance: any | null;
  props: any;
  reference: any;
  setContent(content: any): void;
  setProps(partialProps: any): void;
  show(): void;
  state: {
    isEnabled: boolean;
    isVisible: boolean;
    isDestroyed: boolean;
    isMounted: boolean;
    isShown: boolean;
  };
  unmount(): void;
}

export interface IPop {
  followCursor?: boolean | "horizontal" | "vertical" | "initial";
  // animateFill?: boolean;
  animation?: "scale" | "shift-away" | "shift-toward" | "perspective";
  appendTo?: (() => HTMLElement) | "parent" | HTMLElement;
  arrow?: boolean | string | Element;
  delay?: number | [number, number];
  inertia?: boolean;
  allowHTML?: boolean;
  padding?: string;
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "right"
    | "right-start"
    | "right-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end"
    | "auto"
    | "auto-start"
    | "auto-end";

  getReferenceClientRect?: () => {
    width: number;
    height: number;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
  hideOnClick?: boolean | "toggle";
  inlinePositioning?: boolean;
  interactive?: boolean;
  interactiveBorder?: number;
  interactiveDebounce?: number;
  maxWidth?: number | "none";
  moveTransition?: string;
  offset?: [number, number];
  popperOptions?: any;
  onAfterUpdate?: (instance: Instance, partialProps: any) => any;
  onBeforeUpdate?: (instance: Instance, partialProps: any) => any;
  onClickOutside?: (instance: Instance, event: any) => any;
  onCreate?: (instance: Instance) => any;
  onDestroy?: (instance: Instance) => any;
  onHidden?: (instance: Instance) => any;
  onHide?: (instance: Instance) => any;
  onMount?: (instance: Instance) => any;
  onShow?: (instance: Instance) => any;
  onShown?: (instance: Instance) => any;
  onTrigger?: (instance: Instance, event: any) => any;
  onUntrigger?: (instance: Instance, event: any) => any;
  render?: any;
  showOnCreate?: boolean;
  sticky?: boolean | "reference" | "popper";
  theme?: "light" | "material" | "light-border" | "dark";
  touch?: boolean | "hold" | ["hold", number];
  trigger?: "hover" | "click" | "mouseenter focus" | "focusin" | "mouseenter click" | "manual";
  triggerTarget?: Element | Element[];
  zIndex?: number;
  children?: any[];
}

export default ({ onCreate, onShow, padding, children = [], trigger, zIndex, ...rest }: IPop) => {
  if (!children) {
    return document.createElement("span");
  }
  let button = children[0] || document.createElement("span");
  let content = children[1] || document.createElement("span");

  if (trigger === "hover") {
    trigger = "mouseenter focus";
  }

  const isFn = typeof content === "function";

  tippy(button, {
    // arrowType: "round",
    content: isFn ? content() : content,
    duration: [170, 170],
    // animation: "shift-away",
    animation: void 0,
    inlinePositioning: true,
    // inertia: true,
    interactive: true,
    zIndex,
    trigger,
    theme: "dark",
    appendTo: document.body,
    placement: "bottom",
    plugins: [followCursor, inlinePositioning],
    onShow: (ins: Instance) => {
      if (isFn) {
        ins.setContent(content());
      }
      if (onShow) {
        onShow(ins);
      }
    },
    onCreate: (ins: Instance) => {
      (button as any).popper = ins;
      if (onCreate) {
        onCreate(ins);
      }
      if (padding) {
        (ins.popper as HTMLElement).style.setProperty("--pop-padding", padding);
      }
    },
    ...(rest as any),
  });
  return button;
};
