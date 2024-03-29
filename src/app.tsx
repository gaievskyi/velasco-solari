import { Route, Routes } from "react-router-dom"

import { Home } from "./components/home/home"
import { Info } from "./components/info/info"
import { Mustang } from "./components/mustang/mustang"
import { Overview } from "./components/overview/overview"
import { SampleProject } from "./components/sample-project/sample-project"

import { Navigation } from "./components/navigation/navigation"
import { Work } from "./components/work/work"

export const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/info" element={<Info />} />
      <Route path="/mustang" element={<Mustang />} />
      <Route path="/sample-project" element={<SampleProject />} />
    </Routes>
  </>
)
