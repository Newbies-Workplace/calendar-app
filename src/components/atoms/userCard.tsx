export const UserCard = ({ name }: { name: string }) => {
    const color = calculateAvatarColor(name)
    
    return (
        <div className="flex flex-row items-center gap-2 p-2 bg-white rounded-lg border">
            <div className="size-6 rounded-full" style={{backgroundColor: color}}/>

            <span>{name}</span>
        </div>
    )
}

const calculateAvatarColor = (name: string) => {
    const charCodes = name.split('').map(char => char.charCodeAt(0))
    const sum = charCodes.reduce((acc, curr) => acc + curr, 0)
    const color = sum % 360

    return `hsl(${color}, 70%, 50%)`
}