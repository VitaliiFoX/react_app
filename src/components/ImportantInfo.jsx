export default function ImportantInfo({title, description}) {
    return (
        <li>
            <p>
                <strong>{title}</strong> {description}
            </p>
        </li>
    )
}