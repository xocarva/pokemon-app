import { BrowserRouter } from 'react-router-dom';
import { Footer, Header } from './Layout/pages';
import { AppRouter } from './Router';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  )
}
