import AuthHeader from './auth-header';
import { Input } from './ui/input';

const Header = async () => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex justify-start">
        <h1 className="font-bold text-xl">Discuss</h1>
      </div>
      <div className="flex justify-center">
        <Input type="text" placeholder="Search Post..." />
      </div>
      <div className="flex justify-end gap-2">
        <AuthHeader />
      </div>
    </div>
  );
}

export default Header