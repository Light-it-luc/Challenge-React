
export default function MenuOption({ active, option, onOptionClick }) {
    return (
        <button 
            className={
                'flex flex-row justify-between items-center w-full px-4 py-2 rounded-full border-2 border-transparent ' +
                (active ? 'border-green-300' : '')
            }
            onClick={onOptionClick}
        >
            <div className="text-red-600">
                {option.name}
            </div>

            <div>
                <svg
                    className={ 'transition-transform ' + (active ? 'rotate-180' : '') }
                    width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M1.09327 0.692132C1.35535 0.467494 1.74991 0.497845 1.97455 0.759923L6.97455 6.59326C7.17517 6.82731 7.17517 7.17269 6.97455 7.40675L1.97455 13.2401C1.74991 13.5022 1.35535 13.5325 1.09327 13.3079C0.831188 13.0832 0.800837 12.6887 1.02548 12.4266L5.67684 7L1.02548 1.57341C0.800837 1.31133 0.831188 0.916771 1.09327 0.692132Z" fill="#F97316"/>

                </svg>
            </div>
        </button>
    )
}