import React from 'react';
import { BasketIcon, CardIcon, BellIcon, DollarIcon, UserIcon, HomeIcon, FolderIcon} from '.'

type IconType = {
    name: string,
    height: number,
    width: number,
    color: string
};

const TAB_ICONS = {
    basket: BasketIcon,
    card: CardIcon,
    bell: BellIcon,
    dollar: DollarIcon,
    user: UserIcon
}

export const CustomIcon: React.FC<IconType> = ({name, height, width, color}) => {

    return (

    )
}