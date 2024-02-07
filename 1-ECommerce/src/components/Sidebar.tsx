
interface Props {
    isMenuVisible: boolean;
    classWhenActive: string;
    children: JSX.Element[]
}

export default function Sidebar({ isMenuVisible, classWhenActive, children }: Props) {
    return (
        <div
            className={`fixed top-0 -left-48 flex flex-col gap-8 py-20 px-4
            h-full w-48 border bg-white overflow-scroll transition-transform
            ${( isMenuVisible ? classWhenActive : '' )}`}
        >
            {children}
        </div>
    )
}