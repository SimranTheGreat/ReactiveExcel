import Sheet from './Sheet'
import Sheetbase from './SheetBase'
import TittleBar from './TittleBar'
import FileHeader from './FileHeader'
import Footer from './Footer'
export default function Home() {
  return (
    <>
      <FileHeader />
      <TittleBar />
      <Sheet />
      <Sheetbase />
      <Footer />
    </>
  )
}
