import { useState } from "react";

import { MenuIcon } from "~/ui/Icons";
import { MenuOption } from "./MenuOption";
import { Sidebar } from "./Sidebar";


export const Menu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const [selectedOption, setSelectedOption] = useState(0)

    const handleMenuClick = ()=> {
        setIsMenuVisible(true)
    }

    const handleCloseMenu = () => {
        setSelectedOption(0)
        setIsMenuVisible(false)
    }

    const handleMenuOptionClick = (optionId: number) => {
        const newOptionValue = (selectedOption === optionId) ? 0 : optionId;
        setSelectedOption(newOptionValue)
    }

    const options = [
        { id: 1, name: 'New In'},
        { id: 2, name: 'Clothing'},
        { id: 3, name: 'Footwear'},
        { id: 4, name: 'Accesories'},
        { id: 5, name: 'SALE'}
    ]

    const subMenuOptions = [
        { id: 11, name: 'New In' },
        { id: 12, name: 'See All'},
        { id: 13, name: 'Coats'},
        { id: 14, name: 'Beach clothes'},
        { id: 15, name: 'Sweaters & hoodies'},
        { id: 16, name: 'Shirts'},
        { id: 17, name: 'Jeans & pants'},
        { id: 18, name: 'T-shirts'},
        { id: 19, name: 'Shorts'},
        { id: 20, name: 'Underwear'},
        { id: 21, name: 'SALE'}
    ]

    const menuOptions = options
        .map(option =>
                <MenuOption
                    key={option.id}
                    active={selectedOption === option.id}
                    option={option}
                    onOptionClick={() => handleMenuOptionClick(option.id)}
                />
    )

    const hardcodedSubMenuOptions = subMenuOptions
        .map(option =>
                <MenuOption
                    key={option.id}
                    active={false}
                    option={option}
                    onOptionClick={() => alert(`suboption "${option.name}" clicked`)}
                />
    )

    return (
        <>
            <button onClick={handleMenuClick}>
                <div className="flex items-center justify-center rounded-full border-2 border-red-600 p-1">
                    <MenuIcon />
                </div>
            </button>

            <Sidebar
                isMenuVisible={isMenuVisible}
                classWhenActive="translate-x-full z-50"
            >
                <button
                    className="absolute flex items-center justify-center p-2.5 w-5 h-5 top-8 left-8
                    rounded-full border border-red-600 text-red-600 text-xs"
                    onClick={handleCloseMenu}>
                    ✕
                </button>

                {menuOptions}
            </Sidebar>

            <Sidebar
                isMenuVisible={selectedOption !== 0}
                classWhenActive="translate-x-[200%] text-xs z-10"
            >
                {hardcodedSubMenuOptions}
            </Sidebar>
        </>
    )
}