import ImportantInfo from "./ImportantInfo"
import { data } from "../data"

export default function ImportantSection() {
    return (
        <section>
          <h3>
            Наша сила
          </h3>
          <ul>
            {data.map((data) => (
              <ImportantInfo key={data.title} {...data} /> // Key only for react.js
            ))}
          </ul>
        </section>
    )
}