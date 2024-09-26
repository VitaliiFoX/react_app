import Header from "./components/Header/Header"
import ImportantSection from './components/ImportantSection'
import DifferenciesSection from "./components/DifferenciesSection";
import IntroSection from "./components/introSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <ImportantSection />
        <DifferenciesSection />
      </main>
    </>
  )
}