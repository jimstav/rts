import ReactDOM from 'react-dom/client';
import GuestList from './state/GuestList';
import EventComponent from './events/EventComponent';
import UserSearch from './refs/UserSearch';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      <EventComponent />
      <UserSearch />
      <GuestList />
    </div>
  );
};

root.render(<App />);
