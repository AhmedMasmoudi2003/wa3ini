import Sidebar from './components/SideBar.jsx';
import MainContent from './components/MainContent.jsx';

export default function App() {

  return (
    // <section className="grid grid-cols-12 h-screen relative text-red-500">
    <section className="h-screen">
      <Sidebar />
      <MainContent />
    </section>
  )
}