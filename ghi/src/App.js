import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm.js';
import LandingPage from './LandingPage.js';
import SignupForm from './SignupForm.js';
import MainPage from './MainPage.js';
import Nav from './Nav.js';
import { useGetTokenQuery } from './features/auth/authAPI.js';
import Protected from './features/auth/protected.js';
import GetAllChefMenuList from './chefMenuList.js';
import ProfileForm from './ChefProfileForm.js';
import FilteredProfiles from './FilteredProfiles.js';


function App() {
  const { data } = useGetTokenQuery();

  if ( data === undefined ) {
    return null;
  }

  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Nav accountInfo={data}/>
          <Routes>
            <Route element={<Protected token={data} />}>
              <Route path="home" element={<MainPage />} />
              <Route path="chef/menu-items" element={<GetAllChefMenuList />} />
              <Route path="chef/profile" element={<ProfileForm />} />
              <Route path="/filtered/:tagName" element={<FilteredProfiles />} />
            </Route>
            <Route path="" element={<LandingPage />} />
            <Route path="login" element={<LoginForm accountInfo={data} />}/>
            <Route path="signup" element={<SignupForm accountInfo={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
