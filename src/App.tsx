import { useState } from 'react';
import Background from './components/Background';
import ThemeSwitch from './components/ThemeSwitch';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz/Quiz';
import quizzesData from './data/quizzes';
import styles from './App.module.scss';
import Select from './components/Select';
import { getImageSrc } from './helpers';

export type ThemeType = 'light' | 'dark';

export default function App() {
  const [theme, setTheme] = useState<ThemeType>('dark');
  const [quizSubject, setQuizSubject] = useState<number | null>(null);

  const handleToggleTheme = () => {
    setTheme((state) => (state === 'light' ? 'dark' : 'light'));
  };

  const quizSubjectData = quizSubject !== null && quizzesData[quizSubject];

  return (
    <>
      <Background />

      <header className={styles.header}>
        {quizSubjectData && (
          <Select
            as="div"
            box={<img src={getImageSrc(quizSubjectData.icon)} alt="" />}
            value={quizSubjectData.title}
          />
        )}

        <ThemeSwitch
          className={styles.switch}
          theme={theme}
          onSwitch={handleToggleTheme}
        />
      </header>
      
      <main className={styles.main}>
        {quizSubjectData ? (
          <Quiz data={quizSubjectData} />
        ) : (
          <Welcome
            quizzes={quizzesData}
            onSubjectSelect={(index) => setQuizSubject(index)}
          />
        )}
      </main>
    </>
  );
}
