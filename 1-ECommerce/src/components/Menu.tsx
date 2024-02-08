import { useState } from "react";

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
                <div className="flex items-center justify-center rounded-full border border-red-600 p-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.2917 5.83333C17.2917 6.17851 17.0118 6.45833 16.6667 6.45833L3.33334 6.45833C2.98816 6.45833 2.70834 6.17851 2.70834 5.83333C2.70834 5.48815 2.98816 5.20833 3.33334 5.20833L16.6667 5.20833C17.0118 5.20833 17.2917 5.48815 17.2917 5.83333Z" fill="#F96332"/>
                        <path d="M17.2917 10C17.2917 10.3452 17.0118 10.625 16.6667 10.625L3.33334 10.625C2.98816 10.625 2.70834 10.3452 2.70834 10C2.70834 9.65482 2.98816 9.375 3.33334 9.375L16.6667 9.375C17.0118 9.375 17.2917 9.65482 17.2917 10Z" fill="#F96332"/>
                        <path d="M17.2917 14.1667C17.2917 14.5118 17.0118 14.7917 16.6667 14.7917L3.33334 14.7917C2.98816 14.7917 2.70834 14.5118 2.70834 14.1667C2.70834 13.8215 2.98816 13.5417 3.33334 13.5417L16.6667 13.5417C17.0118 13.5417 17.2917 13.8215 17.2917 14.1667Z" fill="#F96332"/>
                    </svg>
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