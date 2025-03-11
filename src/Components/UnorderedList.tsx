
type UnorderedListProps = {
    list: string[]
}
export default function UnorderedList({ list }: UnorderedListProps) {
    return (
        <ul>
            {list.map((listItem) => {
                return (
                    <li>{listItem}</li>
                )
            })}
        </ul>
    )
}