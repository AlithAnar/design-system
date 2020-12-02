import { BaseProps } from "../../../utils/types";
export declare type LayoutType = 'vertical' | 'horizontal';
export declare type Align = 'left' | 'center';
export declare type Menu = {
    name: string;
    label: string;
    link?: string;
    icon?: string;
    disabled?: boolean;
    subMenu?: Menu[];
};
declare type ActiveMenu = ({
    name: string;
} | {
    link: string;
}) & Partial<Menu>;
export interface NavigationProps extends BaseProps {
    type: LayoutType;
    align: Align;
    menus: Menu[];
    active?: ActiveMenu;
    onClick?: (menu: Menu) => void;
    rounded: boolean;
    expanded: boolean;
    footer?: boolean;
    onToggle?: (expanded: boolean) => void;
    autoCollapse: boolean;
}
export declare const Navigation: {
    (props: NavigationProps): JSX.Element;
    defaultProps: {
        type: string;
        align: string;
        expanded: boolean;
        autoCollapse: boolean;
        rounded: boolean;
    };
};
export default Navigation;
