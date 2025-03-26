import AuthHeader from './auth-header';
import SearchInput from './search-input';

const Header = async () => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex justify-start">
        <h1 className="font-bold text-xl">Discuss</h1>
      </div>
      <div className="flex justify-center">
        <SearchInput />
      </div>
      <div className="flex justify-end gap-2">
        <AuthHeader />
      </div>
    </div>
  );
}

export default Header