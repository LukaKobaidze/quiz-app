import Background from './components/Background';
import ThemeSwitch from './components/ThemeSwitch';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <>
      <Background />
      <header>
        <ThemeSwitch />
      </header>
      <main>
        <Welcome />
      </main>
    </>
  );
}
