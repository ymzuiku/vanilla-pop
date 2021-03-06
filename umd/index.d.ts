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
    animation?: "scale" | "shift-away" | "shift-toward" | "perspective";
    appendTo?: (() => HTMLElement) | "parent" | HTMLElement;
    arrow?: boolean | string | Element;
    delay?: number | [number, number];
    inertia?: boolean;
    allowHTML?: boolean;
    padding?: string;
    placement?: "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "auto" | "auto-start" | "auto-end";
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
declare const _default: ({ onCreate, onShow, padding, children, trigger, zIndex, ...rest }: IPop) => any;
export default _default;
