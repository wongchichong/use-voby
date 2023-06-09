import { VobyInReact } from './VobyInReact'
import { ReactInVoby } from './ReactInVoby'
import { createRoot } from 'react-dom/client'
import { render } from 'voby'
import { ReactAutoCounter } from './ReactCounter'
import { VobyAutoCount } from './VobyCounter'

const rbm = createRoot(document.getElementById('ReactBenchmark'))
rbm.render(<ReactAutoCounter />)

render(VobyAutoCount as any, document.getElementById("VobyBenchmark"))


const root = createRoot(document.getElementById('VobyInReact'))
root.render(<VobyInReact />)

render(ReactInVoby as any, document.getElementById("ReactInVoby"))

