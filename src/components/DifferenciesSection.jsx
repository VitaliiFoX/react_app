import { useState } from "react"
import Button from "./Button/Button"
import { differencies } from "../data"

export default function DifferenciesSection() {
    const [contentType, setContentType] = useState(null)

    function handleClick(contentType) {
        console.log(`Вы кликнули на кнопку ${contentType}`);
        setContentType(contentType);

    }
    return (
        <section>
          <h3>Кликни, чтобы купить</h3>
          <Button onClick={() => handleClick('easy')}>Легкая кнопка</Button>
          <Button onClick={() => handleClick('medium')}>Средняя кнопка</Button>
          <Button onClick={() => handleClick('hard')}>Сложаня кнопка</Button>

          {contentType && <p>{differencies[contentType]}</p>}
          {!contentType && <p>Вы не нажали на кнопку</p>}
        </section>
    )
}