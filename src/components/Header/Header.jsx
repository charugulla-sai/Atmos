import Navbar from './Navbar/Navbar';
import Search from './Search/Search';

export default function Header() {
  return (
    <header className="w-full px-4">
     <div className='mx-auto max-w-[1100px] flex gap-7 items-center py-5 justify-between sm:gap-9'>
     <div className="title text-gray-50 font-bold text-3xl">
        <h1>Atmos</h1>
      </div>
      <Search />
      <Navbar />
     </div>
    </header>
  );
}
